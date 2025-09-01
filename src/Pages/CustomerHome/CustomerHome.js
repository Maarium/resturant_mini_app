import BottomNav from './components/BottomNav/BottomNav';
import Buttons from './components/Buttons/Buttons';
import Cards from './components/Cards/Cards';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
   <div className='cust-home'>
   <Navbar/>
   <SearchBar/>
   <Buttons/>
   <Cards/>
   <BottomNav/>

   </div>
  );
}

export default App;
