import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Button,
  Divider,
  Grid, Paper,
  Stack,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import { NextPage } from "next";
import React from "react";
import { useDispatch } from "react-redux";
import ProfileLayout from "../../../components/layouts/ProfileLayout";
import { StyledProfileInput } from "../../../components/styled-components/StyledInput";
import { useTypedSelector } from "../../../hook/useTypedSelector";
import { updatePassword } from "../../../store/auth/auth.action";
import { ActionsEnum } from "../../../store/enum";
import { profileEditSchema } from "../../../utils/validation";

const EditPage: NextPage = () => {
  const { user, status, error } = useTypedSelector((data) => data.auth);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      email: "",
      date: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: () => {
      handleUpdatePassword();
    },
    validationSchema: profileEditSchema,
  });

  const {
    values,
    isValid,
    errors,
    touched,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;
  const handleUpdatePassword = () => {
    dispatch(
      updatePassword({
        oldPassword: formik.values.oldPassword,
        newPassword: formik.values.newPassword,
      })
    );
  };

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
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}>
          Редактировать профиль
        </Typography>

        <Paper elevation={0}>
          <AccountCircleIcon sx={{ width: "4rem", height: "4rem" }} />
          <Grid container columns={4} spacing={3} gridAutoColumns="1fr">
            <Grid item xs={4} sm={3} md={3} lg={2} xl={2}>
              <Stack spacing={2}>
                <Typography variant="h5">Профиль</Typography>
                <Stack>
                  <Typography gutterBottom variant="caption">
                    Имя
                  </Typography>
                  <StyledProfileInput
                    placeholder="Имя"
                    name="firstName"
                    disabled
                    value={`${user?.firstName} ${user?.lastName}`}
                  />
                </Stack>
                <Stack>
                  <Typography gutterBottom variant="caption">
                    Телефон
                  </Typography>
                  <StyledProfileInput
                    placeholder="Телефон"
                    name="phone"
                    disabled
                    value={user?.phone}
                  />
                </Stack>
                <Stack>
                  <Typography gutterBottom variant="caption">
                    E - mail
                  </Typography>
                  <StyledProfileInput
                    placeholder="E - mail"
                    name="email"
                    disabled
                    value={user?.email}
                  />
                </Stack>
              </Stack>
              <Divider sx={{ marginTop: "25px", marginBottom: "20px" }} />
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Изменение пароля
                  </Typography>
                  <Stack>
                    <Typography gutterBottom variant="caption">
                      Введите старый пароль
                    </Typography>
                    <StyledProfileInput
                      placeholder="Введите старый пароль"
                      name="oldPassword"
                      type="password"
                      value={values.oldPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        touched.oldPassword &&
                        errors.oldPassword &&
                        errors.oldPassword
                      }
                    />
                  </Stack>
                  <Stack>
                    <Typography gutterBottom variant="caption">
                      Введите новый пароль
                    </Typography>
                    <StyledProfileInput
                      placeholder="Введите новый пароль"
                      name="newPassword"
                      type="password"
                      required
                      value={values.newPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        touched.newPassword &&
                        errors.newPassword &&
                        errors.newPassword
                      }
                    />
                  </Stack>
                  <Stack>
                    <Typography gutterBottom variant="caption">
                      Подтвердите пароль
                    </Typography>
                    <StyledProfileInput
                      placeholder="Подтвердите пароль"
                      name="confirmPassword"
                      type="password"
                      required
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        touched.confirmPassword &&
                        errors.confirmPassword &&
                        errors.confirmPassword
                      }
                    />
                  </Stack>
                  {error &&
                    <Typography variant="caption" color="orangered">
                      {error}
                    </Typography>
                  }
                  <Button
                    // disabled={!isValid || status === ActionsEnum.LOADING}
                    type="submit"
                    onClick={handleUpdatePassword}
                    variant="contained"
                    sx={{
                      marginTop: "2rem !important",
                      height: "40px",
                      background: "#BBBBBB",
                      borderRadius: "10px",
                      fontSize: ".7rem",
                      color: "#fff",
                      boxShadow: "none",
                      "&:hover": {
                        background: "#8A3FFC",
                      },
                    }}
                  >
                    Изменить пароль
                  </Button>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </ProfileLayout>
  );
};

export default EditPage;
