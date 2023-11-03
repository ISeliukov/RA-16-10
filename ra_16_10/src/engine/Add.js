import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { myAct } from "./Actions";
import {
  CHANGE_SERVICE_FIELD,
  ADD_SERVICE,
  EDIT_SERVICE_FIELD,
  CLEAR_SERVICE_FIELD,
  EDIT_SERVICE,
  REMOVE_SERVICE,
  FILTER_SERVICE,
} from "./Actions";

function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(myAct(CHANGE_SERVICE_FIELD, name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (item.name === "") return;

    if (item.id) {
      dispatch(myAct(EDIT_SERVICE, item.id, item.name, item.price));
    } else {
      dispatch(myAct(ADD_SERVICE, item.name, item.price));
    }
  };

  const handleClear = (evt) => {
    evt.preventDefault();
    dispatch(myAct(CLEAR_SERVICE_FIELD));
  };

  return (
    <div className="add_form">
      <input
        className="form-control"
        name="name"
        onChange={handleChange}
        value={item.name}
        placeholder="Наименование"
      />
      <input
        className="form-control"
        name="price"
        type="number"
        onChange={handleChange}
        value={item.price}
        placeholder="Стоимость"
      />
      <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
      {item.id && <button className="btn btn-secondary" onClick={handleClear}>Cancel</button>}
    </div>
  );
}

export { ServiceAdd };
