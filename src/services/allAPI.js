import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

// resume add api- caled by UserInput , when finish btn clicked
export const addResumeAPI = async (resume) => {
    await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}
// get resume api
// update resume api
// add historyapi
// get history api
// remove history api