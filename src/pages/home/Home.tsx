import Heading from '../../components/typography/Heading';
import HeadingH2 from '../..//components/typography/HeadingH2';
import HeadingH3 from '../../components/typography/HeadingH3';
import HeadingH4 from '../../components/typography/HeadingH4';
import Paragraph from '../../components/typography/Paragraph';
import Layout from '../../components/layout/Layout';
import Container from '../../components/layout/Container';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Container>
        <Heading title="Heading h1" />
        <HeadingH2 title="Heading h2" />
        <HeadingH3 title="Heading h3" />
        <HeadingH4 title="Heading h4" />
        <Paragraph
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus qui fugit molestias nulla voluptatum repellat hic
      repellendus id quae alias minima praesentium, non provident exercitationem pariatur mollitia, ratione impedit
      tempora quibusdam reprehenderit eveniet, iste dolorem! Neque accusamus repudiandae fugiat beatae."
        />
      </Container>
    </Layout>
  );
};

export default Home;
