import react from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
           fullName: yup.string().required(),
           email:yup.string().email(),
           age:yup.number().positive().integer(),
           password:yup.string().min(5).max(15).required(),
           confirmPassword:yup.string().oneOf([yup.ref("password"),null]),
           contactNo:yup.number().positive().integer(),

    
})

function Hulu() {
    const{register,handleSubmit,error} = useForm({
        resolver: yupResolver(schema),
    });
    

    const submitForm=(data)=>{
        
      console.log(data);
    };
    

    return ( <div className="flex justify-center  bg-blue-400  p-4">

   
     <form onSubmit={handleSubmit(submitForm)}>
     <div className="mx-10">
     <h1 className=" p-1.5 text-2xl ">Sign Up Form</h1></div>
     <div className=" p-4 rounded">
         <input type="text"  name="fullName" placeholder="enter full name..." {...register('fullName')}/><br></br>
       
         </div>
      <div className=" p-4">
         <input type="text"  name="email" placeholder="enter your Email..." {...register('email')} /><br></br>
        </div>
    <div className=" p-4">
         <input type="text" name="age" placeholder="enter age..." {...register('age')} /><br></br>
    </div>    
       <div className=" p-4">
         <input type="password" name="password" placeholder="password..." {...register('password')}/>
         <br></br></div>
       <div className=" p-4">
         <input type="password" name="confirmpassword" placeholder="confirmPassword..." {...register('confirmPassword')} /><br></br>
       </div>
        <div className=" p-4">
         <input type="text" name="contactNo" placeholder="Contact no ..."{...register('contactNo')} /><br></br>
        
       </div>
         <div className=" p-4 rounded">
         <input type="submit" id="submit"  className=" rounded p-1.5"/>
      </div>
     </form>

    </div> );
}

export default Hulu;