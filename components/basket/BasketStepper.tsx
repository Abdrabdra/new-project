import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import CartProductsPaper from './BasketProductsPaper';

const steps = ['Подтверждение товара', 'Оформление заказа', 'Оплата заказа'];
// const stepComponents = [<CartProductsPaper />, <CartAddressPaper />, <CartPaymentPaper />]

export const BasketStepper: React.FC = ({ children }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const router = useRouter();
  const { pathname, query } = router;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  React.useEffect(() => {
    if (query.orderId) {
      setActiveStep(2)
    }
  }, [query])

  return (
    <Box sx={{ mx: 'auto' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Оплата прошла успешно!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Link href="/">
              <Button>Продолжить покупки</Button>
            </Link>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {[
            <CartProductsPaper handleNext={handleNext} />,
            // <CartAddressPaper handleNext={handleNext} />,
            // <CartPaymentPaper />
          ][activeStep]}
          {/* </Hidden>
          {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Назад
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Завершить' : 'Дальше'}
            </Button>
          </Box> */}
        </React.Fragment>
      )}
    </Box>
  );
}