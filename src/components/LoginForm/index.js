import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [err, setErr] = useState('');
  const [showModal, setShowModal] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const isShowModal = useSelector(state => state.displayLoginForm);
  useEffect(() => {
    setShowModal(isShowModal);
  }, [isShowModal])
  const handleClickCloseModal = useCallback(() => {
    dispatch(action.closeDisplayLoginForm());
  }, [dispatch])
  const user = useSelector(state => state.user);
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(action.userLogin(state));
      user ? history.push("/admin") : setErr("Email or password invalid!");
    } catch (error) {
      setErr(error.message);
    }
  }
  return (
    <div className="modal">
      {showModal &&
        <Modal show={showModal} onHide={() => handleClickCloseModal()}>
          <Modal.Header closeButton>
            <Modal.Title className="">Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-label-group">
                <label htmlFor="inputEmail">Email address</label>
                <input className="form-control" id="inputEmail" type="email" name="email" placeholder="Email address" onChange={e => setState({ ...state, email: e.target.value })} />
              </div>
              <div className="form-label-group">
                <label htmlFor="inputPassword">Password</label>
                <input className="form-control" id="inputPassword" type="password" name="password" placeholder="Password" onChange={e => setState({ ...state, password: e.target.value })} />
              </div>
              <Button className="mt-3" variant="primary" type="submit">
                Sign in
              </Button>
              {err && <p>{err}</p>}
            </form>
          </Modal.Body>
        </Modal>
      }
    </div>
  )
}