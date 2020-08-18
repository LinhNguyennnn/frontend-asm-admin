import React from "react";
import InsertProduct from "../../containers/InsertProduct";
import ListProduct from "../../containers/ListProduct";
import ListCategory from "../../containers/ListCategory";
import UpdateProduct from "../../containers/UpdateProduct";
import Error404 from "../../containers/Error404";

const Menu = [
  {
    path: "/",
    exact: true,
    main: () => <ListProduct />,
  },
  {
    path: "/admin",
    exact: true,
    main: () => <ListProduct />,
  },
  {
    path: "/admin/category",
    exact: false,
    main: () => <ListCategory />,
  },
  {
    path: "/admin/insert-product",
    exact: false,
    main: () => <InsertProduct />,
  },
  {
    path: "/admin/update-product/:id",
    exact: false,
    main: ({ match }) => <UpdateProduct id={match.params.id} />,
  },
  {
    exact: false,
    main: () => <Error404 />,
  },
];

export default Menu;
