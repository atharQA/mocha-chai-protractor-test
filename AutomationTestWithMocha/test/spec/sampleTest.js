var expect = require('chai').expect;

describe('SAMPLE TEST', () => {

    it('Title of the page', async () => {
        browser.driver.get("https://angular.io/");
        const requiredTitle = await browser.getTitle();
        console.log('TITLE :', requiredTitle);
        await expect(requiredTitle).to.be.equal('Angular - Introduction to the Angular Docs');

    });

    it('Validation:', async () => {
        const arr = [10, 20, 50, 60, 80, 100];
        var sum = 0;
        for(let i=0; i< arr.length; i++){
            sum = sum + arr[i];
        }
        var totalSum = sum;
        console.log('Total sum =', totalSum);
        expect(totalSum).to.be.equal(320);

    });
});