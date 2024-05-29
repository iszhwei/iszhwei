import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,b as l,d as p,a as o}from"./app-2pke9_a8.js";const e={},c=p("p",null,"希尔排序是插入排序(gap = 1)的升级版，插入排序的gap = n/2，n/4，……",-1),B=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#ifndef</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_SHELL_SORT_H_</span></span>
<span class="line"><span style="color:#C678DD;">#define</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_SHELL_SORT_H_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;vector&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::vector;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::swap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">shellSortCore</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">gap</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">pos</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">shellSort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#endif</span><span style="color:#7F848E;font-style:italic;"> //_SHELLSORT_H_</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;shellSort.h&quot;</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">shellSort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> n </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> gap </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> n</span><span style="color:#56B6C2;">/</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">; gap </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; gap </span><span style="color:#C678DD;">/=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> gap; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> n; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i) {</span><span style="color:#7F848E;font-style:italic;">//待插入元素的下标,这里是插入排序	</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> x </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[i];</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> j;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(j </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> gap; j </span><span style="color:#C678DD;">&gt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[j] </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> x; j </span><span style="color:#C678DD;">-=</span><span style="color:#ABB2BF;"> gap) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[j </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> gap] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[j];</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[j </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> gap] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> x;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>希尔排序可以说是插⼊排序的⼀种变种。⽆论是<u>插⼊排序</u>还是<u>冒泡排序</u>，如果数组的最⼤值刚好是在第⼀位，要将它挪到正确的位置就需要 n - 1 次移动。也就是说，<strong>原数组的⼀个元素如果距离它正确的位置很远的话，则需要与相邻元素交换很多次才能到达正确的位置</strong>，这样是相对⽐较花时间了</p>`,3);function t(r,i){return n(),a("div",null,[c,l("more"),B])}const F=s(e,[["render",t],["__file","希尔排序.html.vue"]]);export{F as default};
