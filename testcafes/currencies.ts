import { Selector, t } from "testcafe";
import { userOne } from "../roles";

fixture("Currencies")
    .page("https://ego-cockpit-dev.e-go-mobile.com/i18n/currencies");

test("that Currencies page is accessible", async t => {
    const currenciesHeading = Selector('h3').withText('Currencies');

    await t
        .useRole(userOne)
        .expect(currenciesHeading.exists).ok();
});

test("that Currencies page display results", async t => {
    const currenciesCountOfResults = Selector('h4');

    const regexPattern: RegExp = /^\d+\s*Results$/;

    await t
        .useRole(userOne)
        .expect(currenciesCountOfResults.innerText).match(regexPattern);
})
.timeouts({
    "ajaxRequestTimeout": 10000,
    "pageLoadTimeout": 5000,
});