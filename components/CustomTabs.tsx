import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        variant="scrollable"
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'none'
    },
    '& .MuiTabs-indicatorSpan': {
        display: 'none'
    },
});

interface StyledTabProps {
    label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
    color: '#ABABAB',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    width: '180px',
    '&.Mui-selected': {
        color: '#fff',
        backgroundColor: '#8A3FFC',
        border: 'none'
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));

const variants = ['Распродажа', 'Популярное', 'Новые товары', 'Скидки', 'Бестселлеры', 'Новые товары', 'Скидки', 'Распродажа', 'Популярное', 'Новые товары', 'Скидки']

export default function CustomTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
        >
            {variants.map((variant, idx) => (
                <StyledTab label={variant} key={idx} />
            ))}
        </StyledTabs>

    );
}