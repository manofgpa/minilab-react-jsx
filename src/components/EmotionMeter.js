import React from 'react'

export const EmotionMeter = () => {

  const emotion = 'HAPPY'
  return (
    <h1>
      {emotion === 'HAPPY' ? ':)' : ':('}
    </h1>
  )
}
