'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');

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
 
}

module.exports = ToolsService;
