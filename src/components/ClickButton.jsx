// components/ClickButton.jsx
import { useState } from 'react'

function ClickButton() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
  }

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      {isClicked && <p>Clicked</p>}
    </div>
  )
}

export default ClickButton