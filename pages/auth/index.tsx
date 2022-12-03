import { Box, Grid, GridProps, Paper, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';
import Image from "next/image";
import { TabPanel } from "../../components/TabPanel";
import adu from '../../public/logo.svg';
import aduMobile from '../../public/logoMobile.svg';
import React, { useState } from 'react';
import LoginForm from "../../components/auth/LoginForm";
import RegistrationForm from "../../components/auth/RegistrationForm";
import { useTypedSelector } from "../../hook/useTypedSelector";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { login, register } from "../../store/auth/auth.action";
import { ILogin, IRegistration } from "../../types/IAuth";
import Link from "next/link";

const StyledGridSection = styled((props: GridProps) => (
    <Grid
        item
        {...props}
    />
))(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

const AuthPage = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const { isAuth } = useTypedSelector(state => state.auth);
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleLogin = (creds: ILogin) => {
        dispatch(login(creds));
    }
    const handleRegistration = (creds: IRegistration) => {
        dispatch(register(creds));
    }
    React.useEffect(() => {
        if (isAuth) {
            router.push('/')
        }
    }, [isAuth])

    const isMobile = useMediaQuery("(max-width:600px)");
    const isTablet = useMediaQuery("(max-width:768px)");
    const isDesktop = useMediaQuery("(max-width:900px)");
    const [state, setState] = useState('step1')

    return (
        <Grid container spacing={0} minHeight='100vh' columns={12} direction={{ xs: "column", sm: isTablet ? "column" : "row" }}>
            <StyledGridSection xs={4} sm={isTablet ? 6 : 6} md={7} sx={{ background: '#8A3FFC', marginBottom: isMobile || isTablet ? "40px" : "0px", borderBottomLeftRadius: isMobile || isTablet ? "30px" : 0, borderBottomRightRadius: isMobile || isTablet ? "30px" : 0 }}>
                {isMobile ?
                    <Paper elevation={0} sx={{ background: "none", marginTop: "120px", marginBottom: "80px" }}>
                        <Image src={aduMobile} alt="logo" />
                    </Paper>
                    : isTablet ?
                        <Paper elevation={0} sx={{ background: "none", marginTop: "120px", marginBottom: "80px" }}>
                            <Image src={adu} width={250} height={125} alt="logo" />
                        </Paper>
                        :
                        <Image src={adu} width={isDesktop ? 370 : 392} height={isDesktop ? 185 : 196} alt="logo" />
                }
            </StyledGridSection>
            <StyledGridSection xs={7} sm={isTablet ? 8 : 6} md={5} sx={{ flexDirection: 'column', padding: '0rem 2rem' }}>
                <Box sx={{ width: "100%", borderRadius: '20px', backgroundColor: '#FFFFFF', alignSelf: 'stretch', mx: 'auto' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Регистрация" sx={{ width: '50%' }} />
                            <Tab label="Войти" sx={{ width: '50%' }} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <RegistrationForm />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <LoginForm />
                    </TabPanel>
                </Box>
            </StyledGridSection>
        </Grid>
    )
}

export default AuthPage
