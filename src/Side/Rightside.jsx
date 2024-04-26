import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../src/assets/qZone1.png'
import qZone2 from '../../src/assets/qZone2.png'
import qZone3 from '../../src/assets/qZone3.png'
const Rightside = () => {
    return (
        <div className="">
            
            <div>     
                 <h1 className="font-bold">LogIn With</h1>
                <div className="flex gap-4  items-center border p-4 mb-4 rounded-r-2xl">
                  <FaFacebook className="text-3xl"></FaFacebook>
                  <span className="text-3xl">Facebook</span>
                </div>
                <div className="flex gap-4  items-center border p-4 mb-4">
                <FaInstagram className="text-3xl"></FaInstagram>
                  <span className="text-3xl">Instagramk</span>
                </div>
                <div className="flex gap-4  items-center border p-4">
                  <FaTwitter className="text-3xl"></FaTwitter>
                  <span className="text-3xl">Twiter</span>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-2xl">Q Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default Rightside;