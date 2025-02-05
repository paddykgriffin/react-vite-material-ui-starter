import useCurrentTheme from '@/hooks/useCurrentTheme';
import Logo from '@/assets/images/Logo.svg';
import LogoDark from '@/assets/images/LogoDark.svg';
import { NavLink } from 'react-router-dom';

export default function SiteLogo() {
  const { currentTheme } = useCurrentTheme();
  const LogoToRender = currentTheme === 'dark' ? LogoDark : Logo;

  return (
    <NavLink to="/">
      <img src={LogoToRender} />
    </NavLink>
  );
}
