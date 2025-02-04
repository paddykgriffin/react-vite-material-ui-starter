import FooterNav from '../navigation/FooterNav';
import siteConfig from '../../site-config';
import Container from './Container';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          &copy; {year} Copyright - {siteConfig.siteName}
        </div>
        <FooterNav />
      </Container>
    </footer>
  );
};

export default Footer;
