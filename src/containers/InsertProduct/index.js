import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../actions";

export default () => {
  const [state, setState] = useState({
    productName: '',
    price: '',
    category: '',
    details: [{
      color: '',
      size: '',
      quantity: '',
    }],
    description: '',
    imagePath: []
  });
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.listCategory);
  useEffect(() => {
    dispatch(action.getListCategories());
  }, [dispatch])

  const handleChangeColor = (e, index) => {
    const newDetail = state.details;
    newDetail[index].color = e.target.value;
    setState({ ...state, details: newDetail })
  }
  const handleChangeSize = (e, index) => {
    const newDetail = state.details;
    newDetail[index].size = e.target.value;
    setState({ ...state, details: newDetail })
  }
  const handleChangeQuantity = (e, index) => {
    const newDetail = state.details;
    newDetail[index].quantity = e.target.value;
    setState({ ...state, details: newDetail })
  }
  const handleClickDelete = (index) => {
    const newDetail = state.details;
    newDetail.splice(index, 1)
    setState({ ...state, details: newDetail })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action.insertProduct(state));
  }
  return (<div id="page-wrapper">
    <div className="container-fluid">
      <div className="row bg-title">
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <h4 className="page-title">Add Product</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-xs-12">
          <div className="white-box">
            <form className="form-horizontal form-material" encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group"><label className="col-md-12">Product Name</label>
                <div className="col-md-12"><input className="form-control form-control-line" type="text" placeholder="Product name" required="required" onChange={(e) => setState({ ...state, productName: e.target.value })} /></div>
              </div>
              <div className="form-group"><label className="col-md-12">Price</label>
                <div className="col-md-12"><input className="form-control form-control-line" type="number" min="10" max="100000" placeholder="Price" required="required" onChange={(e) => setState({ ...state, price: e.target.value })} /></div>
              </div>
              <div className="form-group"><label className="col-md-12">Category</label>
                <div className="col-md-12">
                  <select className="form-control form-control-line" required="required" onChange={(e) => setState({ ...state, category: e.target.value })}>
                    {data && data.map((item, index) =>
                      <option key={index} value={item.categoryName}>{item.categoryName}</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="listDetail">
                {
                  state && state.details.map((item, index) =>
                    <div key={index} className="row col-md-12">
                      <div className="form-group"><label className="col-md-12">Color</label>
                        <div className="col-md-12"><input className="form-control form-control-line" type="text" placeholder="Color" value={item.color} onChange={(e) => handleChangeColor(e, index)} /></div>
                      </div>
                      <div className="form-group"><label className="col-sm-12">Size</label>
                        <div className="col-sm-12">
                          <select className="form-control form-control-line" required="required" value={item.size} onChange={(e) => handleChangeSize(e, index)}>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group"><label className="col-md-12">Quantity</label>
                        <div className="col-md-12"><input className="form-control form-control-line" type="number" min="0" max="1000" placeholder="Quantity" value={item.quantity} onChange={(e) => handleChangeQuantity(e, index)} /></div>
                      </div>
                      <div className="form-group"><label className="col-md-12"></label>
                        <div className="col-sm-12">
                          <h3 className="btn btn-danger" onClick={() => handleClickDelete(index)}>Detele</h3>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <h3 className="btn btn-primary" onClick={() => setState({ ...state, details: [...state.details, ...[{ color: '', size: '', quantity: '' }]] })}>Add detail</h3>
                </div>
              </div>
              <div className="form-group"><label className="col-md-12">Description</label>
                <div className="col-md-12"><textarea className="form-control form-control-line" rows="10" name="description" style={{ height: '100px' }} onChange={(e) => setState({ ...state, description: e.target.value })}></textarea></div>
              </div>
              <div className="form-group"><label className="col-md-12">Image</label>
                <div className="col-md-12"><input className="form-control form-control-line" type="file" name="image" multiple="multiple" required="required" onChange={(e) => setState({ ...state, imagePath: [...state.imagePath, ...[e.target.files[0].name]] })} /></div>
              </div>
              <div className="form-group">
                <div className="col-sm-12"><button className="btn btn-success" type="submit">Insert Product</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>)
}