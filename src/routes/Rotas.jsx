import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Lista from "../pages/Lista";

const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/lista" element={<Lista />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rotas;