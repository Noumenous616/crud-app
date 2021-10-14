import React, {useContext, useState} from 'react'
import {GlobalContext} from "../context/State";
import {v4 as uuid} from 'uuid';
import {Link, useHistory} from 'react-router-dom'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


export const Add = () => {
    const [name, setName] = useState('');
    const {addUser} = useContext(GlobalContext);
    const history = useHistory();
    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser)
        history.push('/');


    }
    let onChange = (e) => {
        setName(e.target.value);

    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input value={name} onChange={onChange} type='text' placeholder='Enter some'></Input>
            </FormGroup>
            <Button className='mx-1 my-1' type='submit'>Submit</Button>
            <Link to='/' className='btn btn-danger'>Cancel</Link>
        </Form>
    )
}
