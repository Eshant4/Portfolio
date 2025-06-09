import React from 'react'

const Counter = ({initialCount}) => {
    const [count, setCount] = React.useState(initialCount);
    const handleIncrement = () => setCount((preve)=> preve + 1);
    const handleDecrement = () => setCount((preve)=> preve - 1);
    const handleReset = () => setCount(initialCount);
  return (
     <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-64 mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-700" data-testid= "count">{count}</h1>
      <div className="flex gap-2">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-4 rounded"
          onClick={handleIncrement} 
        >
          Plus
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-4 rounded"
          onClick={handleDecrement}
        >
          Minus
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-1 px-4 rounded"
          onClick={handleReset}
        >
          Resett
        </button>
      </div>
    </div>
  )
}

export default Counter