import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApplication } from "../store/action/application";
import { jobDetailById } from "../store/action/job";
import Swal from "sweetalert2";

export default function ApplyJobPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let id = useParams().id;

  let { jobDetail } = useSelector((state) => {
    return state.jobReducer;
  });

  useEffect(() => {
    dispatch(jobDetailById(id));
  }, [id]);

  const [fileURL, setFileURL] = useState();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    coverLetter: "",
    fileURL: fileURL,
    jobId: id,
  });

  const handleChange = (event) => {
      const { name, value } = event.target;
      setForm({
        ...form,
        [name]: value,
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addApplication(form, fileURL)).then(() => {
      navigate("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Job applied successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  if (jobDetail.title) {
    return (
      <Container>
        <h1 className="mb-1 mt-5 text-center" style={{ color: "white" }}></h1>

        <Container
          className="container h-50 w-70 p-5 rounded-3"
          style={{ backgroundColor: "white", transform: "scale(90%)" }}
        >
          <Row>
            <Col className="bg-white">
              <Form onSubmit={handleSubmit}>
                <Row className="px-3 w-75 mx-auto">
                  <Row>
                    <h1 className="d-flex fw-bold justify-content-center">
                      {jobDetail.title}
                    </h1>
                  </Row>
                  <Form.Group className="mb-3 px-3">
                    <FloatingLabel
                      className="text-black d-flex justify-content-start mt-3 ml-5"
                      controlId="floatingTextarea2"
                      label="Full Name"
                    >
                      <Form.Control
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Full Name"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="text-black d-flex justify-content-start mt-3 ml-5"
                      controlId="floatingTextarea2"
                      label="Email"
                    >
                      <Form.Control
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="text"
                        placeholder="Email"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="text-black d-flex justify-content-start mt-3 ml-5"
                      controlId="floatingTextarea2"
                      label="Phone Number"
                    >
                      <Form.Control
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        type="text"
                        placeholder="Phone Number"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="text-black d-flex justify-content-start mt-3 ml-5"
                      controlId="floatingTextarea2"
                      label="Cover Letter"
                    >
                      <Form.Control
                        as="textarea"
                        style={{ height: "100px" }}
                        name="coverLetter"
                        value={form.coverLetter}
                        onChange={handleChange}
                        type="text"
                        placeholder="Cover Letter"
                      />
                    </FloatingLabel>
                    <Form.Group controlId="formFile" className="mb-3 mt-3 ml-5">
                      <Form.Label>Resume</Form.Label>
                      <input
                        type="file"
                        name="fileURL"
                        id="fileURL"
                        accept=".pdf"
                        value={form.fileURL}
                        onChange={(event) => setFileURL(event.target.files[0])
                        }
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-center w-100">
                      <Button
                        variant="primary"
                        type="submit"
                        className="my-4 border-0 w-50 mx-auto"
                        style={{
                          backgroundColor: "#eca93b",
                          color: "black",
                          width: "100px",
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  </Form.Group>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
