"use strict";
window.actCodeUUID = process.env.actCodeUUID;
window.actHost = window.location.protocol + "//" + window.location.host;
window.activitycore = "/pfhd-external-gateway/pfhd-external-core/v1";
window.baseUrl = window.actHost + window.activitycore;
window.isApp = /spdb/i.test(navigator.userAgent);
window.isWeChat = /MicroMessenger/i.test(navigator.userAgent);
