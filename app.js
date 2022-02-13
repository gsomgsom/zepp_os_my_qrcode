const logger = DeviceRuntimeCore.HmLogger.getLogger('myqrcode')

App({
	globalData: {},
	onCreate(options) {
		logger.debug('app onCreate invoked')
	},

	onDestroy(options) {
		logger.debug('app onDestroy invoked')
	},

	onError(error) {
		logger.log('app app.js onError invoked')
	},

	onPageNotFound(obj) {
		logger.log('app app.js onPageNotFound invoked')
	},

	onUnhandledRejection(obj) {
		logger.log('app app.js on un handle rejection invoked')
	},
})