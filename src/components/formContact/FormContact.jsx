import React from "react";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Logo from './Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './FormContact.css';

export default function FormContact(){
    const { register, handleSubmit } = useForm();
    const [Data,setData]=useState([]);
    const onSubmit = data => setData(data);
    console.log(Data)
    const Swal = require('sweetalert2')
    /*const alertSend = () => {
        Swal.fire({
            icon: 'success',
            title: 'mensaje enviado',
            showConfirmButton: false,
            timer: 1500
        })
    }
    */
    return (
        <div className="main">
            <div className="flex-child animate__animated animate__fadeInLeft ">
                <img src={Logo} className="Logo" />
                <p className="text-center">
                    Si estas interesado en ser voluntario de nuestra comunidad
                    o deseas colaborar con lo que puedas o dar apoyo economicamente,
                    No dudes en contactarte con nosotros😊.
                </p>
            </div>
            <div className="Form-Contact flex-child animate__animated animate__fadeInRight">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center">¡Envianos Un Mensaje!</h2>
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
};