import { MAYBE_LOAD_SUGGESTIONS, UPDATE_INPUT_VALUE, LOAD_SUGGESTIONS, SET_MATCHING_VALUES_TO_SUGGESTIONS, CLEAR_SUGGESTIONS } from '../constants/autocomplete';
import suggestions from '../components/Autocomplete/suggestions'
// import { escapeRegexCharacters } from '../utils';


function getMatchingValues(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

export default store => next => action => {
    const { type, payload={}, ...rest } = action;
    // const { autocomplete={} } = store.getState();
    // debugger;
    // const type = payload.reason === 'input-focused' && autocomplete.id ? CLEAR_SUGGESTIONS : action.type;

    if(payload.reason === 'input-focused') return  next({...rest, type: CLEAR_SUGGESTIONS});
    
    switch (type) {
        case UPDATE_INPUT_VALUE:

             next(action);
        break; 

        case MAYBE_LOAD_SUGGESTIONS:
            const matchingValues = getMatchingValues(payload.value);
            
            matchingValues.length ?
                next({
                    ...rest,
                    type: SET_MATCHING_VALUES_TO_SUGGESTIONS, 
                    payload: {
                        matchingValues    
                    }
                 })
                : next({
                    ...rest,
                    type: LOAD_SUGGESTIONS,
                    callAPI: 'get suggestions from server',
                 });
        break;

        default:
            return next(action);

    }
}