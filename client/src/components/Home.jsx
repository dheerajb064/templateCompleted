
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Jumbotron, Button } from "react-bootstrap";
import Main from "./Main";
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from "react";
import View from "./View"
import Update from "./Update"
import Delete from "./Delete"

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="App">
            <Container>

                <Jumbotron className="heading">
                    <h1 className="header">Profile and Account Settings</h1>
                    <h3 className="sub-header">View and update your Account details and more</h3>

                    <div className="auth">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="authPassword">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                </Jumbotron>
                <MemoryRouter>
                    <Switch>
                        <Route path="/create">
                            <Main email={email} password={password} />
                        </Route>
                        <Route path="/view">
                            <View email={email} password={password} />
                        </Route>
                        <Route path="/update">
                            <Update email={email} password={password} />
                        </Route>
                        <Route path="/delete">
                            <Delete email={email} password={password} />
                        </Route>
                    </Switch>
                    <ButtonToolbar className="custom-btn-toolbar">
                        <LinkContainer to="/create">
                            <Button className="button">Create</Button>
                        </LinkContainer>
                        <LinkContainer className="button" to="/view">
                            <Button>View</Button>
                        </LinkContainer>
                        <LinkContainer className="button" to="/update">
                            <Button>Update</Button>
                        </LinkContainer>
                        <LinkContainer className="button" to="/delete">
                            <Button>Delete</Button>
                        </LinkContainer>

                    </ButtonToolbar>
                </MemoryRouter>
            </Container>
        </div>
    )
}
