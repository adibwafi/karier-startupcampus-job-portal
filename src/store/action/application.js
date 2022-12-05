import { BASE_URL, FETCH_APPLICATION } from "../actionTypes/actionTypes";

export function fetchApplications() {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/applications`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw response.message;
      }

      const data = await response.json();
      // console.log(data, "DARI ACTION!")

      dispatch({
        type: FETCH_APPLICATION,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addApplication(application, file) {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("fullName", application.fullName);
      formData.append("email", application.email);
      formData.append("phoneNumber", application.phoneNumber);
      formData.append("coverLetter", application.coverLetter);
      formData.append("fileURL", file);
      formData.append("jobId", application.jobId);
      // console.log(application)
      // console.log(file, "<><><><>")

      let response = await fetch(BASE_URL + `/applications/${application.jobId}`, {
        method: "POST",
        body: formData,
        headers: {
          access_token: localStorage.getItem("access_token"),
          // "Content-Type": "multipart/form-data",
        },
      });


      if (!response.ok) {
        throw response.message;
      }
      dispatch(fetchApplications());
    } catch (error) {
      console.log(error);
    }
  };
}