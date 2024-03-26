import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../styles/colors";

import swal from "sweetalert";


export default function Home(){
    const navigateTo = useNavigate();


    return(
        <Container fluid="sm">
            <Row>
                <Col>
                    
                </Col>
            </Row>
        </Container>
    )
}