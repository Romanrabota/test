import './style.css';
import { user } from "../types";
import { FunctionComponent} from "react";


interface CardProps  {
      user:user
     }

     export const UserCard: FunctionComponent<CardProps> =({user})=>{

     return (
       <div className="card-wrapper">
      <img src={user.owner.avatar_url} className="user-img"/> 
        <h2><div className="name"> {user.full_name} </div></h2> 
        <p>{user.html_url}</p>
        <p>{user.description}</p>
       </div> 
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
