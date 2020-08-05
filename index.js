let months = [ 'one', 'two' , 'three' , 'four' ,'five','six'];

Array.prototype.mySplice = function(start = 0 ,deleteIndex,...item) {
        let len = this.length;
        let _this = this;
        let max = Math.max, min = Math.min;
        deleteIndex = max(min(typeof deleteIndex == 'number' ? deleteIndex : len, len - start), 0)//删除元素的个数最小为0
        let result = deleteArr(_this,start,deleteIndex);
        addArr(_this,start,item)
        return result
    }
    // months.mySplice(1, 0,'sen','eight')
    // console.log (months.mySplice(1, 0,'sen','eight') );
    // console.log(months);


    //console.log(months.splice(1,3) );


/**删除的数组
 * @param arr 原始数组
 * @param startIndex 起始下标
 * @param deleteNum  要删除的个数
 */
function deleteArr(arr,startIndex,deleteNum){

     let count = 0 , deleteArr = [];
     let len = arr.length;

     while (  count < deleteNum && (startIndex + count < len) ){
         deleteArr.push(arr[ startIndex + count ]);
         count++

     }
     for( var i = startIndex ; i < deleteNum ; i ++ ){

         arr[i] = arr[ i + deleteNum ]
     }
     arr.length = len - deleteNum;

     return deleteArr
}

/**
 *添加的数组
 * @param arr
 * @param startIndex
 * @param item
 */
function addArr(arr,startIndex,item) {
     let len = arr.length,addlen = item.length;
     for(var i = len + addlen -1 ; i >= addlen + startIndex; i--){
          arr[i] = arr[i - addlen]
     }
     for(var j = 0 ; j < addlen;j++ ){
         arr[j+startIndex] = item[j]
     }
}