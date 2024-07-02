
import './App.css'
import UncontrolledData from './components/UncontrolledData'
import UncontrolledLogin from './components/UncontrolledLogin'

function App() {

  return (
    <>
      {/* <UncontrolledLogin /> */}
      <UncontrolledData />
      //! La diferencia que observo entre uno y otro es que FromData requiere que los inputs tengan una etiqueta name='loquesea'
    </>
  )
}

export default App
