import SectionHeader from '@/components/ui/SectionHeading'
import Whiteboard from '@/components/Whiteboard/Whiteboard'
import React from 'react'

function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12 lg:px-16">
      <SectionHeader id="about" title="About Me" subtitle="My Story" />
      <Whiteboard />
    </div>
  )
}

export default About
