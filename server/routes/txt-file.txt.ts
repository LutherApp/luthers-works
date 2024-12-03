export default defineEventHandler(async (event) => {
  const response = await fetch('text.txt')
  const data = await response.text()
  console.log(data)

  await appendHeader(event, 'Content-Type', 'text/plain')

  return `
    User-agent: *
    Allow: /
    
    `
})
