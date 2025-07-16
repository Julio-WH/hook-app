
import CounterApp from './01-useState/CounterApp' 
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import SimpleForm from './02-useEffect/SimpleForm'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
import MultipleCustomHooks from './03-example/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import  Layout  from './05-useLayoutEffect/Layout'
import { Memorize, MemoHook, CallbackHook } from './06-memos'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'

// import './08-useReducer/intro-reducer';

const HooksApp = () => {
  return (
    <div>
      {/* <CounterApp />
      <CounterWithCustomHook />
      <SimpleForm />
      <FormWithCustomHook />
      <MultipleCustomHooks />
      <FocusScreen />
      <Layout />
      <Memorize />
      <MemoHook />
      <CallbackHook />
      <Padre /> */}
      <TodoApp />
    </div>
  )
}

export default HooksApp
