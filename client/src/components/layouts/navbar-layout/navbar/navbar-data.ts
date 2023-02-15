import routes from 'navigation/routes';
import { type Breakpoint } from '@mui/material';
import LinkData from './link-data';

export const linksData: LinkData[] = [
  { link: routes.HomePage, text: 'Home' },
];

export const linksGroups = [];

export const expandBreakpoint: Breakpoint = 'sm';
