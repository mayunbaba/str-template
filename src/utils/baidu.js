// https://lbs.baidu.com/index.php?title=webapi/guide/webservice-geocoding
// 百度地图API
const axios = require('axios');

async function geocoding(city, address) {
  const res = await axios({
    method: 'get',
    url: 'https://api.map.baidu.com/geocoding/v3/?',
    params: {
      city,
      address,
      output: 'json',
      ak: 'q5cnaT2EghQvkzH2r3KGvD1EVqwxOsEG',
    },
  });
  if (res.status === 200) {
    const { result } = res.data;
    const { location, precise } = result;
    if (precise === 1) {
      const { lng: longitude, lat: latitude } = location;
      return {
        longitude,
        latitude,
      }
    } else {
      return {
        "data": res.data,
        "error": {
          "status": 400,
          "message": "请完善名称，确保地址精确",
        }
      };
    }
  } else {
    // 请求百度地图接口失败，非用户问题
    return { res };
  }
}

module.exports = {
  geocoding,
}