import { useState } from 'react';
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
  );
};

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <div className='checkbox'>
    <input type="checkbox" checked={checked} onChange={onChange} />
    {checked && (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l5 5l10 -10"></path>
      </svg>
    )}
  </div>
  );
};