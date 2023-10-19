import * as React from "react";
import type { AppProps } from "next/app";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { EmotionCache } from "@emotion/react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";
import createEmotionCache from "@theme/createEmotionCache";
import ThemeProvider from "@theme/ThemeProvider";
import theme from "@theme";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { useEffect } from "react";
import { auth, db } from "../firebase";
import NProgress from "nprogress";
import { deleteCookie, getCookie } from "cookies-next";
import dynamic from "next/dynamic";
import { setUserInLocalStorage } from "@common/utils/setUserInLocalStorage";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { User } from "firebase/auth";
const Layout = dynamic(() => import("@components/Layout"), { ssr: false });

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  NProgress.configure({ showSpinner: matches ? true : false });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const usersRef = doc(db, "users", authUser.uid);
        getDoc(usersRef).then((res) => {
          setUserInLocalStorage(res.data());
        });

        router.replace(router.asPath);
      } else {
        deleteCookie("userId");
        localStorage.removeItem("userData");
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const NEXT_LOCALE = getCookie("NEXT_LOCALE");
    i18n.changeLanguage(NEXT_LOCALE as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Poland 24</title>
        <meta
          name="description"
          content="Fast delivery of goods from Poland and the countries of the European Union to Ukraine"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <NextNProgress height={2} color="#EA0C0C" />
        <ThemeProvider theme={theme} emotionCache={emotionCache}>
          <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            <I18nextProvider i18n={i18n}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </I18nextProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
};

export default MyApp;
