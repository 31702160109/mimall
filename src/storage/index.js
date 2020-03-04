/**
 * 封装 Storage
 */
const STORAGE_KEY = 'mall'
export default {

  /**
   * 
   * @param {"需要存储的名称"} key 
   * @param {"需要存储的值"} value 
   * @param {"需要往对象里存储的名称，===> 设置嵌套里的"} module_name 
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
   * @param {"需要获取的值的名称"} key 
   * @param {"需要获取对象里面的值得名称，===> 获取嵌套里的"} module_name 
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
   * @param {"需要清除的值得名称"} key 
   * @param {"需要清除对象里面的值得名称，===> 获取嵌套里的"} module_name 
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