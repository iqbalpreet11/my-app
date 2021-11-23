import react from "react";
import { RiMenuAddLine } from "react-icons/Ri";

function Navbar() {
    return (  
        <div className="h-1 w-full bg-gray-800 flex justify-between " >
            <RiMenuAddLine />    
            <a href="#" className="text-white text-sm ml-5">Home</a>
        </div>


    );
}

export default Navbar;