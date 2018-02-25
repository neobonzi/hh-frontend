export const FETCH_BUSINESSES_REQUEST = 'FETCH_BUSINESSES_REQUEST';
export const FETCH_BUSINESSES_SUCCESS = 'FETCH_BUSINESSES_SUCCESS';

export fetchBusinesses = () => {
	return (dispatch) => {
		fetch('http://127.0.0.1:42069/api/businesses/')
			.then((response) => {
				return response;
			})
			.then((response) => response.json())
			.then((items) => dispatch(fetchBusinessesSuccess(items)))
			.catch(() => dispatch(fetchBusinessesFailure()))
	}
}

export fetchBusinessesSuccess = (items) => {
	return {
		type: FETCH_BUSINESSES_SUCCESS,
		items
	}
}

export fetchBusinessesFailure = () => {
	return {
		type: FETCH_BUSINESSES_FAILURE
	}
}