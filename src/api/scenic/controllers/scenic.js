'use strict';

/**
 * scenic controller
 */
const baidu = require('../../../utils/baidu');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::scenic.scenic', (strapi) => ({
  // 重写find方法，修改出参
  // async find(ctx) {
  //   let { data, meta } = await super.find(ctx);
  //   data.forEach((item) => {
  //     Object.assign(item, item.attributes);
  //     delete item.attributes;
  //   });
  //   return { data, meta };
  // },
  // 重写create方法，修改入参
  // async create(ctx) {
  //   const res = await baidu.geocoding(ctx.request.body.data.city, ctx.request.body.data.name);
  //   if (res.longitude) {
  //     ctx.request.body.data.longitude = res.longitude;
  //     ctx.request.body.data.latitude = res.latitude;
  //     return await super.create(ctx);
  //   } else {
  //     ctx.status = 400;
  //     return res;
  //   }
  // },
  // // 重写update方法，修改入参
  // async update(ctx) {
  //   const res = await baidu.geocoding(ctx.request.body.data.city, ctx.request.body.data.name);
  //   if (res.longitude) {
  //     ctx.request.body.data.longitude = res.longitude;
  //     ctx.request.body.data.latitude = res.latitude;
  //     return await super.update(ctx);
  //   } else {
  //     ctx.status = 400;
  //     return res;
  //   }
  // },
}));
