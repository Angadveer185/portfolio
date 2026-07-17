import React from 'react'
import TopPage from './TopPage'
import BottomPage from './BottomPage'

function Sketchbook() {
  return (
    <div className="relative flex h-136 w-full items-center justify-center py-4">
      <div className="absolute inset-x-4 top-8 -bottom-2 rotate-[-1.5deg] opacity-75 blur-[0.2px] lg:inset-x-8">
        <BottomPage />
      </div>

      <div className="relative z-10 w-full">
        <TopPage />
      </div>
    </div>
  )
}

export default Sketchbook
