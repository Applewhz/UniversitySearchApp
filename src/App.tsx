import './App.css';
import SearchUniversityPage from './Page/SearchUniversityPage';
import SearchResultDataProvider  from './Services/Contexts/ApiContext';

function App() {
  return (
    <SearchResultDataProvider>
      <SearchUniversityPage/>
    </SearchResultDataProvider>
  );
}

export default App;
