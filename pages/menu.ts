class menu {

    public get openMenu() {
        return $('#znv-header-open-burger')
    }

    public get events() {
        return $('//a[@href="/events"]')
    }

    public get support() {
        return $('//a[@href="https://support.zwift.com/"]')
    }
}

export default new menu()