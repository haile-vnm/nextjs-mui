'use client';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import NavbarSubmenu, { NavbarSubmenuItem } from './navbar-submenu';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface StyledTabProps {
  label: string;
  value: string;
}

const NavbarTabs = styled(Tabs)(({ theme}) => {
  return {
    minHeight: 'unset',
    '& .MuiTabs-indicator': {
      backgroundColor: theme.palette.primary.main,
    },
  }
});

const NavbarTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'uppercase',
    minWidth: 0,
    padding: '.5rem 1rem',
    minHeight: 'unset',
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: '#000000',
    '&.Mui-selected': {
      color: '#000000',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

const TAB_SUBMENUS: Record<string, NavbarSubmenuItem[]> = {
  '/receipts': [
    { title: 'Categories', link: '/receipts/categories' },
    { title: 'Collections', link: '/receipts/collections' },
    { title: 'Resources', link: '/receipts/resources' }
  ],
  '/shop': [
    { title: 'Item shop', link: 'shop' }
  ],
  '/learn': [
    { title: 'Item learn', link: 'learn' }
  ],
  '/about': [
    { title: 'Item about', link: 'about' }
  ],
  '/blog': [
    { title: 'Item blog', link: 'blog' }
  ],
}
export default function NavbarMenu() {
  const [tab, setTab] = useState('/shop');
  const [submenus, setSubmenus] = useState<NavbarSubmenuItem[]>([]);
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    const tab = path.match(/\/[^\/]+/)?.[0] || '';
    changeTab(tab);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newTab: string) => {
    router.push(newTab);
    changeTab(newTab);
  };

  const changeTab = (newTab: string) => {
    setTab(newTab);
    setSubmenus(TAB_SUBMENUS[newTab] || [])
  }
  if (!submenus.length) {
    return;
  }

  return (<Box position={'relative'}>
    <Box sx={{ width: '100%' }} paddingX={20} paddingY={1}>
      <NavbarTabs
        value={tab}
        onChange={handleChange}
      >
        <NavbarTab value="/shop" label="Shop"/>
        <NavbarTab value="/receipts" label="Receipts" />
        <NavbarTab value="/learn" label="Learn" />
        <NavbarTab value="/about" label="About" />
        <NavbarTab value="/blog" label="Blog" />
      </NavbarTabs>
    </Box>
    { submenus.length
        ? (<Box bgcolor={'#f8f5f0'} paddingLeft={20} left={0}>
            <NavbarSubmenu submenus={submenus}></NavbarSubmenu>
          </Box>)
        : null
    }
    <Box position='absolute' top={'50%'} left={100} sx={{ transform: 'translateY(-50%)'}}>
      <Link href={'/'}>
        <Image src='/logo.svg' alt='logo' width={50} height={50}></Image>
      </Link>
    </Box>
  </Box>);
}
