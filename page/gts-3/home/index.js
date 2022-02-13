const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()

const logger = DeviceRuntimeCore.HmLogger.getLogger('myqrcode')

Page({
	build() {
    logger.debug('page build invoked')

		hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: DEVICE_WIDTH,
      h: DEVICE_HEIGHT,
      pos_x: (DEVICE_WIDTH / 2) - (250 / 2),
      pos_y: (DEVICE_HEIGHT / 2) - (250 / 2),
      src: 'qr.png'
})
	},
	onInit() {
		logger.debug('page onInit invoked')
	},

	onDestroy() {
		logger.debug('page onDestroy invoked')
	},
})
