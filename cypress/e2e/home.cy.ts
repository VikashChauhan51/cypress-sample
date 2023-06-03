
import { HomePage } from '@pages/home-page';

describe('example to-do app', () => {
    beforeEach(() => {
        console.log('before test');
    })

    it('Navigate to home page', () => {

        new HomePage()
            .open()
            .verifyTitle();

    });

    it('Search on google', () => {

        new HomePage()
            .open()
            .search('Vikash Chauhan on github');

    });
})
