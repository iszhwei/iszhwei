import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as l,b as o,d as s,e,a as p}from"./app-2pke9_a8.js";const c="/assets/1681304077461-c2f9d32f-49d2-4aaf-9f81-1c3da4cd2450-DhhaZpiV.png",t={},r=s("h1",{id:"bool",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bool","aria-hidden":"true"},"#"),e(" bool")],-1),i=s("figure",null,[s("img",{src:c,alt:"1681304077461-c2f9d32f-49d2-4aaf-9f81-1c3da4cd2450",tabindex:"0",loading:"lazy"}),s("figcaption",null,"1681304077461-c2f9d32f-49d2-4aaf-9f81-1c3da4cd2450")],-1),B=p(`<p>在C++中，还添加了一种基本类型，就是bool类型，用来表示true和false。true和false是字面值，可以通过转换变为int类型，true为1，false为0.</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> x </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> y </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">// 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><u>任何<strong>数字</strong>或<strong>指针值</strong>都可以隐式转换为bool值。</u><u>任何非零值都将转换为true，而零值转换为false.</u></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> b1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> b2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> b3 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> b4 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> b5 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> b6 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> x </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个bool类型的数据占据的内存空间大小为1.</p>`,5);function d(y,D){return n(),l("div",null,[r,i,o("more"),B])}const A=a(t,[["render",d],["__file","bool.html.vue"]]);export{A as default};
