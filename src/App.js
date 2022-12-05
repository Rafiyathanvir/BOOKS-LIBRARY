import Router from "./components/routercomponent/Router";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div style={{color:"gray", fontSize:40, textAlign:"center" }}>BOOKS</div>
            <br/>
            <Header />
<br/>
            <Router />

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
