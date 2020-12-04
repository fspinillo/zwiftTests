import { home } from '../pages'

describe('Homepage', () => {
    before('Load homepage', () => {
        browser.url('./')
        browser.waitUntil(() => {
            const state = browser.execute(() =>{
                return document.readyState
            })
            return String(state) === 'complete'
        }, {
            timeoutMsg: 'Page was unable to load'
        })
    })

    it('Verify Welcome Button', () => {
        expect(home.welcomeButton).toBeDisplayed()
    })

    it('Verify Create Account Button', () => {
        expect(home.createAccountButton).toBeDisplayed()
    })
})