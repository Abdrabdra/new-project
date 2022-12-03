import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import RegistrationForm from '../../../components/auth/RegistrationForm';
import { useTypedSelector } from '../../../hook/useTypedSelector';

const RegisterPage: NextPage = () => {
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
    <RegistrationForm />
  );
};

export default RegisterPage;
