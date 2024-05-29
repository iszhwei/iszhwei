import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as r,f as a,w as p,d as n,b as B,e as s,a as o}from"./app-2pke9_a8.js";const i="/assets/1681304023862-96f676ac-4269-4aa5-bf35-9cf222f1743c-QEYUGZ-F.png",y="/assets/image-20240131231008878-C-WvQPng.png",d={},F=n("h1",{id:"默认参数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认参数","aria-hidden":"true"},"#"),s(" 默认参数")],-1),A=n("figure",null,[n("img",{src:i,alt:"1681304023862-96f676ac-4269-4aa5-bf35-9cf222f1743c",tabindex:"0",loading:"lazy"}),n("figcaption",null,"1681304023862-96f676ac-4269-4aa5-bf35-9cf222f1743c")],-1),D=o(`<h2 id="默认参数的目的" tabindex="-1"><a class="header-anchor" href="#默认参数的目的" aria-hidden="true">#</a> 默认参数的目的</h2><p>C++可以给函数定义默认参数值。通常，调用函数时，要为函数的每个参数给定对应的实参</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func1</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func1</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;x = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> x </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;y = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> y </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无论何时调用func1函数，都必须要给其传递两个参数。但C++可以给参数定义默认值，如果将func1函数参数中的x定义成默认值0， y定义成默认值0，只需简单的将函数声明改成</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func1</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样调用时，<u>若不给参数传递实参，则func1函数会按指定的默认值进行工作</u>。允许函数设置默认参数值，<u>是为了让编程简单，让编译器做更多的检查错误工作。</u></p><h3 id="调用效率问题-汇编" tabindex="-1"><a class="header-anchor" href="#调用效率问题-汇编" aria-hidden="true">#</a> 调用效率问题（汇编）</h3>`,7),u=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> a </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> b </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(a, b);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  /*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  mov eax, dword ptr[ebp-8]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  push eax</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  mov ecx, dword ptr[ebp-4]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  push ecx</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  call sum</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(a); </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  /*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  push 14H // 这里直接push省去mov</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  mov ecx, dword ptr[ebp-4]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  push ecx</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  call sum</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  */</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  //如果实参是立即数，则效率和默认参数是一样的</span></span>
<span class="line"><span style="color:#ABB2BF;">  ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">30</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;">);	</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  /*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  push 28H	//40</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  push 1EH	//30</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  call sum</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> a </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> b;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当调用次数大的时候开销差别还是很可观</li></ul><h2 id="默认参数的声明" tabindex="-1"><a class="header-anchor" href="#默认参数的声明" aria-hidden="true">#</a> 默认参数的声明</h2>`,3),v=n("u",null,"若在定义时而不是在声明时置默认值，那么函数定义一定要在函数的调用之前。因为声明时已经给编译器一个该函数的向导，所以只在定义时设默认值时，编译器只有检查到定义时才知道函数使用了默认值",-1),C=n("strong",null,"所以我们通常是将默认值的设置放在声明中而不是定义中。",-1),b=o('<figure><img src="'+y+`" alt="默认值只能给一次" tabindex="0" loading="lazy"><figcaption>默认值只能给一次</figcaption></figure><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*error</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">int sum(int a = 10, int b);	//error,默认值顺序从右往左赋值</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">int sum(int a, int b = 20);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//下面的这种情况编译正常，原因：执行2的时已经知道了1给b赋了默认值（声明可以多次）</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">	//1	</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">	//2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认参数的顺序规定" tabindex="-1"><a class="header-anchor" href="#默认参数的顺序规定" aria-hidden="true">#</a> 默认参数的顺序规定</h2><p>如果一个函数中有多个默认参数，则<u>形参分布中，默认参数应<strong>从右至左</strong>逐渐定义，因为涉及到<strong>参数的入栈出栈</strong></u>。当调用函数时，只能向左匹配参数。如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func2</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">c</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">d</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">//error</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func2</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">c</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">d</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">//ok</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>若给某一参数设置了默认值，那么在参数表中其后所有的参数都必须也设置默认值，否则，由于函数调用时可不列出已设置默认值的参数，编译器无法判断在调用时是否有参数遗漏。</p><h2 id="默认参数与函数重载" tabindex="-1"><a class="header-anchor" href="#默认参数与函数重载" aria-hidden="true">#</a> 默认参数与函数重载</h2><p>默认参数可将一系列简单的重载函数<u>合成为一个</u>。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func3</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func3</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func3</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//上面三个函数可以合成下面这一个</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func3</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一组重载函数（可能带有默认参数）都允许相同实参个数的调用，将会引起调用的<strong>二义性</strong>。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func4</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func4</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func4</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),m=n("strong",null,"函数重载时，要谨慎使用默认参数",-1),f=o(`<h2 id="课堂代码" tabindex="-1"><a class="header-anchor" href="#课堂代码" aria-hidden="true">#</a> 课堂代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#C678DD;">#if</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(){ </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; }</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">) { </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> x </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; }</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;">) { </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> x </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> y </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; }</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">z</span><span style="color:#ABB2BF;">) { </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> x </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> y </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> z; }</span></span>
<span class="line"><span style="color:#C678DD;">#endif</span></span>
<span class="line"><span style="color:#C678DD;">#if</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//二义性</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> x </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> y;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">#endif</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//默认参数要从右往左进行连续的赋初值</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">z</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> x </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> y </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> z;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">argc</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">**</span><span style="color:#E06C75;font-style:italic;">argv</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> a </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, b </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, c </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;add(a, b, c) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(a, b, c) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;add(a, b) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(a, b) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span><span style="color:#7F848E;font-style:italic;">//二义性</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;add(a) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(a) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;add() = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function E(h,g){const l=t("font");return c(),r("div",null,[F,A,a(l,{color:"red"},{default:p(()=>[s("**形参默认参数 注意：**")]),_:1}),n("ol",null,[n("li",null,[a(l,{color:"green"},{default:p(()=>[s("**给默认值的时候，从右往左**")]),_:1})]),n("li",null,[a(l,{color:"green"},{default:p(()=>[s("**调用效率：若两个函数都传入变量，会提高效率，形参带默认值的函数会少一次mov指令；若传入数值，则效率不变。**")]),_:1})]),n("li",null,[a(l,{color:"green"},{default:p(()=>[s("**定义时可以给形参默认值，声明时也可以给形参默认值**")]),_:1})]),n("li",null,[a(l,{color:"green"},{default:p(()=>[s("**形参给默认值的时候，不管是定义处给，还是声明处给，形参默认值只出现一次**")]),_:1})])]),B("more"),D,n("p",null,[n("strong",null,[s("若两个函数都传入"),a(l,{color:"green"},{default:p(()=>[s("变量")]),_:1}),s("，会提高效率，形参带默认值的函数"),a(l,{color:"red"},{default:p(()=>[s("会少一次mov指令")]),_:1}),s("；若传入"),a(l,{color:"green"},{default:p(()=>[s("数值")]),_:1}),s("，则效率不变。")])]),u,n("p",null,[n("strong",null,[a(l,{color:"cornflowerblue"},{default:p(()=>[s("一般默认参数在函数声明中提供")]),_:1})]),s("。"),n("strong",null,[a(l,{color:"green"},{default:p(()=>[s("函数定义处和声明处都可以给默认值")]),_:1}),s("，"),a(l,{color:"red"},{default:p(()=>[s("默认值只能给一次（不管在声明还是定义中）")]),_:1})]),s("。"),v,s("。若先调用后定义，在调用时编译器并不知道哪个参数设了默认值。"),C]),b,n("p",null,[s("所以在"),a(l,{color:"red"},{default:p(()=>[m]),_:1}),s("。")]),f])}const k=e(d,[["render",E],["__file","默认参数.html.vue"]]);export{k as default};
