const BASE_URL = 'http://ip-api.com'

const fetch = window.fetch

const baseFetch = type => url => fetch(`${BASE_URL}/${type}/${url}`)

const csvFetch = baseFetch('csv')
const jsonFetch = baseFetch('json')
const xmlFetch = baseFetch('xml')

export const SUCCESS = 'success'
export const FAIL = 'fail'

export const csv = ip => csvFetch(ip).then(response => response.text())
export const json = ip => jsonFetch(ip).then(response => response.json())
export const xml = ip => xmlFetch(ip).then(response => response.text())
