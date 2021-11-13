import React from "react";
import Header from "components/admin/header";
import Nav from "components/admin/nav";

const AdminLayout = (props) => {
  return (
    <div>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {props.children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
