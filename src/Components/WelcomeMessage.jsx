import Link from 'next/link'
import React from 'react'

const WelcomeMessage = () => {
  return (
    <div>
        <h3 className='text-5xl'>⛵️</h3>
        <p className='py-10'>The CrewBlast team will send a message to your phone shortly to confirm your registration! For now, you&apos;re all set! However, be sure to check back in with us here as you will soon be able to edit your profile and information!   </p>
       <Link href='#home'>
         <button className="mx-6 px-6 py-4 border mt-4 bg-[#00abee71] border-[#242424] rounded-full uppercase text-sm tracking-widest text-white transition-all hover:border-[#00acee] hover:bg-[#00acee]">Understood!</button>
         </Link>
    </div>
  )
}

export default WelcomeMessage