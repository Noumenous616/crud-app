import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/State";

import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';



export const List = () => {
    const { users, removeUser } = useContext(GlobalContext);
    console.log(users);
    return (
       <ListGroup>
           {users.length > 0 ? (
               <>
                   {users.map(user =>(
                       <ListGroupItem className='d-lg-flex' key={user.id}>
                           <strong>{user.name}</strong>
                           <div className='m-lg-auto'>
                               <Link className='btn btn-warning mx-2' to={`/edit/${user.id}`}>Edit</Link>
                               <Button onClick={() => removeUser(user.id)} color='danger'>Delete</Button>
                           </div>
                       </ListGroupItem>



                   ))}
               </>
           ) : (
               <h4 className='text-center'>No User</h4>
           )}



       </ListGroup>
    )
}