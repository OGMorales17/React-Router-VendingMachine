import { Link } from "react-router-dom";
import vendingMachineImg from './Png-Gif/Vending-Machine.jpg'
import './Style/VendingMachine.css';


const VendingMachine = () => {
    return (
        <div className="VendingMachine" style={{ backgroundImage: `url(${vendingMachineImg})` }}>
            <div className='Message'>
                <h1>Hello I'm a Vending Machine, what will you like to eat?</h1>
                <h1><Link to="/soda">soda</Link></h1>
                <h1><Link to="/snikers">snikers</Link></h1>
                <h1><Link to="/fish">fish</Link></h1>
            </div>

        </div>
    );
}



export default VendingMachine
