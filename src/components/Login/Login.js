import React, { useState, useEffect , useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';


const emailReducer = (state, action)=>{
  if(action.type === 'USER_INPUT'){
    return {
      value:action.payloadVal,
      isValid:action.payloadVal.includes('@')
    }
  }
  if(action.type === 'USER_BLUR'){
    return {
      value:state.value,
      isValid:state.value.includes('@')
    }
  }
   return {
     value:'',
     isValid:false
   }
}
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] =  React.useReducer(emailReducer , {
    value:'',
    isvalid:false
  })

  //useReducer takes Reducer (Ex:emailReducer -defined outside of our component scope bcz it doesn't need to interact with anything defined inside of our component and  all the data which is required and used in reducer func will be passed into this func when it is executed by the React automatically ) and intial value

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
      dispatchEmailState({
        type:'USER_INPUT',
        payloadVal:event.target.value
      })

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      emailState.value.includes('@') && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmailState({
      type:'USER_BLUR',
    })
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, enteredPassword);
  };

  
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input  id="email" type="email" label="email" value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} isValid={emailState.isValid}/>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
