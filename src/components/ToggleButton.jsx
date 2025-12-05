// components/ToggleButton.jsx
import { useState } from 'react'

function ToggleButton() {
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1)
  }

  const isEvenClick = clickCount % 2 === 0
  const message = clickCount === 0 ? 'Not Clicked' : (isEvenClick ? 'Not Clicked' : 'Clicked')

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      <p>{message}</p>
      <small>Click count: {clickCount}</small>
    </div>
  )
}

export default ToggleButton