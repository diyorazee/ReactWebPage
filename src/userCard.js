import React from "react";
const Users = ({loding, users}) => {
    return loding ? (
        <div id="main" align="center">
            <img
                src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                alt="loading.."
                className="loader"
            />
        </div>
    ) : (
        <div id="main" >
            {users.map((user) => (
                <div className="info" key={user.id}>
                    {console.log(user)}
                    <div className="profile">
                        <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                        <h1 className="name">
                            {user.first_name} {user.last_name}
                        </h1>
                        <p className="email">{user.email}</p>
                        <p>User id: {user.id}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Users;
