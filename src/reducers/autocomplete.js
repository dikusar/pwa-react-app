import { UPDATE_INPUT_VALUE } from '../constants/autocomplete';

const defaultState = {
	id: null,
    value: ''
    // suggestions: [],
};

export default (autocompleteState=defaultState, action={}) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_INPUT_VALUE:
            return {
                ...autocompleteState,
                id: typeof payload.newValue === 'string' ? null : payload.newValue.id,
                value: typeof payload.newValue === 'string' ? payload.newValue : payload.newValue.label
            }
        default:
            return autocompleteState;
    }

    return autocompleteState;
}