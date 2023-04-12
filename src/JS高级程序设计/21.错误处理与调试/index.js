(() => {
	try {
		return 2;
	} catch (e) {
		return 1;
	} finally {
		return 0;
	}
})();
// 0
