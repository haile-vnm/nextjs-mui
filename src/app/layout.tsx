import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { ReactElement } from 'react';
import NavbarMenu from '@/components/navbar/navbar-menu';
import { Box } from '@mui/material';
import { ROOT_LAYOUT_PADDING_X } from '../utils/layout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

 export default function RootLayout(props: { children: ReactElement }) {
   const { children } = props;
   return (
     <html lang="en">
       <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <div>
                <NavbarMenu></NavbarMenu>
              </div>
              <Box sx={{ width: '100%', padding: { xs: `32px ${ROOT_LAYOUT_PADDING_X.xs}px`, md: `32px ${ROOT_LAYOUT_PADDING_X.md}px` } }}>
                {children}
              </Box>
            </ThemeProvider>
          </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
