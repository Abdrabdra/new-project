import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  title: string | React.FC
}

const CustomAccordion: React.FC<Props> = ({ title, children }) => {
  return (
    <Accordion
      sx={{ mb: '0.25rem', boxShadow: 'none' }}
      elevation={1}
      defaultExpanded
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
        {title}
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
