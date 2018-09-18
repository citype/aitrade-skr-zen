import axios from 'axios'

const API_ROOT = "https://localhost:8082"
const API_CODE_SUCCESS = 1;
const ENV = "publish";

axios.defaults.baseURL = API_ROOT
axios.defaults.headers.common['env'] = ENV
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


var qs = require('qs');

export class Network {

    static get(path, params, callback) {
        axios.get(path, params)
            .then(function (res) {
                let data = res.data;
                if (data.code != null && data.code !== undefined && data.code === API_CODE_SUCCESS) {
                    callback(null, data)
                } else {
                    callback({ status: data.errorCode, msg: data.message }, null);
                    console.log(path, data.code, "status: " + data.errorCode + "\nmsg:" + data.message);
                }
            })
            .catch(function (error) {
                callback({ status: 1, msg: error }, null)
            });
    }

    static post(path, params, callback) {

        axios.post(path, params)
            .then(function (res) {
                let data = res.data;
                if (data.code != null && data.code !== undefined && data.code === API_CODE_SUCCESS) {
                    callback(null, data)
                } else {
                    callback({ status: data.errorCode, msg: data.message }, null);
                    console.log(path, data.code, "status: " + data.errorCode + "\nmsg:" + data.message);
                }
            })
            .catch(function (error) {
                callback({ status: 1, msg: error }, null)
            });
    }
}

const GATE_WAY_PUBLIC_PARAMS = {
    s_web: "1",
    s_os: "OSX",
    s_osv: "10.13.3",
    s_epv: "65.0.3325.181",
    s_ep: "Chrome",
    s_sc: "2560*1600",
    format: "json",
    v: "1.0",
    lang: "zh_CN"
}


export default class Gateway {

    static get(api, params, callback) {

        const pub = Object.keys(GATE_WAY_PUBLIC_PARAMS).map((key) => {
            return key + "=" + GATE_WAY_PUBLIC_PARAMS[key]
        }).join("&")

        const path = "?method=" + api + "&" + pub + "&timestamp=" + Math.round(new Date().getTime() / 1000)
        Network.get(path, params, callback)
    }

    static post(api, params, callback) {

        const pub = Object.keys(GATE_WAY_PUBLIC_PARAMS).map((key) => {
            return key + "=" + GATE_WAY_PUBLIC_PARAMS[key]
        }).join("&")
        const path = "?method=" + api + "&" + pub + "&timestamp=" + Math.round(new Date().getTime() / 1000)
        Network.post(path, qs.stringify(params), callback)
    }
}