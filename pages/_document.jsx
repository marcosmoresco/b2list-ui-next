import { getCssText, globalCss } from "@b2list/config/stitches.config";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const globalStyles = globalCss({
  body: { margin: 0 },
});

export default class Document extends NextDocument {
  render() {
    globalStyles();
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
