import Layout from '../components/layout/Layout';
import { Typography, Container, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Layout pageTitle="Not Found">
      <Box component={'section'} sx={{ py: 10 }}>
        <Container maxWidth="xl">
          <Typography variant="h1">Error Page Not Found</Typography>
        </Container>
      </Box>
    </Layout>
  );
};

export default NotFound;
