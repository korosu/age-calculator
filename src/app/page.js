/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="  flex h-screen w-screen items-center justify-center">
      <div className=" h-96 max-w-md rounded-lg rounded-br-3xl bg-Light_grey p-6">
        <div className=" grid grid-cols-3 gap-2 border-b-2 border-black pb-10">
          <p>day</p>
          <p>month</p>
          <p>year</p>
          <input className="rounded-md border border-red-200"></input>
          <input className="rounded-md border border-red-200"></input>
          <input className="rounded-md border border-red-200"></input>
        </div>
        <div className="absolute right-1/2 flex h-12 w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-green-400">
          <img
            className=" h-8 w-8 "
            src="\assets\images\icon-arrow.svg"
            alt="arrow "
          />
        </div>
        <div className="pt-10 text-6xl font-bold">
          <p>years</p>
          <p>months</p>
          <p>days</p>
        </div>
      </div>
    </div>
  );
}
