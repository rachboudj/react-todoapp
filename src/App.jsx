import { useState } from 'react';
import './App.css'

export default function App() {
  return (
    <div className='app-wrapper'>
      <h1>Tasks</h1>
      <Form />

      <div className='todo-list'>
      <Todo>Helloooooo</Todo>
      <Todo>Helloooooo</Todo>
      <Todo>Helloooooo</Todo>
      <Todo>Helloooooo</Todo>
      </div>
    </div>
  );
}

const Form = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className='form-wrapper' onSubmit={onSubmit}>
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

const Todo = ({ children }) => {
  return (
    <div className='todo-wrapper'>
      <Checkbox />
      <label className='todo-text'>{children}</label>
      <button className='todo-delete'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="7" x2="20" y2="7"></line>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
        </svg>
      </button>
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