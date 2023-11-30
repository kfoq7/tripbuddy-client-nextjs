import JourneyStepsForm from '@/components/journey-steps-form'

export default function StartJourney() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 pt-8">
      <div className="mx-auto max-w-4xl">
        <JourneyStepsForm />
      </div>
    </main>
  )
}
