import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
const Signup = () => {
    const {user} = useAuth()
    console.log(user)
    const [data, setData] = useState({ email: '', password: '' });

    const handleSignup = (e: any) => {
        e.preventDefault()
        console.log(data)

    }
    return (
        <div style={{
            width: '40',
            margin: 'auto'
        }}>
            <h1 className='text-center my-3'>Signup</h1>
            <Form onSubmit={handleSignup}>
                <Form.Group
                    className='mb-3'
                    controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        required
                        onChange={(e: any) => setData({ ...data, email: e.target.value })}
                        value={data.email}

                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e: any) => setData({ ...data, password: e.target.value })}

                        value={data.password}
                        required
                        type='password'
                        placeholder='Password'
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>SignUp</Button>


            </Form>

        </div>
    );
}

export default Signup;