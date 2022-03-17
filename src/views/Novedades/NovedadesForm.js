import React from "react";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { CKEditor } from 'ckeditor4-react';
import Logo from '../../img/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './NovedadesForm.css';

export default function NovedadesForm(news) {
    const { saveForm, handleSubmit } = useForm();
    const [data, setData] = useState([]);
    let method = "";
    let url="";

    if (news) {
        console.log(news)
        url = `http://localhost:8000/news/${news.id}`;
        method = "PATCH";
    }
    else {
        method = "POST";
        url = 'http://localhost:8000/news/news';
    };

    const onSubmit = async data => {
        try {
            const requestOptions = {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            const response = await fetch( url, requestOptions);
            console.log(response.status);
        } catch (err) {
        };
    };

    return (
        <div className="main">
            <div className="Novedades_Form animate__animated animate__fadeInLeft ">
                <img src={Logo}  className="Logo" />
                <Form >
                    <h2 className="text-center">Crear Novedades</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" placeholder="example Marie Curie" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" placeholder="name@example.com" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Label>Contenido</Form.Label>
                        <CKEditor />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control type="select" rows={6} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
        </div>
    )
};