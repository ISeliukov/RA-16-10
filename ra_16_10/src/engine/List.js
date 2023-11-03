import { useEffect, useState } from "react";
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

function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const filterItems = useSelector((state) => state.serviceFilter);
  const [data, setData] = useState(items);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(items);
    console.log(filterItems);
    const res = filterItems.filter ? filterItems.items : items;
    setData(res);
  }, [filterItems, items]);

  const handleRemove = (id) => {
    dispatch(myAct(REMOVE_SERVICE, id));
  };

  const handleEdit = (item) => {
    console.log(item.id, item.name, item.price);
    dispatch(myAct(EDIT_SERVICE_FIELD, item.id, item.name, item.price));
  };

  return (
    <ul className="list-group">
      {data.map((obj) => (
        <li key={obj.id} className="list-group-item">
          {obj.name} {obj.price}
          <div>
            <button className="btn btn-secondary" onClick={() => handleEdit(obj)}>
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(obj.id)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export { ServiceList };
