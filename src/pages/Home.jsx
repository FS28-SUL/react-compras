import { BiPlus } from "react-icons/bi";
import Header from "../components/Header";
import { useNavigate } from "react-router";

const Home = () => {

    const navigate = useNavigate();
    return (
        <>
            <Header />
            <h1>Home</h1>

            <button onClick={() => navigate("/cadastro")} className="w-[50px] h-[50px] bg-amber-500 rounded-full flex justify-center items-center fixed bottom-4 right-4 text-2xl">
                <BiPlus />
            </button>
        </>
    );
}

export default Home;