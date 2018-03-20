package de.conpinion.vuejs.startervuejs.nav

import geb.Module

class LeftNavigationModule extends Module {
    static content = {
        navContainer { $("div.ui.menu.vertical.fluid") }
        menuItems { navContainer.find("a.item") }
    }

    boolean isDisplayed() {
        waitFor { navContainer.isDisplayed() }
        true
    }

    void clickMenuItem(String item) {
        menuItems.allElements().findAll({ it.getAttribute('item-id') == item}).first().click()
    }

    List<String> getMenuItemIds() {
        menuItems.allElements().findAll({ it.getAttribute('item-id') != null}).collect
                { it.getAttribute('item-id')}

    }
}
