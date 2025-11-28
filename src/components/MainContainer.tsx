import { Container, Row, Col } from './ui';

type MainContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function MainContainer({ title, children }: MainContainerProps) {
  return (
    <Container className="pb-5">
      <Row>
        <Col>
          <h1 className="main-title">{title}</h1>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
