import React from "react";
import { useEffect } from "react";
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

function ServiceFilter() {
  const items = useSelector((state) => state.serviceFilter);
  const list = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myAct(FILTER_SERVICE, items.filter, list));
  }, [list]);


  const handleFilter = (evt) => {
    const { value } = evt.target;
    dispatch(myAct(FILTER_SERVICE, value, list));
  };

  return (
    <div className="filter_form">
      <input
        className="form-control"
        onChange={handleFilter}
        value={items.filter}
        placeholder="Фильтрация..."
      />
    </div>
  );
}

export { ServiceFilter };
