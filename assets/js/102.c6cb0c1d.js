(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{293:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_9-유연한-설계"}},[t._v("9. 유연한 설계")]),t._v(" "),a("h2",{attrs:{id:"_01-개방-폐쇄-원칙"}},[t._v("01. 개방 폐쇄 원칙")]),t._v(" "),a("p",[t._v("소프트웨어 개체(클래스, 모듈, 함수)는 확장에 대해 열려 있어야 하고, 수정에 대해서는 닫혀 있어야 한다. 여기서 확장과 수정이라는 키워드는 애플리케이션의 '동작'과 '코드'의 관점을 반영한다. 해석해보면")]),t._v(" "),a("ul",[a("li",[t._v("확장에 대해 열려있다 : 애플리케이션의 요구사항이 변경될 때 이 변경에 맞게 새로운 '동작'을 추가해서 애플리케이션의 기능을 확장할 수 있다.")]),t._v(" "),a("li",[t._v("수정에 대해 닫혀있다 : 기존의 '코드'를 수정하지 않고도 애플리케이션의 동작을 추가하거나 변경할 수 있다.")])]),t._v(" "),a("p",[t._v("달리 말하면 컴파일 타임 의존성을 수정 하지 않고 런타임 의존성을 변경할 수 있다는 말이다.")]),t._v(" "),a("h3",{attrs:{id:"추상화가-핵심이다"}},[t._v("추상화가 핵심이다.")]),t._v(" "),a("p",[t._v("개방-폐쇄 원칙의 핵심은 추상화에 의존하는 것이다. 추상화를 하면 핵심적인 부분은 남기고 불필요한 부분은 생략하게 된다. 생략된 부분은 문맥에 따라 적절하게 채워넣음으로써 문맥에 맞게 적합하게 기능을 구체화하고 확장할 수 있다.")]),t._v(" "),a("p",[t._v("추상화 해서 남아있는 부분은 문맥이 변해도 달라지지 않는다(수정에 닫혀있다). 그리고 생략된 부분은 문맥에 따라 확장의 여지를 남긴다. 이것이 추상화가 개방-폐쇄 원칙을 가능하게 만드는 이유이다.")]),t._v(" "),a("h2",{attrs:{id:"_02-생성-사용-분리"}},[t._v("02. 생성 사용 분리.")]),t._v(" "),a("p",[t._v("한 객체가 추상화된 객체에만 의존하기 위해선 객체 내부에서 구체 클래스의 인스턴스를 생성해선 안된다. 결합도가 높아지기 때문이다. 결합도가 높아질수록 개방-폐쇄원칙을 따르는 구조를 설계하기가 힘들어진다. 하지만 어디에선가는 객체 생성을 해줘야 한다. 객체를 사용하는 Client에게 구체 인스턴스 생성의 책임을 맡기는 것이 한 가지 해결책이다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/study/book/object/9-5.jpeg",alt:"그림9.5"}})]),t._v(" "),a("p",[t._v("Movie의 의존성을 추상화인 DiscountPolicy로만 제한하기 때문에 확장에 대해선 열려있고 수정엔 닫혀있는 코드를 만들 수 있다.")]),t._v(" "),a("h3",{attrs:{id:"factory-추가하기"}},[t._v("Factory 추가하기")]),t._v(" "),a("p",[t._v("생성 책임을 Client로 옮긴 배경에느 Movie는 특정 컨텍스트에 묶여서는 안되지만 Client는 묶여도 상간이 없다는 전제가 깔려잇다. 하지만 이렇게 되면 Client 코드도 객체 생성과 사용 책임을 함께 지니게 된다.")]),t._v(" "),a("p",[t._v("이 경우 객체 생성에 대한 책임만 전담하는 별도의 객체를 추가하고 Client는 이 객체를 사용하도록 만들 수 있다. 이런 생성에 특화된 객체를 Factory라고 한다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/study/book/object/9-6.jpeg",alt:"그림9.6"}})]),t._v(" "),a("p",[t._v("위와같이 Factory객체를 사용한다면 Client는 오직 사용과 관련된 책임만 지고 생성과 관련해서는 어떤 지식도 가지지 않을 수 있다.")]),t._v(" "),a("h2",{attrs:{id:"_03-의존성-주입"}},[t._v("03. 의존성 주입")]),t._v(" "),a("p",[t._v("사용하는 객체가 아닌 외부의 독립적인 객체가 인스턴스를 생성 후 이를 전달해서 의존성을 해결하는 방법을 "),a("strong",[t._v("의존성 주입")]),t._v("이라 부른다.")]),t._v(" "),a("p",[t._v("의존성 주입에는 세 가지 방법이 있다.")]),t._v(" "),a("ul",[a("li",[t._v("생성자 주입 : 객체를 생성하는 시점에 생성자를 통한 의존성 해결")]),t._v(" "),a("li",[t._v("setter 주입 : 객체 생성 후 setter 메서드를 통한 의존성 해결")]),t._v(" "),a("li",[t._v("메서드 주입 : 메서드 실행 시 인자를 이용한 의존성 해결")])]),t._v(" "),a("p",[t._v("상황에 따라서 적절한 방법을 혼합하여 사용하면 된다.")]),t._v(" "),a("h3",{attrs:{id:"숨겨진-의존성은-나쁘다"}},[t._v("숨겨진 의존성은 나쁘다.")]),t._v(" "),a("p",[t._v("의존성 주입 외에도 의존성을 해결할 수 있는 방법으로 "),a("strong",[t._v("SERVICE LOCATOR")]),t._v(" 패턴이 있다. SERVICE LOCATOR에게 의존성을 해결해 달라고 요청하는 것이다. 예를 들면 아래 코드와 같다.\nMovie 클래스")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Movie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountPolicy")]),t._v(" discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Movie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DUration")]),t._v(" runningTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Money")]),t._v(" fee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runningTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" runningTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fee "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountPolicy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("ServiceLocator 클래스")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceLocator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceLocator")]),t._v(" soleInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceLocator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountPolicy")]),t._v(" discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountPolicy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("discountPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" soleInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountPolicy")]),t._v(" discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        soleInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountPolicy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" discountPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceLocator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Movie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DUration")]),t._v(" runningTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Money")]),t._v(" fee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runningTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" runningTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fee "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("사용")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceLocator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AmountDiscountPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Movie")]),t._v(" avatar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Movie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"아바타"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofMinutes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Money")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("사용 예시를 보면 의존성을 해결할 수 있는 좋은 방법 처럼 보인다. 하지만 의존성을 감춘다는 측면에서 문제가 생길 수 있다. Movie의 퍼블릭 인터페이스 어디에도 의존성에 대한 정보가 표시되어 있지 않다. 의존성이 숨겨져 있으면 의존성을 이해하기 위해 코드 내부 구현을 이해해야하는 문제가 있다. 따라서 캡슐화를 위반하게 된다.")]),t._v(" "),a("p",[t._v("하고자 하는 이야기는 가급적 의존성을 객체의 퍼블릭 인터페이스에 노출하는 것이 좋지만 어쩔 수 없는 경우(의존성 주입해주는 프레임워크 사용 X, 깊은 호출 계층에 걸쳐 동일한 객체를 계속해서 전달해야 하는 경우) SERVICE LOCATOR 사용을 고려하는 것이 좋다는 것이다.")]),t._v(" "),a("h2",{attrs:{id:"_04-의존성-역전-원칙"}},[t._v("04. 의존성 역전 원칙")]),t._v(" "),a("h3",{attrs:{id:"추상화와-의존성-역전-원칙"}},[t._v("추상화와 의존성 역전 원칙")]),t._v(" "),a("p",[t._v("의존성 역전 원칙을 설명하면")]),t._v(" "),a("ul",[a("li",[t._v("상위수준 모듈은 하위수준 모듈에 의존해서는 안 된다. 둘 다 추상화에 의존해야 한다.")]),t._v(" "),a("li",[t._v("추상화는 구체적인 사항에 의존해서는 안 된다. 구체적인 사항은 추상화에 의존해야 한다.")])]),t._v(" "),a("p",[t._v("여기서 "),a("em",[t._v("역전")]),t._v(" 이란 말이 사용된 이유는 이 원칙이 전통적인 절차형 프로그래밍과 의존성의 방향이 반대로 나타나기 때문이다.")]),t._v(" "),a("p",[t._v("상위수준이란 객체사이의 협력이 존재할 때 그 협력의 본질을 담고있는 것이다. 상위수준의 클래스가 하위수준의 클래스에 의존하게 되면 상위수준 클래스를 재사용할때 하위수준 클래스도 필요하게 되므로 재사용하기 어려워 진다. 또한 하위수준의 변경으로 인해 상위수준까지 변경이 가능성을 가지게 된다.")]),t._v(" "),a("p",[t._v("이럴 때 추상화를 사용해 상위수준에 의존을 하게 만들어야 한다. 구체 클래스는 의존의 시작점이어야 한다. 의존성의 목적지가 되면 안 된다.")]),t._v(" "),a("h2",{attrs:{id:"_05-유연성에-대한-조언"}},[t._v("05. 유연성에 대한 조언")]),t._v(" "),a("h3",{attrs:{id:"유연한-설계는-유연성이-필여할-때만-옳다"}},[t._v("유연한 설계는 유연성이 필여할 때만 옳다.")]),t._v(" "),a("p",[t._v("유연하고 재사용 가능한 설계가 항상 옳은것은 아니다. 설계의 미덕은 단순함과 명확함에서 나오는데, 유연한 설계라는 말의 이면에는 복잡한 설계라는 의미가 숨어있다. 불필요한 유연성은 불필요한 복잡성을 낳는다. 단순하고 명확한 해법이 그런대로 만족스럽다면 유연성을 제거해라. 유연성은 코드를 읽는 사람이 복잡성을 수용할 수 있을때만 가치가 있다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);