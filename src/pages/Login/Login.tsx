import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Eye, EyeSlash, SignIn } from "phosphor-react";
import { colors } from "../../styles/colors";

import swal from "sweetalert";
import { showLoading } from "../../redux/actions";
import { config } from "../../util/config";

export default function Login(){
    const dispatch = useDispatch();
    const emailRedux = useSelector((state: any) => state.UserReducer.email);
    const passwordRedux = useSelector((state: any) => state.UserReducer.password);
    const navigateTo = useNavigate();
    const [showPassword, setShowPassword] = useState(false)


    return(
        <Container>
            <Row>
                <Col>
                    <h1>test</h1>
                </Col>
            </Row>
        </Container>

    )
}

export const styles = {
    linkButton: {
        color: colors.secondary, 
        textDecoration: 'none',
        fontSize: 12,
        fontFamily: 'Epilogue, sans-serif',
        fontWeight: 400,
    }
}
