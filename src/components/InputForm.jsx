import React, { useState } from 'react';


export const InputForm = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Realiza la validación de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailPattern.test(inputValue);

    setIsEmailValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Si el correo es válido, realiza la acción deseada (por ejemplo, suscripción)
    if (isEmailValid) {
      // Realiza la acción de suscripción aquí
      console.log('Correo válido:', email);
    } else {
      // Si el correo no es válido, puedes mostrar un mensaje de error
      console.log('Correo no válido:', email);
    }
  };

  return (

    <form className="grid mt-4" onSubmit={handleSubmit}>
      <div className='flex items-center justify-between'>
         <p className="font-bold text-[12px] text-[#242742] pb-1">Email address</p>
      {!isEmailValid && (
        <p className="text-red-500 text-xs mt-1">Valid email required</p>
      )}
      </div>
     
      <input
        className={`border py-3 px-4 rounded-lg text-xs ${
          isEmailValid ? 'border-[#e8e8e9]' : 'border-red-500 bg-[#ff605534]'
           }`}
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
        value={email}
        onChange={handleChange}
      />
     
      <button onClick={()=>isEmailValid} className="mt-4 bg-[#242742] text-white text-xs p-3 rounded-lg hover:bg-[#FF6155]">
        Suscribirse al boletín mensual
      </button>
    </form>
  );
};
