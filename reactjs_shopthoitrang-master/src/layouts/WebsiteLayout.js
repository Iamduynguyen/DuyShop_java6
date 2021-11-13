import React from "react";
import Header from "../components/website/header";
import Footer from "../components/website/footer";

const WebsiteLayout = (props) => {
  return (
    <div>
      <Header {...props} />
      <main className="">
        <div className="" >{props.children}</div>
      </main>
      <Footer />
      
    </div>
  );
};

export default WebsiteLayout;
