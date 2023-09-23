import Bannar from "../../bannar/Bannar";
import Category from "../catagory/Category";
import Featured from "../featured/Featured";

const Home = () => {
    return (
        <div className="space-y-3">
            
            <Bannar></Bannar>
            <Category></Category>
            <Featured></Featured>
            
        </div>
    );
};

export default Home;