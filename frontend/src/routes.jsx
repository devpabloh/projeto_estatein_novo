/* Após instalar o pacote react-router-dom, podemos importar o mesmo */
import {BrowserRouter,Routes, Route} from "react-router-dom"

/* Importando as páginas do projeto */
import Home from "./pages/Home/Home"
import Propriedades from "./pages/Propriedades/Propriedades"
import Servicos from "./pages/Servicos/Servicos"
import Sobre from "./pages/Sobre/Sobre"

const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/propriedades" element={<Propriedades/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes