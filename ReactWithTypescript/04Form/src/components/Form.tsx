import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  firstName: string;
  email: string;
  mobile:number;
  password:string;
}

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
    <div className='flex items-center justify-center bg-blue-400 w-fit p-10  rounded-md shadow-lg'>
      <form className='flex items-center flex-col' action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className='mb-4 mt-4 pl-2 rounded-md shadow-lg' placeholder='Full Name'  {...register("firstName", { required: true })} />
        {errors.firstName && <p>Please Enter Name</p> }

        {errors.firstName && <p>This field is required</p>}
        <input className='mb-4  pl-2 rounded-md shadow-lg' type="email" placeholder='Email' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <p>This field is required and should contain the pattern !@#$%^&*</p>}


        <input type="number" className='mb-4 pl-2 rounded-md shadow-lg' placeholder='Mobile Number'{...register("mobile",{required:true, maxLength:10} )} />
        {errors.mobile && <p>Please Enter only the number</p> }


        <input type="password" className='mb-4  pl-2 rounded-md shadow-lg' placeholder='Password' {...register("password",{required:true, pattern:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/})} />
        {errors.password && <p>Please fill the password atleast use: pattern: /^\S+@\S+$/i</p> }

        
        <button className='bg-blue-900 text-white rounded-md shadow-lg w-32 h-10 mb-4 hover:bg-green-500 hover:text-black' type='submit'>Submit</button>
      </form>
      </div>
    </>
  );
}

export default Form;
