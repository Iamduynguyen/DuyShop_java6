import React, {useEffect} from 'react';
import LoginView from "../view/LoginView";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import ServiceAPI from "../service/ServiceAPI";
import $ from 'jquery'
import swal from 'sweetalert'
import UserAPI from "../service/UserAPI";

const LoginPage = (props) => {

    let history = useHistory();

    let fileNameAvatar = ""

    useEffect(() => {
        if (props.userLogin !== null && props.userLogin !== undefined && props.userLogin.trim() !== '') {
            history.push("/index.html")
        }
    }, [history, props.userLogin]);


    const fnSubmitLogin = (data) => {
        props.fnSetLogin(data.signinUsername, data.signinPassword)
    }

    const fnSubmitRegister = async (e) => {
        e.preventDefault()
        console.log()
        let data = $('#id-form-register').serializeArray()
        let obj = {};
        for (let i = 0; i < data.length; i++) {
            let name = data[i].name;
            obj[name] = data[i].value;
        }
        obj.avatar = fileNameAvatar
        obj.urlClient = 'http://localhost:3000'
        console.log(obj)
        await UserAPI.register(obj).then(s => {
            swal("Thành công", "Bạn đã đăng ký tài khoản thành công, vui lòng kiểm tra email.", "success")
            window.location = '/login'
        }).catch(e => {
            swal("Thất bại", "Đăng ký tài khoản không thành công", "error")
        })
    }

    const fnUploadFileAvatar = async (e) => {
        if (e.target.files && e.target.files[0]) {
            let data = await ServiceAPI.toBase64(e.target.files[0])
            let base = data.substring(data.indexOf(",") + 1, data.length)
            fileNameAvatar = ServiceAPI.convertNameFile(e.target.files[0].name)
            await ServiceAPI.saveToGit(base, fileNameAvatar)
            document.getElementById('img-avatar-upload').src = data
        }
    }

    return (
        <>
            <LoginView
                fnSubmitLogin={fnSubmitLogin}
                fnSubmitRegister={fnSubmitRegister}
                fnUploadFileAvatar={fnUploadFileAvatar}
            />
        </>
    )
}

export default LoginPage