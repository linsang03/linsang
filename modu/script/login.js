/* 
* @Author: anchen
* @Date:   2017-07-13 09:17:11
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-13 10:32:31
*/

$(function(){
    $.ajax({
        type:"post",
        url:"file:///F:/work/modu/data/info.json",
        success:function(res){
            alert(res)
        }
    })
    $.getJSON('../data/info.json',"",function(data){
        alert(data);
        console.log(data)
    })
})