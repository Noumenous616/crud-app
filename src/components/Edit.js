import React, {useContext, useState, useEffect} from 'react'
import {GlobalContext} from "../context/State";
import {Link, useHistory} from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


export const Edit = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });
    const { users, editUser} = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;
    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId);
        setSelectedUser(selectedUser)
    }, [currentUserId, users])
    const onSubmit = () => {
        editUser(selectedUser)
        history.push('/');
    }
    let onChange = (e) => {
        setSelectedUser({...selectedUser,[e.target.name]: e.target.value})
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup >
                <Label>Name</Label>
                <Input type='text' name='name' value={selectedUser.name} onChange={onChange} placeholder='Enter some'></Input>
            </FormGroup>
            <Button  className='mx-1 my-1' type='submit'>Edit</Button>
            <Link to='/' className='btn btn-danger'>Cancel</Link>
        </Form>
    )
}
