import noResult from '../../reducers/noResult'
import * as Constants from '../../constants';

describe('no result reducer', () => {
    it('should return the initial state', () => {
        expect(noResult(undefined, {})).toEqual(
            {
                status: false
            }
        )
    })
    it('should handle SET_NO_RESULT', () => {
        const status = false
        expect(
            noResult(
                status,
                {
                    type: Constants.SET_NO_RESULT,
                    payload: true
                }
            )
        ).toEqual({
            status: true
        })
    })
})