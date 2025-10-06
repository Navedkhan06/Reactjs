import {useState} from "react";

export const DerivedState = () => {

    const [users, setUsers] = useState([
            { name: "Naved", age: 25 },
            { name: "Umair", age: 30 },
            { name: "Zaid", age: 40 },
            { name: "Kripanshu", age: 25 },
        ]);
     
    // Derived State : count of users    
    console.log(users);
    const userCount = users.length;
    // Derived state : average age of users
    const averageAge = (users.reduce((accum, currElem) => accum + currElem.age,0))/userCount;

    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                    users.map((currElem, index) => {
                        return (
                            <li key={index}>
                                {currElem.name} - {currElem.age} year old
                            </li>
                        );
                    })
                }
            </ul>
            <p>Total Users: {userCount}</p>
            <p>Average age: {averageAge}</p>
        </div>
    )
}