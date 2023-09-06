// ==UserScript==
// @name         Load All Hatha Yoga Instructors
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://isha.sadhguru.org/uk/en/yoga-meditation/yoga-program-for-beginners/hatha-yoga/courses-by-certified-teachers
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sadhguru.org
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    var delayInMiliseconds = 500;

    waitForElem('.css-11il1an').then((loadMoreButton) => {
        setInterval(function(){
            loadMoreButton.click();
        }, delayInMiliseconds);
    });
})();

function waitForElem(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}