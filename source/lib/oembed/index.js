import axios from 'axios'
import { allowedVideoDomains } from './domains'

export const client = axios.create({
  baseURL: 'https://iframely.blackbaud.services'
})

export const videoRegex = new RegExp(
  `https?:\\/\\/(${allowedVideoDomains})\\S*`,
  'i'
)

const getParentDomain = () => {
  if (typeof window !== 'undefined') {
    const { hostname } = window.location
    return hostname === 'localhost' ? undefined : hostname
  }

  return undefined
}

export const fetchOembedUrl = url =>
  client
    .get('/iframely', {
      params: {
        url,
        iframe: 1,
        oembed: 1,
        _parent: getParentDomain()
      }
    })
    .then(response => response.data)
    .then((data = {}) => ({ ...data.oembed, ...data }))
    .then(data => (data.error ? Promise.reject(data.error) : data))

export default fetchOembedUrl
