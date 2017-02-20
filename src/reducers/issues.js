const ISSUES_LOADED = 'ISSUES_LOADED';

export default function(state = [], action) {
    switch (action.type) {
        case ISSUES_LOADED:
            return action.payload;
        default:
            return state; 
    }
}