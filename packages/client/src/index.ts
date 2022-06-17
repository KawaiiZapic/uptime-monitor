import { system } from "systeminformation";

(async () => {
	console.log("start");
	console.log(await system());
})()