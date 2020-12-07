import { home, events } from '../pages'
import allureReporter from '@wdio/allure-reporter'

describe('Homepage', () => {
    before('Load homepage', () => {
        allureReporter.addStep('Open homepage')
        browser.url('./')
        allureReporter.addStep('Close cookie consent window')
        home.checkForCookieConsent()
        allureReporter.addStep('Ensure load state is complete')
        browser.waitUntil(() => {
            const state = browser.execute(() =>{
                return document.readyState
            })
            return String(state) === 'complete'
        }, {
            timeoutMsg: 'Page was unable to load'
        })
    })

    beforeEach(() => {
        allureReporter.addFeature('Homepage')
    })

    it('Verify Welcome Button', () => {
        allureReporter.addStep('Look for welcome button')
        expect(home.welcomeButton).toBeDisplayed()
    })

    it('Verify Create Account Button', () => {
        allureReporter.addStep('Look for create account button')
        expect(home.createAccountButton).toBeDisplayed()
    })
})