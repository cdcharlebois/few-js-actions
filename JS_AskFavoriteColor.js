// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<string>}
 */
export async function JS_AskFavoriteColor() {
	// BEGIN USER CODE
	return new Promise(function (resolve, reject) {
		const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
		let recognition = new SpeechRecognition();
		let pid;
		recognition.lang = "en-US";
		recognition.continuous = false;
		recognition.interimResults = false;
		recognition.maxAlternatives = 1;
		recognition.onresult = function (event) {
			var color = event.results[0][0].transcript;
			console.log('Result received: ' + color);
			mx.ui.hideProgress(pid);
			resolve(color);
		}
		recognition.start();
		pid = mx.ui.showProgress("Now listening for your favorite color...");
		//sometime later, resolve with a color..
		// resolve('green');
	});
	// throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
