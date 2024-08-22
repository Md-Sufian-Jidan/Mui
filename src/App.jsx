import { useState } from 'react'
import './App.css'
import MuiAlert from './Components/MuiAlert/MuiAlert';
import MuiAlertAnimate from './Components/MuiAlert/MuiAlertAnimate';
// import MuiTypography from './Components/MuiTypography'
// import MuiButton from './Components/MuiButton'
// import MuiAccordion from './Components/MuiAccordion/MuiAccordion'

function App() {
  const [count, setCount] = useState(0);
  // use can use &apos; to use a (') apos tope  in a website 

  return (
    <>
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiAccordion /> */}
      {/* <MuiAlert /> */}
      <MuiAlertAnimate />
    </>
  )
}

export default App
