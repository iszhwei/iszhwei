import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as l,c as p,b as o,f as e,w as c,a as t,e as r}from"./app-2pke9_a8.js";const B={},i=t(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//insertSort.h</span></span>
<span class="line"><span style="color:#C678DD;">#ifndef</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_INSERT_SORT_H_</span></span>
<span class="line"><span style="color:#C678DD;">#define</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_INSERT_SORT_H_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;vector&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::vector;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::swap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">insertSort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#endif</span><span style="color:#7F848E;font-style:italic;"> //_INSERT_SORT_H_</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;insertSort.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">insertSort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">(); </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i) {  </span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> x </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[i];  </span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> j;  </span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(j </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; j </span><span style="color:#C678DD;">&gt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[j] </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> x; </span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">j) {  </span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[j </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[j];  </span></span>
<span class="line"><span style="color:#ABB2BF;">         }  </span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[j </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> x;  </span></span>
<span class="line"><span style="color:#ABB2BF;">    }  </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度O(n<sup>2</sup>)</p>`,3);function y(d,F){const s=a("font");return l(),p("div",null,[o("more"),i,e(s,{color:"green"},{default:c(()=>[r("**适用于趋于有序的数组的排序**")]),_:1})])}const D=n(B,[["render",y],["__file","插入排序.html.vue"]]);export{D as default};
