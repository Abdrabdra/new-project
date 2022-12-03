import {
  Box,
  Grid,
  Hidden,
  Modal,
  Paper,
  Skeleton,
  Stack,
  Typography
} from "@mui/material";
import Image from "next/image";
import React from "react";
import ProfileLayout from "../../../components/layouts/ProfileLayout";
import {
  StyledCardButton,
  StyledContainedButton
} from "../../../components/styled-components/StyledButton";
import { StyledCardInput } from "../../../components/styled-components/StyledInput";
import { StyledCardSwitch } from "../../../components/styled-components/StyledSwitch";
import { StyledText } from "../../../components/styled-components/StyledText";
import { useGetPaymentCardsQuery } from "../../../store/rtk-api/rtkEndpoints";

const CardPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data: cards, isLoading } = useGetPaymentCardsQuery("cards");

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
          Мои карты
        </Typography>
        {cards && cards.length ? (
          <Grid container columns={3} spacing={3} gridAutoColumns={"1fr"}>
            <Grid item xs={2} sm={2}>
              <Grid
                container
                columns={2}
                columnSpacing={5}
                rowSpacing={1.5}
                mb={2}
              >
                {cards.map((card) => (
                  <Grid item xs={2} sm={2} md={2}>
                    <StyledCardButton fullWidth>
                      <Box>
                        {card.maskedPan[0] == "4" ? (
                          <Image src="/visa.png" width={42} height={14} />
                        ) : (
                          <Image
                            src="/masterCard.png"
                            width={42}
                            height={30}
                          />
                        )}
                      </Box>
                      <Stack>
                        <StyledText >
                          Visa {card.maskedPan}
                        </StyledText>
                      </Stack>
                    </StyledCardButton>
                  </Grid>
                ))}
              </Grid>
              <Grid container columns={2} columnSpacing={5}>
                <Grid item xs={2} sm={1}>
                  <StyledContainedButton
                    fullWidth
                    onClick={handleOpen}
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Добавить карту
                  </StyledContainedButton>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "20px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        p: 4,
                        transform: "translate(-50%, -50%)",
                        maxWidth: "460px",
                        minWidth: "300px",
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            textAlign: "left",
                            mb: 3,
                          }}
                        >
                          Добавить карту
                        </Typography>
                        <Stack spacing={1} mb={2}>
                          <StyledCardInput placeholder="Номер карты" />
                          <StyledCardInput placeholder="Имя на карте" />
                          <Stack
                            direction={{
                              xs: "column",
                              sm: "row",
                            }}
                            spacing={1}
                          >
                            <StyledCardInput placeholder="ММ/ГГ" />
                            <StyledCardInput placeholder="CVC" />
                          </Stack>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          mb={2}
                        >
                          <StyledCardSwitch />
                          <Typography
                            sx={{
                              fontSize: "12px",
                            }}
                          >
                            Основной
                          </Typography>
                        </Stack>
                        <StyledContainedButton
                          sx={{
                            textTransform: "capitalize",
                          }}
                        >
                          Добавить карту
                        </StyledContainedButton>
                      </Stack>
                    </Box>
                  </Modal>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (isLoading ?
          <Skeleton animation="wave" height="10%" />
          :
          (
            <Grid
              container
              sx={{
                height: "100%",
                display: "flex",
                marginTop: "-48px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Hidden xsDown>
                <Stack alignItems={"center"}>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      marginBottom: ".6rem",
                    }}
                  >
                    У вас нет добавленных карт
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "300",
                      fontSize: "14px",
                      textAlign: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    Добавьте карту, чтобы свободно покупать все товары в нашем
                    приложении.
                  </Typography>
                  <StyledContainedButton
                    onClick={handleOpen}
                    sx={{ textTransform: "capitalize" }}
                  >
                    Добавить карту
                  </StyledContainedButton>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "20px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        p: 4,
                        transform: "translate(-50%, -50%)",
                        maxWidth: "460px",
                        minWidth: "300px",
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            textAlign: "left",
                            mb: 3,
                          }}
                        >
                          Добавить карту
                        </Typography>
                        <Stack spacing={1} mb={2}>
                          <StyledCardInput placeholder="Номер карты" />
                          <StyledCardInput placeholder="Имя на карте" />
                          <Stack
                            direction={{
                              xs: "column",
                              sm: "row",
                            }}
                            spacing={1}
                          >
                            <StyledCardInput placeholder="ММ/ГГ" />
                            <StyledCardInput placeholder="CVC" />
                          </Stack>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          mb={2}
                        >
                          <StyledCardSwitch />
                          <Typography
                            sx={{
                              fontSize: "12px",
                            }}
                          >
                            Основной
                          </Typography>
                        </Stack>
                        <StyledContainedButton
                          sx={{
                            textTransform: "capitalize",
                          }}
                        >
                          Добавить карту
                        </StyledContainedButton>
                      </Stack>
                    </Box>
                  </Modal>
                </Stack>
              </Hidden>
            </Grid>)
        )}
      </Paper>
    </ProfileLayout>
  );
};

export default CardPage;
