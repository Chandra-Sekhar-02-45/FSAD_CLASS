import React from "react";
import ReactDOM from "react-dom";
import './style.css'
export default function Exp_5()
{
    return (
        <table className="login-form">
                <tr>
                    <th colSpan={2} >Login Form</th>
                </tr>
                <tr>
                    <td> Name:</td>
                    <td>
                        <input type="text" placeholder="NAME" className="form-control" name="t1" id="un" />
                    </td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>
                         <input type="password" placeholder="PASSWORD" className="form-control" name="t2" id="pwd" />
                    </td>
                </tr>
                <tr>
                    <td> Role: </td>
                    <td><select className="form-control" id="role">
                    <option>Admin</option>
                    <option>Employee</option>
                    <option>Customer</option>
                    </select>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button className='btn btn-success m-2' >Log In</button>
                    </td>
                </tr>
        </table>
    );
}