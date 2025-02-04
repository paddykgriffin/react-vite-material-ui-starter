import FooterNav from '../navigation/FooterNav';
import siteConfig from '@/site-config';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Logo from '@/components/common/Logo/Logo';
import { orange, red } from '@mui/material/colors';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component={'footer'}
      sx={{
        py: 2,
        color: theme => theme.vars.palette.grey[100],
        bgcolor: theme => theme.vars.palette.grey[900],
      }}
    >
      <Container
        sx={{
          //   display: 'flex',
          py: 4,
          //    justifyContent: 'space-between',
        }}
      >
        <Grid container spacing={2} justifyContent={'space-between'}>
          <Grid size={3}>
            <Logo />
            <Typography variant="body2">{siteConfig.siteDesc}</Typography>
          </Grid>
          <Grid size={6}>
            <Grid container columnSpacing={2}>
              <Grid size={4} sx={{ background: red[900] }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: orange[300],
                  }}
                >
                  one
                </Typography>
              </Grid>
              <Grid size={4} sx={{ background: red[900] }}>
                two
              </Grid>
              <Grid size={4} sx={{ background: red[900] }}>
                three
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          display: 'flex',
          py: 3,
          justifyContent: 'space-between',
        }}
      >
        <div>&copy; {year} Copyright</div>
        <FooterNav />
      </Container>
    </Box>
  );
};

export default Footer;
