module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://distresssignal.org",
    "https://pulsar-5be.pages.dev/"
	]
};