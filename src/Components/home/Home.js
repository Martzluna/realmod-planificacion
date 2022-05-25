import React from 'react'
import SectionFourAgents from './SectionFourAgents';
import SectionOne from './sectionOne';
import SectionTwoHome from './SectionTwoHome';
import SectionRegisterAgent from './SectionRegisterAgent';

export default function Home() {
  return (
    <div>
      <SectionOne />
      <SectionTwoHome/>
      <SectionFourAgents />
      <SectionRegisterAgent />
      
    </div>
  )
}
