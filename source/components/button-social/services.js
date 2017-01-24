export default {
  facebook: ({ url }) => `http://www.facebook.com/sharer.php?u=${url}`,
  twitter: ({ url, title }) => `https://twitter.com/share?url=${url}&text=${title}`,
  google: ({ url }) => `https://plus.google.com/share?url=${url}`
}
