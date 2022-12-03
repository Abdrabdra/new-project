import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/layouts/Layout';
import ProfileMenu from '../../components/ProfileMenu';
import { StyledContainedButton } from '../../components/styled-components/StyledButton';
import { useTypedSelector } from '../../hook/useTypedSelector';

const ProfilePage: NextPage = () => {
  const { isAuth } = useTypedSelector(state => state.auth);
  const router = useRouter();
  const navigate = () => {
    router.push({
      pathname: '/auth/login',
      query: { from: router.asPath },
    })
  }

  return (
    <>
      {!isAuth ?
        <Box height={'75vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
          <Typography variant="h5" gutterBottom>
            Вы не авторизованы
          </Typography>
          <Typography variant="subtitle1" textAlign={'center'} mb={'40px'}>
            Для того чтобы пройти в профиль, авторизуйтесь:
          </Typography>
          {/* <Link href="/auth/login"> */}
          <StyledContainedButton fullWidth onClick={navigate}>
            Войти
          </StyledContainedButton>
          {/* </Link> */}
        </Box>
        :
        <ProfileMenu />
      }
    </>
  );
};

export default ProfilePage;
