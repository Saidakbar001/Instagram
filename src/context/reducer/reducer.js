export const initialState = {
    activeStory: null
}

const reducer = (state, action) => {
    switch(action.type){
        case "SET_ACTIVE_STORY":
            return {
                ...state,
                activeStory: action.activeStory
            }

            case 'CLOSE_ACTIVE_STORY':
                return {
                    ...state,
                    activeStory: action.activeStory
                }
                
        default:
            return state
    }
}

export default reducer;