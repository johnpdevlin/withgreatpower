import Head from 'next/head'
import React, {useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({td}) {
  // See https://en.reactjs.org/docs/hooks-effect.html
  useEffect(() => {

    // Run code on client-side only : ensure document is here
    if (typeof document !== undefined) {

      // load JS bootstrap dependency
      require('bootstrap/dist/js/bootstrap')   

    }
// Run useEffect only once
// Read https://css-tricks.com/run-useeffect-only-once/
}, []);
console.log(td);


  return (

    <div className={styles.container}>
      <Head>
        <title>WithGreatPower - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
        </h1>

        <p className={styles.description}>
          Here's all the current TDs of Dáil Éireann
 
        </p>


          <div className="card">
            
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Party</th>
                <th scope="col">Constituency</th>
              </tr>
            </thead>
            <tbody>
            {td.results.map(td => (
                                              <tr>
                                              <td>
                                                <Link href={`/td/${td.member.memberCode}`}>
                                                  {td.member.fullName}
                                                </Link>
                                              </td>
                                              <td>
                                                <Link href={`/party/${td.member.memberships[0].membership.parties[0].party.partyCode}}`}>{td.member.memberships[0].membership.parties[0].party.showAs}
                                                </Link>
                                              </td>
                                              <td>
                                                <Link href={`/constituency/${td.member.memberships[0].membership.represents[td.member.memberships[0].membership.represents.length-1].represent.representCode}`}>
                                                  {td.member.memberships[0].membership.represents[td.member.memberships[0].membership.represents.length-1].represent.showAs}
                                                </Link>
                                              </td>
                                            </tr>
                                    ))}
            </tbody>
          </table>
          </div>


       
      </main>

    </div>
  )
}

export const getStaticProps = async () => {

  // FETCH TD DATA
  const td_api_url = `https://api.oireachtas.ie/v1/members?date_start=1900-01-01&chamber_id=&chamber=dail&house_no=33&date_end=2099-01-01&limit=200`;
  const tdRes = await fetch(td_api_url); 
  const tdData = await tdRes.json();

  
  return { 
      props: { 
          td: tdData,
      },
  };
}

