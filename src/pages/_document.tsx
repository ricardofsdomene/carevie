import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&family=Climate+Crisis&family=Roboto:wght@400;700&family=Work+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        style={{
          background: "#000",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
