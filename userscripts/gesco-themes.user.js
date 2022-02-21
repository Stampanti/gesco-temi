// ==UserScript==
// @name         Gesco-Themes Loader
// @namespace    https://github.com/Stampanti/gesco-themes
// @version      1.0
// @description  Theme loader for Gesco.
// @author       VideoStampanti
// @match        https://gesco.bearzi.it/secure/scuola/famiglie/allievo/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bearzi.it
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var s = document.createElement('script');
    s.src = "https://gs-themes.videostampantimc.ga/themes/thememanager.js";
    s.defer = true;
    document.head.appendChild(s);
})();