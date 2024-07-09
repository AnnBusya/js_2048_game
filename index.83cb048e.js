!function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var e=new(function(){var e,s;function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,a),this.INITIAL_STATE=t,this.state=JSON.parse(JSON.stringify(this.INITIAL_STATE)),this.score=0,this.status="idle",this.buttonStart=document.querySelector(".start"),this.initializeGame()}return e=[{key:"initializeGame",value:function(){var t=this;this.buttonStart.addEventListener("click",function(){"idle"===t.status||"lose"===t.status||"win"===t.status?t.start():t.restart(),t.updateUI(),document.querySelector(".message-win").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden")})}},{key:"moveLeft",value:function(){for(var t=this,e=!1,s=0;s<4;s++)!function(s){for(var a=t.state[s].filter(function(t){return 0!==t}),i=0;i<a.length-1;i++)a[i]===a[i+1]&&(a[i]*=2,t.score+=a[i],a.splice(i+1,1),e=!0);for(;a.length<4;)a.push(0);t.state[s].join("")!==a.join("")&&(e=!0),t.state[s]=a}(s);e&&(this.addNewTile(),this.updateUI(),this.checkGameStatus())}},{key:"moveRight",value:function(){this.state=this.state.map(function(t){return t.reverse()}),this.moveLeft(),this.state=this.state.map(function(t){return t.reverse()})}},{key:"moveUp",value:function(){this.state=this.transpose(this.state),this.moveLeft(),this.state=this.transpose(this.state)}},{key:"moveDown",value:function(){this.state=this.transpose(this.state).map(function(t){return t.reverse()}),this.moveLeft(),this.state=this.state.map(function(t){return t.reverse()}),this.state=this.transpose(this.state)}},{key:"transpose",value:function(t){return t[0].map(function(e,s){return t.map(function(t){return t[s]})})}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status="playing",this.score=0,this.addNewTile(),this.addNewTile(),this.updateUI(),document.querySelector(".message-start").classList.add("hidden"),this.buttonStart.textContent="Restart",this.buttonStart.classList.replace("start","restart")}},{key:"restart",value:function(){this.state=JSON.parse(JSON.stringify(this.INITIAL_STATE)),this.score=0,this.status="idle",this.updateUI(),document.querySelector(".message-start").classList.remove("hidden"),this.buttonStart.textContent="Start",this.buttonStart.classList.replace("restart","start")}},{key:"addNewTile",value:function(){for(var t=[],e=0;e<4;e++)for(var s=0;s<4;s++)0===this.state[e][s]&&t.push({row:e,col:s});if(0!==t.length){var a=t[Math.floor(Math.random()*t.length)],i=a.row,r=a.col;this.state[i][r]=.9>Math.random()?2:4}}},{key:"updateUI",value:function(){var t=this;document.querySelectorAll(".field-cell").forEach(function(e,s){var a=t.state[Math.floor(s/4)][s%4];e.textContent=a>0?a:"",e.className="field-cell ".concat(a>0?"field-cell--".concat(a):"")}),document.querySelector(".game-score").textContent=this.score,"win"===this.status?document.querySelector(".message-win").classList.remove("hidden"):"lose"===this.status&&document.querySelector(".message-lose").classList.remove("hidden")}},{key:"checkGameStatus",value:function(){this.checkWin()?this.status="win":this.checkLose()&&(this.status="lose")}},{key:"checkWin",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(2048===this.state[t][e])return!0;return!1}},{key:"checkLose",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(0===this.state[t][e]||t>0&&this.state[t][e]===this.state[t-1][e]||t<3&&this.state[t][e]===this.state[t+1][e]||e>0&&this.state[t][e]===this.state[t][e-1]||e<3&&this.state[t][e]===this.state[t][e+1])return!1;return!0}}],t(a.prototype,e),s&&t(a,s),a}());document.addEventListener("keydown",function(t){if("playing"===e.getStatus()){switch(t.key){case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown()}e.updateUI(),"win"===e.getStatus()?document.querySelector(".message-win").classList.remove("hidden"):"lose"===e.getStatus()&&document.querySelector(".message-lose").classList.remove("hidden")}}),e.updateUI()}();
//# sourceMappingURL=index.83cb048e.js.map
