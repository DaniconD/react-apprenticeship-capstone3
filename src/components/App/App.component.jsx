import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '../../providers/Theme/Theme.provider';
import SearchProvider from '../../providers/Search/Search.provider';
import Content from '../Content';

function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
