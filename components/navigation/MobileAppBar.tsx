import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Divider, Drawer, Hidden, List, ListItem, ListItemText, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import logo from '../../public/adu.svg';
import CategoryList from '../CategoryList';
import MobileBottomBar from './MobileBottomBar';
import styles from "../../styles/Layout.module.css";
import { useRouter } from 'next/router';

export default function MobileAppBar() {
    const router = useRouter();
    const [drawer, setDrawer] = React.useState(false);
    const [search, setSearch] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');

    const handleOpenSearch = () => setSearch(true)
    const handleCloseSearch = () => setSearch(false)

    const handleSearch = () => {
        if (search && !!searchText.length) {
            router.push(`/search?search=${searchText}`)
            setSearchText('')
            handleCloseSearch();
        }
    }

    React.useEffect(() => {
        setDrawer(false)
    }, [router])

    return (
        <Box sx={{ flexGrow: 1, mb: '60px' }}>
            <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF', zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
                <Toolbar className={styles.toolbar}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        onClick={() => setDrawer(state => !state)}
                    >
                        <MenuIcon />
                    </IconButton>
                    {search ?
                        <TextField
                            focused={search}
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSearch()}
                            placeholder='Поиск товара'
                            size='small'
                            fullWidth
                        />
                        :
                        <Box flexGrow={1} p={'8px'} alignItems={'center'}>
                            <Link href="/" passHref>
                                <img src={logo.src} alt="ADU24 Logo" />
                            </Link>
                        </Box>
                    }
                    {!search ?
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenSearch}
                            color="secondary"
                        >
                            <SearchIcon />
                        </IconButton>
                        :
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleCloseSearch}
                            color="secondary"
                        >
                            <CloseIcon />
                        </IconButton>
                    }

                </Toolbar>
            </AppBar>
            <Drawer
                anchor={'left'}
                open={drawer}
                onClose={() => setDrawer(false)}
                variant='temporary'
            >
                <Toolbar />
                <CategoryList />
            </Drawer>
        </Box >
    );
}