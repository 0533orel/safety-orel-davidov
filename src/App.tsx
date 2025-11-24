import './App.css'
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import SafetyForm from "./components/safetyForm/SafetyForm.tsx";

function App() {

  return (
    <div className="wrapper">
        <Header/>
        <div className='content'>
            <SafetyForm/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
