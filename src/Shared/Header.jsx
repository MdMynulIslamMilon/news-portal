import logo from '../../src/assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div className='' >
            <img className='mx-auto' src={logo}alt=""/>
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY, ")}</p>
            <div className='flex  bg-green-200 ml-24'>
                <button className='btn btn-secondary '>lets go</button>
                <Marquee className=''>
                  <p> adipisicing elit. Sunt, itaque? Praesentium, soluta asperiores </p>
                </Marquee>
            </div>
            
        </div>
    );
};

export default Header;