

const User = ({user}) => {
    console.log(user)
    const {id, name, username, email} = user; 
    return (
        <div style={{border: "2px solid black", borderRadius: "10px", padding: "10px"}}>
            <h2>name: {name}</h2>
            <h3> usename: {username}</h3>
            <h4>email : {email} </h4>
            <span><small>id: {id} </small></span>
        </div>
    );
};

export default User;