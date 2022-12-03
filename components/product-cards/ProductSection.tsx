import { Grid, Skeleton, Typography, useMediaQuery } from "@mui/material";
import MaterialLink from '@mui/material/Link';
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from 'react';
import { IProductCard } from "../../types/IProduct";
import ProductCard from "./ProductCard";

interface Props {
    title?: string;
    products: IProductCard[],
    link?: string,
    loading?: boolean
}

const ProductsSection: FunctionComponent<Props> = ({ title, products, link, loading }) => {

    return (
        <div style={{ marginBottom: '2rem' }}>
            {link ?
                <Link href={link}>
                    <MaterialLink underline='hover' sx={{ cursor: 'pointer' }}>
                        <Typography sx={{
                            color: "#333333",
                            fontWeight: "bold",
                        }}>
                            {title}
                        </Typography>
                    </MaterialLink>
                </Link>
                :
                title ?
                    <Typography sx={{
                        color: "#333333",
                        fontSize: "28px",
                        fontWeight: "bold"
                    }}>
                        {title}
                    </Typography>
                    : null
            }
            <Grid container gridTemplateRows={2} spacing={2} width={'100%'} columns={{ xs: 2, sm: 3, md: 4, lg: 6, xl: 6 }}>
                {loading ?
                    <Skeleton animation="wave" height="280px" width="100%" />
                    :
                    products?.slice(0, 12).map((product, idx) => (
                        <Grid item key={idx} xs={1} sm={1} md={1} lg={1} xl={1}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
            </Grid>
            {products.length === 0 && (
                <Typography>Недостаточно товаров для отображения</Typography>
            )}
        </div>
    )
}

export default ProductsSection
