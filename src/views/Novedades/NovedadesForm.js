import React from "react";
import { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { CKEditor } from 'ckeditor4-react';
import Logo from '../../img/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './NovedadesForm.css';

export default function NovedadesForm(news) {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState([]);
    const [value, setValue] = useState([]);
    let method = "";
    let url = "";

    if (news === []) {
        method = "POST";
        url = 'http://localhost:8000/news/news';
    }
    else {
        console.log(news)
        url = `http://localhost:8000/news/${news.id}`;
        method = "PATCH";
    };

    const onSubmit = async function (data) {
        try {
            console.log(data)
            const requestOptions = {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            const response = await fetch(url, requestOptions);
            console.log(response.status);
        } catch (err) {
        };
    };

    return (
        <div className="main">
            <div className="Novedades_Form animate__animated animate__fadeInLeft ">
                <img src={Logo} className="Logo" />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center">Crear Novedades</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" placeholder="example Marie Curie" required {...register('title')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" placeholder="name@example.com" required {...register('imageUrl')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Label>Contenido</Form.Label>
                        <CKEditor
                            onChange={evt => console.log(evt)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select aria-label="Default select example" required {...register('categoryId')}>
                            <option value="news">News</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
        </div>
    )
};