export const ADD_SERVICE = 'ADD_SERVICE';
export const REMOVE_SERVICE = 'REMOVE_SERVICE';
export const CHANGE_SERVICE_FIELD = 'CHANGE_SERVICE_FIELD';
export const EDIT_SERVICE_FIELD = 'EDIT_SERVICE_FIELD';
export const EDIT_SERVICE = 'EDIT_SERVICE';
export const CLEAR_SERVICE_FIELD = 'CLEAR_SERVICE_FIELD';
export const FILTER_SERVICE = 'FILTER_SERVICE';

const funcs = [
  {func: ADD_SERVICE, act: { type: 0, payload: ['name', 'price'] }},
  {func: REMOVE_SERVICE, act: { type: 0, payload: ['id']}},
  {func: CHANGE_SERVICE_FIELD, act: { type: 0, payload: ['name', 'value'] }},
  {func: EDIT_SERVICE_FIELD, act: { type: 0, payload: ['id', 'name', 'price'] }},
  {func: EDIT_SERVICE, act: { type: 0, payload: ['id', 'name', 'price'] }},
  {func: CLEAR_SERVICE_FIELD, act: { type: 0, payload: [] }},
  {func: FILTER_SERVICE, act: { type: 0, payload: ['filter', 'list'] }}
];

function myAct(func, prop1, prop2, prop3) {
  let myfunc = funcs.find(elem => elem.func === func);
  return { type: func, payload: {
    [myfunc.act.payload[0]]: prop1,
    [myfunc.act.payload[1]]: prop2,
    [myfunc.act.payload[2]]: prop3
    }
  };
};

export { myAct };
