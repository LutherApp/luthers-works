<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'
// The following two lines from layouts
import type { NavItem } from '@nuxt/content'

// in the default layout, but I guess it should be somewhere else
onMounted(() => {
  // prevents window to scrollTop then returns to savedPosition
  window.history.scrollRestoration = 'auto'

  // but restore manual scrollRestoration at the first navigation
  const unwatch = useRouter().beforeEach(() => {
    window.history.scrollRestoration = 'manual'
    unwatch()
  })

  // and restore auto scrollRestoration when leaving the page
  window.addEventListener('unload', () => {
    window.history.scrollRestoration = 'auto'
  })
}) // Source: https://github.com/nuxt/nuxt/issues/22487#issuecomment-1830847329

const navigation = inject<Ref<NavItem[]>>('navigation')

definePageMeta({
  layout: false
  // layout: 'docs'
})

const route = useRoute()
const { toc, seo } = useAppConfig()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent()
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
)

useSeoMeta({
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImageComponent('Docs')

const headline = computed(() => findPageHeadline(page.value))

const links = computed(() => [toc?.bottom?.edit && {
  icon: 'i-heroicons-pencil-square',
  label: 'Edit this page',
  to: `${toc.bottom.edit}/${page?.value?._file}`,
  target: '_blank'
}, ...(toc?.bottom?.links || [])].filter(Boolean))
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UNavigationTree
            :links="mapContentNavigation(navigation)"
            :multiple="false"
            default-open
          />
        </UAside>
      </template>
      <!-- Above tags from Layout -->

      <UPage>
        <UPageHeader
          :title="page.title"
          :description="page.description"
          :links="page.links"
          :headline="headline"
        />

        <UPageBody prose>
          <ContentRenderer
            v-if="page.body"
            :value="page"
          />

          <hr v-if="surround?.length">

          <UContentSurround :surround="surround" />
        </UPageBody>

        <template
          v-if="page.toc !== false"
          #right
        >
          <UContentToc
            :title="toc?.title"
            :links="page.body?.toc?.links"
          >
            <template
              v-if="toc?.bottom"
              #bottom
            >
              <div
                class="hidden lg:block space-y-6"
                :class="{ '!mt-6': page.body?.toc?.links?.length }"
              >
                <UDivider
                  v-if="page.body?.toc?.links?.length"
                  type="dashed"
                />

                <UPageLinks
                  :title="toc.bottom.title"
                  :links="links"
                />
              </div>
            </template>
          </UContentToc>
        </template>
      </UPage>
    <!-- The following two tags from Layout -->
    </UPage>
  </UContainer>
</template>
