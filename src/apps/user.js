// import { useState } from "react";

export function User(props) {
    let salaries = props.user.salaries.map((salary, index) => {
        return <tr><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr>
      });
   
    return <>
        <div>User: {props.user.name} {props.user.last_name}</div>
        <div>Age: {props.user.age}</div>
        <div>Animals: {props.user.cat.name}, age: {props.user.cat.age}</div>
        <div>
            <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Salary</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {salaries}
            </tbody>
            </table>
        </div>
    </>;
};