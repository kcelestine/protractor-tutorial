// spec.js
describe('', function() {
  it('should have a title', function() {
    browser.ignoreSynchronization = true; 
    browser.get('http://www.dos.ny.gov/corps/bus_entity_search.html');
    expect(browser.getTitle()).toEqual('NYS Division of Corporations, State Records and UCC');
    //element(by.id('p_entity_name')).sendkeys('daycare');
    console.log('~*~*~*~*~*~*~*~');
    console.log(typeof(element(by.id('p_entity_name'))));
    console.log('~*~*~*~*~*~*~*~');

    var input = element(by.id('p_entity_name'));
    input.sendKeys('daycare');
    input.sendKeys(protractor.Key.ENTER);
    browser.sleep(3000); // 3s to take a look ;)

    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  });
});