/** compareObjs
   * compare two simple objs (one level only)
   * @param obj1 ({})
   * @param obj2 ({})
   * @return bool
   */

const object = {   
    compareObjs: (obj1, obj2) => [Object.keys(obj2), Object.keys(obj1)].flat().reduce( (acc,key)=> obj1[key] != obj2[key] ? false: acc ,true),
};

export default object;
