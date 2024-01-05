import ItemCard from "./ItemCard.jsx";
import Complete from "./Complete.jsx";
import React, { useState } from 'react'

function Card() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [completeForm, setCompleteForm] = useState(true);

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
      setCompleteForm(true); // Activa el formulario completo
      setCompleteForm(!completeForm)
    } else {
      // Si el correo no es válido, puedes mostrar un mensaje de error
      console.log('Correo no válido:', email);
    }
  };

  return (
    <div>
      {completeForm ? (
        <div className="bg-white px-4 py-2 rounded-xl grid grid-cols-2 max-w-xl gap-x-6 min-h-[641px] min-w-[900px]">
          <div className="flex flex-col justify-center gap-y-[.7rem] px-3">
            <h1 className="font-bold text-4xl text-[#242742]">Stay updated!</h1>
            <p className="text-xs">Join 60,000+ product managers receiving monthly updates on:</p>
            <ItemCard text="Product discovery and building what matters" />
            <ItemCard text="Measuring to ensure updates are a success" />
            <ItemCard text="And much more!" />
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
              <button onClick={setCompleteForm} className="mt-4 bg-[#242742] text-white text-xs p-3 rounded-lg hover:bg-[#FF6155]">
                Suscribirse al boletín mensual
              </button>
            </form>
          </div>
          <div>
            <img className="w-full" src="public/illustration-sign-up-desktop.svg" alt="" />
          </div>
        </div>
      ):(
        <Complete />
      )  }
    </div>
  );
}

export default Card;
