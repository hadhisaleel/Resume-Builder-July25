import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

// resume add api- caled by UserInput , when finish btn clicked
export const addResumeAPI = async (resume) => {
return  await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}
// get resume api - called from ViewResume,when api load ()
export const getResumeAPI = async (id) => {
    return  await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
 
}
// update resume api
export const updateResumeAPI = async (id,resume) => {
    return  await commonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
 
}
// add historyapi
export const addHistoryAPI = async (history) => {
return  await commonAPI(`${ServerURL}/history`,"POST",history)
}
// get history api-called from history componant ,when page load(),instead of useeffect hook

export const getHistoryAPI = async () => {
    return  await commonAPI(`${ServerURL}/history`,"GET",{})
}
// remove history api

export const removeHistoryAPI = async (id) => {
    return await commonAPI (`${ServerURL}/history/${id}`,"DELETE",{})
}