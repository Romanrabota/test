import './style.css';


function UserCard (props) {
const {user:{full_name:fullname,html_url:url,description,name}, user:{owner: {avatar_url:avurl}}} = props;
return (
       <div className="card-wrapper">
      <img src={avurl} className="user-img"/> 
        <h2><div className="name"> {fullname} {name} </div></h2> 
        <p>{url}</p>
        <p>{description}</p>
       </div> 
) 
}


export default UserCard;
