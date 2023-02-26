import React from "react";
import {getUsers}  from  '../api';
import UserCard  from  "./UserCard";
import './style.css';
 
class UserList extends React.Component {
       constructor(props) {
        super(props);
        this.state ={
            users:[]
        }
}



componentDidMount(){
   /* const res =*/ getUsers().then(data=>
    this.setState({
     users:data
      
    })
    ) 
}


renderUsers = () =>{
const {users} = this.state;
return users.map((user)=> <UserCard user={user}  key={user.id}  />) 
}




render() {
   const {users} = this.state;
   console.log("users:",users)
    return (
      <>
     <h1>Hello</h1>
   <section  className="card-container"> {users.length ? this.renderUsers() : null} </section> 

      </>
       )
    }
}

export default UserList;





 

