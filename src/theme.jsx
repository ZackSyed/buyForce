import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63a3ff',
      main: '#1775d1',
      dark: '#004a9f',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#c1d5e0',
      main: '#90a4ae',
      dark: '#62757f',
      contrastText: '#f9f9f9',
    },
    background: {
      default: '#fdfcfb',
    }
  },
  typography: {
     useNextVariants: true,
  }
});