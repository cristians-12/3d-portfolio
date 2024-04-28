import React from 'react'
import { technologies } from '../constants'
import BallCanvas from './canvas/Ball'

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center flex-row '>
      {technologies.map((tecno, i)=>(
        <div key={i}>
          <BallCanvas icon={tecno.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech