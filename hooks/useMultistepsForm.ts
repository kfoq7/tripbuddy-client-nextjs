'use client'

import { useState } from 'react'

interface Options {
  steps: React.ReactElement[]
}

export function useMultistepsForm({ steps }: Options) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const nextStep = () => {
    setCurrentStepIndex(prev => {
      if (prev > steps.length - 1) return prev

      return prev + 1
    })
  }

  const previousStep = () => {
    setCurrentStepIndex(prev => {
      if (prev <= 0) return prev

      return prev - 1
    })
  }

  return {
    step: steps[currentStepIndex],
    nextStep,
    previousStep
  }
}
