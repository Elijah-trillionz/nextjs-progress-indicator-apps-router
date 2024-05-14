"use client";
import { useProgress } from "../hooks/useProgress";

const page = () => {
  const { state, value, start, done, reset } = useProgress();
  return (
    <div className="max-w-[500px] mx-auto mt-32 h-screen text-center">
      <div>
        <span className="capitalize text-3xl block">
          Progress bar is {state}
        </span>
        <span className="block text-3xl mt-20 mb-40 text-center">{value}</span>

        <button
          onClick={() => start()}
          className="block border w-full p-5 rounded-md border-gray-300 mb-5"
        >
          Test
        </button>
        <button
          onClick={() => done()}
          className="block border w-full p-5 rounded-md border-gray-300"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default page;
