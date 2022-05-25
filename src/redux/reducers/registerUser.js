import { typesRegister } from '../types/types'

const initialState = {
    user : ""
}

export const registerUserReducer = (state = initialState, action) => {
    console.log('action >>> ',action )
    switch (action.type) {
        case typesRegister.register:
            return{
                user: action.user.msg
             }
        default:
            return state
    }


}