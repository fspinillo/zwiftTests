class menu {

    public get openMenu() {
        return $('#znv-header-open-burger')
    }

    public get events() {
        return $('//a[@href="/events"]')
    }

    public get mobileMenuEvents() {
        return $('//a[contains(@class, "znv-track-burger-menu-js")][@href="/events"]')
    }

    public get support() {
        return $('//a[@href="https://support.zwift.com/"]')
    }

    public openEventPage() {
        if(this.openMenu.isDisplayed()) {
            this.openMenu.click()
            this.mobileMenuEvents.click()
        } else {
            this.events.click()
        }
    }
}

export default new menu()