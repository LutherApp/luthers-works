export default defineEventHandler(async (event) => {
  await appendHeader(event, 'Content-Type', 'text/plain')

  return `
  User-agent: *
  Allow: /
  
  `
})
