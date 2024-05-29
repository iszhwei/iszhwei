import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as l,b as o,d as s,e,a as p}from"./app-2pke9_a8.js";const t={},c=s("h1",{id:"查找链表中倒数第n个结点",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#查找链表中倒数第n个结点","aria-hidden":"true"},"#"),e(" 查找链表中倒数第N个结点")],-1),B=p(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">findFromEnd</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">list</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> list;</span></span>
<span class="line"><span style="color:#ABB2BF;">	ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> list;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(fast </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> n</span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">	//先走N步</span></span>
<span class="line"><span style="color:#ABB2BF;">		fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fast</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(fast) {</span><span style="color:#7F848E;font-style:italic;">	//当fast为空时 slow刚好指在目标元素上</span></span>
<span class="line"><span style="color:#ABB2BF;">		fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fast</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">slow</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> slow;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(i,y){return a(),l("div",null,[c,o("more"),B])}const A=n(t,[["render",r],["__file","查找链表中倒数第N个结点.html.vue"]]);export{A as default};
