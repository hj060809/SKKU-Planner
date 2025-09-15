'use client'

import Image from "next/image";
import styles from './login.module.css'
import { Input, f } from "@components/Input"
import { loginSubmit, SignButton } from "@components/SignButton";
import { useState } from "react";

const logoSize = 64

export default function Home() {

  const [studentId, studentIdSetter] = useState('');
  const [password, passwordSetter] = useState('');

  return (
    <main>
      <h1 className={styles.title}>
        Welcome To<br/>
        <span
          style={{color: "#3AE359"}}
        >SKKU</span> Scheduler
      </h1>
      <div className={styles.inputs}>
        <Input
          placeholder="Student ID"
          type="text"
          value={studentId}
          onChange={studentIdSetter}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={passwordSetter}
        />
      </div>
      <SignButton
        value="Login"
        onClick={loginSubmit}
      />
      <Image
        className={styles.logo}
        src={"/logo.png"}
        alt="Logo"
        width={logoSize}
        height={logoSize}
      />
    </main>
  );
}
