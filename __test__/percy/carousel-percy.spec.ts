const percySnapshot = require("@percy/puppeteer");

describe("visual regression tests", function () {
  beforeAll(async function () {
    // await page.goto(
    //   "https://standalonesurveys.na2.vcsandbox.com/s/Start/605abc1c-c9c7-402c-9ec3-e628ba066b7c?_rid=DlEk0M_Va!ncfCsk!62okIO4aw_esEIk8hQES8AxuwfDNZ2CIY1T3OG8OQLh78kfuYMqKNLq4cyCA4W7zrEE4uQs9b5FbScN6N0i7LfYA9KlASRUo7CWbZzKtZ!6QFOKkxpgb2aBHlscYOEpJiCZTHgs5lyxkz_D_ExnFARmVzUiT6q_wIjQE6nVV41yMVML7VWdM5HsP0XrTOMpmI!UrNFyXTWsDYsAXOqdw7B4F28SO!!D4oun2Hwyc!TIkNEszD9VVLySlbLqgDJImwnsNtLu!NDDaVsbQuoePyVbBpI7ALqtlN8ThtokV2dtbg1Nubd4B5EN3AlM4PHWn!zYERBlG7U8CZnC&_mult=False&_themeId=ded75147-08ee-49d3-b9d4-ab7a015b12d1&_data=yEbdlvcb!wQu1Yl2AxquKyUoq41w4!f5o1S3F7_tj40HjDPS8_zC88LzeLWd28t1Bq_WMovVkmuq4G1HmVHB2on82kgiqVgQAN36A4y2etk1j9S07jzZ8MY!DTd480ENHTyk9ECyfARrPmHA9w_44D4FId6y83TRdqaV7H87jc1sOwONRksTisLgvKtU28oG6gbtshqiyM3zfN!szHHIRAE10Aru!50sg78NFkqvxA0ZF_q9f8XIJL7K2Jh7Z!1W_2l7_!1xvidlKjxfW4W90!Gw1pnKZhzG4yPzJ3bisMXwjORQWm6QDQ--&_sup=https%3a%2f%2fwww.nytimes.com&_dspvw=d"
    // );
    await page.goto(
      "https://standalonesurveys.na2.vcsandbox.com/s/Start/605abc1c-c9c7-402c-9ec3-e628ba066b7c?_rid=DlEk0M_Va!lC3ZDF_xnq6MLeMR5pivdwIiKP2wnQAMsPNHc0Qe6XvCoduuuMNZtMOVhE7FqH_GDXmCWzOCMIfA0DAKvvAPh20VpqjeSp94SL1EgxcyEA2xO9Atw2oa3cuUwvKX6XFlKfz_Ea_GIuqdJh0nLx_Y7LmNPA30TruvfMneosF!aGYiTtm89kkf3znVL5midcDf0dxuw_9XAW9Gh1AAXbqYSPiX0UDiHLs3v_EJwqx6xKMbgGAyCVJgoJY1TX0F9x4eFif9IYxAI0n4ozqeNAt5InY6bms9jU4hY3kJtSx4AQOG9nLkq1n4H3zuvkA_KyoMlop3XPDjoP0YbZBRim9Io5&_mult=False&_themeId=ded75147-08ee-49d3-b9d4-ab7a015b12d1&_data=yEbdlvcb!wQu1Yl2AxquKyUoq41w4!f5o1S3F7_tj40HjDPS8_zC88LzeLWd28t1Bq_WMovVkmuq4G1HmVHB2on82kgiqVgQAN36A4y2etk1j9S07jzZ8Ev703PHc5IqHDW6QyYDfC3cInX6hxeq!UFqjNQ2Vflc28evF_0ZumDlf3LeIU9eeadZeVtng_p3m7!5zFBhytetut2zvuQ22fCfzFoczsIiQ2WZhTSNxT96_a4!R9FfdyJVpm19VLH71kOMrMgnAj6aQgmsKKOEaInTPJ37ZYa5ofisiBLeup33OVYo03rOug--&_sup=https%3a%2f%2fwww.nytimes.com&_dspvw=d"
    );
  });

  it("should load the survey page", async function () {
    const headerImage = await page.$("#headerImage");
    expect(headerImage).toBeDefined();
    await percySnapshot(page, "test title 4");
  });
});
