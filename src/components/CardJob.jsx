import * as React from "react";
import Box from '@mui/material/Box';
import Stack from 'react-bootstrap/Stack';

import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/action/job";
import { useEffect } from "react";
import CardJobContent from "./CardJobContent";

export default function CardJob() {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => {
    return state.jobReducer;
  });

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);
  
  if(jobs) {
    return (
      <Stack gap={3}>
      <Box className="pt-3 align-items-center w-75 mx-auto">
        {jobs.map((job) => {
          if (job.is_active === true) {
            return <CardJobContent key={job.id} job={job}></CardJobContent>
          }
        })}
      </Box>
      </Stack>
    );
  }

}