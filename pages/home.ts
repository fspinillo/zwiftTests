class home {

    public get welcomeButton() {
        return $('//a[@href="#welcome-to-zwift"]')
    }

    public get createAccountButton() {
        return $('//a[@href="/create_account"]')
    }

    public get cookieConsent() {
        return $('#truste-consent-button')
    }

    public checkForCookieConsent() {
        if (this.cookieConsent.isDisplayed()) {
            this.cookieConsent.click()
        }
    }

}

export default new home()