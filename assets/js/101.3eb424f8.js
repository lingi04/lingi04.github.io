(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{304:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_8-의존성-관리하기"}},[t._v("8. 의존성 관리하기")]),t._v(" "),a("p",[t._v("잘 설계된 객체지향 애플리케이션은 작고 응집도 높은 객체들로 구성된다. 작고 응집도 높은 객체란 책임의 초점이 명확하고 한가지 일만 잘 하는 객체를 의미한다. 이렇게 작고 응집도 높은 객체들은 여러 객체들과 협력 하며 애플리케이션의 기능을 구현하게 되는데, 이러한 협력으로 인해 객체들 간 의존성이 발생한다.")]),t._v(" "),a("h2",{attrs:{id:"_01-의존성-이해하기"}},[t._v("01. 의존성 이해하기")]),t._v(" "),a("h3",{attrs:{id:"변경과-의존성"}},[t._v("변경과 의존성")]),t._v(" "),a("p",[t._v("어떤 객체가 협력하기 위해 다른 객체가 필요할 때 두 객체 사이에 의존성이 존재하게 된다. 두 요소 사이 의존성은 의존되는 요소가 변경될 때 의존하는 요소도 함께 변경될 수 있다는 것을 의미한다. 의존성은 실행시점과 구현시점에 따라 서로 다른 의미를 가진다.")]),t._v(" "),a("ul",[a("li",[t._v("실행 시점 : 의존하는 객체가 정상적으로 동작하기 위해서는 실행 시에 의존 대상 객체가 반드시 존재해야 한다.")]),t._v(" "),a("li",[t._v("구현 시점 : 의존 대상 객체가 변경될 경우 의존하는 객체도 함깨 변경된다.")])]),t._v(" "),a("p",[t._v("그림으로 의존성을 표현하면 아래와 같은데\n"),a("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/study/book/object/8-3.jpeg",alt:"8-3"}})]),t._v(" "),a("p",[t._v("여기서 보면 PeriodCondition 클래스는 DiscountCondition, DayOfWeek, LocalTime, Screening에 의존성을 가지고 있다. 이 말은 DiscountCondition, DayOfWeek, LocalTime, Screening이 변경되면 그 영향으로 PeriodCondition도 변경될 수 있다는 말이다.")]),t._v(" "),a("h3",{attrs:{id:"의존성-전이"}},[t._v("의존성 전이")]),t._v(" "),a("p",[t._v("의존성 전이란 화살표로 연결된 모든 객체는 모두 의존성을 가지고 있다는 말이다. 의존성을 가지고 있다는 것은 함께 변경될 수 있는 가능성을 의미하는데 내부 구현을 효과적으로 캡슐화 했다면 변경이 전파되지 않을 수 있다.")]),t._v(" "),a("h3",{attrs:{id:"런타임-의존성과-컴파일-의존성"}},[t._v("런타임 의존성과 컴파일 의존성")]),t._v(" "),a("ul",[a("li",[t._v("런타임 의존성 : 애플리케이션이 실행되는 시점. 객체 사이의 의존성을 말한다.")]),t._v(" "),a("li",[t._v("컴파일타임 의존성 : 코드를 컴파일하는 시점(혹은 코드 그 자체). 클래스 사이의 의존성을 말한다.")])]),t._v(" "),a("p",[t._v("유연하고 재사용 가능한 코드를 설계하기 위해서는 두 종류의 의존성을 다르게 만들어야 한다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/study/book/object/8-5.jpeg",alt:"그림8.5"}})]),t._v(" "),a("p",[t._v("위 그림은 컴파일 타임 의존성을 보여주고")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/study/book/object/8-6.jpeg",alt:"그림8.6"}})]),t._v(" "),a("p",[t._v("위 그림은 런타임 의존성을 보여준다.")]),t._v(" "),a("p",[t._v("코드 작성 시점에 Movie클래스는 할인 정책을 구현한 두 클래스의 존재를 모르지만 실행 시점의 Movie 객체는 두 클랙스의 인스턴스와 협력할 수 있다. 유연하고 재사용 가능한 설계를 위해서는 이렇게 동일한 코드로 다양한 실행 구조를 만들 수 있어야 한다.")]),t._v(" "),a("h3",{attrs:{id:"컨텍스트-독립성"}},[t._v("컨텍스트 독립성")]),t._v(" "),a("p",[t._v("앞선 예와 달리 클래스가 자신과 협력할 구체적인 클래스를 알면 그 클래스는 자신이 사용되는 특정한 문맥에 강하게 결합되게 된다. 이럴 경우 이 클래스는 다른 문맥에서 사용되기 어려워 진다. 클래스가 자신이 사용될 문맥에 대해 최소한의 가정만 이루어져 있다면 다른 문맥에서 사용되기 더 수월해 지는데, 이를 컨텍스트 독립성이라 부른다.")]),t._v(" "),a("h3",{attrs:{id:"의존성-해결하기"}},[t._v("의존성 해결하기")]),t._v(" "),a("p",[t._v("컴파일 타임 의존성을 실행 컨텍스트에 맞게 적절한 런타임 의존성으로 교체하는 것을 "),a("strong",[t._v("의존성 해결")]),t._v("이라고 부른다. 의존성 해결을 위해서는 일반적으로 다음과 같은 세 가지 방법을 사용한다.")]),t._v(" "),a("ul",[a("li",[t._v("객체를 생성하는 시점에 생성자를 통해 의존성 해결")]),t._v(" "),a("li",[t._v("객체를 생성 후 setter 메서드를 통해 의존성 해결")]),t._v(" "),a("li",[t._v("메서드 실행 시 인자를 이용해 의존성 해결")])]),t._v(" "),a("p",[t._v("이 부분은 우리가 익히 알고있는 "),a("strong",[t._v("의존성 주입")]),t._v("의 개념을 설명한 부분인것같다. 필요에 따라서 적절한 방법을 하나 혹은 하나 이상 선택해서 사용하면 될 것 같다.")]),t._v(" "),a("h2",{attrs:{id:"_02-유연한-설계"}},[t._v("02. 유연한 설계")]),t._v(" "),a("p",[t._v("의존성을 관리하는데 유용ㄹㅎ한 몇가지 원칙과 기법을 알아보자.")]),t._v(" "),a("h3",{attrs:{id:"의존성과-결합도"}},[t._v("의존성과 결합도")]),t._v(" "),a("p",[t._v("객체지향 패러다임의 근간은 협력!! 협력을 위해 객체는 서로의 존재와 수행 가능한 책임을 알아야 한다. 그리고 이런 지식들이 객체 사이의 의존성을 낳는다. 따라서 우리의 설계에 의존성이 생기는 것은 자연스러운 것이다.")]),t._v(" "),a("p",[t._v("문제는 바람직하지 않은 의존성 이다.(책에선 바람직한 의존성을 다양한 환경에서 재사용될 수 있는 의존성이라 했다.) 가장 쉽게 들 수 있는 예는 앞서 살펴본 것 처럼 구체 클래스에 의존하는 경우이다. 이를 해결할 수 있는 방법은 추상클래스에 의존하게 하는 것이다. 추상클래스에 의존하도록 하여 재사용성을 높여 바람직한 의존성을 생성하도록 하자.")]),t._v(" "),a("p",[t._v("바람직한 의존성과 바람직하지 않은 의존성을 가리키는 다른 말로 "),a("strong",[t._v("느슨한 결합도")]),t._v(", "),a("strong",[t._v("약한 결합도")]),t._v("와 "),a("strong",[t._v("단단한 결합도")]),t._v(", "),a("strong",[t._v("강한 결합도")]),t._v("가 있다.")]),t._v(" "),a("h3",{attrs:{id:"지식이-결합을-낳는다"}},[t._v("지식이 결합을 낳는다.")]),t._v(" "),a("p",[t._v("한 요소가 다른 요소에 대해 더 많이 알면 알수록 두 요소는 강하게 결합된다. 더 많이 알고있다 혹은 더 강하게 결합되어 있다는 것은 더 적은 컨텍스트에서 재사용 가능하다는 말이다. 우리가 잘 알고 있는 추상화를 통해 협력에 대해 최대한 감추며 결합도를 낮추어야 한다.")]),t._v(" "),a("h3",{attrs:{id:"추상화에-의존하라"}},[t._v("추상화에 의존하라")]),t._v(" "),a("p",[t._v("아래 목록에서 아래로 갈수록 결합도가 느슨해진다.")]),t._v(" "),a("ul",[a("li",[t._v("구체 클래스 의존성")]),t._v(" "),a("li",[t._v("추상 클래스 의존성")]),t._v(" "),a("li",[t._v("인터페이스 의존성")])]),t._v(" "),a("p",[t._v("아래로 갈수록 외부로 공개된 정보가 적다는 사실을 같이 인지하면 좋을 것 같다. 의존하는 대상이 더 추상적일수록 결합도는 더 낮아진다.")]),t._v(" "),a("h3",{attrs:{id:"명시적인-의존성"}},[t._v("명시적인 의존성")]),t._v(" "),a("p",[t._v("명시적 의존성이란 모든 의존성이 퍼블릭 인터페이스에 공개되는 것을 말한다. 반대로 내부적으로 객체를 생성해 사용해 외부에서 의존성을 알지 못하는 경우를 숨겨진 의존성이라 한다.")]),t._v(" "),a("p",[t._v("숨겨진 의존성은 의존성을 파악하기 위해 내부 구현을 직접 살펴봐야 한다.  커다란 클래스 안에 긴 메서드 내부 어딘가에서 인스턴스를 생성하는 코드를 파악하는 것은 어렵고 고통스러운 일이다. 더 큰 문제는 이 클래스를 다른 컨텍스트에서 재사용하기 위해선 내부 구현을 직접 변경해야 한다. 잠재적인 버그의 가능성을 내포하는 것이다!")]),t._v(" "),a("p",[t._v("의존성을 결합도가 낮게, 명시적으로 생성한다면 런타임에 적절한 협력으로 의존성을 교체해주며 이런 문제들을 피할 수 있다.")]),t._v(" "),a("h3",{attrs:{id:"new는-해롭다"}},[t._v("new는 해롭다.")]),t._v(" "),a("p",[t._v("new를 잘못 사용하면 클래스 사이의 결합도가 극단적으로 높아진다. 이유는 크게 두 가지 이다.")]),t._v(" "),a("ul",[a("li",[t._v("new 연산자를 사용하기 위해선 구체클래스의 이름을 직접 기술해야 한다. 따라서 new를 사용하는 클라이언트는 추상화가 아닌 구체클래스에 의존할 수밖에 없기 때문에 결합도가 높아진다.")]),t._v(" "),a("li",[t._v("new연산자는 생성하려는 구체 클래스뿐만 아니라 어떤 인자를 사용해 클래스의 생성자를 호출해야하는지도 알아야 한다. 따라서 new를 사용하면 클라이언트가 알아야 하는 지식의 양이 늘어나기 때문에 결합도가 높아진다.")])]),t._v(" "),a("p",[t._v("객체는 어쩔 수 없이 생성해야 한다. 위 문제를 해결하기 위해서는 인스턴스를 생성하는 로직과 생성된 인스턴스를 사용하는 로직을 분리시키는 것이다. 외부에서 인스턴스를 전달받는 방법(의존성 주입)이 한가지 예이다.  이렇게 해서 인스턴스를 사용하는 쪽은 메시지 전송하는 로직만 남겨놓아야 한다.")]),t._v(" "),a("h3",{attrs:{id:"가끔은-생성해도-무방하다"}},[t._v("가끔은 생성해도 무방하다")]),t._v(" "),a("p",[t._v("클래스 안에서 객체의 인스턴스를 생성하는 방식이 유용한 경우도 있다. 주로 협력하는 기본객체를 설정하고 싶은 경우가 이 경우에 속한다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Movie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountPolicy")]),t._v(" discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Movie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),t._v(" runningTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" runninngTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AmountDiscountPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Movie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),t._v(" runningTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountPolicy")]),t._v(" discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountPolicy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("이렇게 생성자를 오버로딩 하여 안에서 다른 생성자를 호출하여 체이닝을 하거나")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Movie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Money")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateMovieFee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Screening")]),t._v(" screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateMovieFee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AmountDiscountPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Money")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateMovieFee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Screening")]),t._v(" screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountPolicy")]),t._v(" discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateDiscountAmount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("이렇게 메서드를 오버로딩 하여 다른 메서드를 호출하여 체이닝하는 방법이 있다.")]),t._v(" "),a("p",[t._v("이 예는 설계가 트레이드오프 활동이라는 사실을 다시 한번 상기시킨다.  여기서 트레이드오프의 대상은 결합도와 사용성이다. 구체클래스에 의존하더라도 사용성 더 중요하다면 결합도를 높ㅇ는 방향으로 코드를 작성할 수 있다. 물론 종종 모든 결합도가 모이는 새로운 클래스를 추가함으로서 사용ㅅㅇ과 유연성이라는 두 말 토끼를 잡을 수 있는 경우도있다.")]),t._v(" "),a("h3",{attrs:{id:"표준-클래스에-대한-의존은-해롭지-않다"}},[t._v("표준 클래스에 대한 의존은 해롭지 않다.")]),t._v(" "),a("p",[t._v("의존성이 불편한 이유는 그것이 항상 변경에 대한 영향을 암시하기 때문이다. 따라서 변경될 확률이 거의 없는 클래스라면 의존성이 문제가 되지 않는다. 하지만 이 경우에도 가능한 한 추상적인 타입을 사용하는 것이 확장성 측면에서 유리하다. 예를들어 인터페이스인 List를 사용한다면 선언되어 있는 객체를 다양한 List타입의 객체로 대체할 수 있어 설계의 유연성을 높일 수 있다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);