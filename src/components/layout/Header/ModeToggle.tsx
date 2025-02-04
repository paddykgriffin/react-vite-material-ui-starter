import siteConfig from '@/site-config';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import { useAppDispatch } from '@/store/hooks';
import { colorSchemes, setThemeMode } from '@/store/features/themeSlice';

import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

const ModeToggle = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const dispatch = useAppDispatch();

  return siteConfig.darkMode ? (
    <Tooltip title={isDarkMode ? 'Turn on Light' : 'Turn on Dark'} arrow placement="bottom">
      <IconButton
        disableTouchRipple
        onClick={() => dispatch(setThemeMode(isDarkMode ? colorSchemes.light : colorSchemes.dark))}
        sx={{
          color: theme => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.800'),
          background: 'white',
          borderColor: 'solid 1px blue',
          '&:hover': {
            background: 'rgba(255,255,255,.5)',
          },
        }}
      >
        {isDarkMode ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
      </IconButton>
    </Tooltip>
  ) : null;
};

export default ModeToggle;
