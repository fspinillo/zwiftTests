class events {

    public get noEventsHeader() {
        return $('//div[contains(text(),"No results")]')
    }

    public get eventTitleHeader() {
        return $('//div[@class="tab-listing"]')
    }

    public get allEventsTitles() {
        return $$('//div[@class="tab-listing"]')
    }

    public get sportsType() {
        return $('//span[@class="map-sport-type"]')
    }

    public get allSportsType() {
        return $$('//span[@class="map-sport-type"]')
    }

    public get intensityA() {
        return $$('//div[@data-label="1"][@class="group-label"]')
    }

    public get intensityB() {
        return $$('//div[@data-label="2"][@class="group-label"]')
    }

    public get intensityC() {
        return $$('//div[@data-label="3"][@class="group-label"]')
    }

    public get intensityD() {
        return $$('//div[@data-label="4"][@class="group-label"]')
    }

    public get intensityE() {
        return $$('//div[@data-label="5"][@class="group-label"]')
    }
}

export default new events()