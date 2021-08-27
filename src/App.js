import ContentApp from './Content/ContentApp'
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './Theme/Theme';
import ThemeContext from './Theme/ThemeContext';
import ThemeHandler from './Theme/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <ThemeHandler>
      <CssBaseline />
      <ContentApp />
    </ThemeHandler>
  );
}


export default App;
