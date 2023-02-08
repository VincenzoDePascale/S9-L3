import { Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBookComponent";

const BookListComponet = (props) => {
  return (
    <>
      <Row>
        {props.books.map((e) => (
          <Col xs={4} hey={e.asin}>
            <SingleBook img={e.img} title={e.title} price={e.price} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BookListComponet;
