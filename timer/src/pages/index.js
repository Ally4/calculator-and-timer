import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import Timer from "../timer/index"
// import "./src/pages/app.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>

      <div className="App">
        <Timer duration={ 2 * 24 * 60 * 60 * 1000 } />
      </div>
    </>
  );
}
