import {server,api} from "@/Utils/request";
//查询商品分类
export function getGoodsType(){
  return api({
    url:'api/goods/goodstype/list',
    method:'GET'
  })
} 

//根据商品ID查询商品
export function getGoods(typeId){
  return api({
    url:'api/goods/goods/list',
    method:'GET',
    params:{
      type:typeId
    }
  })
}
