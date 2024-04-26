import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import Leftside from "../Side/Leftside";
import Middileside from "../Side/Middileside";
import Rightside from "../Side/Rightside";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 lg:grid-cols-3">
                <div className="">
                    <Leftside></Leftside>
                </div>
                <div className="">
                    <Middileside></Middileside>
                </div>
                <div className="">
                    <Rightside></Rightside>
                </div>
             </div>
        </div>
      
    );
};

export default Home;