import { Spinner } from "react-bootstrap";

function Loading () {
  return (
    <Spinner animation="border" role="status" style={{alignContent:"center"}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Loading;