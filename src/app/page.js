"use client";
import { useState } from "react";
/* eslint-disable @next/next/no-img-element */
import MyInputKai from "./components/MyInputKai";
const today = new Date();
let inputMonth = 0;
let inputYear = 0;
let inputDay = 0;

export default function Home() {
  const [year, setYear] = useState("--");
  const [month, setMonth] = useState("--");
  const [day, setDay] = useState("--");

  function displayDay(value) {
    const birthDay = today.getDate() - value;
    if (birthDay < 0) {
      setDay(birthDay + 30);
      displayMonth(inputMonth + 1);
    } else {
      setDay(birthDay);
    }
  }

  function displayMonth(value) {
    const birthMonth = today.getMonth() - value;
    if (birthMonth < 0) {
      setMonth(birthMonth + 12);
      displayYear(inputYear + 1);
    } else {
      setMonth(birthMonth);
    }
  }

  function displayYear(value) {
    setYear(today.getFullYear() - value);
  }

  function dispalyBirthDay(e) {
    switch (e.target.id) {
      case "Day":
        inputDay = e.target.value;
        if (inputDay == "" || inputDay > 31 || inputDay <= 0) {
          setDay("--");
          break;
        }
        displayDay(e.target.value);
        break;
      case "Month":
        inputMonth = e.target.value;
        if (inputMonth == "" || inputMonth > 12 || inputMonth <= 0) {
          setMonth("--");
          break;
        }
        displayMonth(inputMonth);
        break;
      case "Year":
        inputYear = e.target.value;
        if (
          inputYear == "" ||
          inputYear <= 1900 ||
          inputYear > today.getFullYear()
        ) {
          setYear("--");
          break;
        }
        displayYear(inputYear);
        break;
    }
  }
  return (
    <div className=" bg-Off_white  flex h-screen w-screen items-center justify-center">
      <div className=" h-96 max-w-md rounded-lg rounded-br-3xl bg-White p-6">
        <div className=" grid grid-cols-3 gap-2 border-b-2 border-black pb-10">
          <MyInputKai onChange={(e) => dispalyBirthDay(e)}>Day</MyInputKai>
          <MyInputKai onChange={(e) => dispalyBirthDay(e)}>Month</MyInputKai>
          <MyInputKai onChange={(e) => dispalyBirthDay(e)}>Year</MyInputKai>
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
            <p className="pr-4 text-Purple inline ">{year}</p>
            <p className="inline">year</p>
          </div>
          <div>
            <p className="pr-4 inline text-Purple ">{month}</p>
            <p className="inline">month</p>
          </div>
          <div>
            <p className="pr-4 inline text-Purple ">{day}</p>
            <p className="inline">day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
