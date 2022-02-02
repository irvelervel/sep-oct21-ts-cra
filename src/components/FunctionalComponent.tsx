import { useEffect, useState } from 'react'

interface FunctionalComponentProps {
  title: string
  subTitle?: string
}

// const FunctionalComponent = (props: FunctionalComponentProps) => {
//   return <h1>{props.title}</h1>
// }

// ({ title })

interface Student {
  name: string
}

const FunctionalComponent = ({ title, subTitle }: FunctionalComponentProps) => {
  const [counter, setCounter] = useState(0)
  const [student, setStudent] = useState<null | Student>(null)
  // the type argument overrides what TS inferes out of your initial value
  // to give a type so student; without it, it will only understand that
  // student can ONLY be null, because that's the initial value you gave it

  useEffect(() => {
    setStudent({ name: 'Stefano' })
  }, [])

  return (
    <>
      {counter}
      <h1 onClick={() => setCounter(counter + 1)}>{title}</h1>
      <h3>{subTitle?.toUpperCase()}</h3>
    </>
  )
}

export default FunctionalComponent
