import React from 'react'
import styles from "./Error.module.css"

const Error = () => {
    return (
        <div className={styles.container}>
            <ul></ul>
           <div> 
               <h1>404 Not Found</h1>
               </div>
           <div className={styles.text}>
               <p>
               The page you find doesn't exist!
               </p>
               <p>
                Please check the input!
               </p>
               </div>
        </div>
    )
}

export default Error
