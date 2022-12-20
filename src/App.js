import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {

  return (
    < >
    
    <Navbar title="TextUtils"  abouttext="About TextUtils"/>
    <div className="container">
    < TextForm  heading="Enter Text to analyze"/>
  </div>
  </>
  );
}

export default App;
