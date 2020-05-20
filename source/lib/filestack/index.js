import * as filestack from 'filestack-js'
import { dataURIToBlob } from '../files'

export const uploadToFilestack = (image, key) => {
  const client = filestack.init(process.env.FILESTACK_API_KEY)
  const file = dataURIToBlob(image)
  const filename = `upload-${new Date().toISOString()}-${key}.jpg`
  return client.upload(file, {}, { filename }).then(res => res.url)
}
