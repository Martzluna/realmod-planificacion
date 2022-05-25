import { loginReducers } from '../redux/reducers/loginReducers';
import { typesLogin } from '../redux/types/types';

var initiaSate ={}
  describe("login, logout", () => {
    it("Should validate login", () => {
    
    const action = {
        type : typesLogin.login,
        payload: {email: "jarlingduqueduarte@gmail.com", password: '1234567890'}
    }
    const state = loginReducers(initiaSate, action)

    
    expect(state).toEqual({email: "jarlingduqueduarte@gmail.com", password: '1234567890'})
    });

    it("Should validate logout", () => {
        const action = {
            type : typesLogin.logout,
            payload: {email: "jarlingduqueduarte@gmail.com", password: '1234567890'}
        }
        const state = loginReducers(initiaSate, action)
        
        expect(state).toEqual(initiaSate)
        });


  });