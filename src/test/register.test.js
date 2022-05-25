import { typesRegister } from '../redux/types/types';
import { registerUserReducer } from '../redux/reducers/registerUser';

var initiaSate ={}
  describe("register", () => {
    it("Should validate register", () => {
    
    const action = {
        
        type : typesRegister.register,
        payload: {
            name: "veronica",
            lastName:"duque",
            phone: "32210986"

        }
    }
    const state = registerUserReducer(initiaSate, action)
    console.log('state >>> ', state)

    
    expect(state).toEqual({"user": {"lastName": "duque", "name": "veronica", "phone": "32210986"}})
    });

 


  });