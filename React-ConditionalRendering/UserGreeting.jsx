function UserGreeting(props) {
//     if (props.isLoggedIn) {//conditional statement
//       return <h1>Welcome back King {props.username}</h1>;
//     } else {
//       return <h1>Please log in to continue.</h1>;
//     }
//   }
   return(props.isLoggedIn ? <h1 className="Welcome-message">Welcome {props.username}</h1>:<h1 className="login-prompt">Please Log in</h1>)//ternary operator
}
  export default UserGreeting;
  