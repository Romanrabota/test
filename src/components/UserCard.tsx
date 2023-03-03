import './style.css';
import { user } from "../types";
import { FunctionComponent} from "react";
import {Cardwrapper,Name,Userimg,Description} from "./style"

interface CardProps  {
      user:user
     }

     export const UserCard: FunctionComponent<CardProps> =({user})=>{

     return (
    /*  { <div className="card-wrapper"> }*/
     
     <div>
      <Cardwrapper>
      
      <Userimg src={ user.owner.avatar_url} /> 
        <h2> <Name><div> {user.full_name} </div></Name></h2> 
        <p>{user.html_url}</p>
        <p> <Description>{user.description}</Description></p>
        </Cardwrapper>
        </div>
      /* {  </div> }*/
) 
}
/*function UserCard (props) {
const {user:{full_name:fullname,html_url:url,description,name}, user:{owner: {avatar_url:avurl}}} = props;
console.log("props",props);
return (
       <div className="card-wrapper">
      <img src={avurl} className="user-img"/> 
        <h2><div className="name"> {fullname} {name} </div></h2> 
        <p>{url}</p>
        <p>{description}</p>
       </div> 
) 
}*/






export default UserCard;
