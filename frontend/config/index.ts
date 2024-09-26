const environment = process.env.NODE_ENV || 'dev'
const server = process.env.WEBSITE_ENDPOINT || 'http://esc-whs-lpt-78:3000'
const apiBaseUrl = process.env.API_ENDPOINT || 'http://localhost/api'
const imagesRoot = process.env.IMAGES_ROOT_URL || 'https://devcontent.escentual.com/media'

const version = process.env.FRONTEND_VERSION || '{version}'

export { environment, server, apiBaseUrl, imagesRoot, version}


// window.config =  {
//     "rootUrl":"https://devbackoffice.escentual.com",
//     "rootApiUrl":"https://devapi.escentual.com",
//     "version":"1",
//     "startDate": "2021/01/01",
//     "microservices":{
//     },
//     "timeoutCachedValues": 240000,
//     "tinyMCEEditirKey":"7vs9p44lblnqyhim43686n53tty2gb9psu3r4l2oglndyghg",
//     "getAddressKey":"dtoken_hEDzcyiWMr0n5nAJiB9D_1SyjQdbvKEiPFH5sEsyGO6b34ljlmwHQI1eyhADhPZyhn4J_DUwC8ryVg5E8f-u_0EmurB3CYMieAzBRy8C06MYBhcRTv0oKm4j1fajYaJAZH4ihEOY5OqY1SJf4dicVd44kB_hr_rIwqEZzLhQxMT5XtCpzPvqGAziolczG_tIYMVx4UTFUgs",
//     "rootStorageUrl": "https://devcontent.escentual.com"
// }
