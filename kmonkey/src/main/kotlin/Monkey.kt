package net.netau.vasyoid

import org.openqa.selenium.By
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.chrome.ChromeOptions
import java.lang.RuntimeException
import kotlin.random.Random


class Monkey {

    private val driver: ChromeDriver
    private val random = Random

    init {
        System.setProperty(
            "webdriver.chrome.driver",
            "/home/vasyoid/WebstormProjects/school_timetable/node_modules/.bin/chromedriver"
        )
        val options = ChromeOptions()
        options.setBinary("/home/vasyoid/WebstormProjects/school_timetable/Timetable-linux-x64/Timetable")
        driver = ChromeDriver(options)
    }

    fun run(steps: Int) {
        for (step in 1 .. steps) {
            randomClick()
        }
        driver.quit()
    }

    private fun randomClick() {
        var success = false
        while (!success) {
            try {
                success = true
                val elements = driver.findElements(By.cssSelector("[class]:not([class=\"\"])"))
                val index = random.nextInt(elements.size)
                elements[index].click()
                println(elements[index].getAttribute("class"))
            } catch (error: RuntimeException) {
                success = false
            }
        }
    }
}

fun main() {
    Monkey().run(10)
}