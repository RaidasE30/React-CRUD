import React from 'react';
import {
  MenuList,
  MenuItem,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  type AccordionProps,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavbarMobileLink from './navbar-mobile-link';
import LinkData from './link-data';

type NavbarMobileLinksAccordionProps = {
  title: string,
  linksData: LinkData[],
  closeMenu: VoidFunction,
  expanded: boolean,
  onChange: AccordionProps['onChange'],
  hasActiveLink: boolean
};

const NavbarMobileLinksAccordion: React.FC<NavbarMobileLinksAccordionProps> = ({
  title,
  linksData,
  closeMenu,
  expanded,
  onChange,
  hasActiveLink,
}) => (
  <Accordion expanded={expanded} onChange={onChange} disableGutters>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={hasActiveLink ? 'primary' : 'inherit'}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <MenuList sx={{ p: 0 }}>
        {linksData.map(({ link, text }) => (
          <MenuItem key={link} onClick={closeMenu} sx={{ p: 0 }}>
            <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
          </MenuItem>
        ))}
      </MenuList>
    </AccordionDetails>
  </Accordion>
);

export default NavbarMobileLinksAccordion;
