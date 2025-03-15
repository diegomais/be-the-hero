import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-200 text-sm antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
