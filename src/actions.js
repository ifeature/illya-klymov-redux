import { getIssues } from './api';

const loadIssues = (dispatch, getState) => ({
    type: 'PROMISE',
    actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILUER'],
    promise: getIssues()
});

export { loadIssues }