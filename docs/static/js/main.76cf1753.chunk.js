(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,r){e.exports=r(247)},246:function(e,t,r){},247:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),u=r(99),l=r.n(u),o=r(6),i=r(104),c=r(10),s=r(103),d=r.n(s);var f=r(3),b=r.n(f),p=Object(n.forwardRef)(function(e,t){var r,n=e.form,u=n.errors,l=n.touched,i=n.handleChange,s=e.field.name,f=e.field,p=e.label,m=e.dataId,v=e.focusNextValue,y=d()((r={},Object(o.a)(r,b.a.input,!0),Object(o.a)(r,b.a.inputError,u[s]&&l[s]),r)),O=!1;return a.a.createElement("div",{className:b.a.inputWrap},a.a.createElement("label",{htmlFor:s,className:b.a.visuallyHidden},p),a.a.createElement("input",Object.assign({},f,{id:s,ref:t,className:y,onChange:function(e){O?i(e):e.target.value.length<2&&/^\d+$/.test(e.target.value)&&(i(e),v(m))},onKeyDown:function(e){var t;t=e.nativeEvent.keyCode,O=void 0!==[8,9,16,27,35,36,37,38,39,40,45,46].find(function(e){return e===t})}})),a.a.createElement(c.a,{name:s,render:function(e){return a.a.createElement("div",{className:b.a.visuallyHidden},e)}}))});p.displayName="forwardRef(ValueInput)";var m=p;function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var y=[{name:"value1",label:"Value One",id:1},{name:"value2",label:"Value Two",id:2},{name:"value3",label:"Value Three",id:3},{name:"value4",label:"Value Four",id:4},{name:"value5",label:"Value Five",id:5},{name:"value6",label:"Value Six",id:6},{name:"value7",label:"Value Seven",id:7}],O=function(e){var t;return e.forEach(function(e){t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach(function(t){Object(o.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,Object(o.a)({},e.name,""))}),t}(y);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h=function(e){var t=e.legend,r=e.errors,u=e.touched,l=e.formikName,i=e.setFieldValue,s=e.setFieldTouched,d=y.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach(function(t){Object(o.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{ref:Object(n.createRef)()})}),f=function(e){d.length>e&&d[e].ref.current.focus()};return Object(n.useEffect)(function(){var e=r?Object.keys(r):null,t=u?Object.keys(u):null,n=e.filter(function(e){return t.includes(e)});n.includes(l)&&n.splice(l,1),n.length>0?(i(l,!0),s(l,!0)):i(l,!1)},[u,r,l,i,s]),a.a.createElement("fieldset",{className:b.a.fieldset},a.a.createElement("legend",{className:b.a.legend},t),a.a.createElement("div",{className:b.a.inputGroup},d.map(function(e){return a.a.createElement(c.b,{name:e.name,key:e.id,render:function(t){return a.a.createElement(m,Object.assign({},t,{ref:e.ref,label:e.label,dataId:e.id,focusNextValue:f}))}})})),a.a.createElement(c.a,{name:l,render:function(e){return a.a.createElement("div",{className:b.a.errorLabel},e)}}))};var j=function(e){var t=e.successMsg,r=e.handleReset;return a.a.createElement("div",{className:b.a.buttonGroup},a.a.createElement("button",{type:"submit",className:b.a.button},"Submit Number"),t&&a.a.createElement("button",{type:"button",onClick:r,className:b.a.buttonSecondary},"Reset"))},E=r(7),_=E.object().shape({vCodeGroup:E.boolean().oneOf([!1],"All values are required"),value1:E.string().required("Required"),value2:E.string().required("Required"),value3:E.string().required("Required"),value4:E.string().required("Required"),value5:E.string().required("Required"),value6:E.string().required("Required"),value7:E.string().required("Required")}),w=function(e){var t=Math.floor(Math.random()*Math.floor(2));return"".concat(e,t>0?"? That's your number? Weird.":" is a great number!")},P=function(e){return Object.keys(e).sort().filter(function(e){return e.includes("value")}).reduce(function(t,r){return t+=e[r]},"")};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(r,!0).forEach(function(t){Object(o.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var q=function(){var e=a.a.useState(null),t=Object(i.a)(e,2),r=t[0],u=t[1];return a.a.createElement(n.Fragment,null,a.a.createElement(c.d,{initialValues:S({vCodeGroup:""},O,{role:"",phone:"",password:""}),validationSchema:_,onSubmit:function(e,t){var r=P(e);u(w(r)),t.setSubmitting(!1)},onReset:function(){u(null)},render:function(e){var t=e.errors,n=e.touched,u=e.setFieldValue,l=e.setFieldTouched,o=e.handleReset;return a.a.createElement(c.c,null,a.a.createElement(h,{legend:"Enter your favorite 7 digit number",formikName:"vCodeGroup",errors:t,touched:n,setFieldValue:u,setFieldTouched:l}),a.a.createElement("p",null,r),a.a.createElement(j,{successMsg:r,handleReset:o}))}}))};r(246);var V=document.getElementById("root");l.a.render(a.a.createElement(function(){return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"Formik Group Validation"),a.a.createElement("p",null,"The parent element displays an error if any children are invalid.",a.a.createElement("br",null),"Also includes number-only entry and auto focus changing."),a.a.createElement(q,null))},null),V)},3:function(e,t,r){e.exports={fieldset:"styles_fieldset__2JJ_-",legend:"styles_legend__c6ybp",inputGroup:"styles_inputGroup__1eZ5Q",inputWrap:"styles_inputWrap__2VvaF",input:"styles_input__1482z",inputError:"styles_inputError__1Mo1q",errorLabel:"styles_errorLabel__3IElf",buttonGroup:"styles_buttonGroup__23SbC",button:"styles_button__2zBkf",buttonSecondary:"styles_buttonSecondary__2xGvy",visuallyHidden:"styles_visuallyHidden__1Gyfx"}}},[[105,1,2]]]);
//# sourceMappingURL=main.76cf1753.chunk.js.map