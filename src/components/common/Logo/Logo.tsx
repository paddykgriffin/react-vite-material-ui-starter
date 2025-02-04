import { useDarkMode } from '@/hooks/useDarkMode';
import { s3 } from '@/utils/s3';

export default function Logo() {
  const { isDarkMode } = useDarkMode();
  return <a href="/">{isDarkMode ? <img src={s3('Logo.svg')} /> : <img src={s3('Logo.svg')} />}</a>;
}
