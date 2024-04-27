import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as a,b as p,d as s,a as o}from"./app--8O2lHwG.js";const e={},c=s("ul",null,[s("li",null,"外循环，依次选择前N-1个位置，存放最小的数据"),s("li",null,"内循环，需要指定待比较数据的位置")],-1),t=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//selectSort.h</span></span>
<span class="line"><span style="color:#C678DD;">#ifndef</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_SELECT_SORT_H_</span></span>
<span class="line"><span style="color:#C678DD;">#define</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_SELECT_SORT_H_</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;vector&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::vector;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::swap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">selectSort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">#endif</span><span style="color:#7F848E;font-style:italic;">	//_SELECT_SOTR_H_</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//selectSort.cc</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;selectSort.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">selectSort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">size_t</span><span style="color:#ABB2BF;"> len </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> len </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i) {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">size_t</span><span style="color:#ABB2BF;"> minPos </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> j </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; j </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> len; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">j) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">			//if(nums[j] &lt; nums[j-1]) {	//error</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[j] </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[minPos]) {</span></span>
<span class="line"><span style="color:#ABB2BF;">				minPos </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> j;</span></span>
<span class="line"><span style="color:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(i </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> minPos) {</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#61AFEF;">swap</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[i], </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[minPos]);</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function r(B,i){return l(),a("div",null,[c,p("more"),t])}const F=n(e,[["render",r],["__file","选择排序.html.vue"]]);export{F as default};
