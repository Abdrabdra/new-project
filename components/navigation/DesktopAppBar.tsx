import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, IconButton, InputAdornment, Menu, MenuItem, TextField, Toolbar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { logout } from '../../store/auth/auth.action';
import styles from "../../styles/Layout.module.css";
import CategoryMenu from '../CategoryMenu';
import { StyledTextButton } from '../styled-components/StyledButton';
import SearchInput from '../UI/input/SearchInput';
import logo from '../../public/adu.svg';

const DesktopAppBar = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { isAuth } = useTypedSelector(state => state.auth);

    const [profileAnchorEl, setProfileAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(profileAnchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setProfileAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setProfileAnchorEl(null);
    };
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <AppBar position="static" className={styles.appBar} elevation={0}>
            <Toolbar className={styles.toolbar}>
                <Link href="/" passHref>
                    <a style={{display: 'flex', alignItems: 'center'}}>
                        <img src={logo.src} alt="ADU24 Logo" width={120} height={30} />
                    </a>
                </Link>
                <CategoryMenu />
                <SearchInput />
                <Link href={isAuth ? "/basket" : "/auth/login"} passHref>
                    <a>
                        <StyledTextButton className={styles.button} startIcon={<LocalGroceryStoreIcon />}>
                            Корзина
                        </StyledTextButton>
                    </a>
                </Link>
                {
                    isAuth ?
                        <>
                            <StyledTextButton className={styles.button} onClick={handleClick} startIcon={<PersonOutlineOutlinedIcon />}>
                                Мой профиль
                            </StyledTextButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={profileAnchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link href="/profile/edit">
                                        Мой профиль
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>Мои сообщения</MenuItem>
                                <MenuItem onClick={handleClose}>Избранные</MenuItem>
                                <MenuItem onClick={handleClose}>Продовайте на ADU24</MenuItem>
                                <MenuItem onClick={handleLogout}>Выйти</MenuItem>
                            </Menu>
                        </>
                        :
                        <Link
                            href={{
                                pathname: '/auth/login',
                                query: { from: router.asPath },
                            }}
                            passHref
                        >
                            <a>
                                <StyledTextButton className={styles.button} startIcon={<PersonOutlineOutlinedIcon />}>
                                    Войти
                                </StyledTextButton>
                            </a>
                        </Link>
                }
            </Toolbar>
        </AppBar>
    )
}

export default DesktopAppBar
