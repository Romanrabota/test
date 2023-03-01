import React, {useState,useEffect}  from "react";
import {getUsers}  from  '../api';
import UserCard  from  "./UserCard";
import Pagination from './Pagination';
import './style.css';



 
function UserList (props){
   const [users,setUsers] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(9);





   useEffect(()=>{
    getUsers().then(data => {
      const results = data;
      console.log("results",results);
      setUsers(results);
      console.log("users:",users)}
    );
    }, []); 
  
  
    /*const load = () => {
    getUsers().then(data => {
          const {results} = data;
          console.log("results",results);
          setUsers(results);
          console.log("users:",users);
    })*/


/*componentDidMount(){
  getUsers().then(data=>
    this.setState({
     users:data
      
    })
    ) 
}*/



// Get current posts

/*const renderUsers = () => {
let indexOfLastPost = currentPage * postsPerPage;
let indexOfFirstPost = indexOfLastPost - postsPerPage;
let currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

console.log("currentPosts:", currentPosts);
console.log("usersforPosts:", users);
<UserCard user={currentPosts}/>
}*/
/*const renderUsers = () => {

 

  console.log("users1:",users);
 return  users.map((user)=> <UserCard user={user} key={user.email}/>)

}*/

 // Change page
 const paginate = pageNumber => setCurrentPage(pageNumber);

 const [value,setValue]= useState('');

 const filteredUsers = users.filter(user=>{
     return user.name.toLowerCase().includes(value.toLowerCase())
 
 }) 


 /*
const renderUsers = () => {
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
 return  users.slice(indexOfFirstPost, indexOfLastPost).map((user)=> <UserCard user={user} key={user.id}/>)

}
*/



const renderUsers = () => {
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;

 

 return  filteredUsers.slice(indexOfFirstPost, indexOfLastPost).map((user)=> <UserCard user={user} key={user.id}/>)

}




return (
  <>
   <h1>Hello</h1>
  <div className="input"> <input type="text"
   onChange={(event)=>setValue(event.target.value)} 
   /></div>
  <section  className="card-container"> {renderUsers()}</section> 
  <Pagination
        postsPerPage={postsPerPage}
        totalPosts={users.length}
        paginate={paginate}
      />
  </>
  )
  }





export default UserList;





 

