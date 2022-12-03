import { Box, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import BasketProductsPaper from "../../components/basket/BasketProductsPaper"
import { BasketStepper } from "../../components/basket/BasketStepper"
import Layout from "../../components/layouts/Layout"
import { StyledContainedButton } from "../../components/styled-components/StyledButton"
import { useTypedSelector } from "../../hook/useTypedSelector"

const BasketPage = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    const router = useRouter();

    return (
        <>
            {!isAuth ?
                <Box height={'75vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h5" gutterBottom>
                        Вы не авторизованы
                    </Typography>
                    <Typography variant="subtitle1" textAlign={'center'} mb={'40px'}>
                        Для того чтобы добавлять товары в корзину, авторизуйтесь:
                    </Typography>
                    <Link href={{ pathname: '/auth/login', query: { from: router.asPath } }} passHref>
                        <StyledContainedButton>
                            Войти
                        </StyledContainedButton>
                    </Link>
                </Box>
                :
                <BasketProductsPaper handleNext={() => router.push('/basket/confirm')} />
            }
        </>
    )
}

export default BasketPage
