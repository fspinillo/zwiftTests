class home {

    public get welcomeButton() {
        return $('//a[@href="#welcome-to-zwift"]')
    }

    public get createAccountButton() {
        return $('//a[@href="/create_account"]')
    }

}

export default new home()