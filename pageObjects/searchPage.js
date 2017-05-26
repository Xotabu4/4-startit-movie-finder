let BasePage = require('./basePage').BasePage

class SearchPage extends BasePage {

    constructor() {
        super() //This is needed to correcly extend BasePage
        this.searchResults = $$('movies>.jumbotron+div movie-card')
        this.searchField = $('input.form-control')
        this.URL = ''
    }

    search(text) {
        this.typeIntoSearchField(text)
        browser.sleep(1500)
        $('span.input-group-btn button.btn.btn-primary').click()
    }

    typeIntoSearchField(text) {
        this.searchField.sendKeys(text)
    }

    submitSearch() {
        this.searchField.submit()
    }

    getSearchFieldPlaceHolder() {
        return this.searchField.getAttribute('placeholder')
    }

}

exports.SearchPage = SearchPage