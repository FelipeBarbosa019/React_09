import "../App.css";
import { Button } from "../components/Button";
import { UserLoginContext } from "../contexts/LoginUser";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TextRegister } from "../styles";
import ModalRender from "../components/ModalRender";

function Register() {
    const [modalOpen, setModal] = useState(false);
    const [userName, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [pass, setPass] = useState("");
    const [userData, setUserData] = useState(
        "Falha ao cadastrar, problema na conexão com a API"
    );

    function openModal() {
        setModal(true);
    }

    return (
        <header className="App-header">
            <div>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic"
                        label="Username"
                        variant="standard"
                        onChange={(e) => setUser(e.target.value)}
                    />
                </Box>

                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic"
                        label="E-mail"
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic"
                        label="Primeiro nome"
                        variant="standard"
                        onChange={(e) => setFirst(e.target.value)}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic"
                        label="Último nome"
                        variant="standard"
                        onChange={(e) => setLast(e.target.value)}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic"
                        label="Senha"
                        variant="standard"
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </Box>
            </div>
            <Button
                onClick={() => {
                    openModal();
                    const fetchData = async () => {
                        const response = await window
                            .fetch("http://localhost:8080/users", {
                                method: "POST",
                                headers: {
                                    "content-type":
                                        "application/json;charset=UTF-8",
                                },
                                body: JSON.stringify({
                                    username: userName,
                                    email: email,
                                    first_name: firstName,
                                    last_name: lastName,
                                    password: pass,
                                }),
                            })
                            .then((response) => response.json());
                        const handledANS = JSON.stringify(response.res).replace(
                            /["]/g,
                            ""
                        );

                        setUserData(handledANS);
                    };

                    fetchData();
                }}
            >
                Cadastrar
            </Button>

            <Link
                to="/"
                id="text_Register"
                style={{
                    textDecoration: "none",
                    color: "white",
                }}
            >
                <TextRegister>Entrar</TextRegister>
            </Link>

            {modalOpen ? (
                <ModalRender onClose={() => setModal(false)}>
                    <b>{userData}</b>
                    <Link
                        to="/"
                        id="text_Register"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <Button> entrar</Button>
                    </Link>
                </ModalRender>
            ) : (
                <></>
            )}
        </header>
    );
}

export default Register;
