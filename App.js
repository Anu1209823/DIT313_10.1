
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Image from './components/Background/Image';
import List from './components/ui/List/List';
import Footer from './components/Footer/Footer';
import NewsLetter from './components/Subscription/NewsLetter';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Image text='Welcome!'/>
      <List title="Featured FreeLancers"/>
      <List title="Featured Customers"/>
      <NewsLetter/>
      <Footer />

     
    </div>
  );
}

export default App;
