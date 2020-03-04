/**
 * 封装 Storage
 */
const STORAGE_KEY = 'mall'
export default {

  /**
   * 
   * @param {*} key - 需要存储的名称
   * @param {*} value - 需要存储的值
   * @param {*} module_name - 需要往对象里存储的名称，===> 设置嵌套里的
   */
  setItem (key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },

  /**
   * 
   * @param {*} key - 需要获取的值的名称
   * @param {*} module_name - 需要获取对象里面的值得名称，===> 获取嵌套里的
   */
  getItem (key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },

  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },

  /**
   * 
   * @param {*} key - 需要清除的值得名称
   * @param {*} module_name - 需要清除对象里面的值得名称，===> 获取嵌套里的
   */
  clear (key, module_name) {
    let val = this.getStorage()
    if (module_name) {
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}