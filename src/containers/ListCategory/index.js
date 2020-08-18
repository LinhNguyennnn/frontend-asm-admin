import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions";

export default () => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.listCategory);
  useEffect(() => {
    dispatch(action.getListCategories());
  }, [dispatch])

  useEffect(() => {
    data && setState(data);;
  }, [data])
  return (
    <>
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Category Table</h4>
            </div><button className="col-lg-2 col-md-3 col-sm-3 col-xs-12 ml-auto btn btn-primary" type="button" data-toggle="modal" data-target="#categoryModal">Insert Category</button></div>
          <div className="row">
            <div className="col-sm-12">
              <div className="white-box">
                <div className="table">
                  <table className="table">
                    <thead>
                      <tr className="row">
                        <th className="col-sm-1 text-center">#</th>
                        <th className="col-sm-11 text-center">Category Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state && state.map((item, index) =>
                        <tr key={index} className="row">
                          <td className="col-sm-1 text-center">{index + 1}</td>
                          <td className="col-sm-11 text-center">{item.categoryName}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="categoryModal" tabIndex="-1" role="dialog" aria-labelledby="categoryModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="container">
            <div className="row">
              <div className="col-sm-11 col-md-9 col-lg-7 mx-auto">
                <div className="modal-content">
                  <form className="form-horizontal form-material" method="post" action="/admin/insertCategory">
                    <div className="modal-header">
                      <h5 className="modal-title" id="categoryModalLabel">Insert Category</h5><button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
                    <div className="modal-body">
                      <div className="col-md-12"><input className="form-control form-control-line" type="text" name="categoryName" placeholder="Category" required="required" /></div>
                    </div>
                    <div className="modal-footer"><button className="btn btn-primary" type="submit">Insert</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}