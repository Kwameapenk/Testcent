import {Link} from "react-router-dom";

function Home(){
    return (
        <div>
            This is the home page component
            <a href = "/contact"> Contact me </a>
            <Link to = {"/contact"}> Contact Link </Link>

        </div>
        
    );
}

export default Home;