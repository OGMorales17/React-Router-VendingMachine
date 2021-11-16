import { Link } from "react-router-dom";
import sodaImg from "./Png-Gif/Can-Soda.png";
import "./Style/Soda.css";

const Soda = () => {
    return (
        <div className="Soda">
            <img src={sodaImg} alt="coca cola can" />
            <div className="SodaMessage">

                <h1>OMG SUGARRRRR</h1>
                <h1><Link style={{ color: `white` }} to="/">go back</Link></h1>
            </div>

            <img src={sodaImg} alt="coca cola can" />
        </div>
    );
}

export default Soda;