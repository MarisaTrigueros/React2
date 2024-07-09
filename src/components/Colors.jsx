import React from 'react'
import Color from './Color'

function Colors({ colors }) {

  return (
    <>
    <il>
        {colors.map(color => (
            <Color key={color} color={color} />
        ))}
    </il>
    </>
  )
}

export default Colors