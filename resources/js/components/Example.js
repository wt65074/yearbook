import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const {useState} = React;

function Example() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            axios.put('api/user/create', {name,  email,  password}, {headers: {Accept: 'application/json'}})
                                .then(res => {
                                    console.log("Res: ");
                                    console.log(res);
                                })
                                .catch(err => {
                                    console.log("Err: ");
                                    console.log(err.response);
                                })
                        }}>
                            <div className="flex flex-column">
                                <label>
                                    Name:
                                    <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                                </label>
                                <label>
                                    Email:
                                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                                </label>
                                <label>
                                    Password:
                                    <input type="text" value={password}
                                           onChange={event => setPassword(event.target.value)}/>
                                </label>
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example/>, document.getElementById('root'));
}
