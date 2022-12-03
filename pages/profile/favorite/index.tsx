import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";
import ProfileLayout from "../../../components/layouts/ProfileLayout";
import ProductCard from "../../../components/product-cards/ProductCard";
import { StyledContainedButton } from "../../../components/styled-components/StyledButton";
import { useTypedSelector } from "../../../hook/useTypedSelector";
import { useGetFavoritesQuery } from "../../../store/rtk-api/rtkEndpoints";

const EditPage = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    const { data: favorites, isLoading, isFetching } = useGetFavoritesQuery("favorites");

    return (
        <>
            {!isAuth ?
                <Box height={'75vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h5" gutterBottom>
                        Вы не авторизованы
                    </Typography>
                    <Typography variant="subtitle1" textAlign={'center'} mb={'40px'}>
                        Для того чтобы посмотреть избранные товары, авторизуйтесь по кнопке ниже
                    </Typography>
                    <Link href="/auth/login" passHref>
                        <a>
                            <StyledContainedButton fullWidth>
                                Войти
                            </StyledContainedButton>
                        </a>
                    </Link>
                </Box>
                :
                <ProfileLayout>
                    <Typography color="primary">Избранные</Typography>
                    {isLoading || isFetching ?
                        <Box height={'75vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                            <Typography variant="h5" gutterBottom>
                                Загрузка...
                            </Typography>
                        </Box>
                        :
                        favorites && !!favorites.length ?
                            <Grid container columns={6} spacing={1}>
                                {favorites.map((item) => (
                                    <Grid
                                        item
                                        xs={3}
                                        sm={2}
                                        md={1.5}
                                        xl={1.2}
                                        key={item.id}
                                    >
                                        <ProductCard product={item} />
                                    </Grid>
                                ))}
                            </Grid>
                            :
                            <Box height={'75vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Typography variant="h5" mb={'40px'}>
                                    У вас нет избранных товаров
                                </Typography>
                                <Link href="/" passHref>
                                    <a>
                                        <StyledContainedButton>
                                            Поиск товара
                                        </StyledContainedButton>
                                    </a>
                                </Link>
                            </Box>
                    }
                </ProfileLayout>
            }
        </>
    );
};

export default EditPage;
