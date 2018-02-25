import { FETCH_BUSINESSES_REQUEST, FETCH_BUSINESS_SUCCESS} from '../actions/businesses';

const defaultState = { businesses: [], loading: false}

const businessesReducer = (state, action) => {
  switch(action.type) {
    case FETCH_BUSINESSES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_BUSINESSES_SUCCESS:
      return {
        loading: false,
        businesses: action.data
      }
    default:
      return state;
  }
}

export default businessesReducer;