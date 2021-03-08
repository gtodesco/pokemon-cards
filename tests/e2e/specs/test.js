module.exports = {
  'step one: search pokemon': browser => {
    browser
      .init()
      .url('https://master.d3quxxvpz3xw5s.amplifyapp.com/')
      .waitForElementVisible('body', 15000)
      .setValue('#search-input', 'dark')
      .click('#search-button')
  },

  'step two: test modal': browser => {
    browser
      .click('.card')
      .click('.attack')
      .assert.visible('.modal')
      .end()
  }
}
