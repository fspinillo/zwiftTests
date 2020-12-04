import { home } from '../pages'

describe('Homepage', () => {
    before('Load homepage', () => {
        browser.url('./')
    })

    it('Verify Welcome Button', () => {
        expect(home.welcomeButton).toBeDisplayed()
    })

    it('Verify Create Account Button', () => {
        expect(home.createAccountButton).toBeDisplayed()
    })
})