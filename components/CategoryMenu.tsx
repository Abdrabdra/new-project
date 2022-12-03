import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, MenuItem, Paper, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useGetCategoriesQuery } from '../store/rtk-api/rtkEndpoints';
import { ICategory } from '../types/ICategory';
import { StyledContainedButton } from './styled-components/StyledButton';
import { StyledMenu } from './styled-components/StyledMenu';
import { StyledTooltop } from './styled-components/StyledTooltip';

const CategoryMenu: NextPage = () => {
    const router = useRouter();
    const { data: categories } = useGetCategoriesQuery("", { pollingInterval: 0 });
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setSubMenuAnchorEl(null);
        setAnchorEl(null);
    };

    const [category, setCategory] = React.useState<ICategory | null>(null);

    const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const subMenuOpen = Boolean(subMenuAnchorEl);
    const handleSubMenuOpen = (event: React.MouseEvent<HTMLElement>, category: ICategory) => {
        setCategory(category)
        setSubMenuAnchorEl(event.currentTarget);
    };
    const handleSubMenuClose = () => {
        setCategory(null)
        setSubMenuAnchorEl(null);
    };
    const handleChangeRoute = (category: ICategory) => {
        if (!category.children?.length) {
            router.push(`/search?categoryId=${category.id}&category=${category.name}`)
        }
        handleClose();
        handleSubMenuClose();
    }

    return (
        <div>
            <StyledContainedButton
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                startIcon={<MenuIcon />}
                sx={{ backgroundColor: "#9AA3C0", color: "white", margin: '8px' }}
            >
                КАТЕГОРИИ
            </StyledContainedButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {categories?.map(e =>
                    <StyledTooltop
                        key={e.id}
                        placement="right-start"
                        title={
                            e.children?.length ?
                                <Paper sx={{ m: 1, p: 1, height: '90vh', width: '900px', overflowY: 'scroll' }}>
                                    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} px={2}>
                                        {category?.children?.map((sub, index) => (
                                            <Grid item xs={2} sm={4} md={3} key={index}>
                                                <Typography
                                                    sx={{ fontSize: '18px', fontWeight: 600, cursor: sub.children?.length ? 'text' : 'pointer', textDecoration: sub.children?.length ? 'none' : 'underline' }}
                                                    onClick={() => handleChangeRoute(sub)}
                                                >
                                                    {sub.name}
                                                </Typography>
                                                {sub.children?.map((subsub, index) => (
                                                    <Typography
                                                        key={index} sx={!subsub.children?.length ? { cursor: 'pointer', textDecoration: 'underline' } : {}}
                                                        onClick={() => handleChangeRoute(subsub)}
                                                    >{subsub.name}</Typography>
                                                ))}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Paper>
                                : ""
                        }
                    >
                        <MenuItem
                            key={e.id}
                            onMouseOver={(ev) => handleSubMenuOpen(ev, e)}
                            onFocusCapture={handleSubMenuClose}
                            disableRipple
                            onClick={() => handleChangeRoute(e)}
                            sx={{ width: '100%' }}
                        >
                            {e.name}
                        </MenuItem>
                    </StyledTooltop>

                )}
            </StyledMenu >
        </div>
    );
}

export default CategoryMenu;