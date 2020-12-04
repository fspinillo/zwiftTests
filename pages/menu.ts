class menu {

    public get openMenu() {
        return $('#znv-header-open-burger')
    }

    public get events() {
        return $('//a[@href="/events"]')
    }
}

export default new menu()