import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center border-2 p-24 rounded-md bg-violet-500">
        <button
          onClick={() => dispatch(decrement())}
          className="text-lg font-semibold bg-red-600 text-white px-3 py-2 rounded-md border-none"
        >
          Dcrement
        </button>
        <h1 className="text-xl font-semibold mx-5 text-white">{count}</h1>

        <button
          onClick={() => dispatch(increment())}
          className="text-lg font-semibold bg-green-600 text-white px-3 py-2 rounded-md border-none"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
