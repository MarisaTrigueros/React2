import './App.css'
import Colors from './components/Colors';


const colorList = [
  { id: 1, name: 'Verde' },
  { id: 2, name: 'Negro' },
  { id: 3, name: 'Burdeos' }
];

function App() {

  return (
    <>
      <Colors colors={colorList}/>
    </>
  )
}

export default App
