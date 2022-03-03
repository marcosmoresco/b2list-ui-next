import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { IntlProvider } from "react-intl";

import Layout from "../src/Layout";
import messages_en from "../src/locales/en.json";
import messages_pt from "../src/locales/pt.json";

export type LocalesType = {
  [key: string]: any;
};

const messages: LocalesType = {
  en: {
    ...messages_en,
  },
  pt: {
    ...messages_pt,
  },
};

function App(props: any) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const { locale = "en", defaultLocale } = router;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>b2list</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages[locale]}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </>
  );
}

export default App;
