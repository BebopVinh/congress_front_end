export default (state = { finances: [], loading: false}, action) => {


    switch(action.type){

    case "LOADING":
      return {loading: true}

    case "GET_MEMBER_FINANCES":
      return { finances: action.finances, loading: false }

    case 'ERROR':
      return { finances: action.error.message }

     default:
        return state;
    }
  }
