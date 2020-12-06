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
        beforeEach('Reset filter', () => {
            filter.filterButton.click()
            filter.resetFilter.click()
        })
        it('Filter for cycling', () => {
            let nonCyclingEvents: any;
            filter.filterCycling.click()
            filter.applyFilter.click()
            if(events.noEventsHeader.isDisplayed()) {
                nonCyclingEvents = 0
            } else {
                nonCyclingEvents = events.allSportsType.filter(sports => sports.getText() != "CYCLING")
            }
            expect(nonCyclingEvents.length).toEqual(0)
        })
        it('Filter for running', () => {
            let nonRunningEvents: any;
            filter.filterRunning.click()
            filter.applyFilter.click()
            if(events.noEventsHeader.isDisplayed()) {
                nonRunningEvents = 0
            } else {
                nonRunningEvents = events.allSportsType.filter(sports => sports.getText() != "RUNNING")
            }
            expect(nonRunningEvents.length).toEqual(0)
        })
        it('Filter for running, evening, C intensity', () => {
            const initialEvents = events.allEventsTitles.length
            let filteredEvents: any;
            filter.filterRunning.click()
            filter.eveningTime.click()
            filter.pickIntensity('C')
            filter.applyFilter.click()
            if(events.noEventsHeader.isDisplayed()) {
                filteredEvents = 0
            } else {
                filteredEvents = events.allEventsTitles.length
            }
            expect(filteredEvents).toBeLessThan(initialEvents)
        })
    })
})