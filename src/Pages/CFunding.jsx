import React, { useState } from 'react'
import styles from "./Crowd.module.css";
import { CVideo } from './CVideo';
import data1 from "./sam.json"




export const CFunding = () => {
  
    const [details] = useState(data1);
    return (
        <>
           
            <div>
                <div className={styles.headingtext}>

                    <h1>What is Crowdfunding?</h1>
                    <p>
                        In its simplest form, Crowdfunding
                        is a practice of giving monetary funds
                        to overcome specific social, cultural,
                        or economic hurdles individuals face in
                        their daily lives.
                    </p>
                </div>

                <div>
                    {details.map((item1) => {
                        return <CVideo data={item1} />
                    })}

                </div>

                </div>

          
            <div className={styles.main}>

            </div>
       

        </>
    )
}

