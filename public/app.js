import "./assets/css/style.css";

// *** LIB *** //

import DME from "../js/lib/DME";
import StdFunc from "../js/lib/StdFunc";
import StdStr from "../js/lib/StdStr";

// *** CLASS *** //
import Trigger from "../js/class/Trigger";

// *** TEMPS *** //

// # **RULES**

/**
 *
 * @param {HTMLElement} trigger
 * @param {HTMLElement | Array <HTMLElement>} target
 * @param {string} className
 */
async function Run(trigger, target, className = "active") {
	const rules = function (element) {
		window.addEventListener("keydown", function triggerRun(e) {
			if (e.key === "h") {
				element.classList.toggle(className);
			}
		});

		trigger.addEventListener("click", function triggerRun(e) {
			e.stopPropagation();

			element.classList.toggle(className);
		});
	};

	if (Array.isArray(target)) {
		target.forEach((element) => {
			rules(element);
		});
	} else {
		rules(target);
	}
}

window.addEventListener("load", (e) => {
	Run(DME.growingHeaderTriggerButton, [DME.growingHeader, DME.growingHeaderNavigationList, DME.growingHeaderTriggerButton]);
});