import { BiMenu } from "react-icons/bi";

const Header = () => {
    return (
        <>
            <header className="bg-amber-500 p-4">
                <button className="text-2xl">
                    <BiMenu />
                </button>
            </header>
        </>
    );
}

export default Header;