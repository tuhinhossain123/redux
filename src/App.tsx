
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
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
          onClick={() => dispatch(incrementByValue(5))}
          className="text-lg font-semibold bg-green-600 text-white px-3 py-2 rounded-md border-none"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
