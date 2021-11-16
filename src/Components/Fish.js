import { Link } from "react-router-dom";
import "./Style/Fish.css";

const Fish = () => {
    return (
        <div
            className="Fish"
            style={{
                backgroundImage:
                    "url(https://media0.giphy.com/media/hu1GIoIXJ1M8yBxd2j/giphy.gif?cid=ecf05e47gfnad76tg6r1tvt2vfusb5yscc2it9jxs7szijxz&rid=giphy.gif&ct=g)"
            }}>
            <div className='FishMessage'>
                <h1>Ohh no, no raw fish!</h1>
                <h1><Link style={{ color: `white` }} to="/">go back</Link></h1>
            </div>
        </div>
    );
}

export default Fish;
