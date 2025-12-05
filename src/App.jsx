<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
// App.jsx
import { useState } from 'react'
import ClickButton from './components/ClickButton'
import ToggleButton from './components/ToggleButton'
import ThreeButtons from './components/ThreeButtons'
import Counter from './components/Counter'
import Form from './components/Form'
import DivCreator from './components/DivCreator'
import DisplayTab from './components/DisplayTab'
import './App.css'

function App() {
  const [currentRoute, setCurrentRoute] = useState('/form')

  const routes = [
    { route: '/click', title: 'Basic Click Button', component: <ClickButton /> },
    { route: '/toggle', title: 'Toggle Button', component: <ToggleButton /> },
    { route: '/three', title: 'Three Buttons', component: <ThreeButtons /> },
    { route: '/counter', title: 'Counter', component: <Counter /> },
    { route: '/form', title: 'Auth Form', component: <Form /> },
    { route: '/divs', title: 'Div Creator', component: <DivCreator /> },
    { route: '/display', title: 'Display Tab', component: <DisplayTab /> }
  ]

  return (
    <div className="app">
      <h1>Buttons</h1>
      
      <div className="navigation">
        {routes.map(r => (
          <button 
            key={r.route}
            onClick={() => setCurrentRoute(r.route)}
            className={currentRoute === r.route ? 'active' : ''}
          >
            {r.title}
          </button>
        ))}
      </div>

      <div className="button">
        <h2>{routes.find(r => r.route === currentRoute)?.title}</h2>
        {routes.find(r => r.route === currentRoute)?.component}
      </div>
    </div>
  )
}

export default App
>>>>>>> 52dfa2f (Lab 5)
