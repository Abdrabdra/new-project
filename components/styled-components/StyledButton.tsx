import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainedButton = styled((props: ButtonProps) => (
  <Button
    // size='large'
    variant='contained'
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#8A3FFC',
  color: '#FFFFFF',
  boxShadow: 'none',
  borderRadius: '10px',
  height: '40px',
  '&:hover': {
    backgroundColor: '#8A3FFC',
    color: '#FFFFFF',
  },
  [theme.breakpoints.down('sm')]: {
    // position: "fixed",
    // bottom: '10px',
    width: "100%",
    fontSize: '14px'
  }
}));

export const StyledOutlinedButton = styled((props: ButtonProps) => (
  <Button
    size='large'
    variant='outlined'
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#8A3FFC',
  borderColor: '#8A3FFC',
  '&:hover': {
    backgroundColor: '#FFFFFF',
    color: '#8A3FFC',
    borderColor: '#8A3FFC'
  },
}));

export const StyledTextButton = styled((props: ButtonProps) => (
  <Button
    size='large'
    variant='text'
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#999999',
  '&:hover': {
    backgroundColor: '#FFFFFF',
    color: '#999999',
  },
  '&:focus': {
    backgroundColor: '#FFFFFF',
    color: '#999999',
  },
}));

export const StyledProfileButton = styled((props: ButtonProps) => (
  <Button
    size="large"
    fullWidth
    {...props}
  />
))(({ theme }) => ({
  padding: "0.5rem",
  justifyContent: "flex-start",
  textAlign: "left",
  backgroundColor: "#F4F4F4",
  borderRadius: "10px",
  color: "#031A61",
  fontSize: "1rem",
  textTransform: "capitalize",
}));

export const StyledCardButton = styled((props: ButtonProps) => (
  <Button
    size="large"
    fullWidth
    {...props}
  />
))(({ theme }) => ({
  padding: "1rem",
  justifyContent: "flex-start",
  textAlign: "left",
  backgroundColor: "#F4F4F4",
  borderRadius: "10px",
  color: "#002F34",
  fontSize: "1rem",
  textTransform: "capitalize",
}));

export const StyledOrderStatusButton = styled((props: ButtonProps) => (
  <Button
    size="large"
    fullWidth
    {...props}
  />
))(({ theme }) => ({
  padding: "1rem",
  justifyContent: "flex-start",
  textAlign: "left",
  backgroundColor: "#F4F4F4",
  borderRadius: "10px",
  color: "#002F34",
  fontSize: "1rem",
  textTransform: "capitalize",
}));


export const StyledContainedAuthButton = styled((props: ButtonProps) => (
  <Button
    size='large'
    variant='contained'
    fullWidth
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#8A3FFC',
  color: '#FFFFFF',
  boxShadow: 'none',
  borderRadius: '10px',
  //
  height: '55px',
  fontSize: '18px',
  fontWeight: 600,
  marginTop: '16px',
  marginBottom: '8px',
  //
  '&:hover': {
    backgroundColor: '#8A3FFC',
    color: '#FFFFFF',
    // boxShadow: 'none',
  },
}));

export const StyledTextAuthButton = styled((props: ButtonProps) => (
  <Button
    size='large'
    variant='text'
    fullWidth
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#999999',
  '&:hover': {
    backgroundColor: '#FFFFFF',
    color: '#999999',
  },
  '&:focus': {
    backgroundColor: '#FFFFFF',
    color: '#999999',
  },
  borderRadius: '10px',
  height: '55px',
  fontSize: '18px',
  fontWeight: 600,
  marginTop: '16px',
  marginBottom: '8px',
}));