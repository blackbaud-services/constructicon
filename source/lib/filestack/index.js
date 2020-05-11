import * as filestack from 'filestack-js'

export const uploadToFilestack = (image, key) => {
  const client = filestack.init(process.env.FILESTACK_API_KEY)
  const file = dataURIToBlob(image)
  const filename = `upload-${new Date().toISOString()}-${key}.jpg`
  return client.upload(file, {}, { filename }).then(res => res.url)
}

export const dataURIToBlob = dataURI => {
  let byteString

  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
    byteString = window.atob(dataURI.split(',')[1])
  } else {
    byteString = unescape(dataURI.split(',')[1])
  }

  const mimeString = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0]

  let ia = new Uint8Array(byteString.length)

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  return new window.Blob([ia], { type: mimeString })
}
