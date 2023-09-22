export default class Trigger {
	/**
	 * @type {HTMLElement}
	 */
	#trigger;
	/**
	 * @type {HTMLElement | Array <HTMLElement>}
	 */
	#target;
	/**
	 * @type {String}
	 */
	#className;
	/**
	 * @type {String}
	 */
	#triggerKey;

	/**
	 *
	 * @param {HTMLElement} trigger
	 * @param {HTMLElement | Array <HTMLElement>} target
	 * @param {{ className: string, keyToTtrigging: string }} options
	 */
	constructor(trigger, target, options = { className, keyToTtrigging }) {
		(async () => {
			this.#trigger = trigger;
			this.#target = target;
			if (options.className === undefined) {
				this.#className = "active";
			} else {
				this.#className = options.className;
			}

			if (options.keyToTtrigging === undefined) {
				this.#triggerKey = "active";
			} else {
				this.#triggerKey = options.keyToTtrigging;
			}
		})().then((rsp) => {
			this.#Trigging();
		});
	}

	async #Rules() {
		if (Array.isArray(this.#target)) {
			this.#target.forEach((element) => {
				element.classList.toggle(this.#className);
			});
		} else {
			htmlElements.classList.toggle(this.#className);
		}

		this.#trigger.classList.toggle(this.#className);
	}

	async #Trigging() {
		if (this.#className === undefined) {
			this.#className = "active";
		}

		if (this.#triggerKey === undefined) {
			throw new Exception("The trigger key is not defined");
		} else {
			window.addEventListener("keydown", (e) => {
				if (e.key === this.#triggerKey) {
					this.#Rules();
				}
			});
		}

		this.#trigger.addEventListener("click", (e) => {
			e.stopPropagation();

			this.#Rules();
		});
	}
}
