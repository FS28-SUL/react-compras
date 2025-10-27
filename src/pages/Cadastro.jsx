import { useRef, useState } from "react";
import { BiArrowBack, BiMinus, BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";
import Card from "../components/Card";

const Cadastro = () => {
    const navigate = useNavigate();
    const nomeRef = useRef();
    const nomeListaRef = useRef();
    const [produtos, setProdutos] = useState([]);
    const [qtd, setQtd] = useState(1);

    function adicionar() {
        if(nomeRef.current.value != ""){
            setProdutos([...produtos, { nome: nomeRef.current.value, qtd, valor: 0 }])
            nomeRef.current.value = "";
        }else{
            alert("Digite o nome do produto")
        }
        setQtd(1);
        nomeRef.current.focus();
    }

    function incrementar() {
        setQtd(qtd + 1);
    }

    function decrementar() {
        if (qtd > 1) {
            setQtd(qtd - 1);
        }
    }

    function criarLista(){
        const lista = {
            nome: nomeListaRef.current.value,
            produtos
        }

        fetch("http://localhost:3000/listas", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(lista)
        })
        .then(res => res.json())
        .then(res => {
            alert("Lista salva com sucesso!")
            navigate("/")
        })
    }

    return (
        <>
            <div className="flex justify-between items-center p-4 mb-4">
                <div onClick={() => navigate("/")} className="flex gap-4 items-center font-bold">
                    <BiArrowBack /> Voltar
                </div>
                <button onClick={criarLista} className="h-[40px] bg-amber-500 rounded font-bold px-4">Salvar</button>
            </div>
            <div className="p-4">
                <div className="p-3 shadow">
                    <input
                        ref={nomeListaRef}
                        type="text"
                        placeholder="Digite o nome da lista"
                        className="w-full h-[40px] mb-3 pl-3 outline-amber-500"
                    />
                    <input
                        ref={nomeRef}
                        type="text"
                        placeholder="Digite o nome do produto"
                        className="w-full h-[40px] mb-3 pl-3 outline-amber-500"
                        onKeyUp={(e) => {
                            if(e.keyCode == 13){
                                adicionar()
                            }
                        }}
                    />
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-3 items-center">
                            <BiMinus onClick={decrementar} />
                            {qtd}
                            <BiPlus onClick={incrementar} />
                        </div>
                        <button onClick={adicionar} className="h-[40px] bg-amber-500 rounded flex-1 font-bold">Adicionar</button>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="font-bold text-center mb-4">Produtos na lista</h2>
                    <div>
                        {
                            produtos.length == 0 ? (
                                <h2 className="text-center">Nenhum produto adicionado</h2>
                            ) : (
                                <>
                                    {
                                        produtos.map((produto, index) => (
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
            </div>
        </>
    );
}

export default Cadastro;