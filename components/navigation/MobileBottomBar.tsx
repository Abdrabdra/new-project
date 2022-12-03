import * as React from "react";
import { useRouter } from "next/router";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Paper } from "@mui/material";

const routes = [
  '/',
  '/basket',
  '/profile/favorite',
  '/profile'
]

export default function MobileBottomBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  // const { basePath, route, asPath,  } = router;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    router.replace(routes[newValue]);
    // setValue(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        // width: "100%",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        filter: 'drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.1))',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <BottomNavigation
        showLabels
        // value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction

          label="Главная"
          // value="/"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Корзина"
          // value="/basket"
          icon={<ShoppingCartOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Избранные"
          // value="/profile/favorite"
          icon={<FavoriteBorderOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Профиль"
          // value="/profile/edit"
          icon={<PermIdentityOutlinedIcon />}
        />
      </BottomNavigation>
    </Paper>

  );
}
