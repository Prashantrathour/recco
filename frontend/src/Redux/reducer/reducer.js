let initialState = {
  isLoading: false,
  data:[],
  isError:false
}
export const reducer =(state=initialState,{type,payload})=>{
    switch (type) {
      case "REQUEST":
        return {...state,isLoading:true}
      case "GET_SUCCESS":
        return {...state,isLoading:false,data:payload}
      case "UPDATE_SUCCESS":
        const {id,currentStatus,price,quantity,total}=payload
        let mapeddata=state?.data?.map((item)=>{
          if(item.id==id){
            item.currentStatus=currentStatus
            item.total=total
            item.price=price
            item.quantity=quantity
          }
          return item
        })
        return {...state,isLoading:false,data:mapeddata}
        case "DELETE_SUCCESS":
        return {...state,isLoading:false,data:payload}
      case "FAIL":
        return {...state,isLoading:false}
    
      default:
        return state;
    }
}


