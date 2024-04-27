import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as l,a}from"./app--8O2lHwG.js";const p={},o=a(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;unordered_set&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cin;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::vector;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::unordered_set;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> //查找两个有序数组的公共部分</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> //不去重版本</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">getIntersection</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums2</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">     vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> result;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> p2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(p1 </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> p2 </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums2</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">()) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums1</span><span style="color:#ABB2BF;">[p1] </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums2</span><span style="color:#ABB2BF;">[p2]) {</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push_back</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums1</span><span style="color:#ABB2BF;">[p1]);</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">p1;</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">p2;</span></span>
<span class="line"><span style="color:#ABB2BF;">         }   </span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums1</span><span style="color:#ABB2BF;">[p1] </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums2</span><span style="color:#ABB2BF;">[p2]) {</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">p2;</span></span>
<span class="line"><span style="color:#ABB2BF;">         }   </span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">p1;</span></span>
<span class="line"><span style="color:#ABB2BF;">         }   </span></span>
<span class="line"><span style="color:#ABB2BF;">     }   </span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> result;</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">vec</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i : vec) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39; &#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">     cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">     vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> v1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">9</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">13</span><span style="color:#ABB2BF;"> };</span></span>
<span class="line"><span style="color:#ABB2BF;">     vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> v2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">7</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">7</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">9</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">13</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">13</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">14</span><span style="color:#ABB2BF;"> };</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(v1);</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(v2);</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">     vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getIntersection</span><span style="color:#ABB2BF;">(v1, v2);</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(ret);</span></span>
<span class="line"><span style="color:#ABB2BF;">     vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> ret2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getIntersection2</span><span style="color:#ABB2BF;">(v1, v2);</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(ret2);</span></span>
<span class="line"><span style="color:#ABB2BF;">     vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> ret3 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getIntersection3</span><span style="color:#ABB2BF;">(v1, v2);</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(ret3);</span></span>
<span class="line"><span style="color:#ABB2BF;"> }   </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[leetcode 349. 两个数组的交集（有相同的数字） | 张威的编程学习笔记 (gitee.io)](https://iszhwei.gitee.io/algo/03 哈希算法/349.两个数组的交集.html)</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"> //去重版</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">getIntersection2</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums2</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">     unordered_set</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> result_set;</span></span>
<span class="line"><span style="color:#ABB2BF;">     unordered_set</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">nums_set</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">nums1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> num : nums2) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums_set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(num) </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums_set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">()) {</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#E5C07B;">result_set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">insert</span><span style="color:#ABB2BF;">(num);</span></span>
<span class="line"><span style="color:#ABB2BF;">         }</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;(</span><span style="color:#E5C07B;">result_set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">result_set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"> //因为set比数组占用的空间大，并且set把数值映射到key都要做hash计算，速度也比数组慢</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> //如果数组数值范围可控可以使用数组做hash</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> M </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">   //数值的范围</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">getIntersection3</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums2</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">     unordered_set</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> result_set;</span><span style="color:#7F848E;font-style:italic;">  //给结果去重</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">hashTable</span><span style="color:#ABB2BF;">[M] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> num : nums1) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#E5C07B;">hashTable</span><span style="color:#ABB2BF;">[num] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> num : nums2) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">hashTable</span><span style="color:#ABB2BF;">[num] </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#E5C07B;">result_set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">insert</span><span style="color:#ABB2BF;">(num);</span></span>
<span class="line"><span style="color:#ABB2BF;">         }</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">vector</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">result_set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">result_set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function B(c,t){return n(),l("div",null,e)}const i=s(p,[["render",B],["__file","查找两个数组的公共元素.html.vue"]]);export{i as default};
