"use client";


import Image from "next/image";
import styles from "./page.module.css";
import React, { useState} from "react";
import './app.css'

export default function Home() {

  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
};

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text" value={value} onChange={handleInputChange} />
          </div>
          <div >
            <input type="button" value="AC" onClick={e => setValue('')}/>
            <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}/>
            <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="=" className="equal" onClick={e => setValue(eval(value))}/>
          </div>
        </form>
      </div>
    </div>



    // <div className={styles.page}>
    //   <main className={styles.main}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol>
    //       <li>
    //         Get started by editing <code>app/page.js</code>.
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className={styles.ctas}>
    //       <a
    //         className={styles.primary}
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className={styles.logo}
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.secondary}
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className={styles.footer}>
    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>

    

  );
}
