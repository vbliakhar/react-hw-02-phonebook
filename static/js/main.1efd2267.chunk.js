(this["webpackJsonpreact-hw-02-phonebook"]=this["webpackJsonpreact-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),o=(n(16),n(11)),s=n(3),u=n(4),l=n(6),b=n(5),d=n(9),h=n.n(d),m=(n(25),n(26),n(0)),j=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ul",{className:"ContactList",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(m.jsxs)("li",{children:[a,":",Object(m.jsxs)("span",{children:[" ",c]}),Object(m.jsx)("button",{onClick:function(){return n(t)},children:"delete"})]},t)}))})},f=n(10),p=(n(28),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={id:"",name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(f.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetState()},e.resetState=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:"ContactForm",children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:["Telephone",Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component)),O=(n(29),function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{className:"Filter",children:["Find contacts by name",Object(m.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})}),C=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.formSubmitHandler=function(t){var n=t.name,a=t.number;if(e.state.contacts.find((function(e){return e.name===n})))alert("Rosie Simpson is already in contacts.");else{var c={id:h.a.generate(),name:n,number:a};e.setState((function(e){return{contacts:[c].concat(Object(o.a)(e.contacts))}}))}},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.getFilterContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getFilterContacts();return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(p,{onSubmit:this.formSubmitHandler}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(O,{value:e,onChange:this.changeFilter}),Object(m.jsx)(j,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.1efd2267.chunk.js.map