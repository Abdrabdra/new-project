import { Hidden, Toolbar } from "@mui/material";
import Head from "next/head";
import { FunctionComponent } from "react";
import styles from "../../styles/Layout.module.css";
import Footer from "../footer/Footer";
import DesktopAppBar from "../navigation/DesktopAppBar";
import MobileAppBar from "../navigation/MobileAppBar";
import MobileBottomBar from "../navigation/MobileBottomBar";
import Header from "../UI/header/Header";

interface Props {
  title: string;
  description: string;
  keywords?: string[];
}

const Layout: FunctionComponent<Props> = ({
  // title,
  // description,
  keywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>ADU24</title>
        {/* <meta name="description" content={description} /> */}
        <link rel="icon" href="/logo.svg" />
        <meta name="keywords" content={keywords?.join(",")} />
      </Head>
      {/* <Header /> */}

      <Hidden mdDown>
        <DesktopAppBar />
      </Hidden>
      <Hidden mdUp>
        <MobileAppBar />
      </Hidden>
      <main className={styles.main}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      <Hidden mdUp>
        <MobileBottomBar />
      </Hidden>
    </>
  );
};

export default Layout;
