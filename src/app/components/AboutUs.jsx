import React from 'react'

const AboutUs = () => {
  return (
    <main className='bg-neutral-100 py-5 space-y-5'>
     <div className='space-y-5 flex flex-col items-center justify-center'>
      <h1 className='w-[90%] max-w-[500px] text-center text-2xl font-semibold'>Comprehensive Consulting Solutions <br className='hidden sm:block'/>Tailored to Your Needs</h1>
      <p className='w-[90%] max-w-[500px] text-center text-sm'>With a focus on individual attention, we are committed to delivery customized strategies and empowering your workforce</p>
     </div>
     <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-[90%] p-3.5 space-y-2.5 rounded-md text-left bg-white'>
        <h1 className='text-xl'>Our Approach to Leadership Development</h1>
        <p className='text-sm opacity-75'>
          FranklinCovey is the worlds most trusted provider of leadership 
          development solutions that unleash the full potential of leaders 
          and their teams.
          <br />
          <br />
          Our unique approach to leadership development combines powerful 
          content based on decades of research and development, expert 
          consultants and facilitators, and innovative technology that supports 
          and reinforces lasting behavior change.
        </p>
      </div>
      <div></div>
     </div>
    </main>
  )
}

export default AboutUs
