import React, { useEffect, useState } from 'react'

const App = () => {
  const [color, setColor] = useState("orange")

  let bgColor;
  switch (color) {
    case 'white':
      bgColor = 'bg-white';
      break;
    case 'red':
      bgColor = 'bg-red-800';
      break;
    case 'green':
      bgColor = 'bg-green-500';
      break;
    case 'blue':
      bgColor = 'bg-blue-500';
      break;
    case 'orange':
      bgColor = 'bg-orange-300';
      break;
    case 'gray':
      bgColor = 'bg-gray-600';
      break;
    case 'yellow':
      bgColor = 'bg-yellow-600';
      break;
    case 'pink':
      bgColor = 'bg-pink-400';
      break;
    case 'purple':
      bgColor = 'bg-purple-900';
      break;
    case 'lime':
      bgColor = 'bg-lime-400';
      break;
    case 'brown':
      bgColor = 'bg-brown';
      break;
    case 'black':
      bgColor = 'bg-black';
      break;

  }

  const handleColorSelection = (color) => {
    speak(color);
  }

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
  }

  useEffect(() => {
    handleColorSelection(color)
  }, [color])



  return (
    <div
      className='w-full h-screen'
      style={{ background: color }}
      >
      <div
        className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'
        >
        <div
          className={`flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl ${bgColor}`}
          >
          <button
            onClick={() => setColor('white')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ background: 'white' }}>
            White
          </button>

          <button
            onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'red' }}>
            Red
          </button>

          <button
            onClick={() => setColor('Green')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'green' }}>
            Green
          </button>

          <button
            onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'blue' }}>
            Blue
          </button>

          <button
            onClick={() => setColor('orange')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'orange' }}>
            Orange
          </button>

          <button
            onClick={() => setColor('Gray')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'Gray' }}>
            Gray
          </button>

          <button
            onClick={() => setColor('yellow')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'Yellow' }}>
            Yellow
          </button>

          <button
            onClick={() => setColor('pink')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'pink' }}>
            Pink
          </button>

          <button
            onClick={() => setColor('purple')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'purple' }}>
            Purple
          </button>

          <button
            onClick={() => setColor('lime')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'lime' }}>
            Lime
          </button>

          <button
            onClick={() => setColor('brown')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'Brown' }}>
            Brown
          </button>

          <button
            onClick={() => setColor('black')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'Black' }}>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
