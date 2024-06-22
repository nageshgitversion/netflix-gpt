
export const formValidator = (email,password) => {
  // const isUserNameValid = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

 // if(!isUserNameValid) return "Invalid Username";

   if(!isEmailValid) return "Email entered not valid";
   console.log(isEmailValid)
   

   if(!isPasswordValid) return "Entered incorrect password";
   
    return null;
   

   }


