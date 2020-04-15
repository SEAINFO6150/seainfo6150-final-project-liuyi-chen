import React from 'react'
import Form from "../Form/Form";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
    return (
        <div>
           <h1> Contact Us </h1>
           <br></br>
           <br></br>
           <div className={styles.inform}>This is the contact information of us :</div>
           <br></br>
           <br></br>
           <table className={styles.theTable}>
             <tr>
                 <th>Phone Number</th>
                 <th>E-mail</th>
                 <th>Address</th>
             </tr>
             <tr>
              <td>123-456789</td>
              <td>bookstore@online.com</td>
              <td>Seattle,Washington</td>
             </tr>

           </table>
           <br></br>
           <div className={styles.inform}>Please leave your advice and information so we can give you feed back</div>
           <br></br>
           <br></br>
           <div className={styles.theForm} ><Form   /></div>
        </div>
    )
}

export default ContactUs
