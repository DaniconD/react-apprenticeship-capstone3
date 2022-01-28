import { BrowserRouter } from 'react-router-dom';
import SearchProvider from '../../providers/Search/Search.provider';
import Content from '../Content';

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
