const API_URL="https://congress-api-jr.herokuapp.com/"

// async action
export function fetchSenate(){
  return (dispatch) => {
      dispatch ({type: 'LOADING'})
      return fetch(API_URL+'/search/senators')
      .then(resp => resp.json())
      .then(senate =>dispatch({type:"SET_SENATE", senate} ))
     };
}

export function fetchSenateLoyalists(){
  return (dispatch) => {
      return fetch(API_URL+'/search/senate_loyalists')
      .then(resp => resp.json())
      .then(loyalists =>dispatch({type:"LOYALISTS", loyalists} ))
     };
}

export function fetchSenateMavericks(){
  return (dispatch) => {
      return fetch(API_URL+'/search/senate_mavericks')
      .then(resp => resp.json())
      .then(mavericks =>dispatch({type:"MAVERICKS", mavericks} ))
     };
}

export function fetchSenateTruants(){
  return (dispatch) => {
      return fetch(API_URL+'/search/truant_senators')
      .then(resp => resp.json())
      .then(truants =>dispatch({type:"TRUANTS", truants} ))
    };
}

export function fetchSenateBySeniority(){
  return (dispatch) => {
      return fetch(API_URL+'/search/senators_by_seniority')
      .then(resp => resp.json())
      .then(seniority =>dispatch({type:"SENIORITY", seniority} ))
     };
}

export function fetchSenateByAge(){
  return (dispatch) => {
      return fetch(API_URL+'/search/senators_by_age')
      .then(resp => resp.json())
      .then(age =>dispatch({type:"AGE", age} ))
     };
}

export function fetchBillsBySenator(id){
  return (dispatch) => {
      dispatch ({type: 'LOADING'})
      return fetch(API_URL+'/search/bills/member/'+id)
      .then(resp => resp.json())
      .then(bills => dispatch({type:"FETCH_BILLS_BY_SENATOR", payload: {bills: bills, id:id}})
      )
    }
}

export function showSenatorBills(){
  return (dispatch) => {
    dispatch({
      type: 'SHOW_SENATOR_BILLS'
    })
  }
}

export function getSenatorFinances(id){
  console.log('hello from getSenatorFinances')
  return (dispatch) => {
      const url = 'http://localhost:3000/search/financial_disclosures/member/'+id
      fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(function (err) {console.log(err)})
      .then(financialDisclosure => dispatch({type:"GET_SENATOR_FINANCES", payload: {financialDisclosure: financialDisclosure, id:id}})
      )
    }
  }


















//
