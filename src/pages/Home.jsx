import { BiCart, BiPlus, BiShoppingBag } from "react-icons/bi";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { BsBagX } from "react-icons/bs";

const Home = () => {

    const navigate = useNavigate();
    const [listas, setListas] = useState([]);

    function buscarListas() {
        fetch("http://localhost:3000/listas")
            .then(res => res.json())
            .then(res => {
                setListas(res);
            })
    }

    useEffect(() => {
        buscarListas();
    }, [])

    return (
        <>
            <Header />
            <div className="p-4">
                {
                    listas.length == 0 ? (
                        <div className="h-[calc(100dvh_-_62px)] flex justify-center items-center flex-col gap-4">
                            <BsBagX size={80} />
                            <h2>Crie sua primeira lista</h2>
                        </div>
                    ) : (
                        <div>
                            <h1>Suas listas</h1>
                            {
                                listas.map(lista => (
                                    <Link
                                        key={lista.id}
                                        to={'/lista'}
                                        state={lista}
                                    >
                                        <div className="p-4 border border-black/20 rounded text-lg font-bold mb-4">
                                            {lista.nome}
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    )
                }
            </div>

            <button onClick={() => navigate("/cadastro")} className="w-[50px] h-[50px] bg-amber-500 rounded-full flex justify-center items-center fixed bottom-4 right-4 text-2xl">
                <BiPlus />
            </button>
        </>
    );
}

export default Home;