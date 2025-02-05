import FooterNav from '@/components/navigation/FooterNav';
import { Box, Container } from '@mui/material';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component={'footer'}
      sx={[
        {
          color: theme => theme.vars.palette.grey[800],
          backgroundColor: 'secondary.main',
        },
        theme =>
          theme.applyStyles('dark', {
            color: theme.vars.palette.grey[100],
            backgroundColor: 'secondary.main',
          }),
      ]}
    >
      <Container
        maxWidth="xl"
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
