import { FETCH_MOVIELIST } from '../actions/index';

const moviesReducer = (state = { }, action) => {
  switch (action.type) {
    case FETCH_MOVIELIST:
      return {
        page: action.response.page,
        total_results: action.response.total_results,
        total_pages: action.response.total_pages,
        apiURL: action.apiURL,
        searchBy: action.searchBy,
        genreIDs: action.genreIDS,
        results: [...action.response.results],
      };
    default:
      return state;
  }
};

export default moviesReducer;
