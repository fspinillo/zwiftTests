class filter {
    public get filterButton() {
        return $('//button[@class="filter-toggle"]')
    }

    public get filterAllSports() {
        return $('//button[@value="all"]')
    }

    public get filterCycling() {
        return $('//button[@value="CYCLING"]')
    }

    public get filterRunning() {
        return $('//button[@value="RUNNING"]')
    }

    public get allIntensities() {
        return $('//button[@value="all"][text()="All Intensities"]')
    }

    public get intensityA() {
        return $('//button[@value="1"][text()="A"]')
    }

    public get intensityB() {
        return $('//button[@value="2"][text()="B"]')
    }

    public get intensityC() {
        return $('//button[@value="3"][text()="C"]')
    }

    public get intensityD() {
        return $('//button[@value="4"][text()="D"]')
    }

    public get intensityE() {
        return $('//button[@value="5"][text()="E (Open)"]')
    }

    public get allTimes() {
        return $('//button[@value="all"][text()="All Start Times"]')
    }

    public get morningTime() {
        return $('//button[@value="morning"]')
    }

    public get afternoonTime() {
        return $('//button[@value="afternoon"]')
    }

    public get eveningTime() {
        return $('//button[@value="evening"]')
    }

    public get nightTime() {
        return $('//button[@value="night"]')
    }

    public get applyFilter() {
        return $('//button[@class="apply-button"]')
    }

    public get resetFilter() {
        return $('//button[@class="reset-button"]')
    }

    /**
     * 
     * @param type - A, B, C, D, E
     */
    public pickIntensity(type: string) {
        switch(type) {
            case 'A':
                return this.intensityA.click()
            case 'B':
                return this.intensityB.click()
            case 'C':
                return this.intensityC.click()
            case 'D':
                return this.intensityD.click()
            case 'E':
                return this.intensityE.click()
        }
    }
}

export default new filter()