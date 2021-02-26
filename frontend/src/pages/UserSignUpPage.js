import React from 'react';
import {signUp} from "../api/apiCalls";

//Burası statefull bir component oluyor çünkü veri tutma gibi işlemler olacak.
class UserSignUpPage extends React.Component{

    state = {
        username : null,
        displayName : null,
        password : null,
        passwordRepeat: null,
        pendingApiCall : false
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
    

    onClickSignUp = async event => {
        event.preventDefault(); // browser tarafından yapılan submit işlemini engellemek için.
        
        const {username, displayName, password} = this.state;
        const body = {
            "username" : username,
            "displayName" : displayName,
            "password" : password
        }
        this.setState({pendingApiCall : true});

        try{
            const response = await signUp(body);
        } catch{}
        this.setState({pendingApiCall:false})
        
        // signUp(body)
        // .then(response =>{
        //     this.setState({pendingApiCall:false})
        // })
        // .catch(error =>{
        //     this.setState({pendingApiCall:false})
        // });
    }


    render(){
        
        const {pendingApiCall} = this.state;

        return(
            <div className ="container">
                <form>          
                  <h1 className="text-center">Sign Up</h1>
                  <div className="form-group">
                      <label>
                          Username
                      </label>
                      <input className="form-control" name="username" onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                      <label>
                          Display Name
                      </label>
                      <input className="form-control" name="displayName" onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                      <label>
                          Password
                      </label>
                      <input className="form-control" name="password" type="password" onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                      <label>
                          Password Repeat
                      </label>
                      <input className="form-control" name="passwordRepeat" type="password" onChange={this.onChange}/>
                  </div>
                  <div className="text-center mt-3" >
                      
                      <button className="btn btn-primary" onClick={this.onClickSignUp} disabled={pendingApiCall} > 
                      {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign Up
                    </button>
                  </div>
            </form>
            </div>
        )
    }
}

export default UserSignUpPage;