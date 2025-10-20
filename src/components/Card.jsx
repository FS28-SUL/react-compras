import { BiMinus, BiPlus } from "react-icons/bi";

const Card = ({ checkOn, nome }) => {
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
                        <BiMinus />
                        <input type="number" placeholder="0" className="w-[80px] text-center" />
                        <BiPlus />
                    </div>
                    <input type="number" placeholder="0.00" />
                </div>
            </div>
        </>
    );
}

export default Card;