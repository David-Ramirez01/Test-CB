import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Contacto from "./routes/Contacto";
import Navegacion from "./Componets/Navegacion";
import Inicio from "./routes/Inicio";

const App = () => {
  return (
    <Router>
        <Navegacion/>
          <Routes>
            <Route path='/Inicio' element={<Inicio/>} />
            <Route path='/Contacto' element={<Contacto/>} />
          </Routes>
    </Router>
  )
}
export default App

