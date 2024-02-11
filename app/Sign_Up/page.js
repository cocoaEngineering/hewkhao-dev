import Image from "next/image";
import '/public/globals.css';
export default function Home() {
  return (
<div class="container mx-auto w-[40rem]  h-[40rem] translate-y-[10rem] ">
    <div class="mx-auto w-[25rem]  h-[9rem] cursor-pointer">
      <img src="/image/logo.png" class="w-[30rem]  h-[15rem]"></img>
    </div>
    <br></br>

    <div class=" w-full  h-[2rem] flex items-center justify-end pr-2 font-medium ">
      <a class="pr-3 cursor-pointer"href="/">Login</a>
      <a class=" font-bold  cursor-pointer">Sign Up</a>
    </div>

    <hr class=" border-solid border-black"></hr>

<div class=" h-[28rem] w-full">
  <br></br>
<form action="#" >
        
<div>
  <label for="Username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
  <div class="relative mt-2 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm"></span>
    </div>
    <input type="text" name="Username" id="Username"  required class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"></input>
    <div class="absolute inset-y-0 right-0 flex items-center">
    </div>
  </div>
</div>

<div>
  <label for="Email" class=" translate-y-[0.5rem] block text-sm font-medium leading-6 text-gray-900">Email</label>
  <div class="relative mt-2 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm"></span>
    </div>
    <input type="email" name="Email" id="Email"  required class="translate-y-[0.4rem] block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" ></input>
    <div class="absolute inset-y-0 right-0 flex items-center">
    </div>
  </div>
 </div>

 <div>
  <label for="Password" class=" translate-y-[0.5rem] block text-sm font-medium leading-6 text-gray-900">Password</label>
  <div class="relative mt-2 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm"></span>
    </div>
    <input type="Password" name="Password" id="Password"  required class="translate-y-[0.4rem] block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" ></input>
    <div class="absolute inset-y-0 right-0 flex items-center">
    </div>
  </div>
 </div>

 <div>
  <label for="Password_2" class=" translate-y-[0.5rem] block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
  <div class="relative mt-2 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm"></span>
    </div>
    <input type="Password" name="Password_2" id="Password_2"  required class="translate-y-[0.4rem] block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" ></input>
    <div class="absolute inset-y-0 right-0 flex items-center">
    </div>
  </div>
 </div>

 <div class=" translate-y-[0.9rem] w-full  h-[2rem] flex items-center justify-stert font-medium">
      <input type="checkbox"  required class="pr-3 font-bold cursor-pointer"/><a class=" ml-2">Confirm Account</a>
    </div>
     
    <button type="submit" class="translate-y-[1.5rem] block w-full rounded-md border-0 py-1.5 pl-20 pr-20 ring-1 ring-inset text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 font-bold ">Register</button>
    
    </form>
    
   
   </div>
</div>
            
          
   
   
  );
}


