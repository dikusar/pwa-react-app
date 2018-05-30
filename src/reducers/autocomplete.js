import { UPDATE_INPUT_VALUE } from '../constants/autocomplete';

const initialState = {
	id: null,
    value: '',
    suggestions: [],
};

export default (state=initialState, action={}) => {
    const { type, payload } = action
    
    switch (type) {
        case UPDATE_INPUT_VALUE:
            return {
                ...state,
                id: typeof payload.newValue === 'string' ? null : payload.newValue.id,
                value: typeof payload.newValue === 'string' ? payload.newValue : payload.newValue.label
            }

            
        default:
            return state;
    }

    // return state;
}