import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import MainSection from "./components/MainSection"
function App() {

  return (
    <>
    <div className="container">
        <div className="subcontainer">
        <SideBar />
        <MainSection/>
        </div>
        <div>
        <Footer
        url = {`https://github.com/PatriNieto/react-recipe-book.git`}
        />
        </div>
    </div>
   
    
   
   
    
    </>
  )
}

export default App
