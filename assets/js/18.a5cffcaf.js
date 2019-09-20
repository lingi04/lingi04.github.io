(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{200:function(e,t,o){"use strict";o.r(t);var r=o(0),v=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"oauth2-알아보기"}},[e._v("OAuth2 알아보기")]),e._v(" "),o("h2",{attrs:{id:"oauth2를-구성하는-네-가지-roles"}},[e._v("OAuth2를 구성하는 네 가지 Roles")]),e._v(" "),o("p",[e._v("OAuth2를 구성하는 Role을 살펴보면 "),o("code",[e._v("Resource Owner")]),e._v(", "),o("code",[e._v("Resource Server")]),e._v(", "),o("code",[e._v("Client Application")]),e._v(", "),o("code",[e._v("Authorization Server")]),e._v("가 있다. 이해하기 조금 힘들었는데, leetcode에서 github을 사용해 로그인 하는 경우를 예로 들어 보면")]),e._v(" "),o("ul",[o("li",[e._v("Resource Owner : '나'. 나는 github 회원이고, github을 통해 login하여 leetcode를 이용하려 한다.")]),e._v(" "),o("li",[e._v("Resource Server : 내 깃헙 정보를 가지고 있는 서버. (leet code를 이용할 땐 이 resource server와는 별다른 통신을 하지 않는 것 같다. leet code에서 github데이터에 접근 할 필요는 없지 않을까...)")]),e._v(" "),o("li",[e._v("Client Application : 여기선 github login을 제공하는 leetcode를 client라고 볼 수 있다.")]),e._v(" "),o("li",[e._v("Authorization Server : github에서 인증 처리를 해주는 서버.")])]),e._v(" "),o("p",[e._v("정리해보자면,"),o("br"),e._v(" "),o("code",[e._v("Authorization Server")]),e._v(", "),o("code",[e._v("Resource Server")]),e._v(" = "),o("code",[e._v("github")]),o("br"),e._v(" "),o("code",[e._v("Client")]),e._v(" = "),o("code",[e._v("leetcode")]),o("br"),e._v(" "),o("code",[e._v("Resource Owner")]),e._v(" = "),o("code",[e._v("나")]),e._v(" "),o("br"),e._v("\n라고 정리할 수 있을 것 같다.")]),e._v(" "),o("h2",{attrs:{id:"grant-type"}},[e._v("Grant Type")]),e._v(" "),o("p",[o("code",[e._v("Grant")]),e._v("란 "),o("code",[e._v("Client Application")]),e._v("이 "),o("code",[e._v("Resource Owner")]),e._v("의 보호 된 리소스에 액세스하기 위한 "),o("code",[e._v("access token")]),e._v("을 얻기 위한 "),o("code",[e._v("credential")]),e._v(" 이다. 네 가지가 있다.")]),e._v(" "),o("ul",[o("li",[e._v("Authorization Code Grant Type : 권한 부여 코드 승인 타입")]),e._v(" "),o("li",[e._v("Implicit Grant Type : 암시적 승인")]),e._v(" "),o("li",[e._v("Resource Owner Password Credentials Grant Type : 리소스 소유자 암호 자격 증명 타입")]),e._v(" "),o("li",[e._v("Client Credentials Grant Type : 클라이언트 자격 증명 타입")])]),e._v(" "),o("h2",{attrs:{id:"access-token과-refresh-token"}},[e._v("Access Token과 Refresh Token")]),e._v(" "),o("p",[e._v("Access Token과 Refresh Token에대한 설명은 "),o("a",{attrs:{href:"http://blog.weirdx.io/post/39955",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://blog.weirdx.io/post/39955"),o("OutboundLink")],1),e._v("여기에 설명이 잘 되어 있다.(아래 내용)")]),e._v(" "),o("h3",{attrs:{id:"access-token"}},[e._v("Access Token")]),e._v(" "),o("p",[e._v("요청 절차를 정상적으로 종료한 클라이언트에게 발급됩니다. 이 토큰은 보호된 자원에 접근할 때 권한 확인용으로 사용됩니다. 문자열 형태이며 클라이언트에 발급된 권한을 대표하게 됩니다. 계정 아이디와 비밀번호 등 계정 인증에 필요한 형태들을 이 토큰 하나로 표현함으로써, 리소스 서버는 여러 가지 인증 방식에 각각 대응 하지 않아도 권한을 확인 할 수 있게 됩니다.")]),e._v(" "),o("h3",{attrs:{id:"refresh-token"}},[e._v("Refresh Token")]),e._v(" "),o("p",[e._v("한번 발급받은 access token은 사용할 수 있는 시간이 제한되어 있습니다. 사용하고 있던access token이 유효기간 종료 등으로 만료되면, 새로운 액세스 토큰을 얻어야 하는데 그때 이 refresh token 이 활용됩니다. 권한 서버가 access token을 발급해주는 시점에 refresh token도 함께 발급하여 클라이언트에게 알려주기 때문에, 전용 발급 절차 없이 refresh token을 미리 가지고 있을 수 있습니다. 토큰의 형태는 access token과 동일하게 문자열 형태입니다. 단 권한 서버에서만 활용되며 리소스 서버에는 전송되지 않습니다.")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type#get-the-users-permission"),o("br"),e._v("\nhttps://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2"),o("br"),e._v("\nhttp://blog.weirdx.io/post/39955")])])},[],!1,null,null,null);t.default=v.exports}}]);