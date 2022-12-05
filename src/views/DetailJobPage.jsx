import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobDetailById } from "../store/action/job";
import DetailJob from "../components/DetailJob";

export default function DetailJobPage() {
  let dispatch = useDispatch();
  let id = useParams().id;
  // console.log(id)
  let { jobDetail } = useSelector((state) => {
    // console.log(state)
    return state.jobReducer;
  });

  useEffect(() => {
    dispatch(jobDetailById(id));
  }, [id]);

  return (
    <>
      <DetailJob data={jobDetail} />
    </>
  );
}