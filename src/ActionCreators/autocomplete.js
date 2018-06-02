import { UPDATE_INPUT_VALUE, MAYBE_LOAD_SUGGESTIONS, CLEAR_SUGGESTIONS } from '../constants/autocomplete'

function maybeLoadSuggestions({ value, reason }) {
	return {
	    type: MAYBE_LOAD_SUGGESTIONS,
	    payload: {
	    	value,
	    	reason
	    }
  };
}


export function updateInputValue(event, { newValue }) {
   return {
        type: UPDATE_INPUT_VALUE,
        payload: {
            newValue
        }
    }
}

export function getSuggestions({ value, reason }) {
	return dispatch => {
	    dispatch(maybeLoadSuggestions({ value, reason }));
	}
    
}

export function clearSuggestions() {
	return {
		type: CLEAR_SUGGESTIONS
	}
}

