import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Chip, IconButton, Tooltip } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { $imageApi } from '../../api';
import { useCreateBasketItemMutation } from '../../store/basket/basketEndpoints';
import { IProductCard } from '../../types/IProduct';
import { serverLoader } from '../../utils/imageLoader';
import { priceFormatter } from '../../utils/number-formatter';
import { StyledChipNew } from '../styled-components/StyledChip';
import { StyledProductCard } from '../styled-components/StyledProductCard';

interface Props {
    product: IProductCard
}
const ProductCard: FunctionComponent<Props> = ({ product }) => {
    const [addToBasket, { isLoading, isSuccess }] = useCreateBasketItemMutation({ fixedCacheKey: 'basket-items' })
    const handleAddToBasket = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        addToBasket({ productId: product.id, qty: 1 })
    }
    return (
        <Link href={`/product/${product.id}`} passHref>
            <a>
                <StyledProductCard>
                    {
                        product.discount > 0 &&
                        <Chip label={`-${product.discount}%`} sx={{ fontSize: '14px', position: 'absolute', mx: '1rem', mt: '105px', color: '#8A3FFC', backgroundColor: '#f2ebfc' }} />
                    }
                    <CardMedia
                        component="img"
                        height="140px"
                        image={`${$imageApi}/${product.image}`}
                        alt={product.title}
                        sx={{ objectFit: 'scale-down' }}
                    />
                    {/* <Image src={`/${product.image}`} height='140px' width='200px' objectFit='contain'  /> */}
                    <CardContent>
                        <Typography
                            sx={{
                                color: "#031A61",
                                overflow: "hidden",
                                fontSize: '14px',
                                lineHeight: '16px',
                                height: '38px'
                            }}
                            gutterBottom
                        >
                            {product.title}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#031A61",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center"
                            }}
                            gutterBottom
                        >
                            {priceFormatter.format(product.discount === 0 ? product.price : product.price * (1 - product.discount / 100))}
                            {product.discount > 0 &&
                                <Typography sx={{
                                    color: "#BBBBBB",
                                    textDecoration: "line-through",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    marginInline: "0.5rem"
                                }} gutterBottom ml={'0.5rem'}
                                >
                                    {priceFormatter.format(product.price)}
                                </Typography>
                            }
                        </Typography>
                        <CardActions>
                            <StyledChipNew
                                size='small'
                                label="Бесплатная доставка"
                                variant="outlined"
                            />
                            <Tooltip title="Добавить в корзину">
                                <IconButton onClick={handleAddToBasket}>
                                    <ShoppingCartOutlinedIcon sx={{ fontSize: '18px' }} />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                        {/* <Box display={'flex'} minWidth={'170px'} justifyContent={'space-between'} alignItems={'center'}>
                            <StyledChipNew
                                size='small'
                                label="Бесплатная доставка"
                                variant="outlined"
                            />
                            <Tooltip title="Добавить в корзину">
                                <IconButton onClick={handleAddToBasket}>
                                    <ShoppingCartOutlinedIcon sx={{ fontSize: '18px' }} />
                                </IconButton>
                            </Tooltip>
                        </Box> */}
                    </CardContent>
                </StyledProductCard>
            </a>
        </Link>
    );
}

export default ProductCard;