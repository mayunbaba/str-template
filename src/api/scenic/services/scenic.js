'use strict';

/**
 * scenic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scenic.scenic');
