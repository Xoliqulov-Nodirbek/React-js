import Header from "./components/Header/header";
import ParrotsFilter from "./components/ParrotsFilter/filter";
import ParrotsSelect from "./components/ParrotsSelect/parrotsSelect";
import ParrotsBody from "./components/ParrotsBody/parrotsBody";

// ------> Bootstrap.min.css
import "./assets/css/bootstrap.min.css";

function App() {
    return (
            <div className="container my-5">
                <Header />  
                <div className="row mt-5">
                    <ParrotsFilter />
                    <ParrotsBody />
                    <ParrotsSelect />
                </div>
            </div>
        );
    }
    
export default App;
    