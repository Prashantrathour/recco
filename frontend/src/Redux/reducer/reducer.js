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
        return {...state,isLoading:false,data:payload}
      case "DELETE_SUCCESS":
        return {...state,isLoading:false,data:payload}
      case "FAIL":
        return {...state,isLoading:false}
    
      default:
        return state;
    }
}


