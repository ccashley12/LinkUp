import puppeteer from "puppeteer";

describe('show/hide an event details', () => {
	let browser;
	let page;

	beforeAll(async () => {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 250,
			timeout: 0,
		});

		page = await browser.newPage();
		await page.goto('http://localhost:5173/');
	});

	afterAll(async () => {
		if (browser) {
			await browser.close();
		}
	});

	it('An event element is collapsed by default', async () => {
		const eventDetails = await page.$('.eventContainer .eventDetails');
		expect(eventDetails).toBeNull();
	});

	it('User can expand an event to see details', async () => {
		await page.click('.eventContainer .more-btn');
		const eventDetails = await page.$('.eventContainer .eventDetails');
		expect(eventDetails).toBeDefined();
	});
	it('User can collapse an event to hide details', async () => {
		await page.click('.eventContainer .more-btn');
		const eventDetails = await page.$('.eventContainer .eventDetails');
		expect(eventDetails).toBeNull();
	});
});