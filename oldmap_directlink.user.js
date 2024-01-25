// ==UserScript==
// @name         oldmap_directlink
// @namespace    http://tampermonkey.net/
// @version      2024-01-23
// @description  try to take over the world!
// @author       You
// @match        https://mapps.gsi.go.jp/contentsImageDisplay.do*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gsi.go.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var waitTime = 1000; // 1000(millisec) * 60(sec) * 3 = 3分
    //setTimeout(Placebutton(Getlink()), waitTime);
    setTimeout(PlaceDLbutton(Getlink()), waitTime);
    //window.location = 'https://mapps.gsi.go.jp' + Getlink().value.slice(1);

    // Your code here...
})();

function Getlink() {
    let element = document.getElementById('filePath');
    return element
}

function Placebutton(element) {
    let root = document.getElementsByClassName('vsc-initialized');
    //console.log('https://mapps.gsi.go.jp' + element.value.slice(1));
    let link_area = document.createElement('div');
    link_area.setAttribute('id', 'link_area');
    link_area.setAttribute('style', 'position: absolute; height: 100%; left: 10px; top: 100px;')
    let link = document.createElement('a');
    link.setAttribute('href', 'https://mapps.gsi.go.jp' + element.value.slice(1));
    link.textContent = '画像リンク';
    link_area.appendChild(link);
    document.body.appendChild(link_area);

}

function PlaceDLbutton(element) {
    let root = document.getElementsByClassName('vsc-initialized');
    let link_area = document.createElement('div');
    link_area.setAttribute('id', 'link_area');
    link_area.setAttribute('style', 'position: absolute; height: 100%; left: 10px; top: 100px;')
    let link = document.createElement('a');
    link.setAttribute('href', 'https://mapps.gsi.go.jp' + element.value.slice(1));
    link.setAttribute('download', '');
    link.textContent = 'ダウンロード';
    link_area.appendChild(link);
    document.body.appendChild(link_area);

}