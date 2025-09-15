'use client'

import Image from "next/image";
import styles from './signUp.module.css'
import { DropdownInput } from "./_components/DropdownInput"
import { Input, f } from "@components/Input"
import { signUpSubmit, SignButton } from "@components/SignButton";
import { useSuspenseQuery } from "@apollo/client/react";
import { GET_MAJORS } from "@/graphql/client/major/queries";
import { useState } from "react";

const logoSize = 64

export default function Home() {
  const { data } = useSuspenseQuery(GET_MAJORS, {
    context: {
      targetApi: 'client'
    }
  })

  const majors = data.getMajors.map((d) => {
    return d.majorName
  })

  const [selectedMajorIdx, majorSetter] = useState(-1);
  const [selectedSemesterIdx, semesterSetter] = useState(-1);
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
        <DropdownInput
          placeholder="Major"
          options={majors}
          setter={majorSetter}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={passwordSetter}
        />
        <DropdownInput
          placeholder="Semester"
          options={["1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2", "More"]}
          setter={semesterSetter}
        />
      </div>
      <SignButton
        value="Sign Up"
        onClick={signUpSubmit}
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
