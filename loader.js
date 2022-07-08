// Load the cheat menu
(async () => {
	eval(await (await fetch("https://raw.githubusercontent.com/ProdigyPNP/MeowMenu_fork/master/dist/bundle.js")).text())
})()