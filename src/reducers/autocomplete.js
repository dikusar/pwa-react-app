const defaultState = {
	id: null,
    value: '',
    suggestions: [],
};

export default (state=defaultState, action={}) => {
    // const { type, payload } = action

    // switch (type) {
    //     case INCREMENT: return counterState + 1
    // }

    // return counterState
    return defaultState;
}