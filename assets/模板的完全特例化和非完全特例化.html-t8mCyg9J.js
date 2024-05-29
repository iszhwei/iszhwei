import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as B,d as n,e as s,f as a,w as p,a as o}from"./app-2pke9_a8.js";const r={},i=n("h1",{id:"模板的完全特例化和非完全特例化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#模板的完全特例化和非完全特例化","aria-hidden":"true"},"#"),s(" 模板的完全特例化和非完全特例化")],-1),y=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">compare</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;template compare&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> a </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> b;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">compare</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">compare</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;aaa&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;bbb&quot;</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;"> //T const char*</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=o(`<p><strong>需要多加一个模板的完全特例化：</strong>（<strong>完全特例化：</strong> 类型完全是已知的）</p><h2 id="模板的完全特化" tabindex="-1"><a class="header-anchor" href="#模板的完全特化" aria-hidden="true">#</a> 模板的完全特化</h2><p>template后面的&lt;&gt;什么参数都没有，表示参数都是已知的。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">compare</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">&gt;(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> a, </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> b) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;compare&lt;const char*&gt;&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">strcmp</span><span style="color:#ABB2BF;">(a, b) </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板的部分特例化" tabindex="-1"><a class="header-anchor" href="#模板的部分特例化" aria-hidden="true">#</a> 模板的部分特例化</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;cstdio&gt;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">namespace</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Vector</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">Vector</span><span style="color:#ABB2BF;">() { cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;call Vector template init&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl; }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//下面这个是对char*类型提供的完全特例化版本  #1</span></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;&gt;</span><span style="color:#7F848E;font-style:italic;">//特例化的语法</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">char</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">Vector</span><span style="color:#ABB2BF;">() { cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;call Vector&lt;char*&gt; init&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl; }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//下面这个是对指针类a型提供的部分特例化版本  #2</span></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Ty</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Ty</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">Vector</span><span style="color:#ABB2BF;">() { cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;call Vector&lt;Ty*&gt; init&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl; }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//指针函数指针（有返回值，有两个形参变量）提供的部分特例化</span></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">R</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">R</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">)(</span><span style="color:#E5C07B;">A1</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">A2</span><span style="color:#ABB2BF;">)&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">Vector</span><span style="color:#ABB2BF;">() { cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;call Vector&lt;R(*)(A1, A2)&gt; init&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl; }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//针对函数（有一个返回值，有两个形参变量）类型提供的部分特例化</span></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">R</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">R</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">A1</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">A2</span><span style="color:#ABB2BF;">)&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">Vector</span><span style="color:#ABB2BF;">() { cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;call Vector&lt;R(A1, A2)&gt; init&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl; }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;">) { </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> a </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> b; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	Vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> vec1;</span></span>
<span class="line"><span style="color:#ABB2BF;">	Vector</span><span style="color:#C678DD;">&lt;char</span><span style="color:#56B6C2;">*</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> vec2;</span></span>
<span class="line"><span style="color:#ABB2BF;">	Vector</span><span style="color:#C678DD;">&lt;int</span><span style="color:#56B6C2;">*</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> vec3;</span></span>
<span class="line"><span style="color:#ABB2BF;">	Vector</span><span style="color:#C678DD;">&lt;int</span><span style="color:#ABB2BF;">(*)(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> vec4;</span></span>
<span class="line"><span style="color:#ABB2BF;">	Vector</span><span style="color:#C678DD;">&lt;int</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> vec5;</span><span style="color:#7F848E;font-style:italic;">//function</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//注意区分一下函数类型和函数指针类型</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//用函数指针定义的变量本身就是一个指针</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">typedef</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">(*</span><span style="color:#E06C75;">PFUNC1</span><span style="color:#ABB2BF;">)(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">		//PFUNC1是函数指针类型</span></span>
<span class="line"><span style="color:#ABB2BF;">	PFUNC1 pfunc1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> sum;</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">pfunc1</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">typedef</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">PFUNC2</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">		//PFUNC2是函数类型</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//函数类型在定义的时候，需要将指针*加上</span></span>
<span class="line"><span style="color:#ABB2BF;">	PFUNC2</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> pfunc2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> sum;</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">pfunc2)(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板的实参推演" tabindex="-1"><a class="header-anchor" href="#模板的实参推演" aria-hidden="true">#</a> 模板的实参推演</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//T包含了所有的大的类型 返回值，所有形参的类型都取出来</span></span>
<span class="line"><span style="color:#ABB2BF;">tempalte</span><span style="color:#C678DD;">&lt;typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#C678DD;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> typeid(T).</span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;">) { </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> a </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> b;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">func</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">	//int</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">func</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;aaa&quot;</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">	//const char *</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">func</span><span style="color:#ABB2BF;">(sum);</span><span style="color:#7F848E;font-style:italic;">	//T int (*)(int, int) 	int (int, int)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),F=n("strong",null,"我们直接用一个函数指针的模板部分特例化来做：",-1),A=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">R</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A2</span><span style="color:#ABB2BF;">&gt; </span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fun2</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">R</span><span style="color:#ABB2BF;">(*</span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">)(</span><span style="color:#E5C07B;">A1</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">A2</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> typeid(R).</span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span><span style="color:#7F848E;font-style:italic;">	//int</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> typeid(A1).</span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span><span style="color:#7F848E;font-style:italic;">	//int</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> typeid(A2).</span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span><span style="color:#7F848E;font-style:italic;">	//int</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">fun2</span><span style="color:#ABB2BF;">(sum);	</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义一个Test类，里面有一个成员函数sum</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;">) { </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> a </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> b; }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> typeid(T).</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">func</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">Test::sum);</span><span style="color:#7F848E;font-style:italic;"> //int (__thiscall Test::*)(int, int)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到一个指向<strong>成员方法的函数指针类型</strong>。将其参数细分：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">R</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func3</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">R</span><span style="color:#ABB2BF;">(T::</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> a)(A1, A2)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">typeid(R).</span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">endl;</span><span style="color:#7F848E;font-style:italic;">	//int</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">typeid(T).</span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">endl;</span><span style="color:#7F848E;font-style:italic;">	//class Test</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">typeid(A1).</span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">endl;</span><span style="color:#7F848E;font-style:italic;">	//int</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">typeid(A2).</span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">endl;</span><span style="color:#7F848E;font-style:italic;">	//int</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>这几个例子指导我们在写函数模板，类模板时，<u>针对一个具体情况，把他们一个大类型的细分类型，定义相应的参数，接收大类型的所有细分类型</u>，使用的就是<strong>模板部分偏特化</strong>。</p>`,7);function D(v,u){const l=t("font");return c(),B("div",null,[i,n("blockquote",null,[n("p",null,[n("strong",null,[s("有完全特例化，就选择对应的"),a(l,{color:"green"},{default:p(()=>[s("完全特例化")]),_:1}),s("，有部分特例化，就匹配"),a(l,{color:"green"},{default:p(()=>[s("部分特例化")]),_:1}),s("，没有的话，就"),a(l,{color:"green"},{default:p(()=>[s("原模板实例化")]),_:1})])])]),y,n("p",null,[s("能运用在int类型上，字符串比较就不行了。 "),n("strong",null,[s("此时的实例化compare代码就不行了，"),a(l,{color:"red"},{default:p(()=>[s("字符串比较的是地址，并不是字典的顺序")]),_:1}),s("。")])]),d,n("p",null,[s("我们"),a(l,{color:"green"},{default:p(()=>[s("想将返回值和所有形参的类型都取出来")]),_:1}),s("，"),F]),A])}const b=e(r,[["render",D],["__file","模板的完全特例化和非完全特例化.html.vue"]]);export{b as default};
