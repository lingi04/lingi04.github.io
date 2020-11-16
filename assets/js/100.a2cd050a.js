(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{308:function(_,v,t){"use strict";t.r(v);var i=t(0),e=Object(i.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_4-설계-품질과-트레이드오프"}},[_._v("4. 설계 품질과 트레이드오프")]),_._v(" "),t("p",[_._v("설계는 변경을 위해 존재하고 변경에는 어떤 식으로든 비용이 발생한다. 훌륭한 설계를 하면 합리적 비용 안에서 변경을 수용할 수 있는 구조를 만들 수 있다.")]),_._v(" "),t("h2",{attrs:{id:"_00-선요약"}},[_._v("00. 선요약")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("객체지향 설계")]),_._v("란 올바른 객체에 올바른 책임을 할당하면서 "),t("strong",[_._v("낮은 결합도")]),_._v("와 "),t("strong",[_._v("높은 응집도")]),_._v("를 가진 구조를 창조하는 활동.")]),_._v(" "),t("li",[_._v("객체의 "),t("em",[_._v("상태")]),_._v("가 아니라 "),t("strong",[_._v("행동")]),_._v("에 초점을 맞추면 결합도와 응집도를 합리적 수준으로 유지할 수 있다.")]),_._v(" "),t("li",[_._v("캡슐화란 변경 가능성이 높은 부분을 내부로 숨기는 추상화 기법. 변경될 수 있는 것은 모두 캡슐화 해야 한다.")])]),_._v(" "),t("h2",{attrs:{id:"_01-데이터-중심의-영화-예매-시스템"}},[_._v("01. 데이터 중심의 영화 예매 시스템")]),_._v(" "),t("p",[_._v("객체의 상태는 구현에 속한다. 구현은 불안정하기 때문에 변하기 쉽다. (인터페이스, 추상클래스와 이것들을 일반화한 클래스, 확장한 클래스를 생각하면 이해가 갈 것임.) 상태를 중심으로 설계를 한다면 구현에 관한 세부사항이 객체의 인터페이스에 스며들게 되고 캡슐화의 원칙이 무너지게 된다. 상태 변경은 결과적으로 인터페이스의 변경을 초래하며 이 인터페이스에 의존하는 모든 객체에 영향이 퍼지게 된다. 따라서 데이터에 초점을 맞추는 설계는 변경에 취약할 수밖에 없다.")]),_._v(" "),t("p",[_._v("그에 반해 책임은 인터페이스에 속하는데, 객체의 책임을 드러내는 인터페이스 뒤로 책임을 수행하는 데 필요한 상태를 캡슐화 함으로써 구현 변경에 대한 파장이 외부로 퍼져나가는 것을 방지한다.  따라서 책임에 초점을 맞추면 상대적으로 변경에 안정적인 설계를 얻을 수 있다.")]),_._v(" "),t("h3",{attrs:{id:"_1-데이터를-준비하자"}},[_._v("1. 데이터를 준비하자")]),_._v(" "),t("ul",[t("li",[_._v("데이터 중심으로 생각할 때면 우리는 '"),t("em",[_._v("객체 내부에 저장해야 하는 데이터가 무엇인가?")]),_._v("'를 묻는 것으로 시작한다.")]),_._v(" "),t("li",[_._v("데이터 중심으로 설계할 때 객체의 종류를 저장하는 인스턴스와 인스턴스의 종류에 따라 배타적으로 사용될 인스턴스 변수를 하나의 클래스에 포함시킬 가능성이 높다.\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/study/book/object/object_4_%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%A4%91%EC%8B%AC%EC%84%A4%EA%B3%84.jpeg",alt:"데이터중심설계"}})])]),_._v(" "),t("h4",{attrs:{id:"movie-클래스"}},[_._v("Movie 클래스")]),_._v(" "),t("ul",[t("li",[_._v("영화를 표현하는 정보인 영화제목(title), 상영시간(runningTime), 기본요금(fee) 을 인스턴스로 포함")]),_._v(" "),t("li",[_._v("할인조건의 목록(discountConditions), 금액할인정책(discountAmount), 비율할인정책(discountPercent) 을 직접 정의")]),_._v(" "),t("li",[_._v("할인 정책은 영화별로 하나만 적용될 수 있기 때문에 할인 정책을 결정하는 movieType 변수 사용")])]),_._v(" "),t("h3",{attrs:{id:"discountconditiontype-클래스"}},[_._v("DiscountConditionType 클래스")]),_._v(" "),t("ul",[t("li",[_._v("할인 조건 타입을 저장할 인스턴스 변수 type")]),_._v(" "),t("li",[_._v("순번조건에만 쓰이는 상영 순번(sequence), 기간조건에만 사용되는 요일(dayOfWeek), 시작시간(startTime), 종료시간(endTime) 포함")])]),_._v(" "),t("h3",{attrs:{id:"screening-reservation-클래스-customer-클래스"}},[_._v("Screening, Reservation 클래스, Customer 클래스")]),_._v(" "),t("ul",[t("li",[_._v("앞서 했던 것 처럼 필요한 데이터를 정의하고 적당히 캡슐화 한다.")])]),_._v(" "),t("h3",{attrs:{id:"_2-영화를-예매하자"}},[_._v("2. 영화를 예매하자")]),_._v(" "),t("p",[_._v("ReservationAgency를 만들고 이 클래스에서 영화를 예매한다.  영화를 예매할 때 크게 두 부분으로 나눌 수 있다.")]),_._v(" "),t("ul",[t("li",[_._v("Movie 클래스에 설정된 DiscountCondition목록에 대해 루프를 돌며 할인 가능 여부 확인. discountable 변수 세팅")]),_._v(" "),t("li",[_._v("discountable 변수 값 체크하고, 적절한 할인 정책에 따라 예매 요금 계산")])]),_._v(" "),t("h2",{attrs:{id:"_02-설계-트레이드오프"}},[_._v("02. 설계 트레이드오프")]),_._v(" "),t("p",[_._v("캡슐화, 응집도, 결합도를 사용하여 데이터 중심 설계와 책임 중심 설계의 장단점을 살펴보자.")]),_._v(" "),t("h3",{attrs:{id:"캡술화"}},[_._v("캡술화")]),_._v(" "),t("p",[_._v("캡슐화는 외부에서 알 필요 없는 부분을 감춤으로써 대상을 단순화하는 추상화의 한 종류다. 변경 가능성이 높은 부분은 내부에 숨기고 외부엔 상대적으로 안정적인 부분만 공개하는 추상화기법을 통해 변경의 여파를 통제할 수 있다.")]),_._v(" "),t("p",[_._v("캡슐화를 지키면 모듈 안의 응집도는 높아지고 모듈간 결합도는 낮아진다.")]),_._v(" "),t("h3",{attrs:{id:"응집도와-결합도"}},[_._v("응집도와 결합도")]),_._v(" "),t("p",[_._v("일반적으로 좋은 설계란 높은 응집도와 낮은 결합도를 가진 모듈로 구성된 설계를 의미한다. 높은 응집도와 낮은 결합도는 변경을 쉽게 만든다.")]),_._v(" "),t("h4",{attrs:{id:"응집도"}},[_._v("응집도")]),_._v(" "),t("p",[_._v("모듈에 포함된 내부요소들이 연관돼 있는 정도. 모듈 내 요소들이 하나의 목적을 위해 긴밀히 협력한담면 그 모듈은 높은 응집도를 가진다. 객체지향 관점에서 응집도는 객체 또는 클래스에 얼마나 관련 높은 책임을 할당했는지 나타낸다.")]),_._v(" "),t("h4",{attrs:{id:"결합도"}},[_._v("결합도")]),_._v(" "),t("p",[_._v("의존성의 정도를 나타내며 다른 모듈에 얼마나 많은 지식을 갖고 있는지를 나타내는 척도이다. 어떤 모듈이 다른 모듈에 대해 꼭 필요한 지식만 알고 있다면 두 모듈은 낮은 결합도를 가진다.")]),_._v(" "),t("h2",{attrs:{id:"_03-데이터-중심의-영화-예매-시스템의-문제점"}},[_._v("03. 데이터 중심의 영화 예매 시스템의 문제점")]),_._v(" "),t("p",[_._v("데이터 중심 설계는 아래 세 가지 대표적 문제점을 가지고 있다. 대표적 문제점은 다음과 같다.")]),_._v(" "),t("ul",[t("li",[_._v("캡슐화 위반")]),_._v(" "),t("li",[_._v("높은 결합도")]),_._v(" "),t("li",[_._v("낮은 응집도")])]),_._v(" "),t("h3",{attrs:{id:"캡슐화-위반"}},[_._v("캡슐화 위반")]),_._v(" "),t("p",[_._v("객체의 상태를 private로 하고 접근자와 수정자를 두면 캡슐화의 원칙을 지니고 있는 것일까? 안타깝게도 그렇지 않다!!. getter, setter 와 같은 퍼블릭 메서드를 통해 객체 내부의 상태가 노골적으로 드러나고 객체 내부의 구현이 객체의 을 인터페이스의 일부로 만들게 됨.")]),_._v(" "),t("h3",{attrs:{id:"높은-결합도"}},[_._v("높은 결합도")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/study/book/object/object_4_%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%A4%91%EC%8B%AC%EC%84%A4%EA%B3%84_2.jpeg",alt:"데이터중심설계_2"}})]),_._v(" "),t("p",[_._v("데이터 중심의 영화 예매 시스템을 살펴보면 ReservationAgency가 모든 데이터 객체에 의존한다는 것을 알 수 있다. 시스템 안의 어떤 변경도 ReservationAgency의 변경을 유발한다.")]),_._v(" "),t("h3",{attrs:{id:"낮은-응집도"}},[_._v("낮은 응집도")]),_._v(" "),t("p",[_._v("낮은 응집도는 두 가지 측면에서 설계에 문제를 일으킨다.")]),_._v(" "),t("ul",[t("li",[_._v("변경의 이유가 다른 코드들을 하나의 모듈 안에 뭉쳐놓았기 때문에 변경과 아무 상관이 없는 코드들이 영향을 받게 됨. 어떤 코드를 수정한 후에 아무런 상관도 없던 코드에서 문제가 발생하는 것은 모듈의 응집도가 낮을 때 발생하는 대표적인 문제.")]),_._v(" "),t("li",[_._v("하나의 요구사항 변경을 반영하기 위해 동시에 여러 모듈을 수정해야 한다. 응집도가 낮을 경우 다른 모듈에 위치해야 할 책임의 일부가 엉뚱한 곳에 위치하게 되기 때문.")])]),_._v(" "),t("h2",{attrs:{id:"_04-자율적인-객체를-향해"}},[_._v("04. 자율적인 객체를 향해")]),_._v(" "),t("h3",{attrs:{id:"캡슐화를-지켜라"}},[_._v("캡슐화를 지켜라")]),_._v(" "),t("p",[_._v("캡슐화는 설계 제 1의 원칙. 객체는 자신이 어떤 데이터를 가지고 있는 지 내부에 캡슐화하고 외부에 공개해서는 안된다.")]),_._v(" "),t("h3",{attrs:{id:"스스로-자신의-데이터를-책임지는-객체"}},[_._v("스스로 자신의 데이터를 책임지는 객체")]),_._v(" "),t("p",[_._v('상태와 행동을 객체라는 하나의 단위로 묶는 이유는 객체 스스로 자신의 상태를 처리할 수 있게 하기 위해서 이다. 따라서 객체를 설계할 때 "이 객체가 어떤 데이터를 포함하는가?" 라는 질문은 다음과 같은 두 개의 개별적 질문으로 분리해야 한다.')]),_._v(" "),t("ul",[t("li",[_._v("이 객체가 어떤 객체를 포함하는가?")]),_._v(" "),t("li",[_._v("이 객체가 데이터에 대해 수행해야 하는 오퍼레이션은 무엇인가?\n이 두 질문을 반복해가며 설계를 변경해보면")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/study/book/object/object_4_%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%A4%91%EC%8B%AC%EC%84%A4%EA%B3%84_3.jpeg",alt:"데이터중심설계_2"}})]),_._v(" "),t("p",[_._v("이런 결과를 얻을 수 있다. 두 번째 설계가 캡슐화가 조금 더 잘 이루어졌다. ReservationAgency에 의존성이 몰려있던 첫번째 설계보다는 개선된 것으로 보인다.")]),_._v(" "),t("h2",{attrs:{id:"_05-하지만-여전히-부족하다"}},[_._v("05. 하지만 여전히 부족하다.")]),_._v(" "),t("h3",{attrs:{id:"캡슐화-위반-2"}},[_._v("캡슐화 위반")]),_._v(" "),t("p",[_._v("Movie는 세 가지 할인정책을 가지고 있다는 내부 구현을 성공적으로 캡슐화하지 못했다.")]),_._v(" "),t("p",[_._v("Movie를 보면 자기 자신의 데이터로 할인 가능 여부를 스스로 판단하는 것 처럼 보이지만 안타깝게도 내부 구현을 인터페이스에 노출시키고 있다. 바로 calculateAmountDiscountedFee, calculatePercentDiscountedFee, calculateNoneDiscountedFee 세 개의 메서드로 할인정책으로 금액 할인정책, 비율할인정책, 미적용 세 가지가 존재한다고 만 천하에 드러내고 있다."),t("br"),_._v("\n만약 새로운 할인정책이 추가되거나 제거되면 아마도 이 메서드에 의존하는 모든 클라이언트가 영향을 받을 것이다.")]),_._v(" "),t("h3",{attrs:{id:"높은-결합도-2"}},[_._v("높은 결합도")]),_._v(" "),t("h3",{attrs:{id:"낮은-응집도-2"}},[_._v("낮은 응집도")]),_._v(" "),t("h2",{attrs:{id:"_06-데이터-중심-설계의-문제점"}},[_._v("06. 데이터 중심 설계의 문제점")]),_._v(" "),t("p",[_._v("앞서 알아본 것 처럼 데이터 중심 설계는 변경에취약하다. 이유는 두 가지 이다.")]),_._v(" "),t("ul",[t("li",[_._v("데이터 중심 설계는 본질적으로 너무 이른 시기에 데이터에 관해 결정하도록 강요한다.")]),_._v(" "),t("li",[_._v("데이터 중심 설계에서는 협력이라는 문맥을 고려하지 않고 고립시킨 채 오퍼레이션을 결정한다.")])]),_._v(" "),t("h3",{attrs:{id:"데이터-중심-설계는-객체의-행동-보다-상태에-초점을-맞춘다"}},[_._v("데이터 중심 설계는 객체의 행동 보다 상태에 초점을 맞춘다.")]),_._v(" "),t("p",[_._v("데이터를 먼저 결정하고 데이터를 처리하는 데 필요한 오퍼레이션을 나중에 결정하는 방식은 데이터에 관한 지식이 객체의 인터페이스에 고스란히 나타낙게 된다. 결과적으로 객체의 인터페이스는 구현을 캡슐화 하는 데 실패하게 되고 코드는 변경에 취약해 진다.")]),_._v(" "),t("h3",{attrs:{id:"데이터-중심-설계는-객체를-고립시킨-채-오퍼레이션을-정의하도록-한다"}},[_._v("데이터 중심 설계는 객체를 고립시킨 채 오퍼레이션을 정의하도록 한다.")]),_._v(" "),t("p",[_._v("객체의 인터페이스에 구현이 노출되어 있었기 때문에 협력이 세부 구현에 종속돼 있고 그에 따라 객체의 내부 구현이 변경됐을 때 협력하는 객체 모두가 영향을 받게 된다.")])])}),[],!1,null,null,null);v.default=e.exports}}]);