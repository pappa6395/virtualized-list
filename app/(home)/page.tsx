import VirtualizedList from '@/components/VirtualizedList'
import React from 'react'

const page = () => {
    
    
  return (

    <div>
        <div className='grid justify-center mt-6'>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl 
            font-semibold tracking-tight first:mt-0">
                Virsualized List Component
            </h2>
            <VirtualizedList />
        </div>
    </div>

  )
}

export default page