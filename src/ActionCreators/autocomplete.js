import { SELECT_VALUE } from '../constants/autocomplete'

export function selectValue(event, { newValue }) {
    return {
        type: SELECT_VALUE,
        payload: {
            event,
            newValue
        }
    }
}

