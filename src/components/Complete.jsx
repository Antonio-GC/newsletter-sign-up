import React from 'react'

function Complete() {
  return (
    <div className="bg-white p-10 rounded-xl  gap-y-3 grid max-w-96 ">
      <div>
      <img className='w-14' src="public/icon-list.svg" alt="check list"/>
      </div>
   <h1 className='text-4xl font-bold'>Thanks for subscribing!</h1>
   <p className='text-sm'>A confirmation email has been sent to <span className='font-bold'>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>
   <button className='bg-[#242742] text-white text-xs p-3 rounded-lg hover:bg-[#FF6155] mt-3'>Dismiss message</button>
  </div>
  )
}

export default Complete