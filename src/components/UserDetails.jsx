import React, { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';
import {Link,useParams} from "react-router-dom";

const UserDetails = (props) => {

    const user = useContext(UserContext);
    
    

    return (
        <div>
        {/* {console.log(user)} */}
           <p>ID: {user.id}</p>
           <p>FirstName: {user.name.firstname}</p>
           <p>LastName: {user.name.lastname}</p>
           <p>Email: {user.email}</p>
           <p>City: {user.address.city}</p>
           <p>Number: {user.address.number}</p>
           <p>Phone: {user.phone}</p>
           <Link to="/products">Back to Store</Link>
        </div>
    );
};

export default UserDetails;