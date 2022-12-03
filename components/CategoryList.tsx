import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Box, Divider, ListItem } from '@mui/material';
import { useGetCategoriesQuery } from '../store/rtk-api/rtkEndpoints';
import { useRouter } from 'next/router';

export default function CategoryList() {
  const router = useRouter();
  const { data: categories, isLoading, isError } = useGetCategoriesQuery('', { refetchOnReconnect: true });

  const [openedCat, setOpenedCat] = React.useState<null | number>(null);
  const [openedSub, setOpenedSub] = React.useState<null | number>(null);

  const handleClick = (idx: number | null) => {
    if (idx === openedCat) {
      setOpenedCat(null);
    } else {
      setOpenedCat(idx);
    }
  };

  const handleSubClick = (idx: number | null) => {
    if (idx === openedSub) {
      setOpenedSub(null);
    } else {
      setOpenedSub(idx);
    }
  };

  const handleRoute = (categoryId: number) => {
    router.push(`/search?categoryId=${categoryId}`)
  }

  return (
    <Box sx={{ width: '100vw' }} role="presentation">
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Категорий
          </ListSubheader>
        }
      >
        {isLoading &&
          (<ListItem>
            <ListItemText sx={{ textAlign: 'center' }}>Загрузка...</ListItemText>
          </ListItem>)
        }

        {(categories && categories.length) && categories.map((category, idx) => (
          <>
            <Divider variant='middle' component="li" />
            <ListItemButton onClick={() => category.children?.length ? handleClick(idx) : handleRoute(category.id)}>
              <ListItemText primary={category.name} />
              {category?.children?.length ? (openedCat === idx ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItemButton>
            <Collapse in={openedCat === idx} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {category?.children?.map((sub, index) => (
                  <>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => openedSub ? handleSubClick(null) : handleSubClick(index)}>
                      <ListItemText primary={sub.name} />
                      {openedSub === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Divider variant='middle' component="li" />
                    <Collapse in={openedSub === index} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {sub?.children?.map((subsub) => (
                          <>
                            <ListItemButton sx={{ pl: 8 }} onClick={() => handleRoute(subsub.id)}>
                              <ListItemText primary={subsub.name} />
                            </ListItemButton>
                            <Divider variant='middle' component="li" />
                          </>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ))}
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </Box>

  );
}