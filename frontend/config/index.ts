const environment = process.env.NODE_ENV || 'dev'
const server = process.env.WEBSITE_ENDPOINT || 'http://esc-whs-lpt-78:3000'
const apiBaseUrl = process.env.API_ENDPOINT || 'http://localhost/api'
const imagesRoot = process.env.IMAGES_ROOT_URL || 'https://devcontent.escentual.com/media'

const version = process.env.FRONTEND_VERSION || '{version}'

export { environment, server, apiBaseUrl, imagesRoot, version}