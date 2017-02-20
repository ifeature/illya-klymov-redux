const INCREASE_COUNTER = 'INCREASE_COUNTER';
const RESET_COUNTER = 'RESET_CONTER';

export default function(state = 0, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            return ++state.counter;
        case RESET_COUNTER:
            return 0;
        default:
            return state; 
    }
}