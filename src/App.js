import './App.css';
import Content from './Component/Content';
import Footer from './Component/Footer';
import Header from './Component/Header';
import SideNav from './Component/SideNav';
import './Asserts/Homepage.css'
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <SideNav />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
