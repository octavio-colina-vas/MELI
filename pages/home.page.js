class HomePage {
    get searchInputField() {
        return $("#cb1-edit")
    }

    get searchButton() {
        return $("body > header > div > div.nav-area.nav-top-area.nav-center-area > form > button")
    }

    get categoriasLink() {
        return $("body > header > div > div.nav-area.nav-bottom-area.nav-center-area > div > ul > li:nth-child(1) > a")
    }

    get vehiculosLink() {
        return $("body > header > div > div.nav-area.nav-bottom-area.nav-center-area > div > ul > li:nth-child(1) > div > ul > li:nth-child(1) > a")
    }

    get cordobaFilter() {
        return $("#root-app > div > div.ui-search-main.ui-search-main--exhibitor.ui-search-main--without-header.shops__search-main > aside > section > div:nth-child(3) > ul > li:nth-child(6) > a")
    }

    get cordobaPill() {
        return $("#root-app > div > div.ui-search-main.ui-search-main--exhibitor.ui-search-main--without-header.ui-search-main--only-products.shops__search-main > aside > section.ui-search-applied-filters > a > div > div")
    }

    async searchFor(val) {
        await this.searchInputField.setValue(val);
        this.searchButton.click();
    }



}

module.exports = new HomePage();