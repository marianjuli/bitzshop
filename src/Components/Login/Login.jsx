import React, { useState, useContext } from "react";
import { Fragment } from "react";
import UserContext from "../../context/UserContext";
import NotificationContext from "../../context/NotificationContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();

    const objUser = {
      username,
      password,
    };

    login(objUser);
    setNotification("success", `Bienvenido ${objUser.username}`);
    history.push("/");
  };

  return (
    <Fragment>
      <div className="container mt-5 mb-5">
        <h3>Login</h3>
        <form onSubmit={handleLogin} className="row">
          <div className="col-md-3">
            <input
              placeholder="Email"
              className="form-control"
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            ></input>
          </div>

          <div className="col-md-3">
            <input
              placeholder="Contraseña"
              className="form-control"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            ></input>
          </div>

          <div className="col-md-3">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;