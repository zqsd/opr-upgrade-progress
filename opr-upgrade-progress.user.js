// ==UserScript==
// @name         OPR upgrade progress
// @version      0.1
// @description  Tells OPR upgrade progress and available upgrades
// @author       zqsd
// @match        https://opr.ingress.com/*
// @grant        none
// @downloadURL  https://gitlab.com/zqsd/opr-upgrade-progress/raw/master/opr-upgrade-progress.user.js
// @updateURL    https://gitlab.com/zqsd/opr-upgrade-progress/raw/master/opr-upgrade-progress.user.js
// @supportURL   https://gitlab.com/zqsd/opr-upgrade-progress/issues
// ==/UserScript==

(function() {
    'use strict';

    fetch('https://opr.ingress.com/api/v1/vault/reward').then(r => r.json()).then(reward => {
        const icon = document.querySelector('.upgrades-icon');
        icon.style.float = 'left';

        const status = document.createElement('span');
        status.style.float = 'left';
        icon.parentElement.appendChild(status);

        const progress = document.createElement('div');
        progress.textContent = `${reward.progress}/${reward.interval}`;
        status.appendChild(progress);

        const available = document.createElement('div');
        available.textContent = `${reward.available} available`;
        status.appendChild(available);
    });
})();
