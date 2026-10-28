import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form"
export default function Practice() {
    const { register, handleSubmit, formState: { errors } } = useForm()
//   const [count, setCount] = useState(0);  // useState Hook
//   let count = 0;
//   function incrementCount() {
//     count++;
//     console.log(count);
//   }
  return (
    <div>
        <form onSubmit={handleSubmit((console.log))}>
            <input{
                ...register("firstName",
                    {
                        required:{value:true, message:"This field is required"}, 
                        minLength:{value:3, message:"First name must be at least 3 characters long"}
                    }
                )}
            />
            <p>{errors.firstName?.message}</p>
            <input{
                ...register("lastName",
                    {
                        required:{value:true, message:"This field is required"}, 
                        maxLength:{value:10, message:"Last name must be at most 10 characters long"}
                    }
                )}
            />
            <p>{errors.lastName?.message}</p>
             <input{
                ...register("emailAddress",
                    {
                        required:{value:true, message:"This field is required"}, 
                        pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:"Invalid email address"}
                    }
                )}
            />
            <p>{errors.emailAddress?.message}</p>
            <button>Submit</button>
        </form>
    </div>
    // <>
    // <h2>Count: {count}</h2>
    // <button onClick={() => setCount(count + 1)}>Increment</button>
    // {/* <button onClick={incrementCount}>Increment</button> */}
    // </>
  );
}