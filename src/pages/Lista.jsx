import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router";
import Card from "../components/Card";
import { useState } from "react";

const Lista = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const [lista, setLista] = useState(state);

    

    return (
        <div>
            <div className="flex justify-between items-center p-4">
                <div onClick={() => navigate("/")} className="flex gap-4 items-center font-bold">
                    <BiArrowBack /> {lista.nome}
                </div>
                <button className="h-[40px] bg-amber-500 rounded font-bold px-4">Salvar</button>
            </div>
            <div className="p-4">
                <div className="">
                    <h2 className="font-bold text-center mb-4">Produtos na lista</h2>
                    <div>
                        {
                            lista.produtos.length == 0 ? (
                                <h2 className="text-center">Nenhum produto adicionado</h2>
                            ) : (
                                <>
                                    {
                                        lista.produtos.map((produto, index) => (
                                            <Card
                                                key={index}
                                                nome={produto.nome}
                                                quantidade={produto.qtd}
                                            />
                                        ))
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
                <div>
                    R$ {
                        lista.produtos.reduce((total, produto) => total + (produto.valor * produto.qtd), 0).toFixed(2)
                    }
                </div>
            </div>
        </div>
    );
}

export default Lista;