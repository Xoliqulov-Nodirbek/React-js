import Header from "./components/Header/header";
import ParrotsBody from "./components/ParrotsFilter/body";
import ParrotsList from "./components/ParrotsList/list";

// ------> Bootstrap.min.css
import "./assets/css/bootstrap.min.css";

function App() {
    return (
            <div class="container my-5">
                <Header />  
                <div class="row mt-5">
                    <ParrotsBody />
                    <ParrotsList / >
                </div>
            </div>
        );
    }
    
export default App;
    