import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c as p,d as s,e as c,f as r,b as t,a as n}from"./app-2pke9_a8.js";const B={},i={href:"https://leetcode.cn/problems/longest-consecutive-sequence/",target:"_blank",rel:"noopener noreferrer"},y=n(`<p>给定一个未排序的整数数组 <code>nums</code> ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。</p><p>请你设计并实现时间复杂度为 <code>O(n)</code> 的算法解决此问题。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">输入：nums = [100,4,200,1,3,2]</span></span>
<span class="line"><span style="color:#abb2bf;">输出：4</span></span>
<span class="line"><span style="color:#abb2bf;">解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">输入：nums </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">7</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">输出：</span><span style="color:#D19A66;">9</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=n(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">longestConsecutive</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        unordered_set</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> set;</span><span style="color:#7F848E;font-style:italic;">    //由示例2可知，结果是去重的</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> n : nums) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">insert</span><span style="color:#ABB2BF;">(n);  </span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> longestLen </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> num : set) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">count</span><span style="color:#ABB2BF;">(num </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">)) {</span><span style="color:#7F848E;font-style:italic;"> //如果前面不是连续的，则重新开始</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> currentLen </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> cur </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> num;</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">count</span><span style="color:#ABB2BF;">(cur </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                    currentLen</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    cur</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                } </span></span>
<span class="line"><span style="color:#ABB2BF;">                longestLen </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">max</span><span style="color:#ABB2BF;">(longestLen, currentLen);</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> longestLen;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function A(F,v){const a=e("ExternalLinkIcon");return o(),p("div",null,[s("p",null,[s("a",i,[c("128. 最长连续序列"),r(a)])]),y,t("more"),d])}const m=l(B,[["render",A],["__file","128. 最长连续序列.html.vue"]]);export{m as default};
