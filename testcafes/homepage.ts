import { Selector, t } from "testcafe";
import { userOne } from "../roles";

fixture("Homepage")
    .page("https://ego-cockpit-dev.e-go-mobile.com/");

test("that homepage is accessible", async t => {
    const appTitle = Selector(".e-app-bar-title span");
    await t
        .useRole(userOne)
        .expect(appTitle.innerText)
        .eql("Cockpit");
});