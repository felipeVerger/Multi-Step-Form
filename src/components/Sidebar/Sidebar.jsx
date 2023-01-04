import React from 'react'
import './Sidebar.scss';

import bg_sidebar from '../../assets/images/bg-sidebar-desktop.svg';

const steps = [
  {
    step: 1,
    stepText: 'step 1',
    section: 'Your info'
  },
  {
    step: 2,
    stepText: 'step 2',
    section: 'Select plan'
  },
  {
    step: 3,
    stepText: 'step 3',
    section: 'Add-ons'
  },
  {
    step: 4,
    stepText: 'step 4',
    section: 'Summary'
  },
]

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
        <img src={bg_sidebar} alt="sidebar_image"/>
        <div className='steps_container'>
            {steps.map((step) => (
              <div className='step_block' key={step.step}>
                <div className='step_number'>{step.step}</div>
                <div>
                  <span>{step.stepText}</span>
                  <h4>{step.section}</h4>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar