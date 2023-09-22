export default class DME {
	// # DEFAULT HTML ELEMENTS

	static body = document.querySelector("body");
	static app = document.getElementById("app");

	static header = document.getElementById("header");
	static helper = document.getElementById("helper");

	static navigationHeaderTriggerButton = document.getElementById("navigationHeaderTriggerButton");
	static helperHeaderTriggerButton = document.getElementById("helperHeaderTriggerButton");
	static parameterHeaderTriggerButton = document.getElementById("parameterHeaderTriggerButton");
	static headerNavigation = document.getElementById("headerNavigation");
	static headerNavigationList = document.getElementById("headerNavigationList");

	// # CURRENTS HTML ELEMENTS

	static growingHeader = document.getElementById("growingHeader");

	static growingHeaderTriggerButton = this.growingHeader.querySelector("#headerTriggerButton");
	static growingHeaderNavigation = this.growingHeader.querySelector("#headerNavigation");
	static growingHeaderNavigationList = this.growingHeader.querySelector("#headerNavigationList");
}
