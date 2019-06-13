/** objs
   * compare two simple objs (one level only)
   * @param obj1 ({})
   * @param obj2 ({})
   * @return bool
   */

const compare = {   
    objs: (obj1, obj2) => [Object.keys(obj2), Object.keys(obj1)].flat().reduce( (acc,key)=> obj1[key] != obj2[key] ? false: acc ,true),

    arrays: (arr1, arr2, sort_before_comparing) => {
        if(sort_before_comparing) {
            arr1.sort();
            arr2.sort();
        }
        if(arr1.length != arr2.length) return false;
        else {
            return arr1.reduce(
                (acc,val,idx) => acc && (val === arr2[idx]), true);
        }
    },
};

export default compare;
