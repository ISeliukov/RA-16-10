import { createStore, combineReducers } from "redux";
import { nanoid } from "nanoid";
import {
  CHANGE_SERVICE_FIELD,
  ADD_SERVICE,
  EDIT_SERVICE_FIELD,
  CLEAR_SERVICE_FIELD,
  EDIT_SERVICE,
  REMOVE_SERVICE,
  FILTER_SERVICE,
} from "./Actions";

const initialState1 = {
  name: "",
  price: "",
};

const initialState2 = {
  items: [],
  filter: "",
};

const initialState3 = [
  { id: nanoid(), name: "Комплексная очистка", price: 500 },
  { id: nanoid(), name: "Защита стекла", price: 700 },
];

function serviceAddReducer(state = initialState1, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case EDIT_SERVICE_FIELD: {
      return action.payload;
    }
    case REMOVE_SERVICE:
    case EDIT_SERVICE:
    case CLEAR_SERVICE_FIELD:
    case ADD_SERVICE: {
      return initialState1;
    }
    default:
      return state;
  }
}

function serviceFilterReducer(state = initialState2, action) {
  switch (action.type) {
    case FILTER_SERVICE: {
      const { filter, list } = action.payload;
      return {
        ...state,
        items: list.filter((item) =>
          item.name.toUpperCase().includes(filter.toUpperCase())
        ),
        filter: filter,
      };
    }
    default:
      return state;
  }
}

function serviceListReducer(state = initialState3, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    }
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);
    }
    case EDIT_SERVICE: {
      const editedItem = { ...action.payload };
      editedItem.price = Number(editedItem.price);
      state = state.map((item) => item.id === editedItem.id ? editedItem : item );
      return state;
    }

    default:
      return state;
  }
}

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceFilter: serviceFilterReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
