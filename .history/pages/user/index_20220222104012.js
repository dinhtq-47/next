import React from "react";

const User = ({ user }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body text-center">
            <h3>{user.name}</h3>
            <p>Email: {user.email} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
