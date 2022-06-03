// pages/_document.js
import { FC } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document: FC<{}> = () => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export { Document };
