import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as e,c as o,d as s,e as n,f as t,b as c,a as B}from"./app-2pke9_a8.js";const r={},i={href:"https://leetcode.cn/problems/remove-element/",target:"_blank",rel:"noopener noreferrer"},y=s("p",null,[n("**题目描述：**数组nums中"),s("u",null,"原地"),n("移除值为val的元素，返回新数组长度")],-1),d=s("p",null,"双指针：一层查找，一层覆盖",-1),F=B(`<p>双指针：一层查找，一层覆盖</p><blockquote><ul><li><p>通过这道题大致了解<code>erase()</code>的大致实现</p></li><li><p>由这道题可知<code>erase()</code>函数的时间复杂度应是<code>O(n)</code></p></li></ul></blockquote><h2 id="同向双指针法" tabindex="-1"><a class="header-anchor" href="#同向双指针法" aria-hidden="true">#</a> 同向双指针法</h2><p>​ slow表示新数组下标；</p><p>​ 用fast扫描原数组，寻找<strong>用于新数组的值</strong>，找到后直接赋给slow位置即可；</p><p>​ 最终slow即为新数组元素个数。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">removeElement</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">val</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(; fast </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">(); </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">fast) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[fast] </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> val) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[slow</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[fast];</span><span style="color:#7F848E;font-style:italic;">//注意赋值后slow也要往前走一步</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> slow;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相向双指针法" tabindex="-1"><a class="header-anchor" href="#相向双指针法" aria-hidden="true">#</a> 相向双指针法</h2><p>若题目描述，要确保了移动最少元素、可以改变元素的相对顺序，可以相向的双指针</p><ul><li>left表示新数组下标；</li><li>left遇到用于新数组的值（非val)直接跳过，遇到val停下；</li><li>right遇到val跳过，遇到用于新数组的值（非val)停下；</li><li>若left &lt; right，则将right位置元素赋给left位置，并更新left、right；</li><li>两指针相遇，表示还有最后一个数需处理，故while（left &lt;= right);</li><li>最终left即为新数组元素个数。</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">removeElement</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">val</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> right</span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[left] </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> val) {</span><span style="color:#7F848E;font-style:italic;">//注意left&lt;=right确保合法</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">left;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> right</span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[right] </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> val) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">right;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[left</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[right</span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">];</span><span style="color:#7F848E;font-style:italic;">//1.数组是覆盖不是swap；2.left\\right要跳到下一个位置</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> left;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function A(D,v){const l=p("ExternalLinkIcon");return e(),o("div",null,[s("p",null,[s("a",i,[n("LeetCode 27. 移除元素"),t(l)])]),y,d,c("more"),F])}const C=a(r,[["render",A],["__file","LeetCode 27. 移除元素.html.vue"]]);export{C as default};
