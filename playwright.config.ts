import { defineConfig } from "@playwright/test";
import { config as dotenvConfig } from "dotenv";
import { AUTOMATION_USER_AGENT } from "./src/utilities/constants";

dotenvConfig();

export default defineConfig({
	expect: { timeout: 30 * 1000 },
	forbidOnly: !!process.env.CI,
	fullyParallel: true,
	projects: [
		{
			name: "chromium",
			use: {
				actionTimeout: 30 * 1000,
				launchOptions: {
					args: [
						"--start-maximized",
						"--allow-file-access-from-files",
						"--use-fake-device-for-media-stream",
						"--use-fake-ui-for-media-stream",
						"--hide-scrollbars",
						"--disable-features=IsolateOrigins,site-per-process,VizDisplayCompositor,SidePanelPinning,OptimizationGuideModelDownloading,OptimizationHintsFetching,OptimizationTargetPrediction,OptimizationHints",
						"--disable-popup-blocking",
						"--disable-search-engine-choice-screen",
						"--disable-infobars",
						"--disable-dev-shm-usage",
						"--disable-notifications",
						"--disable-blink-features=AutomationControlled",
					],
					headless: false,
				},
				navigationTimeout: 30 * 1000,
				permissions: [
					"geolocation",
					"microphone",
					"camera",
					"clipboard-read",
					"clipboard-write",
				],
				testIdAttribute: "data-test",
				userAgent: AUTOMATION_USER_AGENT,
				viewport: null,
			},
		},
	],
	reporter: [
		[
			"allure-playwright",
			{
				links: {
					issue: { nameTemplate: "Issue #%s", urlTemplate: "https://%s" },
					link: { nameTemplate: "Link #%s", urlTemplate: "https://%s" },
					tms: { nameTemplate: "TMS #%s", urlTemplate: "https://%s" },
				},
			},
		],
		["junit", { outputFile: "test-results/results.xml" }],
	],
	retries: process.env.CI ? 2 : 0,
	testDir: "./tests",
	timeout: 15 * 60 * 1000,
	use: {
		screenshot: {
			fullPage: true,
			mode: process.env.CI ? "only-on-failure" : "off",
		},
		trace: process.env.CI ? "retain-on-failure" : "off",
		video: process.env.CI ? "retain-on-failure" : "off",
	},
	workers: 1,
});
