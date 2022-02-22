import React from "react";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './FormContact.css'
import 'animate.css';
import Logo from './Logo.png';
import { useForm } from "react-hook-form";

export default function FormContact() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="main">
            <div className="flex-child animate__animated animate__fadeInLeft ">
                <img src={Logo} className="Logo" />
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="Form-Contact flex-child animate__animated animate__fadeInRight">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center">Contactate con nosotros</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="example Marie Curie" required {...register("firstName")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" required {...register("email")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={6} required {...register("message")} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
        </div>
    )
}