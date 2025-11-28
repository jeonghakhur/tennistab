'use client';

import { Divider, MainContainer, Text, Flex } from '@/components';
import { Button, Form, Modal } from '@/components/ui';
import NavLink from '@/components/ui/NavLink';
import { IoIosArrowForward } from 'react-icons/io';
import FloatingLabel from '@/components/ui/FloatingLabel';
import { useState } from 'react';

export default function Join() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MainContainer title="회원가입">
      <Form.Group controlId="fullConsent">
        <Form.Check type="checkbox" label="전체동의" style={{ fontSize: '18px' }} />
      </Form.Group>
      <Divider size="sm" direction="horizontal" color="secondary" className="opacity-50" />
      <Flex gap="3" direction="column">
        <Form.Check type="checkbox" id="termsOfUse" className="d-flex align-items-center">
          <Form.Check.Input type="checkbox" />
          <Form.Label className="mb-0">
            <Text color="primary" as="span" className="mx-1">
              (필수)
            </Text>
            이용약관
          </Form.Label>
          <NavLink as="button" type="button" className="ml-auto" onClick={handleShow}>
            상세보기
            <IoIosArrowForward />
          </NavLink>
        </Form.Check>
        <Form.Check type="checkbox" id="personalInfoConsent" className="d-flex align-items-center">
          <Form.Check.Input type="checkbox" />
          <Form.Label className="mb-0">
            <Text color="primary" as="span" className="mx-1">
              (필수)
            </Text>
            개인정보 수집 및 이용
          </Form.Label>
          <NavLink as="button" type="button" className="ml-auto">
            상세보기
            <IoIosArrowForward />
          </NavLink>
        </Form.Check>
        <Form.Check type="checkbox" id="checkbox-3" className="d-flex align-items-center">
          <Form.Check.Input type="checkbox" />
          <Form.Label className="mb-0">
            <Text as="span" className="mx-1">
              (선택)
            </Text>
            개인정보 수집 및 이용
          </Form.Label>
          <NavLink as="button" type="button" className="ml-auto">
            상세보기
            <IoIosArrowForward />
          </NavLink>
        </Form.Check>
        <Form.Check type="checkbox" id="checkbox-4" className="d-flex align-items-center">
          <Form.Check.Input type="checkbox" />
          <Form.Label className="mb-0">
            <Text as="span" className="mx-1">
              (선택)
            </Text>
            마케팅 및 광고 활용 동의
          </Form.Label>
          <NavLink as="button" type="button" className="ml-auto">
            상세보기
            <IoIosArrowForward />
          </NavLink>
        </Form.Check>
      </Flex>
      <Divider size="sm" direction="horizontal" color="secondary" className="opacity-50" />

      <Flex direction="column" gap="4">
        <FloatingLabel label="가입 유형을 선택해주세요." controlId="joinType">
          <Form.Select aria-label="가입 유형을 선택해주세요.">
            <option value="1">일반회원</option>
            <option value="2">클럽관리자</option>
            <option value="3">협회관리자</option>
            <option value="4">기타</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel label="이메일 주소를 입력해주세요." controlId="email">
          <Form.Control size="lg" type="email" placeholder="이메일 주소를 입력해주세요." />
        </FloatingLabel>

        <FloatingLabel controlId="cellPhoneNumber" label="핸드폰 번호를 입력해주세요.">
          <Form.Control
            size="lg"
            type="text"
            placeholder="핸드폰 번호를 입력해주세요."
            inputMode="numeric"
          />
        </FloatingLabel>
        <FloatingLabel label="성명을 입력해주세요." controlId="dateOfBirth">
          <Form.Control type="text" placeholder="성명을 입력해주세요" />
        </FloatingLabel>
        <FloatingLabel label="생년월일을 입력해주세요." controlId="dateOfBirth">
          <Form.Control type="text" placeholder="YYYYMMDD" inputMode="numeric" />
        </FloatingLabel>
        <Button size="lg" variant="primary" type="submit">
          회원가입
        </Button>
      </Flex>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>약관상세</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Text as="h4" size="lg">
            제1장 총칙
          </Text>
          <div>
            <Text as="h5">제1조 (목적)</Text>
            <p>
              본 약관은 [회사명/운영자명] (이하 "회사" 또는 "서비스")이 운영하는 테니스 대회 관리 및
              커뮤니티 웹 서비스 ([웹사이트 주소]) (이하 "서비스")를 이용함에 있어 "서비스"와 "회원"
              간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
            </p>
          </div>

          <div>
            <Text as="h5">제2조 (용어의 정의)</Text>
            <ol>
              <li>
                "서비스"라 함은 "회사"가 구현된 단말기(PC, 모바일 등 각종 유무선 장치를 포함)와
                관계없이 "회원"이 이용할 수 있는 테니스 대회 등록, 대진표 생성, 결과 등록, 커뮤니티
                활동(포스트, 댓글, 좋아요) 등을 포함한 모든 관련 서비스를 의미합니다.
              </li>
              <li>
                "회원"이라 함은 본 약관에 따라 "회사"와 이용계약을 체결하고 "서비스"를 이용하는 자를
                말합니다.
              </li>
              <li>
                "게시물"이라 함은 "회원"이 "서비스"를 이용함에 있어 "서비스" 상에 게시한 부호, 문자,
                음성, 음향, 화상, 동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을
                의미합니다.
              </li>
              <li>
                "대회 참가 신청"이라 함은 "회원"이 서비스 내에서 개설된 테니스 대회에 참가 의사를
                밝히고, 참가비를 결제하거나 관련 정보를 제공하는 일련의 행위를 의미합니다.
              </li>
            </ol>
          </div>

          <div>
            <Text as="h5">제3조 (약관의 명시와 개정)</Text>
            <ol>
              <li>
                "회사"는 이 약관의 내용을 "회원"이 쉽게 알 수 있도록 서비스 초기 화면 또는 연결
                화면을 통해 게시합니다.
              </li>
              <li>
                "회사"는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」
                등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
              </li>
              <li>
                "회사"가 약관을 개정할 경우에는 적용일자 및 개정 사유를 명시하여 현행 약관과 함께
                제1항의 방식에 따라 그 적용일자 7일 전부터 적용일 전일까지 공지합니다. 다만,
                "회원"에게 불리한 약관의 개정 시에는 최소 30일 이상의 유예기간을 두고 공지합니다.
              </li>
              <li>
                "회원"은 개정된 약관에 대해 동의하지 않을 권리가 있으며, 개정된 약관에 동의하지 않는
                경우 이용계약을 해지할 수 있습니다. 개정된 약관의 효력 발생일 이후에도 "서비스"를
                계속 이용하는 경우 약관 개정에 동의한 것으로 간주합니다.
              </li>
            </ol>
          </div>

          <div>
            <Text as="h4">제2장 서비스 이용 계약 및 해지</Text>
            <Text as="h5">제4조 (이용계약의 성립)</Text>
            <ol>
              <li>
                이용계약은 "회원"이 되고자 하는 자(이하 "가입신청자")가 약관의 내용에 대하여 동의를
                한 다음 회원가입 신청을 하고 "회사"가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
              </li>
              <li>
                "회사"는 "가입신청자"의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만,
                다음 각 호에 해당하는 신청에 대하여는 승낙을 거절하거나 사후에 이용계약을 해지할 수
                있습니다.
                <ul>
                  <li>실명 또는 실제 정보를 기재하지 아니한 경우</li>
                  <li>타인의 정보를 도용하거나 명의를 이용한 경우</li>
                  <li>사회 안녕과 질서 또는 미풍양속을 저해할 목적으로 신청한 경우</li>
                  <li>기타 본 약관 위반 또는 위법한 행위로 인해 승낙이 곤란한 경우</li>
                </ul>
              </li>
            </ol>
          </div>

          <div>
            <Text as="h5">제5조 (회원 탈퇴 및 자격 상실)</Text>
            <ol>
              <li>
                "회원"은 언제든지 서비스 초기 화면의 고객센터 또는 내 정보 관리 메뉴 등을 통하여
                이용계약 해지 신청(회원 탈퇴)을 할 수 있으며, "회사"는 관련 법령 등이 정하는 바에
                따라 이를 즉시 처리합니다.
              </li>
              <li>
                "회원"이 탈퇴하는 경우, 관련 법령 및 개인정보 처리방침에 따라 "회사"가 회원 정보를
                보존하는 경우를 제외하고는 탈퇴 시점부터 "회원"의 모든 정보 및 "게시물" 정보는
                삭제됩니다.
              </li>
              <li>
                "회원"이 다음 각 호의 사유에 해당하는 경우, "회사"는 회원 자격을 제한하거나 정지시킬
                수 있습니다.
                <ul>
                  <li>허위 정보를 등록한 경우</li>
                  <li>
                    다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를
                    위협하는 경우
                  </li>
                  <li>법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                </ul>
              </li>
            </ol>
          </div>

          <div>
            <Text as="h4">제3장 서비스 이용 및 제한</Text>
            <Text as="h5">제6조 (서비스의 내용)</Text>
            <p>"회사"가 "회원"에게 제공하는 "서비스"의 내용은 다음 각 호와 같습니다.</p>
            <ol>
              <li>테니스 대회 정보 제공 및 참가 신청 시스템</li>
              <li>대회 대진표 및 경기 결과 실시간 제공</li>
              <li>대회 참가비 결제 및 환불 관련 기능</li>
              <li>경기 사진, 후기 등 포스트 및 댓글, 좋아요 기능이 포함된 커뮤니티 공간</li>
              <li>
                기타 "회사"가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해 "회원"에게 제공하는
                일체의 서비스
              </li>
            </ol>
          </div>

          <div>
            <Text as="h5">제7조 (대회 참가 신청 및 환불)</Text>
            <ol>
              <li>
                "회원"은 "회사"가 정한 대회 등록 양식에 따라 정확한 정보를 기재하여 참가 신청을 해야
                합니다.
              </li>
              <li>대회 참가비는 "회사"가 정한 결제 수단 및 절차에 따라 납부해야 합니다.</li>
              <li>
                대회 참가 신청의 취소 및 참가비 환불 규정은 주최 측의 규정과 「소비자분쟁해결기준」
                등 관련 법령을 따릅니다.
              </li>
              <li>
                천재지변 등 불가피한 사유로 대회가 취소되는 경우, 환불 규정은 별도 공지 및 관련
                법령에 따릅니다.
              </li>
            </ol>
          </div>

          <div>
            <Text as="h5">제8조 (게시물의 관리)</Text>
            <ol>
              <li>
                "회원"의 "게시물"이 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 및
                「저작권법」 등 관련 법령에 위반되는 내용을 포함하는 경우, 권리자는 관련 법령이 정한
                절차에 따라 해당 "게시물"의 게시 중단 및 삭제 등을 요청할 수 있으며, "회사"는 관련
                법령에 따라 조치를 취하여야 합니다.
              </li>
              <li>
                "회사"는 전항에 따른 권리자의 요청이 없는 경우라도 다음 각 호에 해당하는 "게시물"에
                대하여 사전 통보 없이 임시조치, 수정 또는 삭제할 수 있습니다.
                <ul>
                  <li>다른 "회원"이나 타인을 비방하거나 명예를 훼손하는 내용</li>
                  <li>음란하거나 폭력적인 내용</li>
                  <li>불법 복제 또는 해킹을 조장하는 내용</li>
                  <li>영리 목적의 광고성 내용</li>
                  <li>대회 질서 유지에 방해가 되는 허위 사실을 유포하는 내용</li>
                </ul>
              </li>
            </ol>
          </div>

          <div>
            <Text as="h5">제9조 (저작권의 귀속 및 이용)</Text>
            <ol>
              <li>
                "회사"가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 "회사"에 귀속됩니다.
              </li>
              <li>"회원"이 "서비스" 내에 게시한 "게시물"의 저작권은 해당 "회원"에게 귀속됩니다.</li>
              <li>
                "회원"은 자신이 게시한 "게시물"을 "회사"가 다음의 목적으로 무상으로 이용하는 것을
                허락합니다.
                <ul>
                  <li>"서비스" 내 노출 및 홍보, 검색 결과 등으로 이용</li>
                  <li>"회사"가 운영하는 타 서비스 및 홍보 채널에서 이용</li>
                </ul>
              </li>
              <li>
                "회사"는 "회원"의 "게시물"을 제3항에서 정한 목적 이외의 상업적 용도로 이용하고자 할
                경우에는 사전에 해당 "회원"에게 동의를 얻어야 합니다.
              </li>
            </ol>
          </div>

          <div>
            <Text as="h4">제4장 의무 및 책임</Text>
            <Text as="h5">제10조 (회사의 의무)</Text>
            <ol>
              <li>
                "회사"는 관련 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며,
                계속적이고 안정적으로 "서비스"를 제공하기 위하여 최선을 다하여 노력합니다.
              </li>
              <li>
                "회사"는 "회원"이 안전하게 "서비스"를 이용할 수 있도록 개인정보보호를 위한 보안
                시스템을 구축하며, 개인정보 처리방침을 공시하고 준수합니다.
              </li>
            </ol>
          </div>

          <div>
            <Text as="h5">제11조 (회원의 의무)</Text>
            <ol>
              <li>
                "회원"은 다음 행위를 하여서는 안 됩니다.
                <ul>
                  <li>신청 또는 변경 시 허위 내용 등록</li>
                  <li>타인의 정보 도용</li>
                  <li>"회사"가 게시한 정보의 변경</li>
                  <li>"회사"와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                  <li>"회사"와 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                  <li>
                    음란, 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 "서비스"에 공개
                    또는 게시하는 행위
                  </li>
                </ul>
              </li>
              <li>
                "회원"은 관계 법령, 이 약관의 규정, 이용 안내 및 "서비스"와 관련하여 공지한 주의사항
                등을 준수하여야 하며, 기타 "회사"의 업무에 방해되는 행위를 하여서는 안 됩니다.
              </li>
            </ol>
          </div>

          <div>
            <Text as="h4">제5장 기타</Text>
            <Text as="h5">제12조 (준거법 및 재판 관할)</Text>
            <ol>
              <li>
                "회사"와 "회원" 간에 발생한 전자상거래 분쟁에 대해서는 대한민국의 법령을 준거법으로
                합니다.
              </li>
              <li>
                "회사"와 "회원" 간의 분쟁 발생 시, 양 당사자의 합의에 의해 해결함을 원칙으로 하며,
                합의가 이루어지지 않는 경우 「민사소송법」상의 관할 법원에 소를 제기합니다.
              </li>
            </ol>
          </div>

          <div>
            <Text>부칙 본 약관은 [서비스 시작일/적용일]부터 적용됩니다.</Text>
          </div>
          {/* 개인정보 수집 및 이용 동의 */}
          <div>
            <h1>[서비스명] 개인정보 수집 및 이용 동의</h1>

            <p>
              [회사명/운영자명] (이하 "회사")은 「개인정보 보호법」 등 관련 법령에 따라 정보주체의
              개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이
              개인정보 수집 및 이용 동의에 관한 사항을 공지합니다.
            </p>

            <section>
              <h2>1. 개인정보 수집 및 이용 목적</h2>
              <p>
                "회사"는 다음의 목적을 위하여 개인정보를 수집 및 이용합니다. 수집된 개인정보는
                다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경될 시에는 사전 동의를
                받습니다.
              </p>

              <div>
                <table>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>수집 항목</th>
                      <th>수집 및 이용 목적</th>
                      <th>보유 및 이용 기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>회원 가입 및 관리</td>
                      <td>
                        이름(닉네임), 이메일 주소, 비밀번호, 휴대폰 번호, 생년월일, 성별, 테니스
                        구력(선택)
                      </td>
                      <td>서비스 이용에 따른 본인 식별/인증, 회원 관리, 부정 이용 방지</td>
                      <td>
                        회원 탈퇴 시까지 (단, 관계 법령에 따라 필요한 경우 해당 기간까지 보존)
                      </td>
                    </tr>
                    <tr>
                      <td>대회 참가 신청</td>
                      <td>
                        이름, 휴대폰 번호, 소속 클럽명, 참가 등급 정보, 참가비 결제 정보(결제 수단,
                        금액)
                      </td>
                      <td>
                        대회 참가 자격 확인, 대진표 생성 및 안내, 참가비 결제 및 환불 처리, 경기
                        결과 등록
                      </td>
                      <td>대회 종료 후 1년 (단, 정산 및 기록 보존을 위해)</td>
                    </tr>
                    <tr>
                      <td>커뮤니티 및 소통</td>
                      <td>닉네임, 프로필 사진(선택), 게시물(포스트), 댓글, '좋아요' 기록</td>
                      <td>커뮤니티 서비스 이용(포스트, 댓글 작성), 서비스 내 소통 기록 관리</td>
                      <td>회원 탈퇴 시까지</td>
                    </tr>
                    <tr>
                      <td>서비스 제공 및 개선</td>
                      <td>서비스 이용 기록(접속 로그, 쿠키, 접속 IP 정보), 기기 정보</td>
                      <td>서비스의 안정적인 제공 및 품질 개선, 통계 분석</td>
                      <td>관계 법령에 따라 일정 기간 보존</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>2. 개인정보의 수집 방법</h2>
              <p>"회사"는 다음과 같은 방법으로 개인정보를 수집합니다.</p>
              <ul>
                <li>
                  <span>회원가입 및 대회 참가 신청 과정</span>에서 이용자가 직접 입력하는 방식으로
                  수집
                </li>
                <li>
                  <span>서비스 이용 중</span> 이용자의 자발적인 정보 제공을 통한 수집 (예: 게시물,
                  댓글 작성)
                </li>
                <li>
                  <span>생성 정보 수집 툴</span>을 통한 자동 수집 (예: 웹사이트 접속 기록, 로그
                  분석)
                </li>
              </ul>
            </section>

            <section>
              <h2>3. 개인정보의 제3자 제공에 관한 사항</h2>
              <p>
                "회사"는 원칙적으로 이용자의 개인정보를 제1조에서 명시한 목적 범위 내에서만
                처리하며, 이용자의 사전 동의 없이 본래의 범위를 초과하여 처리하거나 제3자에게
                제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.
              </p>
              <ul>
                <li>이용자가 사전에 제3자 제공 및 공개에 동의한 경우</li>
                <li>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</li>
                <li>
                  <span>
                    대회 운영 및 관리를 위해 해당 대회 주최 측(예: 테니스 협회, 이벤트 대행사)에
                    필요한 최소한의 참가자 정보(이름, 휴대폰 번호, 참가 등급)를 제공하는 경우.
                  </span>{' '}
                  이 경우 사전에 제공받는 자, 제공 목적 및 항목 등을 명확히 안내하고 동의를
                  받습니다.
                </li>
              </ul>
            </section>

            <section>
              <h2>4. 개인정보 처리 위탁에 관한 사항</h2>
              <p>
                "회사"는 원활한 개인정보 업무 처리를 위하여 다음과 같이 개인정보 처리 업무를
                위탁하고 있으며, 관계 법령에 따라 위탁 계약 시 개인정보가 안전하게 관리되도록 필요한
                사항을 규정하고 있습니다.
              </p>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>수탁자 (위탁받는 자)</th>
                      <th>위탁하는 업무 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PG사 (결제 대행사)</td>
                      <td>대회 참가비 결제 처리 및 정산</td>
                    </tr>
                    <tr>
                      <td>클라우드 서비스 제공업체 (AWS, Google Cloud 등)</td>
                      <td>서비스 운영 및 시스템 관리, 데이터 보관</td>
                    </tr>
                    <tr>
                      <td>문자/이메일 발송 대행업체</td>
                      <td>대회 관련 공지 및 안내 사항 발송</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>5. 정보주체와 법정대리인의 권리·의무 및 그 행사 방법</h2>
              <ol>
                <li>
                  정보주체(만 14세 미만인 경우 법정대리인 포함)는 언제든지 등록되어 있는 자신의
                  개인정보를 조회하거나 수정할 수 있으며, 가입 해지(동의 철회)를 요청할 수도
                  있습니다.
                </li>
                <li>
                  정보주체는 "회사"에 대해 언제든지 개인정보 열람, 정정·삭제, 처리정지 요구 등의
                  권리를 행사할 수 있습니다.
                </li>
                <li>
                  권리 행사는 「개인정보 보호법」 시행규칙 별지 제8호 서식에 따라 작성 후 서면,
                  전자우편, 모사전송(FAX) 등을 통하여 할 수 있으며, "회사"는 이에 대해 지체 없이
                  조치하겠습니다.
                </li>
              </ol>
            </section>

            <footer>
              <h3>개인정보보호 책임자</h3>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>연락처</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>성명/직책</td>
                      <td>[담당자 이름] / [직책]</td>
                    </tr>
                    <tr>
                      <td>전화번호</td>
                      <td>[전화번호]</td>
                    </tr>
                    <tr>
                      <td>이메일</td>
                      <td>[이메일 주소]</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>고지 의무</h3>
              <p>
                본 개인정보 처리방침의 내용 추가, 삭제 및 수정이 있을 경우 개정 최소 7일 전에
                '공지사항'을 통해 고지할 것입니다.
              </p>

              <div>시행일자: [서비스 시작일/적용일]</div>
            </footer>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </MainContainer>
  );
}
