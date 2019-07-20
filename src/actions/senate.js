import senate from "../reducers/senate";
import loyalists from "../reducers/senate"

// async action
export const fetchSenate = () => {
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senators')
      .then(resp => resp.json())
      .then(senate =>dispatch({type:"SET_SENATE", senate} ))
     };
}

export const fetchLoyalists = () => {
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senate_loyalists')
      .then(resp => resp.json())
      .then(senate =>dispatch({type:"LOYALISTS", loyalists} ))
     };
}
