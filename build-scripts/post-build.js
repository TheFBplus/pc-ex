let ambientTypes = `interface Window {
	pcEX: typeof import("./dts");
}

declare const pcEX: typeof import("./dts");
`;

const { writeFile } = require("fs").promises;

(async function () {
	try {
		await writeFile("bin/pcEX.d.ts", ambientTypes);
	} catch (error) {
		console.log(error);
	}
})();
