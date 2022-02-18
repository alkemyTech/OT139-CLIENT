import React from "react";
import { Form, Button ,Img } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './FormContact.css'
import Logo from './Logo.png';

export default function FormContact() {

 return(
        <div className="">
          <div className="Form-Text">
                <img src={Logo} className="Logo"/>
                <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
          </div>
          <div className="Form-Contact">
                <Form>
                    <h2 className="text-center">Contactate con nosotros</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="example Marie Curie" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                     Enviar
                    </Button>
                </Form>
            </div>
        </div>
    )
}