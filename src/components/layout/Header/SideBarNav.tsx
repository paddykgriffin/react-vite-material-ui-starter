import { Drawer, Button, Box } from '@mui/material';
import { useState } from 'react';
import HeaderNav from '@/components/navigation/HeaderNav';
import { Close, Menu, Home } from '@mui/icons-material';

type Anchor = 'right';

const SideBarNav = () => {
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

  //   const styles = {

  //   }

  return (
    <>
      <Button onClick={toggleDrawer('right', true)}>
        <Menu
          sx={[
            {
              color: 'white',
              fontSize: '2rem',
            },
            theme =>
              theme.applyStyles('dark', {
                color: 'white',
              }),
          ]}
        />
      </Button>
      <Drawer open={state.right} onClose={toggleDrawer('right', false)} anchor="right">
        <Box
          sx={{
            minWidth: 300,
            '& .header-nav': {
              flexDirection: 'column',
              pt: 2,
              '& a': {
                px: 2,
                py: 1.5,
                color: theme => (theme.palette.mode === 'dark' ? 'white' : 'black'),
              },
            },
          }}
        >
          <Box
            sx={[
              {
                display: 'flex',
                justifyContent: 'space-between',
                py: 2,
                borderBottom: 'solid 1px',
                borderColor: 'black',
              },
              theme =>
                theme.applyStyles('dark', {
                  borderColor: 'white',
                }),
            ]}
          >
            <Button onClick={toggleDrawer('right', false)}>
              <Home
                sx={[
                  {
                    color: 'black',
                    fontSize: '2rem',
                  },
                  theme =>
                    theme.applyStyles('dark', {
                      color: 'white',
                    }),
                ]}
              />
            </Button>
            <Button onClick={toggleDrawer('right', false)}>
              <Close
                sx={[
                  {
                    color: 'black',
                    fontSize: '2rem',
                  },
                  theme =>
                    theme.applyStyles('dark', {
                      color: 'white',
                    }),
                ]}
              />
            </Button>
          </Box>
          <HeaderNav />
        </Box>
      </Drawer>
    </>
  );
};

export default SideBarNav;
