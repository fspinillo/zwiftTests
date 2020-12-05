import { events, home, menu, filter } from '../pages'

describe('Events', () => {
    before('Load events page', () => {
        browser.url('./')
        home.checkForCookieConsent()
        menu.events.click()
        browser.waitUntil(() => {
            const state = browser.execute(() =>{
                return document.readyState
            })
            return String(state) === 'complete'
        }, {
            timeoutMsg: 'Page was unable to load'
        })
    })

    describe('Filter', () => {
        it('Perform filter', () => {
            const initialEvents = events.allEventsTitles.length
            let filteredEvents: any;
            filter.filterButton.click()
            filter.resetFilter.click()
            filter.filterRunning.click()
            filter.eveningTime.click()
            filter.pickIntensity('C')
            filter.applyFilter.click()
            browser.debug()
            if(events.noEventsHeader.isDisplayed()) {
                filteredEvents = 0
            } else {
                filteredEvents = events.allEventsTitles.length
            }
            expect(filteredEvents).toBeLessThan(initialEvents)
        })
    })
})