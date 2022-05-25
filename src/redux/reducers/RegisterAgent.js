import { typesAgent } from '../types/types'

const initialState = {
    agent : {}
}

export const registerAgent= (state = initialState, action) => {
    console.log('action >>> ',action )
    switch (action.type) {
        case typesAgent.agent:
            return{
                agent: action.agent
             }
        default:
            return state
    }


}