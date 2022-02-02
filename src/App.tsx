import './App.css'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ClassComponent title='Custom Title!' subTitle='Custom SubTitle' />
        {/* we're trying to pass to ClassComponent a props object like this:*/}
        {/* { title: string } */}
        <ClassComponent title='Another ClassComponent' />
        <ClassComponent title='hello' subTitle='not mandatory' />
      </header>
    </div>
  )
}

export default App
