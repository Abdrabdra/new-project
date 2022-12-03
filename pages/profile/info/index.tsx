import { Paper } from "@mui/material"
import { useDispatch } from "react-redux"
import ProfileLayout from "../../../components/layouts/ProfileLayout"
import { StyledText, StyledTitle } from "../../../components/styled-components/StyledText"
import { refresh } from "../../../store/auth/auth.action"

const InfoPage = () => {
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
        <StyledTitle mb='16px'>
          О нас
        </StyledTitle>
        <StyledText>
          ADU 24 – онлайн-гипермаркет в Казахстане, где индивидуальные предприниматели и продают товары и услуги.
          На площадке маркетплейса ADU 24 предприниматели могут размещать свои товары и услуги.
          <br /><br />
          Покупатели могут найти и заказать нужный им товар: от одежды до товаров для дома.
          <br /><br />
          Одна их характерных нашего интернет-гипермаркета – это то, что каждый покупатель может оставить свой отзыв о приобретенном товаре и оценить его. Эта система помогает отобрать товары хорошего качества, которые заслуживают быть в топе самых лучших и востребованных позиций.
          <br /><br />
          Наша задача – помочь предпринимателям и покупателям товаров найти друг-друга. Мы стараемся сделать покупку удобной и доступной с любой точки страны.
        </StyledText>
      </Paper>
    </ProfileLayout>
  )
}

export default InfoPage