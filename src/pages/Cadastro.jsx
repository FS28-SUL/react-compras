import { useRef, useState } from "react";
import { BiArrowBack, BiMinus, BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";

const Cadastro = () => {
    const navigate = useNavigate();
    const nomeRef = useRef();
    const [produtos, setProdutos] = useState([]);
    const [qtd, setQtd] = useState(1);

    function adicionar(){
        setProdutos([...produtos, { nome: nomeRef.current.value, qtd, valor: 0 }])
    }

    console.log(produtos);

    return (
        <>
            <div onClick={() => navigate("/")} className="p-4 flex gap-4 items-center mb-4 font-bold">
                <BiArrowBack /> Voltar
            </div>
            <div className="p-4">
                <div className="p-3 shadow">
                    <input
                        ref={nomeRef}
                        type="text"
                        placeholder="Digite o nome do produto"
                        className="w-full h-[40px] mb-3 pl-3 outline-amber-500"
                    />
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-3 items-center">
                            <BiMinus />
                            {qtd}
                            <BiPlus />
                        </div>
                        <button onClick={adicionar} className="h-[40px] bg-amber-500 rounded flex-1 font-bold">Adicionar</button>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="font-bold">Produtos na lista</h2>
                    {/* Lista de produtos */}
                </div>
            </div>
        </>
    );
}

export default Cadastro;