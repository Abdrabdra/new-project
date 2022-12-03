import { Box, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, NativeSelect, Paper, Select, Skeleton, Stack, TextField } from "@mui/material"
import ProfileLayout from "../../../components/layouts/ProfileLayout"
import { StyledChipNew } from "../../../components/styled-components/StyledChip"
import { StyledText, StyledTitle } from "../../../components/styled-components/StyledText"
import { useGetNotificationsQuery } from "../../../store/rtk-api/rtkEndpoints"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Suspense, useState } from "react"
import Link from "next/link"

const MessagesPage = () => {
  const [searchText, setSearchText] = useState('')
  const [filter, setFilter] = useState('all')
  const { data, isLoading, isFetching } = useGetNotificationsQuery('');

  const handleSearch = () => {
    alert('test')
  }

  return (
    <ProfileLayout>
      <Paper
        sx={{
          height: "100%",
          borderRadius: "20px",
          padding: "1rem 1.5rem",
        }}
        elevation={0}
      >
        <Stack direction={'row'} spacing={2}>
          <StyledTitle mb='16px'>
            Уведомления
          </StyledTitle>
          <StyledChipNew label={data?.count} />
        </Stack>
        <Stack>
          <TextField
            placeholder="Поиск"
            size="small"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{ backgroundColor: '#F2F4F5', maxWidth: '400px' }}
            fullWidth
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <SearchIcon color='primary' />
                </InputAdornment>,
              endAdornment:
                searchText.length > 0 ?
                  <InputAdornment position="end">
                    <CloseIcon color='primary' onClick={() => setSearchText('')} />
                  </InputAdornment>
                  : null
            }}
          />
          {isLoading && isFetching ?
            <Skeleton animation="wave" height="200px" />
            :
            (data && data?.notifications.length > 0) ?
              <Box height={'100%'} width={'100%'}>
                <FormControl sx={{ my: 1 }} variant="standard" size="small">
                  <Select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    variant='outlined'
                  >
                    <MenuItem value={'all'}>Все уведомления</MenuItem>
                    <MenuItem value={'new'}>Непрочитанные</MenuItem>
                    <MenuItem value={'old'}>Прочитанные</MenuItem>
                  </Select>
                </FormControl>
                <Divider sx={{ bgcolor: '#C3C3C3', mb: '8px' }} />
                {data.notifications
                  .filter(message => message.message.toLowerCase().includes(searchText.toLowerCase()))
                  .map((message) => (
                    <Link href={`/profile/messages/${message.id}`} passHref>
                      <a>
                        <Box px={'16px'} sx={{ cursor: 'pointer', ':hover': { backgroundColor: '#F2F4F5' } }}>
                          <Grid container spacing={2} alignItems={'center'}>
                            <Grid item>
                              <div style={{ borderRadius: '50%', backgroundColor: message.read ? 'transparent' : '#8A3FFC', height: '10px', width: '10px' }} />
                            </Grid>
                            <Grid item xs>
                              <StyledTitle>{message.message}</StyledTitle>
                              <StyledText sx={{ fontSize: '14px' }} color='#C3C3C3'>{message.message}</StyledText>
                            </Grid>
                          </Grid>
                          <Divider sx={{ bgcolor: '#F2F4F5', mb: '8px' }} />
                        </Box>
                      </a>
                    </Link>
                  ))}
              </Box>

              :
              <Box height={'60%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <StyledText mt="16px">Нет уведомлении</StyledText>
              </Box>

          }
        </Stack>
      </Paper>
    </ProfileLayout>
  )
}

export default MessagesPage