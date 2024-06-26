"use client"
import Image from "next/image";
import { useAppDispatch , useAppSelector } from "@/lib/hooks";
import { increment , decrement , incrementByAmount , fetchApiData } from "@/lib/CounterSlice/counter";

export default function Home() {
  
  const count = useAppSelector(state => state.counter.value)
  const api = useAppSelector(state => state.counter.api)
  const dispatch = useAppDispatch()

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(incrementByAmount(parseInt(e.target.value)))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input onChange={handleInputChange} type="text" placeholder="decrement by amount" />
      <button >Increase</button>
      <button onClick={() => {dispatch(fetchApiData())}}>Fetch Api</button>
      {JSON.stringify(api)}
    </main>
  );
}
