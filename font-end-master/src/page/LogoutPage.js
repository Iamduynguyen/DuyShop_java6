import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const LogoutPage = (props) => {

    let history = useHistory();

    useEffect(() => {
        props.fnSetLogin("", "")
        history.push("/index.html")
    }, []);


    return (
        <>
            
        </>
    );
};

export default LogoutPage;
