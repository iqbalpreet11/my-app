import react, { useEffect, useState } from "react";
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import LoginEdit from "./LoginEdit";




function Perops() {
    const [table, setTable] = useState([]);
   
    const deleteRecord=(id)=>{
                alert(id)
        axios.delete(`http://localhost:8000/posts/${id}`).then((res)=>{
        console.log(res)
               })
              // window.location.reload();     
               
    }

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:8000/posts');
            
            setTable(result.data);
        }

        GetData();
    }, []);

    

    return (
        <div className="p-5">
       <table className="table border">
           <thead className="bg-gray-50">
               <tr>
                   <th>Title</th>
                   <th>Price</th>
                   <th>Decription</th>
                   <th>Category</th>
                   <th>Rating</th>
                   
                   
               </tr>
           </thead>
           <tbody>
               {table.map((item)=>(
                   <tr >
                       <td className="border">{item.title}</td>
                       <td className="border">{item.price}</td>
                       <td className="border">{item.description}</td>
                       <td className="border">{item.category}</td>
                       <td className="border">{item.rating}</td>
                       <td>  <button type="submit" onClick={()=>deleteRecord(item.id)} className="border-2 rounded p-2 m-2 my-12 bg-gray-300">Delete</button></td>
                       {/* <td> <button type="submit" className="border-2 rounded p-2 m-2 my-12 bg-gray-300">Edit</button></td> */}
                        <td> <Link exact to={"/LoginEdit/" + item.id} > Edit </Link></td>   
                   </tr>
               ))}
           </tbody>
       </table>
       <Link to="/Login"> <button type="submit" className="border-2 rounded p-2 m-2 my-12 bg-gray-300">Insert Data</button>
         </Link>
       

        </div>

    );
}


export default Perops;