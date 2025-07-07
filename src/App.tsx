import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center border-2 p-24 rounded-md bg-violet-500">
        <button
          className="text-lg font-semibold bg-red-600 text-white px-3 py-2 rounded-md border-none"
          onClick={() => setCount((count) => count - 1)}
        >
          Dcrement
        </button>
        <h1 className="text-xl font-semibold mx-5 text-white">{count}</h1>

        <button
          className="text-lg font-semibold bg-green-600 text-white px-3 py-2 rounded-md border-none"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
