import { AppRoutes } from '@/routes/AppRoutes';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const allRoutes = useRoutes([...AppRoutes()]);
  return allRoutes;
};

export default App;
