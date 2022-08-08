(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),i=(a(17),a(7)),s=a(1),l=a(4),u=a.n(l),m=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{src:u.a,alt:"Around the US Logo",className:"header__logo"}))},d=c.a.createContext(),p=function(e){var t=Object(n.useContext)(d),a=e.card.owner._id===t._id,r=e.card.likes.some(function(e){return e._id===t._id}),o="card__like-button ".concat(r&&"card__like-button_active");return c.a.createElement("li",{className:"card"},a&&c.a.createElement("button",{type:"button","aria-label":"delete card",className:"card__image-trash",onClick:function(){e.onDeleteClick(e.card)}}),c.a.createElement("img",{src:e.card.link,alt:e.card.name,className:"card__image",onClick:function(){e.onCardClick(e.card)}}),c.a.createElement("div",{className:"card__info"},c.a.createElement("h2",{className:"card__info-title"},e.card.name),c.a.createElement("div",{className:"card__like-container"},c.a.createElement("button",{className:o,type:"button","aria-label":"like card",onClick:function(){e.onLikeCard(e.card)}}),c.a.createElement("span",{className:"card__like-count"},e.card.likes.length))))},f=function(e){e.props;var t=e.onCardLike,a=e.cards,r=e.onEditProfileClick,o=e.onEditAvatarClick,i=e.onAddPlaceClick,s=e.onCardClick,l=e.onDeleteClick,u=Object(n.useContext)(d);return c.a.createElement("main",{className:"content"},c.a.createElement("section",{className:"profile"},c.a.createElement("div",{onClick:o,className:"profile__image-container"},c.a.createElement("img",{src:u.avatar,alt:"Profile Picture",className:"profile__image"})),c.a.createElement("div",{className:"profile__info"},c.a.createElement("div",{className:"profile__person"},c.a.createElement("h1",{className:"profile__name"},u.name),c.a.createElement("button",{onClick:r,className:"profile__edit-button",type:"button"})),c.a.createElement("p",{className:"profile__title"},u.about)),c.a.createElement("button",{onClick:i,className:"profile__add-button",type:"button"})),c.a.createElement("section",{className:"cards"},c.a.createElement("ul",{className:"cards__list"},a.map(function(e){return c.a.createElement(p,{card:e,key:e._id,onCardClick:s,onDeleteClick:l,onLikeCard:t})}))))},_=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__copyrights"},"\xa9 ",(new Date).getFullYear()," Around The U.S."))},h=function(e){return c.a.createElement("div",{className:"popup-prev popup ".concat(e.isOpen?"popup_opened":"")},c.a.createElement("div",{className:"popup__preview-container"},c.a.createElement("button",{className:"popup__close-button",onClick:e.onClose,type:"button"}),c.a.createElement("img",{src:e.card.link,alt:e.card.name,className:"popup__image"}),c.a.createElement("p",{className:"popup__caption"},e.card.name)))},b=function(e){return c.a.createElement("div",{className:"popup ".concat(e.name," ").concat(e.isOpen?"popup_opened":"")},c.a.createElement("div",{className:"popup__container"},c.a.createElement("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),c.a.createElement("h2",{className:"popup__title"},e.title),c.a.createElement("form",{action:"submit",onSubmit:e.onSubmit,className:"form popup__form",name:e.name},e.children,c.a.createElement("fieldset",{className:"form__fieldset"},c.a.createElement("button",{className:"form__button",type:"submit"},e.buttonText)))))},E=function(e){var t=e.isLoading,a=e.isOpen,r=e.onClose,o=e.onUpdateUser,i=Object(n.useContext)(d),l=Object(n.useState)(""),u=Object(s.a)(l,2),m=u[0],p=u[1],f=Object(n.useState)(""),_=Object(s.a)(f,2),h=_[0],E=_[1];Object(n.useEffect)(function(){p(i.name||""),E(i.about||"")},[i]);return c.a.createElement(b,{title:"Edit profile",name:"popup-edit-profile",isOpen:a,onClose:r,onSubmit:function(e){e.preventDefault(),o({name:m,about:h})},buttonText:t?"Saving...":"Save"},c.a.createElement("fieldset",{className:"form__fieldset"},c.a.createElement("div",{className:"form__input-container"},c.a.createElement("input",{id:"name-input",type:"text",name:"name",value:m,placeholder:"Name",className:"form__input form__input_type_profile-name",minLength:"2",maxLength:"40",onChange:function(e){p(e.target.value)},required:!0}),c.a.createElement("span",{className:"form__input-error name-input-error"})),c.a.createElement("div",{className:"form__input-container"},c.a.createElement("input",{id:"title-input",type:"text",name:"title",placeholder:"About me",className:"form__input form__input_type_profile-title",minLength:"2",maxLength:"200",onChange:function(e){E(e.target.value)},required:!0,value:h}),c.a.createElement("span",{className:"form__input-error title-input-error"}))))},v=function(e){var t=e.isLoading,a=e.isOpen,r=e.onClose,o=e.onUpdateAvatar,i=Object(n.useRef)();return c.a.createElement(b,{title:"Change Profile Picture",name:"popup_type_avatar",isOpen:a,onClose:r,buttonText:t?"Saving...":"Save",onSubmit:function(e){e.preventDefault(),o(i.current.value)}},c.a.createElement("fieldset",{className:"form__fieldset"},c.a.createElement("div",{className:"form__input-container"},c.a.createElement("input",{id:"avatar-input",type:"url",name:"link",placeholder:"Profile Image link",className:"form__input form__input_type_avatar",required:!0,ref:i}),c.a.createElement("span",{className:"form__input-error avatar-input-error"}))))},k=function(e){var t=e.isLoading,a=e.isOpen,r=e.onClose,o=e.onAddPlaceSubmit,i=Object(n.useState)(""),l=Object(s.a)(i,2),u=l[0],m=l[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),f=p[0],_=p[1];return Object(n.useEffect)(function(){a&&(m(""),_(""))},[a]),c.a.createElement(b,{title:"New place",name:"popup-place",isOpen:a,onClose:r,buttonText:t?"Saving...":"Create",onSubmit:function(e){e.preventDefault(),o({name:u,link:f})}},c.a.createElement("fieldset",{className:"form__fieldset"},c.a.createElement("div",{className:"form__input-container"},c.a.createElement("input",{id:"place-title-input",type:"text",name:"name",placeholder:"Title",className:"form__input form__input_type_place-name",required:!0,minLength:"1",maxLength:"30",onChange:function(e){m(e.target.value)},value:u}),c.a.createElement("span",{className:"form__input-error place-title-input-error"})),c.a.createElement("div",{className:"form__input-container"},c.a.createElement("input",{id:"place-url-input",type:"url",name:"link",placeholder:"Image link",className:"form__input form__input_type_place-url",required:!0,onChange:function(e){_(e.target.value)},value:f}),c.a.createElement("span",{className:"form__input-error place-url-input-error"}))))},C=function(e){var t=e.isLoading,a=e.isOpen,n=e.onClose,r=e.onSubmitDelete;return c.a.createElement(b,{title:"Are you sure?",name:"delete-card",buttonText:t?"Deleting...":"Yes",isOpen:a,onClose:n,onSubmit:r})},g=a(5),N=a(6),O=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(g.a)(this,e),this._baseUrl=a,this._headers=n}return Object(N.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:a})}).then(this._checkResponse)}},{key:"createCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"PUT"}).then(this._checkResponse):fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/cohort-3-en",headers:{authorization:"edde3a5c-b30d-40b0-99e9-6f72ee976ddf","Content-Type":"application/json"}});var y=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],p=l[1],b=Object(n.useState)(!1),g=Object(s.a)(b,2),N=g[0],y=g[1],j=Object(n.useState)(!1),S=Object(s.a)(j,2),L=S[0],U=S[1],P=Object(n.useState)(!1),x=Object(s.a)(P,2),A=x[0],T=x[1],w=Object(n.useState)({name:"",link:""}),D=Object(s.a)(w,2),R=D[0],I=D[1],q=Object(n.useState)([]),F=Object(s.a)(q,2),J=F[0],B=F[1],H=Object(n.useState)({}),Y=Object(s.a)(H,2),z=Y[0],M=Y[1],G=Object(n.useState)(!1),K=Object(s.a)(G,2),Q=K[0],V=K[1],W=function(){r(!1),p(!1),y(!1),U(!1),T(!1)};return Object(n.useEffect)(function(){O.getInitialCards().then(function(e){B(e)}).catch(console.log)},[]),Object(n.useEffect)(function(){O.getUserInfo().then(function(e){M(e)}).catch(console.log)},[]),Object(n.useEffect)(function(){var e=function(e){"Escape"===e.key&&W()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}},[]),Object(n.useEffect)(function(){var e=function(e){e.target.classList.contains("popup")&&W()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}},[]),c.a.createElement("div",{className:"body"},c.a.createElement(d.Provider,{value:z},c.a.createElement(m,null),c.a.createElement(f,{onEditProfileClick:function(){p(!0)},onAddPlaceClick:function(){y(!0)},onEditAvatarClick:function(){r(!0)},onCardClick:function(e){U(!0),I({name:e.name,link:e.link})},onDeleteClick:function(e){T(!0),I(e)},onCardLike:function(e){var t=e.likes.some(function(e){return e._id===z._id});O.changeLikeCardStatus(e._id,!t).then(function(t){B(function(a){return a.map(function(a){return a._id===e._id?t:a})})}).catch(console.log)},cards:J}),c.a.createElement(_,null),c.a.createElement(E,{isOpen:u,onClose:W,onUpdateUser:function(e){var t=e.name,a=e.about;V(!0),O.setUserInfo({name:t,about:a}).then(function(e){M(e),W()}).catch(console.log).finally(function(){V(!1)})},isLoading:Q}),c.a.createElement(k,{isLoading:Q,isOpen:N,onClose:W,onAddPlaceSubmit:function(e){V(!0),O.createCard(e).then(function(e){B([e].concat(Object(i.a)(J))),W()}).catch(console.log).finally(function(){V(!1)})}}),c.a.createElement(v,{isOpen:a,onClose:W,onUpdateAvatar:function(e){V(!0),O.setUserAvatar(e).then(function(e){M(e),W()}).catch(console.log).finally(function(){V(!1)})},isLoading:Q}),c.a.createElement(C,{isLoading:Q,isOpen:A,onClose:W,onSubmitDelete:function(e){e.preventDefault(),V(!0),O.deleteCard(R._id).then(function(e){var t=J.filter(function(e){return e._id!==R._id});B(t),W()}).catch(console.log).finally(function(){V(!1)})}}),c.a.createElement(h,{card:R,isOpen:L,onClose:W})))},j=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,30)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null))),j()},4:function(e,t,a){e.exports=a.p+"static/media/around.8f7611ae.svg"},8:function(e,t,a){e.exports=a(29)}},[[8,3,2]]]);
//# sourceMappingURL=main.c5b2d8c6.chunk.js.map