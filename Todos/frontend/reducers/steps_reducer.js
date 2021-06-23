import{
    RECEIVE_STEP,
    RECEIVE_STEPS,
    REMOVE_STEP
} from '../actions/step_actions'

const stepsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};

    switch (action.type) {
        case RECEIVE_STEPS:
            for (let i = 0; i < action.steps.length; i++) {
                let step = action.steps[i];

                newState[step.id] = step;
            }

            return newState;
        case RECEIVE_STEP:
            newState = Object.assign({}, state);
            newState[action.step.id] = action.step;

            return newState;
        case REMOVE_STEP:
            newState = Object.assign({}, state);
            delete newState[action.step.id];

            return newState;
        default:
            return state;
    }
}

export default stepsReducer;
