import React, { useState } from "react";
import "./styles.css";

function MainForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setUsers([...users, formData]);

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="form-div">
      <div className="left">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Registration Form</legend>
            <table>
              <tbody>
                <tr>
                  <td className="label">Username:</td>
                  <td>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label">Email:</td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label">Password:</td>
                  <td>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label">Confirm Password:</td>
                  <td>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <input type="submit" value="Register" />
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
      </div>

      <div className="right">
        <table className="" border={1}>
          <caption>User Information</caption>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No users yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainForm;
