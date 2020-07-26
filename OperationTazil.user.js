// ==UserScript==
// @name         Operation Tazil
// @homepage     https://boxcuttersbc.com
// @run-at       document-start
// @version      0.1.5
// @updateURL    https://github.com/SirQuackly/OperationTazilDev/raw/master/OperationTazil.user.js
// @downloadURL  https://github.com/SirQuackly/OperationTazilDev/raw/master/OperationTazil.user.js
// @iconURL      https://github.com/SirQuackly/OperationTazilDev/raw/master/OperationTazilSmall.png
// @icon64URL    https://github.com/SirQuackly/OperationTazilDev/raw/master/OperationTazil.png
// @supportURL   https://discord.gg/H8Xtufh
// @description  Operation Tazil is here!
// @author       p1, keffen, Aurorus, ShadowFalcon and Storm
// @match        https://boxcritters.com/play/
// @match        https://boxcritters.com/play/?*
// @match        https://boxcritters.com/play/#*
// @match        https://boxcritters.com/play/index.html
// @match        https://boxcritters.com/play/index.html?*
// @match        https://boxcritters.com/play/index.html#*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

/*
———————————————————————————————
| WELCOME to Operation Tazil! |
———————————————————————————————


- INSTALLATION:

To install and play Operation Tazil, please scroll all the way up and click on "install".
If you do not see this button, please install the browser extension "TamperMonkey" and try again.
You can find TamperMonkey here: https://www.tampermonkey.net
It works on Chrome, Firefox, Safari, Edge, and the Opera browser, and is required to run and play Operation Tazil.

After you installed it, reload the game page, and keep an eye out for every- and anything strange.
Good luck, Agent. You will need it.

And, most importantly, have fun!



- GENERAL INFORMATION:

Operation Tazil is an *unofficial* fan project of Box Cutters, a fan Discord server of the game Box Critters by Lance Priebe aka. RocketSnail.
However, Operation Tazil was created with permission from RocketSnail.
It is brought to you by Aurorus (artwork), p1 (programming), keffen (programming), ShadowFalcon (story) and Storm (music), with additional music created by Simmonds2000.

To get access to leaderboards for the game and additional benefits for playing Operation Tazil, and to talk to the creators, copy and paste the following invite link into your browser:
--> https://discord.gg/H8Xtufh <--

To play Box Critters, after installing Operation Tazil, visit:
--> https://boxcritters.com/index.html <--



- LICENSE:

Operation Tazil is released by fans of Box Critters, for fans of Box Critters. Therefore, anyone is allowed to install and play it inside of Box Critters, free of charge. We do not earn anything with Operation Tazil.
However, we do not permit republishing modified versions of Operation Tazil in any way. Please respect the work we put into the creation of this. If you want to make something similar, please start from scratch.
All artwork included within Operation Tazil as a fan project is the sole intellectual property of Aurorus. Do not steal, modify, and/or republish any of it.
The source code included within Operation Tazil as a fan project is the intellectual property of p1 and keffen. Do not steal, modify, and/or republish any of it.
However, you are free to create content about Box Critters using Operation Tazil. E.g. creating YouTube videos featuring this fan project is explicitly allowed.
By installing Operation Tazil and playing it you agree to these terms.
If you are aware of anyone disrespecing these few terms, please inform us at Box Cutters Discord, invite link https://discord.gg/H8Xtufh so we can take appropriate action.



- NOTICE TO CHEATERS:

Any attempt of cheating will lead to a complete loss of progress, and in severe cases, to a ban from Box Cutters altogether.
Please play the game as it was intended. It is not too hard. Be responsible.
















































































































































































To check for modifications of stored data: GM_addValueChangeListener(name, function(name, old_value, new_value, remote) {})
https://www.tampermonkey.net/documentation.php?ext=dhdg#GM_addValueChangeListener



TODO (last step): Change ALL occurrences of "Tazil" to what it actually says!



*/

(function() {
    'use strict';

    let timer = setInterval(function() {
		if (typeof world !== "undefined" && typeof world.stage !== "undefined" && typeof world.stage.room !== "undefined") {
			clearInterval(timer);
			onWorldLoaded();
		}
	}, 1000/60);

	function onWorldLoaded() {
		console.log("TODO");
	}
})();



































