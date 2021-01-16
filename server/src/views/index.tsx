import * as React from 'react'

export default function Index() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={'/assets/main.css'} />
      </head>
      <body>
        <div id="app"></div>
        <script src={'/assets/main.js'}></script>
      </body>
    </html>
  )
}
