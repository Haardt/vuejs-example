package de.conpinion.vuejs.startervuejs

import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.context.SpringBootTest
import geb.spock.GebReportingSpec


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class StarterHomeSpec extends GebReportingSpec {

  @Value('${local.server.port}')
  int port

  def setup() {
    browser.setBaseUrl("http://localhost:${port}")
  }

  def 'The landing page should have the side menu'() {
    setup:
    StarterHomepage homepage = browser.to StarterHomepage

    when:
    homepage.isDisplayed()

    then:
    homepage.getMenuItems() == ['user', 'appliance', 'settings']
  }

  def 'Clicked on menu entry should show the user table'() {

    setup:
    StarterHomepage homePage = browser.to StarterHomepage
    homePage.isDisplayed()
    when:
    homePage.clickLeftMenuItem('user')
    then:
    homePage.getMenuItems() == ['user', 'appliance', 'settings']
  }
}
