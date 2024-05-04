import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as t,c as B,d as n,e as s,f as a,w as p,a as o}from"./app-m9pC5KT-.js";const r={},i=n("h1",{id:"重载-隐藏-重写-覆盖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#重载-隐藏-重写-覆盖","aria-hidden":"true"},"#"),s(" 重载，隐藏，重写（覆盖）")],-1),y=n("h2",{id:"_1-重载-overload",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-重载-overload","aria-hidden":"true"},"#"),s(" （1）重载（overload）")],-1),d=n("p",null,"[函数重载 | 张威的编程学习笔记 (gitee.io)](https://iszhwei.gitee.io/ccpp/02 c__基础/函数重载.html)",-1),F=n("li",null,[s("在"),n("strong",null,"同⼀作用域当中"),s("的同名成员函数才存在重载关系")],-1),A=n("li",null,[n("strong",null,"函数名相同"),s("，"),n("strong",null,"参数列表不同"),s("（类型、数目、顺序）")],-1),u=n("strong",null,"返回值不同不能区分函数",-1),v=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">double</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">double</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重写-覆盖-override" tabindex="-1"><a class="header-anchor" href="#重写-覆盖-override" aria-hidden="true">#</a> 重写（覆盖）（override）</h2>`,2),D=n("li",null,[s("重写指的是在"),n("strong",null,"派⽣类"),s("中覆盖"),n("strong",null,"基类"),s("中的"),n("strong",null,"同名函数"),s("，重写就是"),n("strong",null,"重写函数体"),s("，")],-1),b=n("li",null,[n("strong",null,"参数列表"),s("和"),n("strong",null,"返回值"),s("与基类虚函数相同")],-1),C=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//⽗类</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">){}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//⼦类</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span><span style="color:#ABB2BF;"> : </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //重写,⼀般加override可以确保是重写⽗类的函数</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">override</span><span style="color:#ABB2BF;">{}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重载与重写的区别" tabindex="-1"><a class="header-anchor" href="#重载与重写的区别" aria-hidden="true">#</a> 重载与重写的区别：</h3>`,2),m=n("li",null,"重写是⽗类和⼦类之间的垂直关系；重载是不同函数之间的⽔平关系",-1),f=n("li",null,"重写要求参数列表和返回值相同；重载则要求参数列表不同，返回值不要求",-1),E=n("h2",{id:"_3-隐藏-hide",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-隐藏-hide","aria-hidden":"true"},"#"),s(" （3）隐藏（hide）")],-1),_=n("p",null,[s("隐藏是指的把**"),n("mark",null,"作用域隐藏"),s("**了，因此可以加作用域进行访问；优先找的是派生类自己作用域的成员，没有才去基类里面去找")],-1),h=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//⽗类</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;A中的fun函数&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//⼦类</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span><span style="color:#ABB2BF;"> : </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //两个函数参数相同，但是基类函数不是虚函数。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //隐藏⽗类的fun函数</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;B中的fun函数&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">    B b;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">b</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;"> //调⽤的是B中的fun函数</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">b</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">A</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;"> //调⽤A中fun函数</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//⽗类</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;A中的fun函数&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//⼦类</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span><span style="color:#ABB2BF;"> : </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //两个函数参数不同，⽆论基类函数是不是虚函数，都会被隐藏。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //隐藏⽗类的fun函数</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">char*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">     cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;A中的fun函数&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">   }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">    B b;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">b</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;"> //报错，调⽤的是B中的fun函数，参数类型不对</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">b</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">A</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;"> //调⽤A中fun函数</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>b.A::fun(2); //调⽤A中fun函数</code></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// ⽗类</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;"> // 虚函数</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;This is A fun &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> a </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }  </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;This is A add &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> a </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> b </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// ⼦类</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">override</span><span style="color:#ABB2BF;"> {</span><span style="color:#7F848E;font-style:italic;">  // 覆盖</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;this is B fun &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> a </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">   // 隐藏</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;This is B add &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> a </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> a </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 基类指针指向派⽣类对象时，基类指针可以直接调用到派⽣类的覆盖函数，也可以通过 :: 调⽤到基类被覆盖</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 的虚函数；⽽基类指针只能调⽤基类的被隐藏函数，⽆法识别派⽣类中的隐藏函数。</span></span>
<span class="line"><span style="color:#ABB2BF;">    A </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">p </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">B</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">      // 调⽤⼦类 fun 覆盖函数</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">A</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">fun</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">   // 调⽤⽗类 fun</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // p-&gt;add(1);      // 错误，识别的是 A 类中的 add 函数，参数不匹配</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // p-&gt;B::add(1);   // 错误，⽆法识别⼦类 add 函数</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function x(k,q){const l=c("font");return t(),B("div",null,[i,y,d,n("ol",null,[F,A,n("li",null,[u,s("。"),n("strong",null,[a(l,{color:"red"},{default:p(()=>[s("重载和函数成员是否是虚函数⽆关")]),_:1})]),s("。")])]),v,n("ol",null,[D,n("li",null,[s("要求基类函数**"),a(l,{color:"red"},{default:p(()=>[s("必须是虚函数")]),_:1}),s("**")]),b]),C,n("ol",null,[m,f,n("li",null,[n("strong",null,[s("重写关系中，调⽤⽅法根据"),a(l,{color:"red"},{default:p(()=>[s("对象类型")]),_:1}),s("决定；重载根据调⽤"),a(l,{color:"red"},{default:p(()=>[s("时实参表与形参表的对应关系")]),_:1}),s("来选择函数体")])])]),E,n("p",null,[s("隐藏：某些情况下，"),n("strong",null,[s("派⽣类中的函数屏蔽了基类中的"),a(l,{color:"green"},{default:p(()=>[s("同名函数")]),_:1})]),s("。")]),_,n("ol",null,[n("li",null,[n("p",null,[n("strong",null,[s("两个函数参数"),a(l,{color:"red"},{default:p(()=>[s("相同")]),_:1})]),s("，但是**"),a(l,{color:"green"},{default:p(()=>[s("基类函数不是虚函数")]),_:1}),s("**。")]),n("ul",null,[n("li",null,[n("strong",null,[s("和重写的区别在于"),a(l,{color:"red"},{default:p(()=>[s("基类函数是否是虚函数")]),_:1})]),s("。")])]),h]),n("li",null,[n("p",null,[n("strong",null,[s("两个函数参数"),a(l,{color:"red"},{default:p(()=>[s("不同")]),_:1})]),s("，"),n("strong",null,[a(l,{color:"green"},{default:p(()=>[s("⽆论基类函数是不是虚函数，都会被隐藏")]),_:1})]),s("。")]),n("ul",null,[n("li",null,[n("strong",null,[s("和重载的区别在于"),a(l,{color:"red"},{default:p(()=>[s("两个函数不在同⼀个类中")]),_:1}),s("。")])])]),g,n("p",null,[n("strong",null,[a(l,{color:"red"},{default:p(()=>[s("基类指针指向派⽣类对象时")]),_:1}),s("，基类指针可以直接调用到派⽣类的"),a(l,{color:"green"},{default:p(()=>[s("重写（覆盖）函数")]),_:1}),s("，也可以通过 :: 调⽤到基类被覆盖的虚函数；⽽"),a(l,{color:"red"},{default:p(()=>[s("基类指针只能调⽤基类的被隐藏函数，⽆法识别派⽣类中的隐藏函数。")]),_:1})])])])])])}const T=e(r,[["render",x],["__file","重载，隐藏，重写（覆盖）.html.vue"]]);export{T as default};
