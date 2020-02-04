import AnalysysAgent from './util/sdk/AnalysysAgent_Baidu_SDK.es6.min.js'
import AnalysysEncryption from './util/sdk/AnalysysAgent_encryption.es6.min.js'

AnalysysAgent.encrypt = AnalysysEncryption
AnalysysAgent.debugMode = 2
AnalysysAgent.appkey = 'sdktest201907'
AnalysysAgent.uploadURL = 'https://arksdk.analysys.cn'
AnalysysAgent.autoShare = true
AnalysysAgent.encryptType = 2
// AnalysysAgent.autoProfile = false
// AnalysysAgent.auto = true
/**
 * @file app.js
 * @author swan
 */

/* globals swan */

App({
  onLaunch(options) {
    // do something when launch
    // 引导添加，参见文档： http://smartprogram.baidu.com/docs/design/component/guide_add/
  },
  onShow(options) {
    AnalysysAgent.appStart(options)
  // do something when show
  },
  onHide() {
    // do something when hide
  }
})
