import axios from "axios";
import react,{useState} from "react";

function Login  (){

   
    const [userErr,setUserErr]=useState(false);
    const [userPasswordErr,setUserPasswordErr]=useState(false);
    const [description,setDescription]=useState(false);
    const [category,setCategory]=useState(false);
    const [rating,setRating]=useState(false);


    function userHandler(e){
      let item=e.target.value; 
      if(item.length<4){
          setUserErr(true)
          console.log(e.target.value);
      }
      else{
          setUserErr(false)
      }
      console.log(e.target.value);
     
    }
    function passwordHandler(e){
      let item=e.target.value; 
      if(item.length<4){
        setUserPasswordErr(true)
          console.log(e.target.value);
      }
      else{
        setUserPasswordErr(false)
      }
      console.log(e.target.value);
     
    }
    function userdescription(e){
      let item=e.target.value; 
      if(item.length<10){
        setDescription(true)
          console.log(e.target.value);
      }
      else{
        setDescription(false)
      }
      console.log(e.target.value);
     
    }
    function usercategory(e){
      let item=e.target.value; 
      if(item.length<5){
        setCategory(true)
          console.log(e.target.value);
      }
      else{
        setCategory(false)
      }
      console.warn(e.target.value);
     
    }
    function userrating(e){
      let item=e.target.value; 
      if(item.length<2){
        setRating(true)
          console.log(e.target.value);
      }
      else{
        setRating(false)
      }
      console.log(e.target.value);
     
    }
    function loginHandler(e){
       axios
    }
{
  e.preventDefault()
 
}

    return(
        <>
<div className="flex justify-center ">
   
    <div className="py-12 flex justify-center">
     <form onSubmit={loginHandler}>
         <input type="text" className="border-2" placeholder=" enter Title" onChange={userHandler}/>
         {userErr?<span>invalid</span>:null}<br/> <br/>

         <input type="text" className="border-2" placeholder="price" onChange={passwordHandler}/>
         {userPasswordErr?<span>invalid</span>:null}<br/> 
         <br/>
         <textarea type="text" className="border-4" placeholder="write description" onChange={userdescription}> </textarea>
         {description?<span>Too Short</span>:null}<br/> <br/>

         <input type="text" className="border-2" placeholder="category" onChange={usercategory}/>
         {category?<span>invalid</span>:null}<br/> 
         <br/>
     

         <input type="text" className="border-2" placeholder="Rating" onChange={ userrating}/>
         {rating?<span>invalid</span>:null}<br/> 
         <br/>
         <br/>

         <button type="submit" className="border-2 rounded p-2 m-2 my-12">Login</button>

     </form>
     </div>
</div>

        </>
    )
}
 
export default Login;