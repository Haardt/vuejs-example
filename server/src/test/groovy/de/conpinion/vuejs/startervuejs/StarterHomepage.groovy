package de.conpinion.vuejs.startervuejs

import de.conpinion.vuejs.startervuejs.nav.LeftNavigationModule
import geb.Page

class StarterHomepage extends Page {
  static url = '/#/welcome'

  static content = {
    leftMenu { module LeftNavigationModule }
  }

  boolean isDisplayed() {
    leftMenu.isDisplayed()
  }

  List<String> getMenuItems() {
    return leftMenu.getMenuItemIds()
  }

  void clickLeftMenuItem(itemId) {
    leftMenu.clickMenuItem(itemId)
  }
}
