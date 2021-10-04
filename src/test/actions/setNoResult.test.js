import setNoResult from '../../actions/setNoResult'
import * as Constants from '../../constants';

describe('actions', () => {
    it('should create an action to set No result status', () => {
        const movies = true
        const expectedAction = {
            type: Constants.SET_NO_RESULT,
            payload: true
        }
        expect(setNoResult(movies)).toEqual(expectedAction)
    })
})