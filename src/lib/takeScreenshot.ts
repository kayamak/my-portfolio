import puppeteer from "puppeteer";

export const takeScreenshot = async (
	url: string,
	path: string,
): Promise<void> => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	await page.screenshot({ path });
	await browser.close();
};
