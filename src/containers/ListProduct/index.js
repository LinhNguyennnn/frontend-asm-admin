import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "../../actions";

export default () => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.listProducts);
  useEffect(() => {
    dispatch(action.listProducts());
  }, [dispatch])

  useEffect(() => {
    data && setState(data);
  }, [data])
  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row bg-title">
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 className="page-title">Product Table</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="white-box">
              <div className="table">
                <table className="table">
                  <thead>
                    <tr className="row">
                      <th className="col-sm-1 text-center">#</th>
                      <th className="col-sm-2 text-center">Product Name</th>
                      <th className="col-sm-2 text-center">Image</th>
                      <th className="col-sm-1 text-center">Color</th>
                      <th className="col-sm-1 text-center">Size</th>
                      <th className="col-sm-1 text-center">Quantity</th>
                      <th className="col-sm-2 text-center">Price</th>
                      <th className="col-sm-1 text-center">Update</th>
                      <th className="col-sm-1 text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      state && state.map((item, index) =>
                        <tr className="row" key={index}>
                          <td className="col-sm-1 text-center">{index + 1}</td>
                          <td className="col-sm-2 text-center">{item.productName}</td>
                          <td className="col-sm-2 text-center"><img src={`${process.env.REACT_APP_PORT}/${item.imagePath[0]}`} alt="product" width="100px" height="100px" /></td>
                          <td className="col-sm-1 text-center">
                            {
                              item.details.map((value, i) => <p key={i}>{value.color}</p>)
                            }
                          </td>
                          <td className="col-sm-1 text-center">
                            {
                              item.details.map((value, i) => <p key={i}>{value.size}</p>)
                            }
                          </td>
                          <td className="col-sm-1 text-center">
                            {
                              item.details.map((value, i) => <p key={i}>{value.quantity}</p>)
                            }
                          </td>
                          <td className="col-sm-2 text-center">$ {item.price}</td>
                          <th className="col-sm-1 text-center"><Link className="btn btn-primary" to={`/admin/update-product/${item._id}`}>Update</Link></th>
                          <th className="col-sm-1 text-center"><button className="btn btn-danger" onClick={() => dispatch(action.deleteProduct(item._id))}>Delete</button></th>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}