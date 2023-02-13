import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { EventListener } from '@/game-engine/events'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (


    <div className="container" id="main-container">

    <div className="container" id="game"></div>
    <div className="container" id="workspace">

        <div className="container" >
          <form >
            <input id="build-project" className="form-input" type="submit" value="Build" name="buildButton"/>
            <input id="test-input" className="form-input" type="submit" value="Test" name="testButton"/>
            <input className="form-input" type="submit" value="Open" name="openButton"/>
            <input className="form-input" type="submit" value="Save" name="saveButton"/>
          </form>
          <form >
            <input id="game-width-bar" className="form-input" type="text" placeholder="width" name="username" minLength={2} maxLength={10} />
            <input id="game-height-bar" className="form-input" type="text" placeholder="height" name="username" minLength={2} maxLength={10} />
            <input className="form-input" id="make-canvas" type="submit" value="Apply" name="submitButton"/>
            <input className="form-input" id="reset-canvas" type="submit" value="Reset" name="resetButton"/>
          </form>
        </div>
        <div className="container">
          <h1>Tools</h1>
          <form id="tools">
            <input className="form-input" id="add-square" type="submit" value="Add Square" name="toolButton"/>
            <input id="sq-pos-x" className="form-input" type="number" placeholder="X" name="square-pos-x" />
            <input id="sq-pos-y" className="form-input" type="number" placeholder="Y" name="square-pos-y" />
          </form>
        </div>
      <div className="container">
        <h1>Assets</h1>
        <form id="assets">
          <input id="load-asset-bar" className="form-input" type="file"  name="load-asset" /> {/*  multiple  */}
       {/*   <input id="load-asset" className="form-input" type="submit" value="Load" name="assetButton"/> */}
          <div id="output"></div>
          
        </form>
      </div>

    </div>

  </div>

  );
}

{/* original */}

    {/* <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </> */}
