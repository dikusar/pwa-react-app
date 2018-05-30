import { UPDATE_INPUT_VALUE, MAYBE_LOAD_SUGGESTIONS } from '../constants/autocomplete'

export function updateInputValue(event, { newValue }) {
   return {
        type: UPDATE_INPUT_VALUE,
        payload: {
            newValue
        }
    }
}

function maybeLoadSuggestions(value) {
  return {
    type: MAYBE_LOAD_SUGGESTIONS,
    payload: {
    	value	
    }
  };
}

export function getSuggestions(value) {
  // const inputValue = value.trim().toLowerCase();
  // const inputLength = inputValue.length;
  // let count = 0;

  // return inputLength === 0
  //   ? []
  //   : suggestions.filter(suggestion => {
  //       const keep =
  //         count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

  //       if (keep) {
  //         count += 1;
  //       }

  //       return keep;
  //     });
	return dispatch => {
	    // dispatch(loadSuggestionsBegin());

	    dispatch(maybeLoadSuggestions(value));
	}
    
}

