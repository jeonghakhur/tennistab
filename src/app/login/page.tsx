'use client';
import { Form, Button } from '@/components/ui';

export default function Login() {
  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 mb-4">로그인</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control type="email" size="lg" placeholder="Enter email" />
              <Form.Text className="text-muted">이메일은 제3자와 공유되지 않습니다.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" size="lg" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" style={{ fontSize: '18px' }} />
            </Form.Group>
            <Button size="lg" className="w-100" variant="primary" type="submit">
              로그인
            </Button>
          </Form>
          <h2 className="social-login-title">간편 로그인</h2>
          <div className="social-login-container my-4">
            <Button prefix="naver" className="social-login naver ">
              로그인
            </Button>
            <Button className="social-login kakao">로그인</Button>
            <Button className="social-login google">로그인</Button>
            <Button className="social-login apple">로그인</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
