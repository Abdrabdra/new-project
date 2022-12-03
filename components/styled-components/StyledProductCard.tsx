import { Card, CardProps, Typography, TypographyProps } from '@mui/material';
import Menu, { MenuProps } from '@mui/material/Menu';
import { alpha, styled } from '@mui/material/styles';

export const StyledProductCard = styled((props: CardProps) => (
    <Card
        variant="outlined"
        {...props}
    />
))(({ theme }) => ({
    borderRadius: '20px',
    backgroundColor: '#FFFFFF',
    marginTop: theme.spacing(1),
    width: '230px',
    height: '100%',
    paddingTop: '1rem',
    borderColor: '#F2F4F5',
    marginInline: 'auto',
    [theme.breakpoints.down('md')]: {
        width: '210px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '170px',
    },
}));