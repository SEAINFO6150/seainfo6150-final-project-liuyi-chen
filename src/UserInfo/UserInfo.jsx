import React from 'react'

const UserInfo = () => {
    return (
        <div>
           <h1> User Information </h1>
           <img src="/images/portrait.jpg" />
           <table>
             <tr>
                 <th>Age</th>
                 <th>Phone Number</th>
                 <th>E-mail</th>
                 <th>Address</th>
             </tr>
             <tr>
              <td>55</td>
              <td>987-654321</td>
              <td>consumer@book.com</td>
              <td>Seattle,Washington</td>
             </tr>

           </table>
           <button>Edit</button>
        </div>
    )
}

export default UserInfo
