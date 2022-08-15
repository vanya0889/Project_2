import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/components/Home";
import {MonthStatistics} from "./pages/Home/MonthStatistics/components/MonthStatistics";
import {Header} from "./pages/shared/Header/Header";





function App() {
  return (
	<div className="App">
	  <Header/>
		<Routes>
		  <Route path={"/"} element={<Home/>}/>
		  <Route path='/month-statistics' element={<MonthStatistics/>}/>
		</Routes>
	</div>
  );
}

export default App;
