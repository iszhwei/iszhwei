import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as t,c,d as s,e as n,f as l,w as e,a as o}from"./app-m9pC5KT-.js";const i="/assets/image-20240423173644044-eph7rUrI.png",d={},B=o('<h1 id="分析这段代码构造函数和析构函数的调用顺序" tabindex="-1"><a class="header-anchor" href="#分析这段代码构造函数和析构函数的调用顺序" aria-hidden="true">#</a> 分析这段代码构造函数和析构函数的调用顺序</h1><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>注意返回临时对象或用临时对象构造对象时，会被编译器优化</li><li>别忘了第六步s的析构</li></ul><p>因此优化一下：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">string</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">s1</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">string</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">s2</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> s1 </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> s2;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">	string s </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(s1, s2);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对于对象的优化" tabindex="-1"><a class="header-anchor" href="#对于对象的优化" aria-hidden="true">#</a> 对于对象的优化：</h2>`,6),u=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">string s;</span></span>
<span class="line"><span style="color:#ABB2BF;">s </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(s1, s2);</span><span style="color:#7F848E;font-style:italic;"> //不要这样写</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function y(_,m){const a=r("font");return t(),c("div",null,[B,s("ol",null,[s("li",null,[s("p",null,[s("strong",null,[n("对象作为参数，传递时按"),l(a,{color:"red"},{default:e(()=>[n("引用传递")]),_:1})])])]),s("li",null,[s("p",null,[s("strong",null,[n("返回对象是"),l(a,{color:"red"},{default:e(()=>[n("直接返回结果")]),_:1}),n("，不要先定义在返回")])])]),s("li",null,[s("p",null,[s("strong",null,[n("接收返回值是对象的函数调用，优先按"),l(a,{color:"red"},{default:e(()=>[n("初始化")]),_:1}),n("方式接收，不要按赋值方式接收")])]),u])])])}const f=p(d,[["render",y],["__file","分析这段代码构造函数和析构函数的调用顺序.html.vue"]]);export{f as default};
