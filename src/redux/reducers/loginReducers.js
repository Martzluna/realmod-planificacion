import { typesLogin } from '../types/types'

const initialState = {
    login : []
}

export const loginReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesLogin.login:
            return{
                email: action.payload.email,
                password: action.payload.password
             }

        case typesLogin.logout:
            return {
                
            }

        default:
            return state
    }


}