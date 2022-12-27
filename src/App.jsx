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
  return (
    <form className='form-wrapper'>
      <input type="text" className='input' placeholder='Add a task' />
      <Button type="submit">Submit</Button>
    </form>
  )
}

const Button = ({ children, ...props }) => {
  return (
    <button className='button' {...props}>
      {children}
    </button>
  );
};

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