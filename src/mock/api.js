import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  "status": 0,
  "data": {
    "id|10001-20001": 12,
    "username": "@name",
    "userAge": 16
  }
})