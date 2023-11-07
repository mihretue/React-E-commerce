import React from 'react'
import styled from 'styled-components'

const Strong = styled.strong`
color:blue
`

export default function title({name, title}) {
  return (
    <div className='row'>
      <div className='col'>
        <h1 className='text-capitalize text-center'>{name}<Strong className=' mx-2 text-blue text-center'>{title}</Strong></h1>
      </div>
    </div>
  )
}
