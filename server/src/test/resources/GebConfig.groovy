/*
	This is the Geb configuration file.

	See: http://www.gebish.org/manual/current/#configuration
*/

import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.chrome.ChromeOptions
import org.openqa.selenium.remote.DesiredCapabilities
import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.phantomjs.PhantomJSDriver

waiting {
    timeout = 2
}



environments {

  idea {
    reportsDir = new File("./build/geb")
    ChromeOptions options = new ChromeOptions();
    String chromeExecutableOverride = System.getProperty("webdriver.chrome.exe")
    if (chromeExecutableOverride != null) {
      options.setBinary(chromeExecutableOverride)
    }
    options.addArguments("--start-maximized");
    options.addArguments("--no-sandbox");

    driver = { new ChromeDriver(options) }
  }

    // run via “./gradlew chromeTest”
    // See: http://code.google.com/p/selenium/wiki/ChromeDriver
    chrome {
        ChromeOptions options = new ChromeOptions();
        String chromeExecutableOverride = System.getProperty("webdriver.chrome.exe")
        if (chromeExecutableOverride != null) {
            options.setBinary(chromeExecutableOverride)
        }
        options.addArguments("--start-maximized");
        options.addArguments("--no-sandbox");

        driver = { new ChromeDriver(options) }
    }

    // run via “./gradlew chromeHeadlessTest”
    // See: http://code.google.com/p/selenium/wiki/ChromeDriver
    chromeHeadless {
        driver = {
            ChromeOptions o = new ChromeOptions()
            o.addArguments('headless')
            new ChromeDriver(o)
        }
    }

    // run via “./gradlew firefoxTest”
    // See: http://code.google.com/p/selenium/wiki/FirefoxDriver
    firefox {
        atCheckWaiting = 1

        driver = { new FirefoxDriver() }
    }

    phantomJs {
        driver = { new PhantomJSDriver() }
    }

}

// To run the tests with all browsers just run “./gradlew test”

baseUrl = "http://localhost:8080"

