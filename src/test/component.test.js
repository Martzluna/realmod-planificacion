import Home from '../Components/home/Home';
import SectionFourAgents from '../Components/home/SectionFourAgents';
import { getByAltText, render } from '@testing-library/react';

describe('renders Home componets', () => {
 
    it('render componts in home ', () => {
        
        expect(<Home />).toMatchSnapshot();
        
    })
    test('check map text card EXperties is here', ()=> {
        const { getByText } = render(<SectionFourAgents />);
        const loading = getByText(/EXperties is here/i);
        expect(loading).toBeVisible();
    });

});