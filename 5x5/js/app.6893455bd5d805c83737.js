webpackJsonp([1,2],{100:function(t,e,n){var o=n(108);"string"==typeof o&&(o=[[t.i,o,""]]);n(14)(o,{});o.locals&&(t.exports=o.locals)},101:function(t,e,n){"use strict";var o=n(4),r=(n.n(o),n(30)),i=n.n(r),a=n(65),s=n.n(a),l=n(38),c=n(31),p=n(246),u=n(248),d=n(247);n.d(e,"a",function(){return m});var f=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=n(241),m=function(t){function e(e){var n=t.call(this,e)||this;return n.state={menus:[{to:"/home",name:"home",showRipple:!1},{to:"/setting",name:"settings",showRipple:!1},{to:"/sync",name:"sync",showRipple:!1}]},n.clickMenuItem=n.clickMenuItem.bind(n),n}return f(e,t),e.prototype.clickMenuItem=function(t){var e=this,n=this.state.menus,o=n[t];o.showRipple=!1,this.setState({menus:n}),setTimeout(function(){o.showRipple=!0,e.setState({menus:n})},0)},e.prototype.componentDidMount=function(){var t=i.a.get(c.a);if(!t){var e=s()(new Date,"yyyy.mm.dd"),n={week:"1",startDate:e,currentWorkout:{name:"a",id:0},exercises:c.b.map(function(t){return{name:t,weight:0}}),recents:[],history:[]};i.a.set(c.a,n)}},e.prototype.render=function(){var t=this;return o.createElement("div",{className:h.container},o.createElement(l.c,null,o.createElement(l.b,{exact:!0,path:"/",render:function(){return o.createElement(l.d,{to:"/home"})}}),o.createElement(l.b,{path:"/home",component:p.a}),o.createElement(l.b,{path:"/sync",component:u.a}),o.createElement(l.b,{path:"/setting",component:d.a})),o.createElement("nav",{className:h.nav},o.createElement("ul",{className:h.navList},this.state.menus.map(function(e,n){var r=h.ripple;return e.showRipple&&(r+=" "+h.rippleEffect),o.createElement("li",{key:e.to},o.createElement(l.e,{to:e.to,onClick:function(){return t.clickMenuItem(n)},className:h.navItem,activeClassName:h.active},e.name),o.createElement("span",{className:r}))}))))},e}(o.Component)},105:function(t,e,n){e=t.exports=n(13)(),e.push([t.i,"._2FW05{outline:none;-webkit-appearance:none;border:0;background-color:#e53935;color:#fff;font-size:14px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);position:relative;overflow:hidden}._29MeK{border-radius:50%;background-color:#fff;position:absolute;opacity:1;transform:scale(0)}._1Wof_{animation:_1eDF5 .6s ease-out}@keyframes _1eDF5{to{transform:scale(2);opacity:0}}",""]),e.locals={container:"_2FW05",ripple:"_29MeK",rippleEffect:"_1Wof_",rippleDrop:"_1eDF5"}},106:function(t,e,n){e=t.exports=n(13)(),e.push([t.i,"._2hpRg{display:flex;align-items:center;padding:15px;box-shadow:0 1px 2px #ddd;background-color:#e53935;color:#fff}.eU09r{font-size:20px;font-family:Source Sans Pro,Helvetica Neue,Arial,sans-serif;font-weight:700}",""]),e.locals={head:"_2hpRg",title:"eU09r"}},107:function(t,e,n){e=t.exports=n(13)(),e.push([t.i,"._1pvzK,._3XgbZ{visibility:hidden;position:fixed;left:0;right:0;top:0;bottom:0;background-color:#fafafa;transform:translateY(40px);opacity:.5;transition:.2s linear;overflow:hidden;z-index:1}._3XgbZ{visibility:visible;opacity:1;transform:translateY(0)}._18QEX{display:flex;align-items:center;padding:15px;box-shadow:0 1px 2px #ddd;background-color:#e53935;color:#fff}._2yHK_{font-size:20px;font-family:Source Sans Pro,Helvetica Neue,Arial,sans-serif;font-weight:700;margin-left:10px}._2OImg{height:24px;color:#fff}._3SJeo{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;width:24px}._16uwu{text-align:center}._3lM5c{width:100px;height:100px;margin:40px auto 0;font-size:50px;line-height:100px}._2Cpdl,._3lM5c{background-color:#e53935;color:#fff}._2Cpdl{padding:10px 60px;border:0;font-size:16px;box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2);margin-top:150px}._2Cpdl:hover{cursor:pointer;opacity:.9}",""]),e.locals={containerHidden:"_1pvzK",containerVisible:"_3XgbZ",head:"_18QEX",title:"_2yHK_",backWrapper:"_2OImg",back:"_3SJeo",content:"_16uwu",count:"_3lM5c",done:"_2Cpdl"}},108:function(t,e,n){e=t.exports=n(13)(),e.push([t.i,"body,html{height:100%;margin:0;background-color:#fafafa}input{border:0;background-color:transparent;border-bottom:1px solid #e0e0e0;color:#757575}input:hover{outline-width:0;border-bottom:2px solid #e53935;color:#212121}li,ul{list-style:none;margin:0;padding:0}#root{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;-webkit-tap-highlight-color:rgba(255,255,255,0);height:100%}#root>span{display:block;height:100%}",""])},109:function(t,e,n){e=t.exports=n(13)(),e.push([t.i,"._2Dwcj{height:100%}._28O-0{position:relative;height:620px}._2KmwF{text-align:center;font-size:19px;margin-bottom:15px}.N10d_>li{box-sizing:border-box;padding:10px 15px;margin:0 auto 20px;width:300px;background-color:#fff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.ecFys{margin-top:0;margin-bottom:10px}._1rDmF>li{padding-bottom:5px}._1rDmF>li:last-child{padding:0}._8KLbx{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;position:fixed;right:20px;bottom:58px}._3obPZ{font-family:Material Icons;font-weight:400;font-style:normal;font-size:26px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-decoration:none;color:#fff}",""]),e.locals={container:"_2Dwcj",contentWrapper:"_28O-0",week:"_2KmwF",workoutList:"N10d_",date:"ecFys",workout:"_1rDmF",beginWrapper:"_8KLbx",begin:"_3obPZ"}},110:function(t,e,n){e=t.exports=n(13)(),e.push([t.i,"._7KUea{height:100%}.liG2o{background-color:#fff;box-shadow:0 -1px 8px #e0e0e0;position:fixed;width:100%;bottom:0;border-top:1px solid #e0e0e0}._1eyO_{list-style:none;padding:0;margin:0;justify-content:space-around}._1eyO_,._1eyO_>li{display:flex;align-items:center}._1eyO_>li{width:75px;height:50px;justify-content:center;position:relative;overflow:hidden}.PSGhb{font-family:Material Icons;font-weight:400;font-style:normal;font-size:28px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-decoration:none;color:#616161}._3UiD1{color:#e53935}._22qnO{height:40px;width:40px;border-radius:50%;background-color:RGBA(229,57,53,.45);position:absolute;top:3px;opacity:1;transform:scale(0)}._2EUsz{animation:XTkkZ .6s ease-out}@keyframes XTkkZ{to{transform:scale(3);opacity:0}}",""]),e.locals={container:"_7KUea",nav:"liG2o",navList:"_1eyO_",navItem:"PSGhb",active:"_3UiD1",ripple:"_22qnO",rippleEffect:"_2EUsz",rippleDrop:"XTkkZ"}},111:function(t,e,n){e=t.exports=n(13)(),e.push([t.i,"._27-Yk{display:flex;align-items:center;padding:15px;border-bottom:1px solid #ddd;box-shadow:0 1px 2px #ddd}._34uTI{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}._QSK0{margin-left:15px;font-size:18px}._3dscp{margin-top:40px;width:280px;margin:30px auto 0;padding-left:10px}._3dscp li{margin-bottom:20px;display:flex;align-items:center}._3dscp span{color:#616161;font-size:14px}._3dscp input{width:130px;box-sizing:border-box;padding:8px;margin-left:auto}._2ssh6{padding:10px 40px;display:block;margin:40px auto 0;font-size:14px}",""]),e.locals={nav:"_27-Yk",back:"_34uTI",title:"_QSK0",settings:"_3dscp",submit:"_2ssh6"}},112:function(t,e,n){e=t.exports=n(13)(),e.push([t.i,"._1qEWa,._2EQym{font-family:Material Icons;font-weight:400;font-style:normal;font-size:40px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-decoration:none;color:#fff}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(-1turn)}}._1qEWa{animation:.8s spin infinite linear}.fFEWy{width:200px;margin:40px auto 0}._2tYAo,.vqh75{padding:5px 60px;margin:60px auto 0;width:100%}._1NcMB{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:80px}._2L73n{font-size:14px}._2L73n>label{color:#999;margin-right:5px}._2qy2L,._33Fou{padding:5px;border-width:0;border-bottom:1px solid #999;background-color:#fafafa;width:150px;color:#999;font-size:14px}._33Fou{color:#333;border-bottom-color:#e53935;border-bottom-width:2px}.vqh75{padding:8px 0;margin-top:50px;width:120px;text-align:center}.ouSPK{position:fixed;left:0;right:0;top:0;bottom:0;background-color:RGBA(33,33,33,.5);z-index:1;display:flex;align-items:center;justify-content:center}._2zDli{background-color:#fff;width:300px;margin-top:-80px;border-radius:2px;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.3);box-sizing:border-box;padding:20px 30px 0;font-size:20px;position:relative;height:120px}._36dxw{color:#9e9e9e;margin:0}._3SedZ{width:100px;line-height:35px;background-color:#fff;color:#009688;text-align:center;box-shadow:none;position:absolute;right:5px;bottom:10px;font-size:18px}._2N5QS{background-color:#bdbdbd}",""]),e.locals={md:"_2EQym",loading:"_1qEWa",wrapper:"fFEWy",btn:"_2tYAo",tokenBTN:"vqh75",setting:"_1NcMB",inputWrapper:"_2L73n",tokenInput:"_2qy2L",tokenInputActive:"_33Fou",modal:"ouSPK",modalContent:"_2zDli",modalMsg:"_36dxw",modalBTN:"_3SedZ",btnRipple:"_2N5QS"}},237:function(t,e,n){var o=n(105);"string"==typeof o&&(o=[[t.i,o,""]]);n(14)(o,{});o.locals&&(t.exports=o.locals)},238:function(t,e,n){var o=n(106);"string"==typeof o&&(o=[[t.i,o,""]]);n(14)(o,{});o.locals&&(t.exports=o.locals)},239:function(t,e,n){var o=n(107);"string"==typeof o&&(o=[[t.i,o,""]]);n(14)(o,{});o.locals&&(t.exports=o.locals)},240:function(t,e,n){var o=n(109);"string"==typeof o&&(o=[[t.i,o,""]]);n(14)(o,{});o.locals&&(t.exports=o.locals)},241:function(t,e,n){var o=n(110);"string"==typeof o&&(o=[[t.i,o,""]]);n(14)(o,{});o.locals&&(t.exports=o.locals)},242:function(t,e,n){var o=n(111);"string"==typeof o&&(o=[[t.i,o,""]]);n(14)(o,{});o.locals&&(t.exports=o.locals)},243:function(t,e,n){var o=n(112);"string"==typeof o&&(o=[[t.i,o,""]]);n(14)(o,{});o.locals&&(t.exports=o.locals)},244:function(t,e,n){"use strict";function o(t,e){var n=t.split("."),o=n[0],r=n[1],i=n[2];return o+"."+r+"."+(parseInt(i,10)+e)}function r(t,e){var n=0===e?2.5:1.25;return{name:t.name,weight:parseFloat(t.weight)+n}}function i(t){return 0===t.id?{name:"b",id:1}:{name:"a",id:0}}var a=n(4),s=(n.n(a),n(30)),l=n.n(s),c=n(31),p=n(38);n.d(e,"a",function(){return f});var u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),d=n(239),f=function(t){function e(e){var n=t.call(this,e)||this;return n.handleDone=n.handleDone.bind(n),n.handleCount=n.handleCount.bind(n),n.state={count:0,done:!1},n.exeCount=0,n}return u(e,t),e.prototype.handleDone=function(){var t=l.a.get(c.a),e=t.history||[],n=t.recents;e.push(n[0]);var a=c.d[n[0].workoutID];a.forEach(function(e){var n=t.exercises[e];n.weight=parseFloat(n.weight)+1.25});var s=n[1];n.push({exercises:s.exercises.map(r),workoutID:s.workoutID,date:o(s.date,2)}),n=n.slice(1);var p=n[0];l.a.set(c.a,Object.assign({},t,{recents:n,history:e,currentWorkout:i(t.currentWorkout),startDate:p.date}))},e.prototype.handleCount=function(){var t=this.state.count,e=this.exeCount;3===e?(this.handleDone(),this.setState({done:!0})):5===t?(this.exeCount+=1,this.setState({count:0})):this.setState({count:t+1})},e.prototype.render=function(){var t=this.state,e=t.count,n=t.done,o=this.props,r=o.visible,i=o.handleBack;return n?a.createElement(p.d,{to:"/"}):a.createElement("div",{className:r?d.containerVisible:d.containerHidden},a.createElement("div",{className:d.head},a.createElement("a",{className:d.backWrapper,onClick:i},a.createElement("i",{className:d.back},"arrow_back")),a.createElement("span",{className:d.title},"Play")),a.createElement("div",{className:d.content},a.createElement("div",{className:d.count},e),a.createElement("button",{className:d.done,onClick:this.handleCount},"Done")))},e}(a.Component)},245:function(t,e,n){"use strict";function o(t,e){return"https://"+t+".dropboxapi.com/2/"+e}n.d(e,"a",function(){return r});var r=function(){function t(t){void 0===t&&(t=""),this.token=t}return t.prototype.setToken=function(t){this.token=t},t.prototype.filesUpload=function(t,e){return fetch(o("content","files/upload"),{method:"POST",headers:{"Content-Type":"application/octet-stream",Authorization:"Bearer "+this.token,"Dropbox-API-Arg":JSON.stringify({path:t})},body:e}).then(function(t){return t.json()})},t.prototype.filesDownload=function(t){return fetch(o("content","files/download"),{method:"GET",headers:{Authorization:"Bearer "+this.token,"Dropbox-API-Arg":JSON.stringify({path:t})}}).then(function(t){return t.json()})},t.prototype.filesListFolder=function(t){return fetch(o("api","files/list_folder"),{method:"POST",headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()})},t}()},246:function(t,e,n){"use strict";function o(t,e){var n=0===e?2.5:1.25;return{name:t.name,weight:parseFloat(t.weight)+n}}function r(t,e){var n=t.split("."),o=n[0],r=n[1],i=n[2];return o+"."+r+"."+(parseInt(i,10)+e)}function i(t,e){return t.map(function(t,n){return h({},t,{date:r(e,2*n)})})}var a=n(4),s=(n.n(a),n(30)),l=n.n(s),c=n(31),p=n(64),u=n(63),d=n(244);n.d(e,"a",function(){return g});var f=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=this&&this.__assign||Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},m=n(240),g=function(t){function e(e){var n=t.call(this,e)||this;return n.state={recents:[],week:"",showPlay:!1},n}return f(e,t),e.prototype.componentDidMount=function(){var t=l.a.get(c.a),e=t.exercises,n=t.currentWorkout,r=t.startDate,a=t.week,s=n.id,p=c.d[s].map(function(t){return e[t]}),u=c.d[1-s].map(function(t){return e[t]}),d=i([{exercises:p,workoutID:s},{exercises:u.map(function(t,e){return 0===e?{name:t.name,weight:parseFloat(t.weight)+1.25}:t}),workoutID:1-s},{exercises:p.map(o),workoutID:s}],r);this.setState({recents:d,week:a}),t.recents=d,l.a.set(c.a,t)},e.prototype.render=function(){var t=this,e=this.state,n=e.week,o=e.recents,r=e.showPlay;return a.createElement("div",{className:m.container},a.createElement(p.a,{title:"STRONGLIFTS"}),a.createElement("h3",{className:m.week},"WEEK ",n),a.createElement("ul",{className:m.workoutList},o.map(function(t){return a.createElement("li",{key:t.date},a.createElement("h3",{className:m.date},t.date),a.createElement("ul",{className:m.workout},t.exercises.map(function(e){return a.createElement("li",{key:""+t.date+e.name},e.name+": "+e.weight+"kg")})))})),a.createElement(u.a,{className:m.beginWrapper,onClick:function(){return t.setState({showPlay:!0})}},a.createElement("i",{className:m.begin},"play_arrow")),a.createElement(d.a,{visible:r,handleBack:function(){return t.setState({showPlay:!1})}}))},e}(a.Component)},247:function(t,e,n){"use strict";var o=n(4),r=(n.n(o),n(30)),i=n.n(r),a=n(31),s=n(64),l=n(63);n.d(e,"a",function(){return u});var c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),p=n(242),u=function(t){function e(e){var n=t.call(this,e)||this;return n.state={exercises:[],currentWorkout:{name:"",id:-1},startDate:"",week:"1"},n.handleConfirm=n.handleConfirm.bind(n),n}return c(e,t),e.prototype.handleConfirm=function(){var t=i.a.get(a.a);t&&i.a.set(a.a,Object.assign({},t,this.state)),i.a.set(a.a,this.state)},e.prototype.handleChange=function(t,e){this.setState((n={},n[t]=e,n));var n},e.prototype.handleExerciseChange=function(t,e){var n=this.state.exercises;n[t].weight=e,this.setState({exercises:n})},e.prototype.componentDidMount=function(){var t=i.a.get(a.a);t&&this.setState(t)},e.prototype.render=function(){var t=this,e=this.state,n=e.exercises,r=e.currentWorkout,i=e.startDate,a=e.week;return o.createElement("div",null,o.createElement(s.a,{title:"SETTING"}),o.createElement("ul",{className:p.settings},n.map(function(e,n){return o.createElement("li",{key:""+e.name+n},o.createElement("span",null,e.name,":"),o.createElement("input",{type:"text",value:e.weight,onChange:function(e){return t.handleExerciseChange(n,e.target.value)}}))}),o.createElement("li",null,o.createElement("span",null,"Current Workout:"),o.createElement("input",{type:"text",value:r.name,onChange:function(e){return t.setState({currentWorkout:{name:e.target.value,id:"a"===e.target.value?0:1}})}})),o.createElement("li",null,o.createElement("span",null,"Start Date:"),o.createElement("input",{type:"text",value:i,onChange:function(e){return t.setState({startDate:e.target.value})}})),o.createElement("li",null,o.createElement("span",null,"Week"),o.createElement("input",{type:"text",value:a,onChange:function(e){return t.setState({week:e.target.value})}}))),o.createElement(l.a,{className:p.submit,onClick:this.handleConfirm},"确定"))},e}(o.Component)},248:function(t,e,n){"use strict";var o=n(4),r=(n.n(o),n(30)),i=n.n(r),a=n(65),s=n.n(a),l=n(245),c=n(31),p=n(64),u=n(63);n.d(e,"a",function(){return h});var d=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),f=n(243),h=function(t){function e(e){var n=t.call(this,e)||this;return n.handleDownload=n.handleDownload.bind(n),n.handleUpload=n.handleUpload.bind(n),n.handleSetToken=n.handleSetToken.bind(n),n.state={hasToken:!1,inputFocus:!1,uploading:!1,downloading:!1,showError:!1},n.box=new l.a,n}return d(e,t),e.prototype.handleUpload=function(){var t=this,e=this.state,n=e.downloading,o=e.uploading;if(!n&&!o){this.setState({uploading:!0});var r=i.a.get(c.a),a=s()(new Date,"yyyy-mm-dd-HH-MM-ss");this.box.filesUpload("/"+a+".json",JSON.stringify(r)).then(function(){t.setState({uploading:!1})}).catch(function(e){console.error(e),t.setState({uploading:!1,showError:!0})})}},e.prototype.handleDownload=function(){var t=this,e=this.state,n=e.downloading,o=e.uploading;n||o||(this.setState({downloading:!0}),this.box.filesListFolder({path:""}).then(function(e){var n=e.entries.filter(function(t){return"file"===t[".tag"]&&t.path_lower.endsWith(".json")}).reduce(function(t,e){return e.client_modified>t.client_modified?e:t},{client_modified:"",path_lower:""});""!==n.path_lower&&t.box.filesDownload(n.path_lower).then(function(e){i.a.set(c.a,e),t.setState({downloading:!1})}).catch(function(e){console.error(e),t.setState({downloading:!1,showError:!0})})}).catch(function(e){console.log(e),t.setState({downloading:!1,showError:!0})}))},e.prototype.handleSetToken=function(){var t=this.refs.tokenInput.value;t&&(i.a.set(c.c,t),this.box.setToken(t),this.setState({hasToken:!0}))},e.prototype.componentDidMount=function(){var t=i.a.get(c.c);t&&(this.box.setToken(t),this.setState({hasToken:!0}))},e.prototype.renderSetToken=function(){var t=this,e=this.state.inputFocus;return o.createElement("div",{className:f.setting},o.createElement("div",{className:f.inputWrapper},o.createElement("label",{htmlFor:"tokenInput"},"Access Token: "),o.createElement("input",{type:"text",className:e?f.tokenInputActive:f.tokenInput,id:"tokenInput",onFocus:function(){return t.setState({inputFocus:!0})},onBlur:function(){return t.setState({inputFocus:!1})},ref:"tokenInput"})),o.createElement("button",{className:f.tokenBTN,onClick:this.handleSetToken},"Submit"))},e.prototype.renderSync=function(){var t=this.state,e=t.downloading,n=t.uploading;return o.createElement("div",{className:f.wrapper},o.createElement(u.a,{className:f.btn,onClick:this.handleUpload},n?o.createElement("i",{className:f.loading},"sync"):o.createElement("i",{className:f.md},"cloud_upload")),o.createElement(u.a,{className:f.btn,onClick:this.handleDownload},e?o.createElement("i",{className:f.loading},"sync"):o.createElement("i",{className:f.md},"cloud_download")))},e.prototype.render=function(){var t=this,e=this.state,n=e.hasToken,r=e.showError;return o.createElement("div",null,o.createElement(p.a,{title:"SYNC"}),n?this.renderSync():this.renderSetToken(),r?o.createElement("div",{className:f.modal},o.createElement("div",{className:f.modalContent},o.createElement("p",{className:f.modalMsg},"Network fail."),o.createElement(u.a,{className:f.modalBTN,rippleClass:f.btnRipple,onClick:function(){return t.setState({showError:!1})}},"OK"))):null)},e}(o.Component)},250:function(t,e,n){"use strict";function o(){return i.a.createElement(l.a,null,i.a.createElement(l.b,{path:"/",component:c.a}))}Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),i=n.n(r),a=n(98),s=n.n(a),l=n(38),c=n(101),p=n(100);n.n(p);"serviceWorker"in navigator&&n(99).register();var u=document.getElementById("root");s.a.render(i.a.createElement(o,null),u)},31:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return a});var o="KEY",r="TOKEN",i=["Squat","Bench Press","Deadlift","Overhead Press","Barbell Row"],a=[[0,1,4],[0,3,2]]},63:function(t,e,n){"use strict";var o=n(4);n.n(o);n.d(e,"a",function(){return a});var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),i=n(237),a=function(t){function e(e){var n=t.call(this,e)||this;return n.handleClick=n.handleClick.bind(n),n.state={showRipple:!1,rippleLeft:0,rippleTop:0,rippleWidth:0},n}return r(e,t),e.prototype.handleClick=function(t){var e=this,n=this.props.onClick,o=this.btn.getBoundingClientRect(),r=o.left,i=o.top,a=this.btn,s=a.offsetWidth,l=a.offsetHeight,c=s>l?s:l,p=t.clientX-r-c/2,u=t.clientY-i-c/2;this.setState({showRipple:!1,rippleLeft:p,rippleTop:u,rippleWidth:c}),setTimeout(function(){e.setState({showRipple:!0})},0),n&&n(t)},e.prototype.render=function(){var t=this,e=this.props,n=e.children,r=e.className,a=e.rippleClass,s=this.state,l=s.showRipple,c=s.rippleLeft,p=s.rippleTop,u=s.rippleWidth,d=i.container;r&&(d=d+" "+r);var f=[i.ripple];return a&&f.push(a),l&&f.push(i.rippleEffect),o.createElement("button",{className:d,onClick:this.handleClick,ref:function(e){return t.btn=e}},n,o.createElement("span",{className:f.join(" "),style:{left:c,top:p,width:u,height:u},ref:function(e){return t.rippleEle=e}}))},e}(o.Component)},64:function(t,e,n){"use strict";var o=n(4);n.n(o);n.d(e,"a",function(){return a});var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),i=n(238),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){return o.createElement("div",{className:i.head},o.createElement("span",{className:i.title},this.props.title))},e}(o.Component)}},[250]);