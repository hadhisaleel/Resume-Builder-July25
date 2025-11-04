import axios from "axios";

const commonAPI = async (url,httpMethord,reqBody) => {
   const requestConfig = {
    url,
     method:httpMethord,
     data:reqBody
   }
   // api call
   await axios(requestConfig).then(res=>res).catch(err=>err)
}

export default commonAPI