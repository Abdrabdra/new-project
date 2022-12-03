import { Box, Button, Chip, Grid, Hidden, MobileStepper, Paper, Skeleton, Tab, Table, TableBody, TableCell, TableContainer, TableRow, Tabs, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { $imageApi } from '../../api'
import Layout from '../../components/layouts/Layout'
import ProductsSection from '../../components/product-cards/ProductSection'
import { StyledContainedButton, StyledOutlinedButton } from '../../components/styled-components/StyledButton'
import { StyledChip, StyledChipNew } from '../../components/styled-components/StyledChip'
import { TabPanel } from '../../components/TabPanel'
import { useGetMainPageDataQuery } from '../../store/rtk-api/rtkEndpoints'
import { useAddProductToFavMutation, useDeleteProductFromFavMutation, useGetOneProductFeedbacksQuery, useGetOneProductQuery } from '../../store/product/productEndpoints'
import { percentFormatter, priceFormatter } from '../../utils/number-formatter'
import { useCreateBasketItemMutation } from '../../store/basket/basketEndpoints'
import { StyledText, StyledTitle } from '../../components/styled-components/StyledText'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hook/useTypedSelector'
import ImageSlider from '../../components/slider/ImageSlider'
//icons
import StarIcon from '@mui/icons-material/Star'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { alertSuccess } from '../../store/alert/alert.action'
import { IProductOneResponse } from '../../types/IProduct'
import axios from 'axios'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { IFeedbackResponse } from '../../types/IFeedback'
import Image from 'next/image'
import SEO from '../../components/SEO'
import meta from '../../components/SEO/meta'

interface Props {
    product: IProductOneResponse
    feedback: IFeedbackResponse
}

const ProductPage: NextPage<Props> = ({ product: data, feedback }) => {
    const dispatch = useDispatch();
    const router = useRouter()
    const { id } = router.query;
    const { data: recommendedProducts, isLoading: recommendedLoading } = useGetMainPageDataQuery('main-page-data');

    const { isAuth } = useTypedSelector(state => state.auth);

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [addToBasket, { isLoading: basketLoading, isSuccess }] = useCreateBasketItemMutation({ fixedCacheKey: 'basket-items' })

    const [productQty, setProductQty] = React.useState(1);
    const handleQtyDown = () => {
        if (productQty > 1) {
            setProductQty(state => state - 1)
        }
    }
    const handleQtyMore = () => {
        setProductQty(state => state + 1)
    }
    const handleAddToBasket = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (data && isAuth) {
            addToBasket({ productId: data?.product.id, qty: productQty })
                .then(() => {
                    dispatch(alertSuccess({ message: 'Товар добавлен в корзину!' }))
                })
        } else {
            router.push({
                pathname: '/auth/login',
                query: { from: router.asPath },
            })
        }
    }

    const [isProductFav, setIsProductFav] = React.useState(data?.is_fav)
    const [addToFav] = useAddProductToFavMutation({ fixedCacheKey: 'one-product' });
    const [removeFromFav] = useDeleteProductFromFavMutation();

    const handleFavProduct = () => {
        if (data) {
            setIsProductFav(state => !state);
            data.is_fav ? removeFromFav(data.product.id) : addToFav(data.product.id)
        }
    }

    return (
        <>
            <SEO
                title={`Купить ${data.product.title} по низкой цене с бесплатной доставкой - ADU24 Market`}
                description={meta.productPrefix.concat(data.product.title).concat(meta.productSuffx)}
                shemaType="Product"
                image={`${$imageApi}${data.product.image}`}
                product={data.product}
            />
            <Grid container spacing={0} bgcolor={'white'} justifyContent={'center'} >
                <Grid item xs={12} sm={12} md={6}>
                    <ImageSlider photos={data?.product.photos} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box p={'1rem'}>
                        <StyledTitle>
                            {data?.product.title}
                        </StyledTitle>
                        <StyledChipNew label={`${!data?.avg ? 0 : data?.avg}`} icon={<StarIcon sx={{ fill: '#F2C94C' }} />} />
                        <StyledChipNew label={`Бесплатная доставка`} />
                        <Grid container spacing={2}>
                            <Grid item>
                                <StyledTitle>
                                    {priceFormatter.format(data.product.discount === 0 ? data.product.price : data.product.price * (1 - data.product.discount / 100))}
                                    {/* {priceFormatter.format(Number(data?.product?.price))} */}
                                </StyledTitle>
                            </Grid>
                            <Grid item>
                                <StyledText gutterBottom sx={{ color: '#BBBBBB', textDecoration: 'line-through' }}>
                                    {data?.product.discount > 0 &&
                                        priceFormatter.format(data?.product?.price)
                                    }
                                </StyledText>
                            </Grid>
                            <Grid item>
                                {data.product.discount > 0 &&
                                    <StyledChipNew label={`- ${data.product.discount}%`} sx={{ bgcolor: '#FB4805', color: '#FFFFFF' }} />
                                }
                            </Grid>
                        </Grid>
                        <StyledText>
                            Количество
                        </StyledText>
                        <Box display={'flex'}>
                            <StyledChipNew label="—" clickable onClick={handleQtyDown} />
                            <StyledText mr={'8px'}>{productQty}</StyledText>
                            <StyledChipNew label="+" clickable onClick={handleQtyMore} />
                        </Box>
                        <Grid container spacing={1} mb={3}>
                            <Grid item>
                                <StyledContainedButton onClick={handleAddToBasket} disabled={basketLoading}>В корзину</StyledContainedButton>
                            </Grid>
                            {isAuth ?
                                <Grid item>
                                    <StyledContainedButton onClick={handleFavProduct} sx={{ backgroundColor: '#FFFFFF', boxShadow: '0px 4px 30px -5px rgba(0, 0, 0, 0.13)', '&:hover': { backgroundColor: '#FFFFFF', boxShadow: '0px 4px 30px -5px rgba(0, 0, 0, 0.20)' } }}>
                                        <FavoriteIcon sx={isProductFav ? { fill: '#FB4805' } : { stroke: '#FB4805' }} />
                                    </StyledContainedButton>
                                </Grid>

                                :
                                null
                            }

                        </Grid>
                        <StyledTitle >
                            Описание
                        </StyledTitle>
                        <StyledText>
                            {data?.product.smallDesc}
                        </StyledText>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} sx={{ borderRadius: '10px', p: '1rem' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                            <Tabs value={value} onChange={handleChange}>
                                <Tab label="О товаре" sx={{ width: '33%', fontSize: '11px' }} />
                                <Tab label="О магазине" sx={{ width: '33%', fontSize: '11px' }} />
                                <Tab label="Отзывы" sx={{ width: '33%', fontSize: '11px' }} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Grid container spacing={2}>
                                {data?.product?.fullDesc?.length > 0 &&
                                    <Grid item xs={12} md lg>
                                        <StyledTitle>Описание</StyledTitle>
                                        <StyledText>{data?.product.fullDesc}</StyledText>
                                    </Grid>
                                }
                                <Grid item xs={12} md lg>
                                    <StyledTitle>Характеристики</StyledTitle>
                                    <ul style={{ padding: '1rem', margin: 0 }}>
                                        {data?.product.specs.map((spec) => (
                                            <li key={spec.id} style={{ fontSize: '14px', color: 'red' }}>
                                                <StyledText color={'#BBBBBB'}>{spec.title.title}: {spec.value}</StyledText>
                                            </li>

                                        ))}
                                    </ul>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <StyledTitle>Сведения о магазине</StyledTitle>
                            {data.product.shop.logo &&
                                <div style={{ width: '100px', height: '100px' }}>
                                    <Image src={`${$imageApi}/${data.product.shop.logo}`} height='120px' width='120px' objectFit='contain' />
                                </div>
                            }
                            <div>
                                <StyledText sx={{ color: '#BBBBBB', display: 'flex' }}>Продавец:
                                    <StyledText sx={{ color: '#000000', mx: 1 }}>
                                        {data?.product.shop.name}
                                    </StyledText>
                                </StyledText>
                                <StyledText sx={{ color: '#BBBBBB', display: 'flex' }}>Общая оценка продавца:
                                    <StyledText sx={{ color: '#000000', mx: 1 }}>
                                        4.9/5
                                    </StyledText>
                                    <StarIcon sx={{ fill: '#F2C94C' }} />
                                </StyledText>
                                <StyledText sx={{ color: '#BBBBBB' }}>
                                    Рейтинг рассчитан на основе оценок покупателей и качества работы продавца
                                </StyledText>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <ul style={{ padding: '1rem', margin: 0 }}>
                                {feedback?.feedback.map((feedback) => (
                                    <li key={feedback.id} style={{ fontSize: '14px', color: 'red' }}>
                                        <StyledText color={'#BBBBBB'}>{feedback.comment} {feedback.rating}</StyledText>
                                    </li>
                                ))}
                            </ul>
                        </TabPanel>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <ProductsSection title='Рекомендуем' products={recommendedProducts?.recommended || []} loading={recommendedLoading} />
                </Grid>
            </Grid>
        </>
    )
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { id: '7' } },
//             { params: { id: '8' } },
//             { params: { id: '9' } },
//             { params: { id: '10' } },
//             { params: { id: '11' } },
//         ],
//         fallback: false
//   };
// }

export const getServerSideProps = async (context: { params: { id: string } }) => {
    const id = context.params.id;
    const product = await axios.get<IProductOneResponse>(`https://api.adu24.com/product/get-one/${id}`).then(res => res.data);
    const feedback = await axios.get<IFeedbackResponse>(`https://api.adu24.com/feedback?page=1&limit=5&productId=${id}`).then(res => res.data);
    return {
        props: {
            product,
            feedback
        }
    }
}
// export const getStaticProps: GetStaticProps = async (context) => {
//     if (context.params) {
//         const { id } = context.params;
//         const product = await axios.get<IProductOneResponse>(`https://api.adu24.com/product/get-one/${id}`).then(res => res.data);
//         const feedback = await axios.get<IFeedbackResponse>(`https://api.adu24.com/feedback?page=1&limit=5&productId=${id}`).then(res => res.data);
//         return {
//             props: {
//                 product,
//                 feedback
//             }
//         }
//     }
//     return {
//         notFound: true
//     }

// }

export default ProductPage
