import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as t,c as r,d as n,e as s,f as l,w as p,a as e}from"./app-2pke9_a8.js";const B={},i=n("h1",{id:"可变模板参数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可变模板参数","aria-hidden":"true"},"#"),s(" 可变模板参数")],-1),y=n("strong",null,"C++11",-1),d=n("strong",null,"、",-1),A=e(`<h2 id="模板参数包" tabindex="-1"><a class="header-anchor" href="#模板参数包" aria-hidden="true">#</a> 模板参数包</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;typename… </span><span style="color:#C678DD;">Args</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">tuple</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">//tuple是元组的意思，其模板参数就是模板参数包</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Args标识符的左侧使用了<code>省略号</code>,在C++11中<u><code>Args</code>被称为“模板参数包</u>”,表示可以接受任意多个参数作为模板参数,<u>编译器将多个模板参数打包成“单个”的模板参数包.</u></p><h2 id="函数参数包" tabindex="-1"><a class="header-anchor" href="#函数参数包" aria-hidden="true">#</a> 函数参数包</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;typename…</span><span style="color:#C678DD;">T</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">f</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">… </span><span style="color:#E06C75;font-style:italic;">args</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">//args就是函数参数包</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),F=n("code",null,"args",-1),v=n("u",null,"没有",-1),u=n("u",null,[s("当使用参数包时，省略号位于参数名称的右侧，表示立即展开该参数，这个过程也被称为"),n("strong",null,"解包")],-1),b=e(`<h2 id="可变模板参数的优势" tabindex="-1"><a class="header-anchor" href="#可变模板参数的优势" aria-hidden="true">#</a> 可变模板参数的优势</h2><ol><li><strong>参数个数</strong>，那么对于模板来说，在<u>模板推导的时候，就已经知道参数的个数了</u>，也就是说在编译的时候就确定了，这样编译器就存在可能去优化代码</li><li><strong>参数类型</strong>，<u>推导的时候也已经确定了</u>，模板函数就可以知道参数类型了。</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;string&gt;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::string;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;">... </span><span style="color:#E5C07B;">Args</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Args</span><span style="color:#ABB2BF;">... </span><span style="color:#E06C75;font-style:italic;">args</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;sizeof...(Agrs) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> sizeof...(Args) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;sizeof...(agrs) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> sizeof...(args) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">display</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;">... </span><span style="color:#E5C07B;">Args</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">display</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">t</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">Args</span><span style="color:#ABB2BF;">... </span><span style="color:#E06C75;font-style:italic;">args</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> t </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">display</span><span style="color:#ABB2BF;">(args...);</span><span style="color:#7F848E;font-style:italic;">//当... 位于args右边的时候叫做解包</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    string s1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;hello&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, s1);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.2</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;b&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;hello&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">test2</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    string s1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;hello&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">display</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">display</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">display</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, s1);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">display</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.2</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;b&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;hello&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">t</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> t;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;">... </span><span style="color:#E5C07B;">Args</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">t</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">Args</span><span style="color:#ABB2BF;">... </span><span style="color:#E06C75;font-style:italic;">args</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> t </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(args...);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">test3</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) = &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">7</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">9</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">test2</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">test3</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">$./a.out </span></span>
<span class="line"><span style="color:#abb2bf;">sizeof...(Agrs) = 0</span></span>
<span class="line"><span style="color:#abb2bf;">sizeof...(agrs) = 0</span></span>
<span class="line"><span style="color:#abb2bf;">sizeof...(Agrs) = 2</span></span>
<span class="line"><span style="color:#abb2bf;">sizeof...(agrs) = 2</span></span>
<span class="line"><span style="color:#abb2bf;">sizeof...(Agrs) = 3</span></span>
<span class="line"><span style="color:#abb2bf;">sizeof...(agrs) = 3</span></span>
<span class="line"><span style="color:#abb2bf;">sizeof...(Agrs) = 4</span></span>
<span class="line"><span style="color:#abb2bf;">sizeof...(agrs) = 4</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">1 2.2 </span></span>
<span class="line"><span style="color:#abb2bf;">a 1 hello </span></span>
<span class="line"><span style="color:#abb2bf;">1 2.2 b hello </span></span>
<span class="line"><span style="color:#abb2bf;">sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) = 55</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(D,C){const a=c("font");return t(),r("div",null,[i,n("p",null,[s("是"),l(a,{color:"red"},{default:p(()=>[y]),_:1}),s("新增的最强大的特性之一，它对参数进行了高度的泛化，它能表示**"),l(a,{color:"green"},{default:p(()=>[s("0到任意个数")]),_:1}),d,l(a,{color:"green"},{default:p(()=>[s("任意类型")]),_:1}),s("**的参数。")]),A,n("p",null,[F,s(" 被称为函数参数包,表示函数可以接受多个任意类型的参数. 在C++11标准中，要求**"),l(a,{color:"green"},{default:p(()=>[s("函数参数包")]),_:1}),s("必须唯一，且是函数的最后一个参数**; "),l(a,{color:"green"},{default:p(()=>[s("模板参数包")]),_:1}),s("则"),v,s("。 "),u,s("。")]),b])}const E=o(B,[["render",m],["__file","可变模板参数.html.vue"]]);export{E as default};
