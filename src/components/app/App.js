import Header from "../header/Header";
import LoginPage from "../loginPage/LoginPage";
import HomePage from "../homePage/HomePage";
import Register from "../register/Register";
import ProductList from "../productList/ProductList";
import ProductPage from "../productPage/ProductPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  let { id } = useParams();
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/productPage/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
