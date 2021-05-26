const distanceReducer = ( state = [], action) => {
    switch ( action.type) {
        case 'SET_DISTANCE':
            return action.payload;
        default:
            return state;
    }
}

export default distanceReducer;