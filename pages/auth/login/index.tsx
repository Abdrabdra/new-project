import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoginForm from '../../../components/auth/LoginForm';
import AuthLayout from '../../../components/layouts/AuthLayout';
import { useTypedSelector } from '../../../hook/useTypedSelector';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { isAuth } = useTypedSelector(state => state.auth);

  useEffect(() => {
    if (isAuth) {
      if (router.query && router.query.from) {
        router.push(String(router.query.from));
      } else {
        router.push('/')
      }
    };
  }, [isAuth]);

  return (
    <LoginForm />
  );
};

export default LoginPage;
