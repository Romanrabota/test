import { user } from "../types";
import { FunctionComponent} from "react";
import {Cardwrapper,Name,Userimg,Description} from "./style"

interface CardProps  {
      user:user
     }

     export const UserCard: FunctionComponent<CardProps> =({user})=>{

     return (
    
    
     <div>
     <Cardwrapper>
      
      <Userimg src={ user.owner.avatar_url} /> 
        <h2> <Name><div> {user.full_name} </div></Name></h2> 
        <p>{user.html_url}</p>
        <p> <Description>{user.description}</Description></p>
        </Cardwrapper>
        </div>
     
      
) 
}

export default UserCard;
