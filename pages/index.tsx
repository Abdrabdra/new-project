import axios from "axios";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import ProductsSection from '../components/product-cards/ProductSection';
import SEO from "../components/SEO";
import meta from "../components/SEO/meta";
import BannerSlider from "../components/slider/BannerSlider";
import Slideshow from '../components/Slideshow';
import { IBanner } from "../types/IBanner";
import { ICategory } from "../types/ICategory";
import { IFirstRequest } from "../types/IFirstRequest";
import { IProductCard } from "../types/IProduct";

interface Props {
  bannersMain: IBanner[]
  bannersMadeinkz: IBanner[]
  bestsellers: IProductCard[]
  recommended: IProductCard[]
  categories: ICategory[]
}

const Home: NextPage<Props> = ({ recommended, bannersMadeinkz, bannersMain, bestsellers, categories }) => {
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        shemaType="Product"
      />
      <BannerSlider banners={bannersMain} />
      <ProductsSection title='Рекомендуем вам' products={recommended} />
      <Slideshow banners={bannersMadeinkz} />
      <ProductsSection title='Хиты продаж' products={bestsellers} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await axios.get<IFirstRequest>(`https://api.adu24.com/mobile`).then(res => res.data);
  const { recommended, bestsellers, bannersMadeinkz, bannersMain, categories } = data;

  console.log(data)

  return {
    props: {
      recommended,
      bestsellers,
      bannersMadeinkz,
      bannersMain,
      categories
    },
  }
}

export default Home
