import { Link, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { NextPage } from "next";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hook/useTypedSelector";
import { register } from "../../store/auth/auth.action";
import styles from '../../styles/Auth.module.css';
import { registerSchema } from "../../utils/validation";
import { StyledContainedAuthButton, StyledTextAuthButton } from "../styled-components/StyledButton";

const RegistrationForm: NextPage = () => {
  const dispatch = useDispatch();
  const { error } = useTypedSelector(state => state.auth)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
    onSubmit: (values) => {
      dispatch(register(values));
    },
    validationSchema: registerSchema,
  });
  const { values, errors, handleChange, handleSubmit } = formik;
  const [state, setState] = useState(false);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {!state ?
        <>
          <Typography sx={{ mb: '8px' }}>Ваше имя</Typography>
          <TextField
            sx={{ mb: '16px' }}
            name="firstName"
            placeholder="Имя"
            value={values.firstName}
            onChange={handleChange}
            helperText={errors.firstName}
            fullWidth
          />
          <Typography sx={{ mb: '8px' }}>Ваша фамилия</Typography>
          <TextField
            sx={{ mb: '8px' }}
            name="lastName"
            placeholder="Фамилия"
            value={values.lastName}
            onChange={handleChange}
            helperText={errors.lastName}
            fullWidth
          />
          <StyledContainedAuthButton onClick={() => setState(true)}>Дальше</StyledContainedAuthButton>
          <div className={styles.centerText}>
            <Typography>Уже есть аккаунт? <Link href='/auth/login'>Войти</Link></Typography>
          </div>
        </> :
        <>
          <Typography sx={{ mb: '8px' }}>Ваш E-mail</Typography>
          <TextField
            name="email"
            placeholder="E-mail"
            value={values.email}
            onChange={handleChange}
            helperText={errors.email}
            fullWidth
          />
          <Typography sx={{ mb: '8px' }}>Ваш номер телефона</Typography>
          <TextField
            name="phone"
            placeholder="Номер телефона"
            value={values.phone}
            onChange={handleChange}
            helperText={errors.phone}
            fullWidth
          />
          <Typography sx={{ mb: '8px' }}>Пароль</Typography>
          <TextField
            name="password"
            type="password"
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
            helperText={errors.password}
            fullWidth
          />
          {error &&
            <Typography variant='caption' color='orangered'>{error}</Typography>
          }
          <div className={styles.rowButtons}>
            <StyledTextAuthButton onClick={() => setState(false)}>
              Назад
            </StyledTextAuthButton>
            <StyledContainedAuthButton type="submit">
              Подтвердить
            </StyledContainedAuthButton>
          </div>
        </>}
    </form>
  );
};

export default RegistrationForm;
