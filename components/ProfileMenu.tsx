import React from 'react';
import { Paper, Grid, Stack, Typography, useMediaQuery, Box } from '@mui/material'
import { useTypedSelector } from '../hook/useTypedSelector';
import Link from 'next/link';
import { StyledProfileButton, StyledTextButton } from './styled-components/StyledButton';
// icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth/auth.action';
import { useRouter } from 'next/router';

const ProfileMenu: React.FC = () => {
  const { user } = useTypedSelector(state => state.auth);
  const isMobile = useMediaQuery('max-width: 600px');

  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    router.replace('/')
  }

  return (
    <Paper
      sx={{
        height: "100%",
        borderRadius: "20px",
        // padding: isMobile ? "0.5rem 0.8rem" : "1rem 1.3 rem",
        padding: isMobile ? '0.5rem' : '1rem'
      }}
      elevation={0}
    >
      <Box
        sx={{
          padding: "5px 10px",
          marginBottom: "1rem",
          width: "100%",
          maxHeight: "60px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <AccountCircleIcon
              sx={{ maxWidth: "2.5rem", maxHeight: "2.5rem" }}
            />
            <Stack sx={{ marginLeft: ".5rem" }}>
              <Typography sx={{ fontSize: "1rem", color: "#002F34" }}>
                {user?.firstName} {user?.lastName}
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "#5B5B5B" }}>
                {user?.phone}
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Link href="/profile/edit" passHref>
              <a>
                <ModeEditIcon sx={{ cursor: "pointer" }} />
              </a>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Typography
        sx={{
          marginBottom: "1rem",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Базовая информация
      </Typography>
      <Stack spacing={1} sx={{ marginBottom: "1rem" }}>
        <Link href="/profile/cards" passHref>
          <a>
            <StyledProfileButton startIcon={<CreditCardIcon />}>
              Мои карты
            </StyledProfileButton>
          </a>
        </Link>
        <StyledProfileButton startIcon={<LoyaltyIcon />}>
          Промокод
        </StyledProfileButton>
        <Link href={"/profile/orders"} passHref>
          <a>
            <StyledProfileButton startIcon={<AccessTimeOutlinedIcon />}>
              История заказов
            </StyledProfileButton>
          </a>
        </Link>
        <Link href={"/profile/messages"} passHref>
          <a>
            <StyledProfileButton startIcon={<NotificationsNoneOutlinedIcon />}>
              Уведомления
            </StyledProfileButton>
          </a>
        </Link>
        <Link href="/profile/favorite" passHref>
          <a>
            <StyledProfileButton startIcon={<FavoriteBorderOutlinedIcon />}>
              Избранные
            </StyledProfileButton>
          </a>
        </Link>
        <Link href="/profile/shop" passHref>
          <a>
            <StyledProfileButton startIcon={<StorefrontOutlinedIcon />}>
              Начать продавать в ADU24
            </StyledProfileButton>
          </a>
        </Link>
      </Stack>
      <Typography
        sx={{
          marginBottom: "1rem",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Справочная информация
      </Typography>
      <Stack spacing={1}>
        <StyledProfileButton startIcon={<CreditCardIcon />}>
          Call center - 5525
        </StyledProfileButton>
        <Link href="/profile/info" passHref>
          <a>
            <StyledProfileButton startIcon={<LoyaltyIcon />}>
              Справочная информация
            </StyledProfileButton>
          </a>
        </Link>
      </Stack>
      <StyledTextButton
        endIcon={<LoginOutlinedIcon />}
        sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}
        onClick={handleLogout}
      >
        Выйти
      </StyledTextButton>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
      </Stack>
    </Paper>
  );
};

export default ProfileMenu;
