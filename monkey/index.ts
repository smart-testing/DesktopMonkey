const webdriver = require('selenium-webdriver');

describe('selenium test', function () {

    this.timeout(100000);

    const driver = new webdriver.Builder()
        .usingServer('http://localhost:9515')
        .withCapabilities({
            chromeOptions: {
                binary: '/home/vasyoid/WebstormProjects/school_timetable/Timetable-linux-x64/Timetable'
            }
        })
        .forBrowser('chrome')
        .build();

    it('run', async function () {
        for (let i = 0; i < 100; i++) {
            await randomClick();
        }
        await driver.quit();
    });

    let randomClick = async function() {
        let success = false;
        while (!success) {
            try {
                success = true;
                let elems = await driver.findElements(webdriver.By.css('[class]:not([class=""])'));
                let index = Math.floor(Math.random() * (elems.length - 1));
                if (await elems[index].getAttribute('class') == 'minimizeBTN') {
                    continue;
                }
                await elems[index].click();
                console.log(await elems[index].getAttribute('class'));
            } catch (error) {
                success = false;
            }
        }
        await driver.manage().window;
    };
});
