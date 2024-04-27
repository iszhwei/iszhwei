import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as B,d as s,e as n,f as a,b as r,w as t,a as i}from"./app--8O2lHwG.js";const y={},A={href:"https://leetcode.cn/problems/sort-array-by-parity/",target:"_blank",rel:"noopener noreferrer"},F=s("p",null,[s("strong",null,"题目描述"),n("：整形数组，把偶数调整到数组的左边，把奇数调整到数组的右边")],-1),d=i(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ajustArray</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> </span><span style="color:#E06C75;font-style:italic;">arr</span><span style="color:#C678DD;">[]</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> </span><span style="color:#E06C75;font-style:italic;">len</span><span style="color:#ABB2BF;">)</span><span style="color:#7F848E;font-style:italic;">   // 整形数组，把偶数调整到数组的左边，把奇数调整到数组的右边</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> len </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">[right] </span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">0x</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">//位操作一定加括号</span></span>
<span class="line"><span style="color:#ABB2BF;">            right</span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">[left] </span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">0x</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            left</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">std::swap</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">[left],</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">[right]);</span></span>
<span class="line"><span style="color:#ABB2BF;">            left</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            right</span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">};  </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">srand</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">time</span><span style="color:#ABB2BF;">(nullptr));</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">; i</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">rand</span><span style="color:#ABB2BF;">()</span><span style="color:#C678DD;">%</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(auto i : arr) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">ajustArray</span><span style="color:#ABB2BF;">(arr, </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(auto i : arr) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),D=s("code",null,"x%2 == 1",-1);function v(u,m){const p=l("ExternalLinkIcon"),o=l("font");return c(),B("div",null,[s("p",null,[s("a",A,[n("Leetcode 905. 按奇偶排序数组"),a(p)])]),F,r("more"),d,s("blockquote",null,[s("p",null,[n("位操作判断奇偶性比 "),D,n("要快，但是"),a(o,{color:"red"},{default:t(()=>[n("一定记得加括号")]),_:1}),n("！！！")])])])}const _=e(y,[["render",v],["__file","905. 按奇偶排序数组.html.vue"]]);export{_ as default};
