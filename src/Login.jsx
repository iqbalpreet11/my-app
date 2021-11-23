import axios from "axios";
import react,{useState} from "react";
import {
        Link
  } from "react-router-dom";


function Login  (){

    var [formvalid, setFormvalid] = useState({title:false, price:false, description:false, category:false, rating:false});
    var [formdata, setFormdata] = useState({title:"", price:"", description:"", category:"", rating:""});

    function adddata(e){
        if(e.target.name === "description"){
          if(e.target.value.length < 10){
            setFormvalid({[e.target.name]:true});
            console.log(e.target.value);
          }
          else 
          setFormvalid({[e.target.name]:false});
          setFormdata({...formdata, [e.target.name]:e.target.value});
          console.log(formdata);
        }

        else if(e.target.value.length < 4){
          setFormvalid({[e.target.name]:true});
          console.log(e.target.value);
        }
        else
            setFormvalid({[e.target.name]:false});
            setFormdata({...formdata, [e.target.name]:e.target.value});
            console.log(formdata);
        };




    var uploadtoDatabase = async (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/posts", formdata);
        alert("done")

    }

    return(
        <>
<div className="flex justify-center ">
   
    <div className="py-12 flex justify-center">
     <form onSubmit={uploadtoDatabase}>
         <input type="text" className="border-2" placeholder=" enter Title" name="title" onChange={adddata}/>
         {formvalid.title?<span>invalid</span>:null}<br/> <br/>

         <input type="text" className="border-2" placeholder="price" name="price" onChange={adddata}/>
         {formvalid.price?<span>invalid</span>:null}<br/> 
         <br/>
         <textarea type="text" className="border-4" placeholder="write description" name="description" onChange={adddata}> </textarea>
         {formvalid.description?<span>Too Short</span>:null}<br/> <br/>

         <input type="text" className="border-2" placeholder="category" name="category" onChange={adddata}/>
         {formvalid.category?<span>invalid</span>:null}<br/> 
         <br/>
     

         <input type="text" className="border-2" placeholder="Rating" name="rating" onChange={adddata}/>
         {formvalid.rating?<span>invalid</span>:null}<br/> 
         <br/>
         <br/>

         <button type="submit" className="border-2 rounded p-2 m-2 my-12">Submit</button>

         <Link to="/Perops"> <button type="submit" className="border-2 rounded p-2 m-2 my-12">Check Data</button>
         </Link>

     </form>
     </div>
  
</div>

        </>
    )
}
 
export default Login;