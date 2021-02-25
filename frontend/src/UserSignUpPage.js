import React from 'react';
import axios from "axios";

//Burası statefull bir component oluyor çünkü veri tutma gibi işlemler olacak.
class UserSignUpPage extends React.Component{

    state = {
        username : null,
        displayName : null,
        password : null,
        passwordRepeat: null
    }


    onChange = event => {

        // const value = event.target.value;
        // const name = event.target.name;
        // Aynı işlemi object destructuring ile de yapabiliriz
        const {value, name } = event.target; // tek satır haline indirgiyebiliyoruz.
        this.setState({
            [name] : value
        })
    }
    // onChangeUsername = event =>{
    //     this.setState({
    //         username : event.target.value
    //     })
    // };
    

    onClickSignUp = event => {
        event.preventDefault(); // browser tarafından yapılan submit işlemini engellemek için.
        
        const {username, displayName, password} = this.state;
        const body = {
            "username" : username,
            "displayName" : displayName,
            "password" : password
        }

        axios.post("/api/1.0/users",body);
    }


    render(){
        return(
            <form>          
                  <h1>Sign Up</h1>
                  <div>
                      <label>
                          Username
                      </label>
                      <input name="username" onChange={this.onChange}/>
                  </div>
                  <div>
                      <label>
                          Display Name
                      </label>
                      <input name="displayName" onChange={this.onChange}/>
                  </div>
                  <div>
                      <label>
                          Password
                      </label>
                      <input name="password" type="password" onChange={this.onChange}/>
                  </div>
                  <div>
                      <label>
                          Password Repeat
                      </label>
                      <input name="passwordRepeat" type="password" onChange={this.onChange}/>
                  </div>
                  <div>
                      <button onClick={this.onClickSignUp} > Sign Up</button>
                  </div>
            </form>
        )
    }
}

export default UserSignUpPage;