import { Component } from 'react'

// the props object in a TypeScript react component by default is {}
// props are an object in a React Component...
// ...so let's write an interface for them!

interface ClassComponentProps {
  title: string
  subTitle?: string
}

// < > <-- in TS this is called a Type Argument

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subTitle?.toUpperCase() || 'no subtitle'}</h3>
      </>
    )
  }
}

export default ClassComponent
