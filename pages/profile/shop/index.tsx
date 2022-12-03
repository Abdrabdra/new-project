import React from "react";
import { NextPage } from "next";
import { useFormik } from "formik";
import { IShop } from "../../../types/IShop";
import Layout from "../../../components/layouts/Layout";
import { shopSchema } from "../../../utils/validation";
import ProfileLayout from "../../../components/layouts/ProfileLayout";
import { Button, Grid, Hidden, Paper, Stack, Typography } from "@mui/material";
import { StyledProfileInput } from "../../../components/styled-components/StyledInput";
import { useMakeApplicationMutation } from "../../../store/rtk-api/rtkEndpoints";

const ShopPage: NextPage = () => {
  const [apply, { isLoading, isSuccess, reset }] = useMakeApplicationMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      address: "",
      bin_iin: "",
      contact_person: "",
      email: "",
      phone: "",
      instagram: "",
      shop_type: "seller"
    },
    onSubmit: (values) => {
      console.log("TESTING")
      apply(values);
    },
    // validationSchema: shopSchema,
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
    resetForm
  } = formik;

  React.useEffect(() => {
    if (isSuccess) {
      resetForm();
    }
  }, [isSuccess])

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
        <Typography
          sx={{
            marginBottom: "1.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Начать Продавать В ADU24
        </Typography>

        <form>
          <Paper elevation={0}>
            <Grid container columns={6} spacing={3} gridAutoColumns="1fr">
              <Grid item xs={6} sm={3}>
                <Stack spacing={2}>
                  <Stack>
                    <Typography gutterBottom variant="caption">
                      Название компании
                    </Typography>
                    <StyledProfileInput
                      placeholder="TOO ADU24"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        touched.title &&
                        errors.title &&
                        errors.title
                      }
                    />
                  </Stack>
                  <Stack>
                    <Typography gutterBottom variant="caption">
                      БИН ИИН
                    </Typography>
                    <StyledProfileInput
                      placeholder="123123123123"
                      name="bin_iin"
                      value={values.bin_iin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        touched.bin_iin && errors.bin_iin && errors.bin_iin
                      }
                    />
                  </Stack>
                  <Stack>
                    <Typography gutterBottom variant="caption">
                      Адрес
                    </Typography>
                    <StyledProfileInput
                      placeholder="г. Алматы, пр. Сейфуллина 458/1"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.address && errors.address && errors.address}
                    />
                  </Stack>
                  <Stack>
                    <Typography gutterBottom variant="caption">
                      Контактное лицо
                    </Typography>
                    <StyledProfileInput
                      placeholder="Мади"
                      name="contact_person"
                      value={values.contact_person}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        touched.contact_person && errors.contact_person && errors.contact_person
                      }
                    />
                  </Stack>
                  <Stack>
                    <Typography gutterBottom variant="caption">
                      Телефон
                    </Typography>
                    <StyledProfileInput
                      placeholder="Введите ваш телефон"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        touched.phone && errors.phone && errors.phone
                      }
                    />
                  </Stack>
                  <Stack>
                    <Typography gutterBottom variant="caption">
                      E-mail (Не обязательно)
                    </Typography>
                    <StyledProfileInput
                      placeholder="Введите почту"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        touched.email &&
                        errors.email &&
                        errors.email
                      }
                    />
                  </Stack>
                  <Stack>
                    <Typography gutterBottom variant="caption">
                      Instagram (Не обязательно)
                    </Typography>
                    <StyledProfileInput
                      placeholder="@adu24_com"
                      name="instagram"
                      value={values.instagram}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        touched.instagram &&
                        errors.instagram &&
                        errors.instagram
                      }
                    />
                  </Stack>
                  <Hidden smDown>
                    <Button
                      disabled={isLoading}
                      // type="submit"
                      onClick={() => handleSubmit()}
                      variant="contained"
                      sx={{
                        marginTop: "2rem !important",
                        height: "40px",
                        background: "#BBBBBB",
                        borderRadius: "10px",
                        fontSize: ".7rem",
                        color: "#fff",
                        "&:hover": {
                          background: "#8A3FFC",
                        },
                      }}
                    >
                      Оставить заявку
                    </Button>
                  </Hidden>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </form>
        {isSuccess && <Typography>Ваша заявка принята!</Typography>}
      </Paper>
    </ProfileLayout>
  );
};

export default ShopPage;
