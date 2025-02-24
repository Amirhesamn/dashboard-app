"use client"; // This must be a Client Component to interact with Redux

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import { increment, decrement } from "@/lib/store/slices/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Counter: {count}</h2>
      <div className="mt-4 flex gap-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
