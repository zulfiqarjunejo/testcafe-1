import { Role, Selector } from "testcafe";
import * as dotenv from 'dotenv';

dotenv.config();

export const userOne = Role("https://account.microsoft.com/account?lang=de-de", async t => {
    const email = process.env.TESTER_EMAIL!;
    const password = process.env.TESTER_PASSWORD!;

    await t
        .click("button.ms-Button")
        .typeText("#i0116", email)
        .click("#idSIButton9")
        .typeText("#i0118", password)
        .click("#idSIButton9");
});