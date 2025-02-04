import HeaderNav from '../navigation/HeaderNav';
import siteConfig from '../../site-config';
import Container from './Container';

const Header = () => {
  return (
    <header>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontWeight: 700 }}> {siteConfig.siteName}</div>
        <div>
          <HeaderNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
