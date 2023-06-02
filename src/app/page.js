"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import MyIpunt from "./components/MyInput";
const birthDay = { day: "", month: "", year: "" };

export default function Home() {
  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");

  function retriveAge() {
    setDays(31 - birthDay.day);
    setMonths(6 - birthDay.month);
    setYears(2023 - birthDay.year);
  }
  return (
    <div className=" bg-Off_white  flex h-screen w-screen items-center justify-center">
      <div className=" h-96 max-w-md rounded-lg rounded-br-3xl bg-White p-6">
        <div className=" grid grid-cols-3 gap-2 border-b-2 border-black pb-10">
          <MyIpunt handleValue={setDays} debuff={setMonths}>
            day
          </MyIpunt>{" "}
          <MyIpunt handleValue={setMonths} debuff={setYears}>
            month
          </MyIpunt>{" "}
          <MyIpunt handleValue={setYears}>year</MyIpunt>{" "}
        </div>
        <div className="absolute right-1/2 flex h-12 w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-green-400">
          <img
            className=" h-8 w-8 "
            src="\assets\images\icon-arrow.svg"
            alt="arrow "
          />
        </div>
        <div className="pt-10 text-6xl font-bold ">
          <div>
            <p className="pr-4 text-Purple inline ">{years}</p>
            <p className="inline">years</p>
          </div>
          <div>
            <p className="pr-4 inline text-Purple ">{months}</p>
            <p className="inline">months</p>
          </div>
          <div>
            <p className="pr-4 inline text-Purple ">{days}</p>
            <p className="inline">days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
