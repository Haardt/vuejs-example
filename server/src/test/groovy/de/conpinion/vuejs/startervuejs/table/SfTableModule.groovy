package de.conpinion.vuejs.startervuejs.table

import geb.Module

class SfTableModule extends Module {
    static content = {
        navContainer { $("div.ui.sidebar.menu") }
    }

    void isPresent() {
        waitFor { navContainer.isDisplayed()}
    }
}
