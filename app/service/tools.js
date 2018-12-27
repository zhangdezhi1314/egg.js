'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
const md5 = require('md5');


class   ToolsService extends Service {
  async captcha() {
    let captcha = svgCaptcha.create({
        size:6,
        fontSize:50,
        width:130,
        height:32,
        background:'#f60'
    });

    this.ctx.session.code = captcha.text;

    return captcha;
  }

  async md5(str) {
    return md5(str);
    
  }
 
}

module.exports = ToolsService;
