const { readFile, writeFile } = require("fs").promises;

(async function () {
	let docs, intro, outro;

	try {
		docs = (await readFile("docs/md/README.md")).toString();
		intro = (await readFile("build-scripts/HEADER.md")).toString();
		outro = (await readFile("build-scripts/FOOTER.md")).toString();

		let insertIdx = docs.indexOf("## Table of contents");
		let head = docs.slice(0, insertIdx);
		let split = head.split(/\r?\n/);
		split.shift(), split.shift();
		head = split.join("");
		head += "\n";
		head += intro;
		head += "\n";
		head += outro;

		await writeFile("README.md", head);
	} catch (error) {
		console.log(error);
	}

})();