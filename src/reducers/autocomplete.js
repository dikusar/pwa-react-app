import { UPDATE_INPUT_VALUE, LOAD_SUGGESTIONS, SET_MATCHING_VALUES_TO_SUGGESTIONS, CLEAR_SUGGESTIONS } from '../constants/autocomplete';
import { START } from '../constants/api';

const initialState = {
	id: null,
    value: '',
    suggestions: [],
};

export default (state=initialState, action={}) => {
    const { payload={}, type } = action;
    
    // debugger;
    switch (type) {
        case UPDATE_INPUT_VALUE:
            return {
                ...state,
                id: typeof payload.newValue === 'string' ? null : payload.newValue.id,
                value: typeof payload.newValue === 'string' ? payload.newValue : payload.newValue.label
            };
            break;

        case LOAD_SUGGESTIONS + START:
            return {
                ...state,
                suggestions: [{
                    label: 'Nothing are found'
                }]
            };
            break;

        case SET_MATCHING_VALUES_TO_SUGGESTIONS:
            return {
                ...state,
                suggestions: payload.matchingValues
            };
            break;

        case CLEAR_SUGGESTIONS:
            return initialState;
            break;
            
        default:
            return state;
    }
}