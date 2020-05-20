import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://noembed.com'
})

export const videoRegex = /(http|https):\/\/(?:www\.)?(facebook|twitter|vimeo|youtube).com\/([\w/]+)([?].*)?$/

export const fetchOembedUrl = url =>
  client
    .get('/embed', { params: { url } })
    .then(response => response.data)
    .then(data => (data.error ? Promise.reject(data.error) : data))

export default fetchOembedUrl
