import { Grid, Skeleton } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import SearchLayout from "../../components/layouts/SearchLayout";
import ProductCard from "../../components/product-cards/ProductCard";
import { useGetProductsListQuery } from "../../store/product/productEndpoints";

const Search: NextPage = () => {
  const router = useRouter()
  const { query } = router;
  const { data, isLoading, isFetching, isSuccess } = useGetProductsListQuery({ ...query, limit: 12 });

  return (
    <>
      <Head>
        <title key='title'>Поиск: {query.search}</title>
      </Head>
      <SearchLayout>
        {isLoading || isFetching ?
          <>
            <Skeleton animation="wave" height="200px" />
            <Skeleton animation="wave" height="200px" />
            <Skeleton animation="wave" height="200px" />
          </>
          :
          (!!data?.products.length) ?
            <Grid container spacing={1}>
              {data.products.map((product, idx) => (
                <Grid item>
                  <ProductCard key={idx} product={product} />
                </Grid>
              ))}
            </Grid>
            :
            <div>Товары не найдены</div>
        }
      </SearchLayout>
    </>
  )
}

export default Search;