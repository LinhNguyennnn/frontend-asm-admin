import React from "react";
import * as Custom from "./typeHeader";
import { Link } from "react-router-dom";
import { } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-regular-svg-icons";

export default () => {
  return (
    <Custom.Header>
      <Custom.Wrapper>
        <Custom.Nav>
          <Custom.NavHeader>
            <Custom.UlCustom>
              <li>
                <Link to="/admin">
                  <img className="img-circle" src={`${process.env.REACT_APP_PORT}/images/user/67396445_715918092179622_3974737570952118272_n.jpg`} alt="user-img" width="36" />
                  <Custom.AdminName>Linh Nguyen</Custom.AdminName>
                </Link>
              </li>
            </Custom.UlCustom>
          </Custom.NavHeader>
        </Custom.Nav>
      </Custom.Wrapper>
      <Custom.Dashboard>
        <Custom.Logo>
          <Link to="/admin"><img src={require("../images/icons/logo-01.png")} alt="IMG-LOGO" /></Link>
        </Custom.Logo>
        <Custom.UlListSelect>
          <li>
            <Link to="/admin"><i className="fa fa-table fa-fw"></i>Product Table</Link>
          </li>
          <li>
            <Link to="/admin/insert-product">
              <i className="fa fa-user fa-fw"></i>Insert product</Link>
          </li>
          <li>
            <Link to="/admin/category">
              <i className="fa fa-table fa-fw"></i>Category Table</Link>
          </li>
        </Custom.UlListSelect>
      </Custom.Dashboard>
    </Custom.Header>
  )
}