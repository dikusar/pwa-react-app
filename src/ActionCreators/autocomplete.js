import { UPDATE_INPUT_VALUE } from '../constants/autocomplete'

export function updateInputValue(event, { newValue }) {
   return {
        type: UPDATE_INPUT_VALUE,
        payload: {
            newValue
        }
    }
}

