import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '../../providers/Theme/Theme.provider';
import SearchProvider from '../../providers/Search/Search.provider';
import Auth0ProviderWithHistory from '../../providers/Auth0/Auth0Provider';
import Content from '../Content';

function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            <Content />
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
