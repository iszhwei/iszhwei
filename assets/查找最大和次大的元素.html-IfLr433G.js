import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as l,a}from"./app-m9pC5KT-.js";const p={},o=a(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;climits&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">//INT_MIN</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::vector;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">find1and2big</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">big1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">big2</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">     big1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> INT_MIN;</span></span>
<span class="line"><span style="color:#ABB2BF;">     big2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> INT_MIN;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> num : nums) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(num </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> big1) {</span></span>
<span class="line"><span style="color:#ABB2BF;">             big2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> big1;</span></span>
<span class="line"><span style="color:#ABB2BF;">             big1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> num;</span></span>
<span class="line"><span style="color:#ABB2BF;">         }</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(num </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> big2 </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> num </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> big1) {</span></span>
<span class="line"><span style="color:#ABB2BF;">             big2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> num;</span></span>
<span class="line"><span style="color:#ABB2BF;">         }</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(big2 </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> INT_MIN) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;数组中所有元素都相同或数组大小小于2，无法找到次大值&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">     vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> vec </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">13</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">34</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i : vec) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39; &#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">     cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> big1, big2;</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#61AFEF;">find1and2big</span><span style="color:#ABB2BF;">(vec, big1, big2);</span></span>
<span class="line"><span style="color:#ABB2BF;">     cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> big1 </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39; &#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> big2 </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;"> }                                                                            </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function B(c,t){return n(),l("div",null,e)}const y=s(p,[["render",B],["__file","查找最大和次大的元素.html.vue"]]);export{y as default};
