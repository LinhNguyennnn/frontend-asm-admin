import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions";

export default ({ id }) => {
  const [state, setState] = useState({
    _id: '',
    productName: '',
    category: '',
    description: '',
    details: [],
    imagePath: [],
    indexImageDeleted: [],
    price: ''
  });
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.productDetail);
  const listCategories = useSelector(state => state.listCategory);
  useEffect(() => {
    dispatch(action.getProductDetail(id));
    dispatch(action.getListCategories());
  }, [dispatch, id])

  useEffect(() => {
    data && setState(data);
  }, [data])

  const handleClickAddDetail = () => {
    const newDetail = [{ color: '', size: '', quantity: 0 }];
    setState({ ...state, details: [...state.details, ...newDetail] });
  }
  const handleInputColor = (e, index) => {
    const newState = state;
    newState.details[index].color = e.target.value;
    setState(newState);
  }

  const handleInputQuantity = (e, index) => {
    const newState = state;
    newState.details[index].quantity = e.target.value;
    setState(newState);
  }
  const handleSelectSize = (e, index) => {
    const newState = state;
    newState.details[index].size = e.target.value;
    setState(newState);
  }

  const handleSelectCategory = (e) => {
    const newState = state;
    newState.category = e.target.value;
    setState(newState);
  }

  const handleClickDelete = (index) => {
    const newDetail = state.details;
    newDetail.splice(index, 1);
    setState({ ...state, details: newDetail });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    state.indexImageDeleted = [];
    dispatch(action.updateProduct(state))
  }
  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row bg-title">
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 className="page-title">Add Product</h4>
          </div>
        </div>
        <form className="form-horizontal form-material row" onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
          <div className="col-md-4 col-xs-12">
            <div className="white-box list-image-update">
              {data && data.imagePath.map((path, index) =>
                <div key={index} className="how-itemcart1" >
                  <img src={`${process.env.REACT_APP_PORT}/${path}`} alt="product" width="100%" />
                </div>
              )}
              <div className="product-btm-box">
                <input className="form-control form-control-line" type="file" multiple="multiple" onChange={(e) => setState({ ...state, imagePath: [...state.imagePath, ...[`images/${e.target.files[0].name}`]] })} />
              </div>
            </div>
          </div>
          <div className="col-md-8 col-xs-12">
            <div className="white-box">
              <div className="form-group">
                <label className="col-md-12">Product Name</label>
                <div className="col-md-12">
                  <input className="form-control form-control-line" type="text" defaultValue={state ? state.productName : ""} onChange={(e) => setState({ ...state, productName: e.target.value })} /></div>
              </div>
              <div className="form-group">
                <label className="col-sm-12">Category</label>
                <div className="col-sm-12">
                  <select className="form-control form-control-line" defaultValue={state ? state.category : ""} onChange={(e) => handleSelectCategory(e)}>
                    {
                      listCategories && listCategories.data.map((item, index) =>
                        <option key={index} value={item.categoryName}>{item.categoryName}</option>
                      )
                    }
                  </select>
                </div>
              </div>
              <div className="listDetail">
                {state && state.details.map((item, index) =>
                  <div key={index} className="row col-md-12">
                    <div className="form-group">
                      <label className="col-md-12">Color</label>
                      <div className="col-md-12">
                        <input className="form-control form-control-line" type="text" placeholder="Color" defaultValue={item.color} onChange={(e) => handleInputColor(e, index)} /></div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-12">Size</label>
                      <div className="col-sm-12">
                        <select className="form-control form-control-line" required="required" defaultValue={item.size} onChange={(e) => handleSelectSize(e, index)}>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12">Quantity</label>
                      <div className="col-md-12">
                        <input className="form-control form-control-line" type="number" min="0" max="1000" placeholder="Quantity" defaultValue={item.quantity} onChange={(e) => handleInputQuantity(e, index)} /></div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12"></label>
                      <div className="col-sm-12">
                        <button className="btn btn-danger" type="button" onClick={() => handleClickDelete(index)}>Detele</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <button className="btn btn-primary" type="button" onClick={() => handleClickAddDetail()}>Add detail</button>
                </div>
              </div>
              <div className="form-group"><label className="col-md-12">Price</label>
                <div className="col-md-12"><input className="form-control form-control-line" type="number" min="10" defaultValue={state ? state.price : ""} onChange={(e) => setState({ ...state, price: e.target.value })} /></div>
              </div>
              <div className="form-group"><label className="col-md-12">Description</label>
                <div className="col-md-12">
                  <textarea className="form-control form-control-line" rows="10" style={{ height: '100px' }} value={state ? state.description : ""} onChange={(e) => setState({ ...state, description: e.target.value })} >description</textarea></div>
              </div>
              <div className="form-group">
                <div className="col-sm-12 listImageDeleted"><input className="d-none" type="hidden" /></div>
              </div>
              <div className="form-group">
                <div className="col-sm-12"><button className="btn btn-success" type="submit">Update product</button></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}