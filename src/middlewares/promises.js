const middleware = store => next => action => {
    if (action.promise) {
        const [startAction, successAction, failureAction] = action.actions;

        store.dispatch({
            type: startAction
        });

        action.promise
            .then((data) => {
                store.dispatch({
                    type: successAction,
                    payload: data
                });
            }, (error) => {
                store.dispatch({
                    type: failureAction,
                    error
                });
            });

    } else {
        next(action);
    }
}

export default middleware;