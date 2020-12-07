import { events, home, menu, filter } from '../pages'
import allureReporter from '@wdio/allure-reporter'

describe('Events', () => {
    before('Load events page', () => {
        browser.url('./')
        home.checkForCookieConsent()
        menu.openEventPage()
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
        allureReporter.addFeature('Events')
        allureReporter.addStep('Click filter button')
        filter.filterButton.click()
        allureReporter.addStep('Click reset filter')
        filter.resetFilter.click()
    })

    it('Filter for cycling', () => {
        let nonCyclingEvents: any;
        allureReporter.addStep('Click "Cycling" from filter list')
        filter.filterCycling.click()
        allureReporter.addStep('Apply filter')
        filter.applyFilter.click()
        allureReporter.addStep('Gather filtered results')
        if(events.noEventsHeader.isDisplayed()) {
            nonCyclingEvents = 0
        } else {
            nonCyclingEvents = events.allSportsType.filter(sports => sports.getText() != "CYCLING")
        }
        expect(nonCyclingEvents.length).toEqual(0)
    })
    it('Filter for running', () => {
        let nonRunningEvents: any;
        allureReporter.addStep('Click "Running" from filter list')
        filter.filterRunning.click()
        allureReporter.addStep('Apply filter')
        filter.applyFilter.click()
        allureReporter.addStep('Gather filtered results')
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
        allureReporter.addStep('Pick for "Running" sport')
        filter.filterRunning.click()
        allureReporter.addStep('Pick "Evening" for time')
        filter.eveningTime.click()
        allureReporter.addStep('Picking "C" for intensity')
        filter.pickIntensity('C')
        allureReporter.addStep('Apply filter')
        filter.applyFilter.click()
        if(events.noEventsHeader.isDisplayed()) {
            filteredEvents = 0
        } else {
            filteredEvents = events.allEventsTitles.length
        }
        expect(filteredEvents).toBeLessThan(initialEvents)
    })
})