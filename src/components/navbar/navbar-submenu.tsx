import { Box } from '@mui/material';
import Link from 'next/link';

export interface NavbarSubmenuItem {
  title: string;
  link: string;
}

interface Props {
  submenus: NavbarSubmenuItem[];
}
export default function NavbarSubmenu({ submenus }: Props) {
  return (<Box gap={2} display="flex" paddingX={2} paddingY={1}>
    { submenus.map(menu => {
      return <Link key={menu.link} href={menu.link}>{ menu.title }</Link>
    })}
  </Box>)
}
