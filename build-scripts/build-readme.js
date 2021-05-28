const { readFile, writeFile } = require("fs").promises;

(async function () {
	let docs, intro;

	try {
		docs = (await readFile("docs/md/README.md")).toString();
		intro = (await readFile("build-scripts/HEADER.md")).toString();

		let insertIdx = docs.indexOf("## Table of contents");
		let head = docs.slice(0, insertIdx);
		let page = docs.slice(insertIdx);
		let split = head.split(/\r?\n/);
		split.shift(), split.shift();
		head = split.join("");
		head += "\n";
		head += intro;
		head += "\n";
		head += `### API Docs

API docs can be found [here](https://thefbplus.github.io/pc-ex/)`;

		// // Fudge links to HTML docs into the markdown
		// head += page //
		// 	.split("(https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md")
		// 	.join("(https://thefbplus.github.io/pc-ex/modules.html");

		await writeFile("README.md", head);
	} catch (error) {
		console.log(error);
	}
})();
