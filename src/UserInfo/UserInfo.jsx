import React from 'react'
import styles from "./UserInfo.module.css";
import Form from "./Form.jsx"


const UserInfo = () => {
    return (
           <div>
           <h1> User Information </h1>
           <ul className={styles.ui}>
          <ol> <img src="/images/portrait.jpg" className={styles.image} /></ol>
          <ol>
           <table className={styles.theTable}>
             <tr>
                <th>User Name</th>
                 <th>Age</th>
                 <th>Phone Number</th>
                 <th>E-mail</th>
                 <th>Address</th>
             </tr>
             <tr>
                 <td>Alice Green</td>
              <td>55</td>
              <td>987-654321</td>
              <td>consumer@book.com</td>
              <td>Seattle,Washington</td>
             </tr>

           </table>
           </ol>
           </ul>
           <div className={styles.inform}>If you want to edit your information,please fill this form:</div>
          <div className={styles.theForm}> <Form /></div>
          
        </div>
    )
}

export default UserInfo
