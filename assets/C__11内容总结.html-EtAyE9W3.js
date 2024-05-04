import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c,d as s,e as n,f as r,w as o,a as p}from"./app-m9pC5KT-.js";const d="/assets/9bd0262acd3f4a33ba8e08ffef517929-8KOUSg9H.png",t="/assets/0a081a65278042b2bca45f6d6ffd69a5-gB8dxMrP.png",B={},u=s("h1",{id:"c-11-内容总结",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#c-11-内容总结","aria-hidden":"true"},"#"),n(" C++11 内容总结")],-1),v=s("h2",{id:"_1、关键字和语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1、关键字和语法","aria-hidden":"true"},"#"),n(" 1、关键字和语法")],-1),b=s("strong",null,"nullptr：",-1),m=s("u",null,"NULL，是一个宏定义",-1),h=p(`<p><strong>右值引用：</strong> 非常强大；</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">auto</span><span style="color:#ABB2BF;">：可以根据右值，推导出右值的类型，然后左边变量的类型也就已知了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">：给指针专用（能够和整数进行区别） </span></span>
<span class="line"><span style="color:#ABB2BF;">以前用的NULL是宏定义，在代码上无法区分整数和指针地址 </span><span style="color:#E06C75;">#define</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">NULL</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#ABB2BF;">（都是4字节，但是毕竟逻辑意义不一样，要区分的！）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> each：可以遍历数组（底层是指针遍历），容器（底层是迭代器遍历）</span></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(Type val : container) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> 底层就是通过指针或者迭代器来实现的</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout</span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">val</span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">右值引用：move移动语义函数和forward类型完美转发函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">模板的一个新特性：typename... A  表示可变参（类型参数）</span></span>
<span class="line"><span style="color:#ABB2BF;">表示参数可能会很多 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、绑定器和函数对象" tabindex="-1"><a class="header-anchor" href="#_2、绑定器和函数对象" aria-hidden="true">#</a> 2、绑定器和函数对象</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">function：函数对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">bind：绑定器  </span></span>
<span class="line"><span style="color:#ABB2BF;">是C的bind1st和bind2nd</span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">二元函数对象 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;">》 一元函数对象的升级</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">lambda表达式</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、智能指针" tabindex="-1"><a class="header-anchor" href="#_3、智能指针" aria-hidden="true">#</a> 3、智能指针</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">shared_ptr和weak_ptr</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4、容器" tabindex="-1"><a class="header-anchor" href="#_4、容器" aria-hidden="true">#</a> 4、容器</h2><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>array底层：</strong></p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>Ty</strong>：类型参数，底层元素的类型</li><li><strong>_Size</strong>：数组的大小，固定的</li></ul><h2 id="_5、c-语言级别支持的多线程编程" tabindex="-1"><a class="header-anchor" href="#_5、c-语言级别支持的多线程编程" aria-hidden="true">#</a> 5、C++语言级别支持的多线程编程</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">createThread（Windows）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">pthread_create（linux）</span></span>
<span class="line"><span style="color:#ABB2BF;">clone（linux）</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function y(_,f){const a=l("font");return i(),c("div",null,[u,v,s("p",null,[b,n(" 之前的"),m,n("，代码上是"),r(a,{color:"red"},{default:o(()=>[n("无法区分整数和地址")]),_:1}),n("的")]),h])}const x=e(B,[["render",y],["__file","C__11内容总结.html.vue"]]);export{x as default};
