import React, { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { rendererServerCSS } from '../css'

import Helmet from 'react-helmet'

export const Document = ({
  head,
  content,
  state = {},
  styles = ['/main.css'],
  scripts = ['/main.js'],
  gtmId = 'GTM-PN6K34',
  itemType = 'http://schema.org/WebSite'
}) => (
  <html itemScope itemType={itemType}>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta name='CnvHeaderVersion' content='v5.0' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      {head.title.toComponent()}
      {head.meta.toComponent()}
      {head.link.toComponent()}
      {head.script.toComponent()}
      {head.style.toComponent()}
      {styles.map((style, index) => <link key={index} rel='stylesheet' href={style} />)}
      {renderServerCSS()}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');`
      }} />
    </head>
    <body>
      <main
        id='mount'
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <script
        id='initial-state'
        type='application/json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(state) }}
      />

      {scripts.map((script, index) => <script key={index} src={script} />)}

      <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height='0' width='0' style={{display: 'none', visibility: 'hidden'}} /></noscript>
    </body>
  </html>
)

export const renderDocument = ({
  assets,
  content,
  state = {},
  DocumentComponent = Document
}) => {
  const styles = assets.filter((asset) => asset.match(/\.css$/))
  const scripts = assets.filter((asset) => asset.match(/\.js$/))
  return '<!doctype html>' + renderToStaticMarkup(
    createElement(DocumentComponent, {
      head: Helmet.rewind(),
      styles,
      scripts,
      content,
      state
    })
  )
}

export default renderDocument
