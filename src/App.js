
import './App.css';
import ClickComponent from './components/ClickComponent';
import HoverComponent from './components/HoverComponent';
import Student from './hocLearn/Student';
import withNotes from './hocLearn/withNotes';

function App() {
  return (
    <div className="App">
      {/* <ClickComponent/><br/><br/>
      <HoverComponent/> */}
      <Student/>
      
    </div>
  );
}

export default App;
