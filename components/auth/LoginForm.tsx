import { Link, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { NextPage } from 'next';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { login } from '../../store/auth/auth.action';
import styles from '../../styles/Auth.module.css';
import { loginSchema } from '../../utils/validation';
import { StyledContainedAuthButton } from '../styled-components/StyledButton';

const LoginForm: NextPage = () => {
    const { error } = useTypedSelector(state => state.auth)
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            dispatch(login(values))
        },
        validationSchema: loginSchema
    })
    const { values, handleChange, handleSubmit, errors } = formik;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <Typography sx={{ mb: '8px' }}>Ваше email</Typography>
            <TextField
                placeholder='Введите ваш телефон или электронную почту'
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                fullWidth
                sx={{ mb: '16px' }}
                helperText={errors.email}
            />
            <Typography sx={{ mb: '8px' }}>Пароль</Typography>
            <TextField
                placeholder='Введите ваш пароль'
                type='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                fullWidth
                sx={{ mb: '8px' }}
                helperText={errors.email}
            />
            <Link href="#" style={{ marginLeft: 'auto', fontSize: '14px' }}>Забыли пароль?</Link>
            {error &&
                <Typography variant='caption' color='orangered'>{error}</Typography>
            }
            <StyledContainedAuthButton type='submit'>Войти</StyledContainedAuthButton>
            <div className={styles.centerText}>
                <Typography>Создать аккаунт. <Link href='/auth/register'>Регистрация</Link></Typography>
            </div>
        </form>
    )
}

export default LoginForm
