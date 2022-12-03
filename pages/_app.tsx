import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import CustomAlert from "../components/alert/CustomAlert";
import Footer from "../components/footer/Footer";
import AuthLayout from "../components/layouts/AuthLayout";
import Layout from "../components/layouts/Layout";
import SEO from "../components/SEO";
import meta from "../components/SEO/meta";
import "../public/font/fonts.css";
import { store } from "../store";
import { refresh } from "../store/auth/auth.action";
import "../styles/global/globals.scss";
import '../styles/variables/_breakpoints.scss';
import '../styles/variables/_mixins.scss';
import theme from "../utils/theme";

function MyApp({ Component, pageProps, ...appProps }: AppProps) {

    React.useEffect(() => {
        // IT IS FOR MOBILE APPLICATION: CLOSING WEBVIEW AFTER PAYMENT
        console.log("close_by_page")
    }, [])

    React.useEffect(() => {
        if (localStorage.getItem('access_token')) {
            store.dispatch(refresh())
        }
    }, [])

    const { asPath } = appProps.router;

    if (asPath.includes('/auth')) {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <AuthLayout>
                        <Component {...pageProps} />
                    </AuthLayout>
                </ThemeProvider>
            </Provider>
        );
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout title="Test" description="test">
                    <Component {...pageProps} />
                    <CustomAlert />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
