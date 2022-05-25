import { typesAgent } from "../types/types"
import { postRegisterAgent } from '../axios/registerUser';

export const registerAgent = (data) => async dispatch => {
    const dataAgent = await postRegisterAgent(data)
    console.log('dataAgent >>> ', dataAgent)
    dispatch({
        type: typesAgent.agent,
        agent: dataAgent
    })
}