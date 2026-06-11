'use client'

export const dynamic = 'force-dynamic';

import Image from "next/image";
import styles from './login.module.css'
import { Input, f } from "@components/Input"
import { loginSubmit, SignButton } from "@components/SignButton";
import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LOGIN } from "@/graphql/client/user/mutations";

const logoSize = 64

export default function Home() {

  const [studentId, studentIdSetter] = useState('');
  const [password, passwordSetter] = useState('');

  const router = useRouter();

  const [login] = useMutation(LOGIN, {
        context: {
            targetApi: 'client'
        },
        onError: () => {
            //toast.error('Failed to create problem')
            console.log('Error');
        },
        onCompleted: () => {
            //toast.success('Problem created successfully')
            router.push('/')
            router.refresh()
        }
    });

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
        onClick={() => login({
          variables: {
              studentId,
              password
          }
        })}
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
