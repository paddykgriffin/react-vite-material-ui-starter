import Layout from '../../components/layout/Layout';
import { Box, Container, Typography } from '@mui/material';
import { Hero, Background, Content, Title, SubTitle, ScrollIcon } from '@/components/common/Hero/Hero';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Hero>
        <Background type="img" src="https://picsum.photos/id/1/1920/600" srcMobile="/images/hero-mobile.png" />
        <Content className="items-center text-center">
          <Title className="leading-18 m-5  text-white">Main Tagline</Title>
          <SubTitle className="m-5 text-white max-w-[900px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae laborum eum minima itaque
            praesentium.
          </SubTitle>
        </Content>
        <ScrollIcon align="center" />
      </Hero>
      <Box component={'section'} sx={{ py: 10 }}>
        <Container maxWidth="xl">
          <Typography variant="h1">Heading h1</Typography>
          <Typography variant="h2">Heading h2</Typography>
          <Typography variant="h3">Heading h3</Typography>
          <Typography variant="h4">Heading h4</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sed iusto exercitationem impedit saepe fugit
            error quaerat incidunt consequatur? Vero, id aliquam. Dolores consequuntur eligendi inventore quidem itaque
            corrupti perspiciatis?
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
