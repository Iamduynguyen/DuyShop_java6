import React from 'react'

const Signin = () => {
    return (
        <div>
            <div class="container py-5" >
                <main className="w-25 m-auto my-3">
                <form action="" method="post">
                    <h1 className="h3 mb-3 fw-normal">Đăng nhập</h1>
                    <div class="form-floating mb-3">
                    <label style={{float: 'left'}} for="floatingInput">Email address</label>
                    <input type="email" className="form-control" id="floatingInput" placeholder="@email.com"/>
                    </div>
                    <div className="form-floating">
                    <label style={{float: 'left'}} for="floatingPassword">Password</label>
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    </div>
                    <br/>
                    <div className="form-group mb-3">
                        <label className="row px-3" >
                            <input  type="checkbox" name="remember"/> Remember me?
                            <input type="checkbox"
                                name="admin"/> Admin?
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <div className="checkbox mb-3 ">
                        <br/>
                        <label>
                            Chưa có tài khoản? <a href="/signup">Đăng ký</a>
                        </label>
                    </div>
                </form>
            </main>
            </div>
        </div>
    )
}

export default Signin
