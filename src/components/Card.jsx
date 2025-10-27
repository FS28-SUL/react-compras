import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const Card = ({ checkOn, nome, quantidade }) => {
    const [qtd, setQtd] = useState(quantidade);
    function incrementar() {
        setQtd(qtd + 1);
    }

    function decrementar() {
        if (qtd > 1) {
            setQtd(qtd - 1);
        }
    }
    return (
        <>
            <div className="p-3 shadow">
                <div className="flex gap-3 items-center">
                    {
                        checkOn && (
                            <input
                                type="checkbox"
                                className="outline-amber-500"
                            />
                        )
                    }
                    {nome}
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex gap-3 items-center">
                        <BiMinus onClick={decrementar} />
                        {qtd}
                        <BiPlus onClick={incrementar} />
                    </div>
                    <input type="number" placeholder="0.00" />
                </div>
            </div>
        </>
    );
}

export default Card;