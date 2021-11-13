import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import image_upload from '../images/upload.jpg'

const LoginView = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <>
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Login</li>
                    </ol>
                </div>
                {/* End .container */}
            </nav>
            {/* End .breadcrumb-nav */}
            <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
                 style={{backgroundImage: 'url("assets/images/backgrounds/login-bg.jpg")'}}>
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <ul className="nav nav-pills nav-fill" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="signin-tab-2" data-toggle="tab" href="#signin-2"
                                       role="tab" aria-controls="signin-2" aria-selected="false">Đăng nhập</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="register-tab-2" data-toggle="tab"
                                       href="#register-2" role="tab" aria-controls="register-2"
                                       aria-selected="true">Đăng ký</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="signin-2" role="tabpanel"
                                     aria-labelledby="signin-tab-2">
                                    <form onSubmit={handleSubmit(props.fnSubmitLogin)}>
                                        <div className="form-group">
                                            <label htmlFor="singin-email">
                                                Tên đăng nhập hoặc địa chỉ email *
                                            </label>
                                            <input type="text" className="form-control" id="singin-email"
                                                   {...register('signinUsername', {
                                                       required: "Vui lòng nhập tên đăng nhập hoặc địa chỉ email"
                                                   })}
                                            />
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-group">
                                            <label htmlFor="singin-password">Mật khẩu *</label>
                                            <input type="password" className="form-control" id="singin-password"
                                                   {...register('signinPassword', {
                                                       required: "Vui lòng nhập tên đăng nhập hoặc địa chỉ email"
                                                   })}
                                            />
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-footer">
                                            <button className="btn btn-primary">
                                                <span>Đăng nhập</span>
                                                <i className="icon-long-arrow-right"/>
                                            </button>
                                            {/*<div className="custom-control custom-checkbox">*/}
                                            {/*    <input type="checkbox" className="custom-control-input" id="signin-remember" />*/}
                                            {/*    <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>*/}
                                            {/*</div>/!* End .custom-checkbox *!/*/}
                                            <a href="#" className="forgot-link">Quên mật khẩu?</a>
                                        </div>
                                        {/* End .form-footer */}
                                    </form>
                                    <div className="form-choice">
                                        <p className="text-center">Đăng nhập với tài khoản</p>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login btn-g">
                                                    <i className="icon-google"/>
                                                    Google
                                                </a>
                                            </div>
                                            {/* End .col-6 */}
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login btn-f">
                                                    <i className="icon-facebook-f"/>
                                                    Facebook
                                                </a>
                                            </div>
                                            {/* End .col-6 */}
                                        </div>
                                        {/* End .row */}
                                    </div>
                                    {/* End .form-choice */}
                                </div>
                                {/* .End .tab-pane */}
                                <div className="tab-pane fade" id="register-2" role="tabpanel"
                                     aria-labelledby="register-tab-2">
                                    <form onSubmit={props.fnSubmitRegister} id="id-form-register">
                                        <div className="form-group">
                                            <label>Tên đăng nhập *</label>
                                            <input type="username" className="form-control" maxLength={32}
                                                   name="username" required/>
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-group">
                                            <label>Mật khẩu *</label>
                                            <input type="password" className="form-control" maxLength={50}
                                                   name="password" required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Nhập lại mật khẩu *</label>
                                            <input type="password" className="form-control" maxLength={50}
                                                   name="registerPassword" required/>
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-group">
                                            <label>Họ và tên *</label>
                                            <input type="text" className="form-control" maxLength={50}
                                                   name="fullName" required/>
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-group">
                                            <label>Ngày sinh *</label>
                                            <input type="text" className="form-control" maxLength={10}
                                                   name="dateOfBirth" required/>
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-group">
                                            <label>Số điện thoại *</label>
                                            <input type="text" className="form-control" maxLength={15}
                                                   name="phoneNumber" required/>
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-group">
                                            <label>Địa chỉ email *</label>
                                            <input type="email" className="form-control" maxLength={50}
                                                   name="email" required/>
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-group">
                                            <label>Địa chỉ *</label>
                                            <input type="address" className="form-control" maxLength={100}
                                                   minLength={10} name="address" required/>
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-group">
                                            <label>Ảnh đại diện *</label>
                                            <img src={image_upload} alt="Ảnh đại điện" style={{maxHeight: 300}}
                                                 id="img-avatar-upload"
                                                 onClick={() => document.getElementById('register-avatar').click()}/>
                                            <input type="file" className="form-control" id="register-avatar"
                                                   onChange={props.fnUploadFileAvatar} required accept={"image/jpeg"}
                                                   hidden={true}/>
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-outline-primary-2">
                                                <span>Đăng ký</span>
                                                <i className="icon-long-arrow-right"/>
                                            </button>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="register-policy-2" name="checkbox" required/>
                                                <label className="custom-control-label" htmlFor="register-policy-2">
                                                    Tôi đồng ý <Link to="#">điều khoản sử dụng</Link> website *</label>
                                            </div>
                                            {/* End .custom-checkbox */}
                                        </div>
                                        {/* End .form-footer */}
                                    </form>
                                </div>
                                {/* .End .tab-pane */}
                            </div>
                            {/* End .tab-content */}
                        </div>
                        {/* End .form-tab */}
                    </div>
                    {/* End .form-box */}
                </div>
                {/* End .container */}
            </div>
            {/* End .login-page section-bg */}
        </>
    );
};

export default LoginView;
