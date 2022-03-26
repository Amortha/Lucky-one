import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Question from './components/Question/Question';
import Heder from './components/Heder/Heder';

function App() {
  return (
    <div className='main-body'>
    <Heder></Heder>
    <Shop></Shop>
    <Question></Question>
    </div>
  );
}

export default App;
