(function(t){function e(e){for(var c,n,r=e[0],i=e[1],d=e[2],l=0,u=[];l<r.length;l++)n=r[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);b&&b(e);while(u.length)u.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],c=!0,n=1;n<a.length;n++){var r=a[n];0!==s[r]&&(c=!1)}c&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var c={},n={app:0},s={app:0},o=[];function r(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-4ea628f2":"283f85ab","chunk-5676f814":"fe0bc23f","chunk-74a9f4f0":"ba1eee1e","chunk-f3d0f5cc":"c006bd86"}[t]+".js"}function i(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-4ea628f2":1,"chunk-5676f814":1,"chunk-74a9f4f0":1,"chunk-f3d0f5cc":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var c="css/"+({}[t]||t)+"."+{"chunk-4ea628f2":"098e020a","chunk-5676f814":"fa603fec","chunk-74a9f4f0":"ead8d67a","chunk-f3d0f5cc":"1b252af7"}[t]+".css",s=i.p+c,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var d=o[r],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===c||l===s))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){d=u[r],l=d.getAttribute("data-href");if(l===c||l===s)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var c=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete n[t],b.parentNode.removeChild(b),a(o)},b.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){n[t]=0})));var c=s[t];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise((function(e,a){c=s[t]=[e,a]}));e.push(c[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(t);var u=new Error;d=function(e){l.onerror=l.onload=null,clearTimeout(b);var a=s[t];if(0!==a){if(a){var c=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+c+": "+n+")",u.name="ChunkLoadError",u.type=c,u.request=n,a[1](u)}s[t]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=c,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(a,c,function(e){return t[e]}.bind(null,c));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var b=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0525":function(t,e,a){"use strict";a("53ab")},"122d":function(t,e,a){"use strict";a("dfc7")},"2b20":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return r}));var c=a("bc3a"),n=a.n(c),s=a("8c89");const o=n.a.create({baseURL:s["b"],timeout:8e3}),r=function(t){o.defaults.headers.authorization=t}},"2e90":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-4cfb0ff9");Object(c["t"])("data-v-4cfb0ff9");const s={class:"py-4 px-3 text-white rounded shadow list-container"},o={class:"d-flex"},r={class:"list-title"},i=Object(c["g"])("button",{type:"submit",class:"btn btn-sm btn-dark text-white input-group-prepend"}," Add Task ",-1);Object(c["r"])();const d=n((t,e,a,n,d,l)=>{const u=Object(c["x"])("Task");return Object(c["q"])(),Object(c["d"])("div",{class:"List col-md-4 my-3",dropzone:"zone",onDragover:e[4]||(e[4]=Object(c["E"])(()=>{},["prevent"])),onDrop:e[5]||(e[5]=Object(c["E"])((...t)=>n.moveTask&&n.moveTask(...t),["prevent"]))},[Object(c["g"])("div",s,[Object(c["g"])("div",o,[Object(c["g"])("h3",r,Object(c["z"])(a.list.title),1),Object(c["g"])("i",{class:"fas fa-times fa-2x delete-icon",onClick:e[1]||(e[1]=t=>n.deleteList(a.list.id,a.list.boardId))})]),Object(c["g"])("div",null,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(n.state.tasks,t=>(Object(c["q"])(),Object(c["d"])(u,{key:t.id,task:t,draggable:"true"},null,8,["task"]))),128))]),Object(c["g"])("div",null,[Object(c["g"])("form",{onSubmit:e[3]||(e[3]=Object(c["E"])((...t)=>n.createTask&&n.createTask(...t),["prevent"])),class:"input-group"},[Object(c["D"])(Object(c["g"])("input",{type:"text",placeholder:"Add task...","onUpdate:modelValue":e[2]||(e[2]=t=>n.state.newTask.title=t),class:"w-75 form-control"},null,512),[[c["B"],n.state.newTask.title]]),i],32)])])],32)});var l=a("83fc"),u=a("5d40"),b=a("3524"),f=a("63b7"),m={name:"List",props:{list:{type:Object,required:!0}},setup(t){const e=Object(c["u"])({account:Object(c["b"])(()=>l["a"].account),user:Object(c["b"])(()=>l["a"].user),tasks:Object(c["b"])(()=>l["a"].tasks[t.list.id]),newTask:{}});return Object(c["o"])(async()=>{try{await f["a"].getAllTasksByListId(t.list.id)}catch(e){u["a"].toast("Error: "+e,"error")}}),{state:e,moveTask(){const e=l["a"].tempTask,a=l["a"].tempTask.listId;e.listId=t.list.id,f["a"].editTask(e,a),u["a"].toast("Task Moved","success")},async createTask(){try{e.newTask.listId=t.list.id,await f["a"].createTask(e.newTask),u["a"].toast("Succesfully Created","success"),e.newTask={}}catch(a){u["a"].toast("Error: "+a,"error")}},async deleteList(t,e){try{await b["a"].deleteList(t,e),u["a"].toast("Succesfully Deleted","success")}catch(a){u["a"].toast("Error: "+a,"error")}}}},components:{}};a("3289");m.render=d,m.__scopeId="data-v-4cfb0ff9";e["default"]=m},3289:function(t,e,a){"use strict";a("abe5")},3524:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var c=a("83fc"),n=a("2b20");class s{async getAllListsByBoardId(t){const e=await n["a"].get(`api/boards/${t}/lists`);c["a"].lists=e.data}async createList(t){await n["a"].post("api/lists",t),this.getAllListsByBoardId(t.boardId)}async deleteList(t,e){await n["a"].delete("api/lists/"+t),this.getAllListsByBoardId(e)}}const o=new s},"37c0":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var c=a("83fc"),n=a("2b20");class s{async getAllBoards(){const t=await n["a"].get("api/boards");c["a"].boards=t.data}async getBoardById(t){const e=await n["a"].get("api/boards/"+t);c["a"].activeBoard=e.data}async createBoard(t){await n["a"].post("api/boards",t),this.getAllBoards()}async deleteBoard(t){await n["a"].delete("api/boards/"+t),this.getAllBoards()}}const o=new s},"39c7":function(t,e,a){},"41cb":function(t,e,a){"use strict";var c=a("6c02"),n=a("8816");function s(t){return()=>a("a2f9")(`./${t}.vue`)}const o=[{path:"/",name:"Home",component:s("HomePage")},{path:"/boards",name:"BoardsPage",component:s("BoardsPage"),beforeEnter:n["a"]},{path:"/boards/:id",name:"BoardDetailsPage",component:s("BoardDetailsPage"),beforeEnter:n["a"]},{path:"/account",name:"Account",component:s("AccountPage"),beforeEnter:n["a"]}],r=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:o});e["a"]=r},"43fe":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-029e28bd");Object(c["t"])("data-v-029e28bd");const s={class:"task-text d-flex justify-content-between p-1"},o={class:"task-title ml-2"};Object(c["r"])();const r=n((t,e,a,n,r,i)=>{const d=Object(c["x"])("TaskModal");return Object(c["q"])(),Object(c["d"])("div",{class:"Task mb-3 task-container rounded py-2 px-2 shadow",title:"Drag to change lists",onDragstart:e[2]||(e[2]=(...t)=>n.setTask&&n.setTask(...t)),draggable:"true"},[Object(c["g"])("div",s,[Object(c["g"])("h4",o,Object(c["z"])(a.task.title),1),Object(c["g"])("button",{"data-toggle":"modal","data-target":"#taskModal"+a.task.id,class:"btn btn-sm btn-dark text-white mr-3 mb-2 details-button"}," Details ",8,["data-target"]),Object(c["g"])("i",{class:"fas fa-times delete-icon pb-0 align-self-start",onClick:e[1]||(e[1]=t=>n.deleteTask(a.task.id,a.task.listId))})]),Object(c["g"])(d,{task:a.task},null,8,["task"])],32)});var i=a("83fc"),d=a("63b7"),l=a("5d40"),u=a("7d8d"),b={name:"Task",props:{task:{type:Object,required:!0}},setup(t){const e=Object(c["u"])({newComment:{},account:Object(c["b"])(()=>i["a"].account),user:Object(c["b"])(()=>i["a"].user),comments:Object(c["b"])(()=>i["a"].comments[t.task.id])});return Object(c["o"])(async()=>{try{await u["a"].getAllCommentsByTaskId(t.task.id)}catch(e){l["a"].toast("Error: "+e,"error")}}),{state:e,setTask(){d["a"].setTask(t.task)},async createComment(){try{e.newComment.taskId=t.task.id,await u["a"].createComment(e.newComment),l["a"].toast("Succesfully Created","success"),e.newComment={}}catch(a){l["a"].toast("Error: "+a,"error")}},async deleteTask(t,e){try{await d["a"].deleteTask(t,e),l["a"].toast("Succesfully Deleted","success")}catch(a){l["a"].toast("Error: "+a,"error")}}}},components:{}};a("0525");b.render=r,b.__scopeId="data-v-029e28bd";e["default"]=b},"4ea3":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-29e23a5d");Object(c["t"])("data-v-29e23a5d");const s={class:"Comment comment-container p-2"},o={class:"comment-text"},r={class:"comment-title"},i={class:"comment-creator pl-3 pt-0"};Object(c["r"])();const d=n((t,e,a,n,d,l)=>(Object(c["q"])(),Object(c["d"])("div",s,[Object(c["g"])("div",o,[Object(c["g"])("p",r,Object(c["z"])(a.comment.title),1),Object(c["g"])("i",{class:"fas fa-times delete-icon",onClick:e[1]||(e[1]=t=>n.deleteComment(a.comment.id,a.comment.taskId))})]),Object(c["g"])("small",i," - "+Object(c["z"])(a.comment.creator.name),1)])));var l=a("7d8d"),u=a("5d40"),b={name:"Comment",props:{comment:{type:Object,required:!0}},setup(){return{async deleteComment(t,e){try{await l["a"].deleteComment(t,e),u["a"].toast("Succesfully Deleted","success")}catch(a){u["a"].toast("Error: "+a,"error")}}}},components:{}};a("ad84");b.render=d,b.__scopeId="data-v-29e23a5d";e["default"]=b},"53ab":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["g"])("footer",null,[Object(c["g"])("div",{class:"text-muted text-center p-4"}," Kanban © 2021 || LLC ")],-1);function s(t,e,a,s,o,r){const i=Object(c["x"])("Navbar"),d=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("header",null,[Object(c["g"])(i)]),Object(c["g"])("main",null,[Object(c["g"])(d)]),n],64)}var o=a("83fc"),r={name:"App",setup(){return{appState:Object(c["b"])(()=>o["a"])}}};a("5929");r.render=s;var i=r;function d(t){const e=a("ccc2");e.keys().forEach(a=>{const c=e(a),n=c.default||c,s=n.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(s,n)})}var l=a("41cb"),u=a("4989"),b=a.n(u),f=a("1157"),m=a.n(f),p=a("f0bd"),g=a("f5af"),O=a.n(g);a("e829");const j=Object(c["c"])(i);d(j),O.a.init(),j.use(l["a"],b.a,m.a,p["default"]).mount("#app")},5929:function(t,e,a){"use strict";a("fe63")},"5d40":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var c=a("3d20"),n=a.n(c);class s{static async confirmAction(t="Are you sure?",e="You won't be able to revert this!",a="warning",c="Yes, delete it!"){try{const s=await n.a.fire({title:t,text:e,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:c});return!!s.isConfirmed}catch(s){return!1}}static toast(t="Warning!",e="warning",a="top-end",c=3e3,s=!0){n.a.fire({title:t,icon:e,position:a,timer:c,timerProgressBar:s,toast:!0,showConfirmButton:!1})}}},"63b7":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var c=a("83fc"),n=a("2b20");class s{async getAllTasksByListId(t){const e=await n["a"].get(`api/lists/${t}/tasks`);c["a"].tasks[t]=e.data}async createTask(t){await n["a"].post("api/tasks",t),this.getAllTasksByListId(t.listId)}async deleteTask(t,e){await n["a"].delete("api/tasks/"+t),this.getAllTasksByListId(e)}async editTask(t,e){await n["a"].put("api/tasks/"+t.id,t),this.getAllTasksByListId(t.listId),this.getAllTasksByListId(e)}setTask(t){c["a"].tempTask=t}}const o=new s},"7d8d":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var c=a("83fc"),n=a("2b20");class s{async getAllCommentsByTaskId(t){const e=await n["a"].get(`api/tasks/${t}/comments`);c["a"].comments[t]=e.data}async createComment(t){await n["a"].post("api/comments",t),this.getAllCommentsByTaskId(t.taskId)}async deleteComment(t,e){await n["a"].delete("api/comments/"+t),this.getAllCommentsByTaskId(e)}}const o=new s},"7fcd":function(t,e,a){"use strict";a("7fd6")},"7fd6":function(t,e,a){},"83fc":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var c=a("7a23");const n=Object(c["u"])({user:{},account:{},boards:[],activeBoard:null,lists:[],tasks:{},comments:{},tempTask:{}})},"8c89":function(t,e,a){"use strict";a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return n})),a.d(e,"e",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return r}));const c=window.location.origin.includes("localhost"),n=c?"http://localhost:3000":"",s="taylor-oppedyk.us.auth0.com",o="buglog.com",r="6oZkS3dm4Ro6nyIDJnwMtdRYsxTzDMpS"},"8ff2":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-66cfe87a");Object(c["t"])("data-v-66cfe87a");const s={class:"modal-dialog",role:"document"},o={class:"modal-content"},r={class:"modal-header "},i={class:"modal-title",id:"exampleModalLabel"},d=Object(c["g"])("button",{type:"button",class:"close close-modal","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{class:"close-x","aria-hidden":"true"},"×")],-1),l={class:"modal-body"},u={class:"modal-footer"};Object(c["r"])();const b=n((t,e,a,n,b,f)=>{const m=Object(c["x"])("Comment");return Object(c["q"])(),Object(c["d"])("div",{class:"modal",id:"taskModal"+a.task.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[Object(c["g"])("div",s,[Object(c["g"])("div",o,[Object(c["g"])("div",r,[Object(c["g"])("h5",i,Object(c["z"])(a.task.title),1),d]),Object(c["g"])("div",l,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(n.state.comments,t=>(Object(c["q"])(),Object(c["d"])(m,{key:t.id,comment:t},null,8,["comment"]))),128))]),Object(c["g"])("div",u,[Object(c["g"])("form",{onSubmit:e[2]||(e[2]=Object(c["E"])((...t)=>n.createComment&&n.createComment(...t),["prevent"]))},[Object(c["D"])(Object(c["g"])("input",{type:"text",class:"form-control",placeholder:"Add Comment...","onUpdate:modelValue":e[1]||(e[1]=t=>n.state.newComment.title=t)},null,512),[[c["B"],n.state.newComment.title]])],32)])])])],8,["id"])});var f=a("83fc"),m=a("63b7"),p=a("5d40"),g=a("7d8d"),O={name:"TaskModal",props:{task:{type:Object,required:!0}},setup(t){const e=Object(c["u"])({loading:!0,newComment:{},account:Object(c["b"])(()=>f["a"].account),user:Object(c["b"])(()=>f["a"].user),comments:Object(c["b"])(()=>f["a"].comments[t.task.id])});return Object(c["o"])(async()=>{try{await g["a"].getAllCommentsByTaskId(t.task.id),e.loading=!1}catch(a){p["a"].toast("Error: "+a,"error")}}),{state:e,async createComment(){try{e.newComment.taskId=t.task.id,await g["a"].createComment(e.newComment),p["a"].toast("Succesfully Created","success"),e.newComment={}}catch(a){p["a"].toast("Error: "+a,"error")}},async deleteTask(t,e){try{await m["a"].deleteTask(t,e),p["a"].toast("Succesfully Deleted","success")}catch(a){p["a"].toast("Error: "+a,"error")}}}},components:{}};a("b7f1");O.render=b,O.__scopeId="data-v-66cfe87a";e["default"]=O},"91ea":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-2eb3cd51");Object(c["t"])("data-v-2eb3cd51");const s={class:"Board col-md-4 my-3 "},o={class:"m-3 py-5 board-container rounded"},r={class:"d-flex flex-column board-content"},i=Object(c["g"])("i",{class:"fas fa-bold fa-3x board-icon p-2"},null,-1),d={class:"board-title"};Object(c["r"])();const l=n((t,e,a,l,u,b)=>{const f=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("div",s,[Object(c["g"])("div",o,[Object(c["g"])("i",{class:"fas fa-times delete-icon",onClick:e[1]||(e[1]=t=>l.deleteBoard(a.board.id))}),Object(c["g"])(f,{class:"link-no-style",to:{name:"BoardDetailsPage",params:{id:a.board.id}}},{default:n(()=>[Object(c["g"])("div",r,[i,Object(c["g"])("h2",d,Object(c["z"])(a.board.title),1)])]),_:1},8,["to"])])])});var u=a("83fc"),b=a("5d40"),f=a("37c0"),m={name:"Board",props:{board:{type:Object,required:!0}},setup(){const t=Object(c["u"])({account:Object(c["b"])(()=>u["a"].account),user:Object(c["b"])(()=>u["a"].user),boards:Object(c["b"])(()=>u["a"].boards)});return{state:t,async deleteBoard(t){try{await f["a"].deleteBoard(t),b["a"].toast("Succesfully Deleted","success")}catch(e){b["a"].toast("Error: "+e,"error")}}}},components:{}};a("7fcd");m.render=l,m.__scopeId="data-v-2eb3cd51";e["default"]=m},"95b9":function(t,e,a){},"9d8d":function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n=a("da23"),s=a.n(n);const o=Object(c["F"])("data-v-63447428");Object(c["t"])("data-v-63447428");const r={class:"navbar navbar-expand-lg navbar-dark"},i=Object(c["g"])("div",{class:"d-flex flex-column align-items-center"},[Object(c["g"])("img",{alt:"logo",src:s.a,height:"45"})],-1),d=Object(c["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},u={class:"navbar-nav mr-auto"},b={class:"nav-item"},f=Object(c["f"])(" Home "),m={class:"nav-item"},p=Object(c["f"])(" Boards "),g={key:0},O={key:1,class:"navbar-text"},j={key:1,class:"dropdown mobile-button"},v={class:"mx-3 text-white"},k=Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(c["r"])();const y=o((t,e,a,n,s,y)=>{const h=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("nav",r,[Object(c["g"])(h,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:o(()=>[i]),_:1}),d,Object(c["g"])("div",l,[Object(c["g"])("ul",u,[Object(c["g"])("li",b,[Object(c["g"])(h,{to:{name:"Home"},class:"nav-link"},{default:o(()=>[f]),_:1})]),Object(c["g"])("li",m,[Object(c["g"])(h,{to:{name:"BoardsPage"},class:"nav-link"},{default:o(()=>[p]),_:1})])]),n.user.isAuthenticated?(Object(c["q"])(),Object(c["d"])("span",O,[n.user.isAuthenticated?(Object(c["q"])(),Object(c["d"])("div",j,[Object(c["g"])("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>n.state.dropOpen=!n.state.dropOpen)},[Object(c["g"])("img",{src:n.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(c["g"])("span",v,Object(c["z"])(n.user.name),1)]),Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:n.state.dropOpen}],onClick:e[4]||(e[4]=t=>n.state.dropOpen=!1)},[Object(c["g"])(h,{to:{name:"Account"}},{default:o(()=>[k]),_:1}),Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>n.logout&&n.logout(...t))}," logout ")],2)])):(Object(c["q"])(),Object(c["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>n.login&&n.login(...t))}," Login "))])):(Object(c["q"])(),Object(c["d"])("span",g))])])});var h=a("b012"),w=a("83fc"),T={name:"Navbar",setup(){const t=Object(c["u"])({dropOpen:!1});return{state:t,user:Object(c["b"])(()=>w["a"].user),async login(){h["a"].loginWithPopup()},async logout(){await h["a"].logout({returnTo:window.location.origin})}}}};a("122d");T.render=y,T.__scopeId="data-v-63447428";e["default"]=T},a2f9:function(t,e,a){var c={"./AccountPage.vue":["e542","chunk-74a9f4f0"],"./BoardDetailsPage.vue":["d0b5","chunk-5676f814"],"./BoardsPage.vue":["1474","chunk-4ea628f2"],"./HomePage.vue":["78a7","chunk-f3d0f5cc"]};function n(t){if(!a.o(c,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=c[t],n=e[0];return a.e(e[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(c)},n.id="a2f9",t.exports=n},abe5:function(t,e,a){},ad84:function(t,e,a){"use strict";a("39c7")},b012:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var c=a("8816"),n=a("83fc"),s=a("8c89"),o=a("41cb");function r(t,e){if(s["d"])console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e)}}const i={log(){r("log",arguments)},error(){r("error",arguments)},warn(){r("warn",arguments)},assert(){r("assert",arguments)},trace(){r("trace",arguments)}};var d=a("2b20");class l{async getAccount(){try{const t=await d["a"].get("/account");n["a"].account=t.data}catch(t){i.error("HAVE YOU STARTED YOUR SERVER YET???",t)}}}const u=new l,b=Object(c["b"])({domain:s["e"],clientId:s["c"],audience:s["a"],onRedirectCallback:t=>{o["a"].push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});b.on(b.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(d["b"])(b.bearer),n["a"].user=b.user,await u.getAccount()}))},b7f1:function(t,e,a){"use strict";a("95b9")},ccc2:function(t,e,a){var c={"./Board.vue":"91ea","./Comment.vue":"4ea3","./List.vue":"2e90","./Task.vue":"43fe","./TaskModal.vue":"8ff2","./navbar.vue":"9d8d"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}n.keys=function(){return Object.keys(c)},n.resolve=s,t.exports=n,n.id="ccc2"},da23:function(t,e,a){t.exports=a.p+"img/logo-dark.18b5eb50.jpg"},dfc7:function(t,e,a){},fe63:function(t,e,a){}});