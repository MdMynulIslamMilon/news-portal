import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import Leftside from "../Side/Leftside";
import Middileside from "../Side/Middileside";
import Rightside from "../Side/Rightside";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 lg:grid-cols-3 ">
                <div className="">
                    <Leftside></Leftside>
                </div>
                <div className="">
                {news.map(aNews =><Middileside
                key={aNews._id}
                news = {aNews}
                >

                </Middileside>)
                 }
                </div>
                <div className="">
                    <Rightside></Rightside>
                </div>
             </div>
        </div>
      
    );
};

export default Home;