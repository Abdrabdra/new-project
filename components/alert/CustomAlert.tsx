import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { alertClose } from '../../store/alert/alert.action';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomAlert() {
  const dispatch = useDispatch();
  const { isAlert, severity, message } = useTypedSelector(state => state.alert);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      dispatch(alertClose());
      return;
    }

    dispatch(alertClose());
  };

  return (
    <Snackbar open={isAlert} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
