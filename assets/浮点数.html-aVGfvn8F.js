import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as p,b as r,d as s,e as n,f as e,w as l,a as i}from"./app-mYdPlPhZ.js";const d="/assets/image-20231230164803584-sLfM5epn.png",u="/assets/image-20231230175132311-mRqbgscq.png",g="/assets/image-20231230174224741-_5pDR8lx.png",_="/assets/image-20231230175233568-kTyCkLGW.png",f="/assets/image-20231230175541124-vlE3LlIo.png",m={},h=s("h1",{id:"浮点数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#浮点数","aria-hidden":"true"},"#"),n(" 浮点数")],-1),y=s("blockquote",null,[s("p",null,"使用浮点数直接使用 double 即可")],-1),B=s("h2",{id:"浮点数字面值表示方法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#浮点数字面值表示方法","aria-hidden":"true"},"#"),n(" 浮点数字面值表示方法")],-1),b=s("ol",null,[s("li",null,"小数形式：0.123"),s("li",null,[n("指数形式：3e-3（为3 * 10"),s("sup",null,"-3"),n(" ，即0.003）")])],-1),v=i(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//#define PI 3.14</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//#define PI 0.314E1</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//#define PI 0.314e1</span></span>
<span class="line"><span style="color:#C678DD;">#define</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">PI</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">31.4</span><span style="color:#E06C75;">e</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//#define PI 31.4E0.5 e后面只能写整数</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">printf</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;PI = </span><span style="color:#D19A66;">%f</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">,PI);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浮点数的存储方式" tabindex="-1"><a class="header-anchor" href="#浮点数的存储方式" aria-hidden="true">#</a> 浮点数的存储方式</h2><figure><img src="`+d+'" alt="image-20231230164803584" tabindex="0" loading="lazy"><figcaption>image-20231230164803584</figcaption></figure><p>浮点型数据是按照<strong>指数形式存储</strong>的。 系统把一个<u>浮点型数据分成小数部分和指数部分</u>， 分别存放。指数部分采用规范化的指数形式， 指数也分正负 。</p><p>float存储为例（4byte = 32bit）：</p>',5),F=s("li",null,[s("strong",null,"1 位的符号位"),n("， 是 0 就代表正数， 1 就代表负数")],-1),x=s("strong",null,"8位阶码",-1),A=s("li",null,[s("strong",null,"23位的小数部分"),n("， 是通过 2"),s("sup",null,"-1"),n("+2"),s("sup",null,"-2"),n("+2"),s("sup",null,"-3"),n("等去近似一个小数的")],-1),E=s("p",null,[s("strong",null,"double的阶码为11位")],-1),C={id:"浮点数的精度丢失问题",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#浮点数的精度丢失问题","aria-hidden":"true"},"#",-1),k=i('<figure><img src="'+u+'" alt="image-20231230175132311" tabindex="0" loading="lazy"><figcaption>image-20231230175132311</figcaption></figure><figure><img src="'+g+'" alt="image-20231230174224741" tabindex="0" loading="lazy"><figcaption>image-20231230174224741</figcaption></figure><p>**加数 与 加数相差很大 **，会发生精度丢失</p><figure><img src="'+_+'" alt="image-20231230175233568" tabindex="0" loading="lazy"><figcaption>image-20231230175233568</figcaption></figure><p>我们赋给 a 的值为 1.23456789e10， 加20 后， 应该得到的值为 1.234567892e10， 但是却是 1.23456788e10， 变的更小了， 我们把这种现象称为精度丢失， 原因就是 float 能够表示的有效数字为 7 位， 最多只保证 1.234567e10 的正确性， 如果要达到正确， 我们需要把 a 和 b 均改为 double 类型。</p><figure><img src="'+f+'" alt="image-20231230175541124" tabindex="0" loading="lazy"><figcaption>image-20231230175541124</figcaption></figure>',6);function I(P,q){const a=t("font");return c(),p("div",null,[h,y,r("more"),B,b,s("p",null,[n("注意："),e(a,{color:"red"},{default:l(()=>[n("字母 e(或 E)之前必须有数字， 且 e 后面的指数必须为整数")]),_:1})]),v,s("ul",null,[F,s("li",null,[x,n("，"),e(a,{color:"red"},{default:l(()=>[n("阶码的机器数-127=阶码的真实值")]),_:1})]),A]),E,s("h2",C,[D,n(),e(a,{color:"red"},{default:l(()=>[n("浮点数的精度丢失问题")]),_:1})]),k])}const V=o(m,[["render",I],["__file","浮点数.html.vue"]]);export{V as default};
