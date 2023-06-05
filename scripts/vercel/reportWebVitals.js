const reportWebVitals = (onPerfEntry) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		try {
			import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
				onCLS(onPerfEntry);
				onFID(onPerfEntry);
				onFCP(onPerfEntry);
				onLCP(onPerfEntry);
				onTTFB(onPerfEntry);
			});
		} catch (error) {
			console.log("Error", Error);
		}
	}
};

export default reportWebVitals;
