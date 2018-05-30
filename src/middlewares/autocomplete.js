import { MAYBE_LOAD_SUGGESTIONS, UPDATE_INPUT_VALUE } from '../constants/autocomplete';
// import { escapeRegexCharacters } from '../utils';


function getMatchingValues(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;


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
}

export default store => next => action => {
    const { type, payload, ...rest }=action
    switch (type) {
        case UPDATE_INPUT_VALUE:
            
            next(action);

        break; 

        case MAYBE_LOAD_SUGGESTIONS:
            
            next({
                ...rest,
                type: MAYBE_LOAD_SUGGESTIONS, 
                callAPI: 'testick'
             });

        break;

    }
}