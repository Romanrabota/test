import React, {useState,useEffect,FC}  from "react";
import {getUsers}  from  '../api';
import UserCard  from  "./UserCard";
import Pagination from './Pagination';
import {user} from "../types";
import {Cardcontainer,Input,Inputdiv} from "./style"

interface UserListProps {
  user?: user[];
}



  const UserList: FC<UserListProps> =({user})=>{
  const [users,setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);








  useEffect(()=>{
   getUsers().then(data => {
     const results = data;
     console.log("results",results);
     setUsers(results);
     console.log("users:",users)}
   );
   }, []); 
 
 

  
  

// Change page
const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

const [value,setValue]= useState<string>('');

const filteredUsers = users.filter(user=>{
    return user.name.toLowerCase().includes(value.toLowerCase())
}) 



const renderUsers = () => {
 let indexOfLastPost = currentPage * postsPerPage;
 let indexOfFirstPost = indexOfLastPost - postsPerPage;

 

return  filteredUsers.slice(indexOfFirstPost, indexOfLastPost).map((user)=> <UserCard user={user} key={user.id}/>)


}


return (
 <>
  <Inputdiv>
 <Input type="text"
  onChange={(event)=>setValue(event.target.value)} 
  /></Inputdiv>
  <section> <Cardcontainer>{renderUsers()}</Cardcontainer></section>
 <Pagination
       postsPerPage={postsPerPage}
       totalPosts={users.length}
       paginate={paginate}
     />
     
 </>
 )
}











 /*
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
  
  
   

 // Change page
 const paginate = pageNumber => setCurrentPage(pageNumber);

 const [value,setValue]= useState('');

 const filteredUsers = users.filter(user=>{
     return user.name.toLowerCase().includes(value.toLowerCase())
 
 }) 


 



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
*/


export default UserList;





 

