import React from 'react'

const Programs = () => {
  return (
    <div className='px-7 py-5 space-y-7 bg-neutral-100'>
    {/* Header */}
    <div className='space-y-5 text-center'>
      <h1 className='text-4xl font-medium leading-11'>Programs to Elevate Your Workforce</h1>
      <p className='text-sm opacity-70'>Experiential and transformational sales and leadership training</p>
    </div>
    {/* Modules */}
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-5'>
      <div className='pull-out-element w-full h-fit lg:h-[17.5rem] p-3.5 rounded-xl bg-white space-y-2'>
        <h3 className='text-sm text-blue-700 font-medium'>Paid Program</h3>
        <h1 className='text-xl font-medium'>Sales and Business Development</h1>
 <p className='text-sm opacity-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae aperiam dolor autem impedit laborum delectus strum error molestiae ducimus unde.</p>
        <p className='cursor-pointer mt-5 text-sm py-2 w-28 rounded-md border font-medium text-center border-neutral-200'>Learn more</p>
      </div>
       <div className='pull-out-element w-full h-fit lg:h-[17.5rem] p-3.5 rounded-xl bg-white space-y-2'>
        <h3 className='text-sm text-purple-700 font-medium'>Paid Program</h3>
        <h1 className='text-xl font-medium'>Leadership & Sales Management</h1>
 <p className='text-sm opacity-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae aperiam dolor autem impedit laborum delectus strum error molestiae ducimus unde.</p>
        <p className='cursor-pointer mt-5 text-sm py-2 w-28 rounded-md border font-medium text-center border-neutral-200'>Learn more</p>
      </div>
       <div className='pull-out-element w-full h-fit lg:h-[17.5rem] p-3.5 rounded-xl bg-white space-y-2'>
        <h3 className='text-sm text-red-700 font-medium'>Free Program</h3>
        <h1 className='text-xl font-medium'>Compliance and Regulatory Training</h1>
 <p className='text-sm opacity-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae aperiam dolor autem impedit laborum delectus strum error molestiae ducimus unde.</p>
        <p className='cursor-pointer mt-5 text-sm py-2 w-28 rounded-md border font-medium text-center border-neutral-200'>Learn more</p>
      </div>
       <div className='pull-out-element w-full h-fit lg:h-[17.5rem] p-3.5 rounded-xl bg-white space-y-2'>
        <h3 className='text-sm text-green-700 font-medium'>Free Program</h3>
        <h1 className='text-xl font-medium'>Change Management Workshop</h1>
 <p className='text-sm opacity-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae aperiam dolor autem impedit laborum delectus strum error molestiae ducimus unde.</p>
        <p className='cursor-pointer mt-5 text-sm py-2 w-28 rounded-md border font-medium text-center border-neutral-200'>Learn more</p>
      </div>
    </div>
    </div>
  )
}

export default Programs
