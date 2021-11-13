import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { signin } from "../../api/authAPI";
import { isAuthenticated, authenticate } from "../../auth";
import "../../pages/website/css/user.css";
import {Link} from "react-router-dom";

const UserClient = () => {
    console.log(isAuthenticated())
  //   const { id } = isAuthenticated();
  //   const { register, handleSubmit } = useForm();
  //   const [error, setError] = useState("");
  //   const [success, setSuccess] = useState(false);
  //   const onSubmit = async (user) => {
  //     try {
  //       const { data } = await signin(user);
  //       authenticate(data.user);
  //       setSuccess(true);
  //       // e.target.reset();
  //     } catch (error) {
  //       setError(error.response.data);
  //     }
  //   };
  //   const redirectUser = () => {
  //     if (success) {
  //       if (id == 1) {
  //         return <Redirect to="/admin" />;
  //       } else {
  //         return <Redirect to="/" />;
  //       }
  //     }
  //   };
  return (
    <div className="page-content page-container" id="page-content" style={{marginTop:'150px',marginBottom:'100px',marginLeft:'70px'}}>
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center">
                    <div className="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className="img-radius"
                        alt="User-Profile-Image"
                      />
                    </div>
                    {/* <h6 className="f-w-600">Hembo Tingor</h6> */}
                    <Link to="/changeuser" style={{textDecoration:'none',}}><h5>Change</h5></Link>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h3 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h3>
                    <div className="row">
                    <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Name</p>
                        <h6 className="text-muted f-w-400">{isAuthenticated().username}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{isAuthenticated().email}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Address</p>
                        <h6 className="text-muted f-w-400">Phu Tho,Viet Nam</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">0987654321</h6>
                      </div>
                    </div>
                    {/* <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Projects
                    </h6> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserClient;
