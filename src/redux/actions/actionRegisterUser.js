import { typesRegister } from "../types/types"
import { postRegisterUser } from '../axios/registerUser';

export const registerUser = (data) => async dispatch => {
    const dataUser = await postRegisterUser(data)
    dispatch({
        type: typesRegister.register,
        user: dataUser
    })
}