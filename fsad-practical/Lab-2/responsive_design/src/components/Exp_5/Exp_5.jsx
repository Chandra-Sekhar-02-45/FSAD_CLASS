import './style.css';
import React from 'react';
export default function Exp_5(){
    return(

        <table border={1} className="login_form">
            <tr>
                <th className='text-center'>Login Form</th>
            </tr>
           <tr>
                <td>
                   Name : 
                </td>
                <td>
                   <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                </td>
           </tr>
           <tr>
                <td>
                      Password : 
                </td>
                <td>
                       <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                </td>
           </tr>
           <tr>
                <td>
                      Role :
                </td>
                <td>
                        <select className="form-control" id="role">
                            <option value="">Admin</option>
                            <option value="">Employee</option>
                            <option value="">Customer</option>
                        </select>
                </td>
           </tr>
           <tr>
            <td colSpan={2} >
                  <button className='btn btn-success m-2'>Login</button>
            </td>
           </tr>
        </table>
)
}