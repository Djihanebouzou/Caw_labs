// components/ThreeButtons.jsx
import { useState } from 'react'

function ThreeButtons() {
  const [clickedButton, setClickedButton] = useState(null)

  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber)
  }

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Button1</button>
      <button onClick={() => handleButtonClick(2)}>Button2</button>
      <button onClick={() => handleButtonClick(3)}>Button3</button>
      
      {clickedButton && (
        <p>Button #{clickedButton} was clicked</p>
      )}
    </div>
  )
}

export default ThreeButtons