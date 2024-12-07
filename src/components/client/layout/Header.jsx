import { Link } from "react-router-dom";
import logoTravelokiWhite from "../../../assets/logoTravelokiWhite.png";
import icVN from "../../../assets/iconVN.png";
import icPercent from "../../../assets/iconPercent.png";
import backgroundImage from "../../../assets/introPic.png";

const Header2 = () => {

    return (
        <header
            className="mx-auto text-white py-2 border-b border-gray-200"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container max-w-screen-xl mx-auto flex justify-between items-center">
                <Link to="/">
                    <div className="flex items-center">
                        <img
                            src={logoTravelokiWhite}
                            alt="Traveloki Logo"
                            className="h-8"
                        />
                    </div>
                </Link>
                <div className="flex items-center">
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="#"
                            className="hover:text-gray-300 flex items-center space-x-2"
                        >
                            <img src={icVN} alt="Vietnam Flag" />
                            <span>VI | VND</span>
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300 flex items-center space-x-2"
                        >
                            <img src={icPercent} alt="icon Percent" />
                            <span>Khuyến mãi</span>
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300  flex items-center mr-10"
                        >
                            Hỗ trợ
                        </a>
                        <a href="#" className="hover:text-gray-300  flex items-center">
                            Hợp tác với chúng tôi
                        </a>
                        <a href="/user/my-booking" className="hover:text-gray-300  flex items-center">
                            Đặt chỗ của tôi
                        </a>
                        {/*{user || partner ? (<ShowProfile user={user || partner} />) : (<DirectToAuthPage />)}*/}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header2
