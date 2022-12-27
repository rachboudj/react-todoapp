import './App.css'

export default function App() {
  return (
    <div className='app-wrapper'>
      <h1>Tasks</h1>
      <Form />

      <Todo />
    </div>
  );
}

const Form = () => {
  return <div></div>
}

const Todo = () => {
  return (
    <div>
      <Checkbox />
    </div>
  )
}

const Checkbox = () => {
  return <div></div>
}