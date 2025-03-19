export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>React App</title>
          <meta name="description" content="Web site created..." />
        </head>
        <body>
          <div id="root">
            Hello World
          </div>
        </body>
      </html>
    )
  }