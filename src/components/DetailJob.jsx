import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jobDetailById } from "../store/action/job";
import { FaBriefcase } from "react-icons/fa"

export default function DetailJob() {
  let dispatch = useDispatch()
  const navigate = useNavigate();
  let id = useParams().id;
  
  let { jobDetail } = useSelector((state) => {
    // console.log(state)
    return state.jobReducer;
  });

  useEffect(() => {
    dispatch(jobDetailById(id))
  }, [id])

if(jobDetail.title) {
  return (
    <>
    <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold">{jobDetail.title}</h1>
    <p className="lead mb-4"><FaBriefcase className="me-3"/>{jobDetail.jobType}</p>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Startup Campus is a Certified Independent Study fully supported by the Ministry of Education and Culture, Ristekdikti under the auspices of the KAMPUS MERDEKA initiative. Startup Campus provides digital bootcamp with intensive matriculation and real project based for tech skills with job connectors. This program is designed entirely online to prepare the youth of Indonesia with digital business competence such as The Founder, Back End Engineering, UI/UX Design, Artificial Intelligence, and Data Scientist.</p>
      <p className="lead mb-4 fw-bold">Responsibilities</p>
      <p className="lead mb-4">{jobDetail.description}</p>
      <p className="lead mb-4 fw-bold">Qualifications</p>
      <p className="lead mb-4">{jobDetail.requirement}</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-warning btn-lg px-4 gap-3" onClick={() => navigate(`/jobs/${jobDetail._id}/apply`)}>Apply Now</button>
      </div>
    </div>
  </div>
    </>
  );
}
}