import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as B,c as r,d as n,e as s,f as l,b as t,w as i,a as p}from"./app--8O2lHwG.js";const y={},d={href:"https://leetcode.cn/problems/happy-number/",target:"_blank",rel:"noopener noreferrer"},F=p("<p>编写一个算法来判断一个数 <code>n</code> 是不是快乐数。</p><p><strong>「快乐数」</strong> 定义为：</p><ul><li>对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。</li><li>然后重复这个过程直到这个数变为 1，也可能是 <strong>无限循环</strong> 但始终变不到 1。</li><li>如果这个过程 <strong>结果为</strong> 1，那么这个数就是快乐数。</li></ul><p>如果 <code>n</code> 是 <em>快乐数</em> 就返回 <code>true</code> ；不是，则返回 <code>false</code> 。</p>",4),A=n("h2",{id:"分析",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分析","aria-hidden":"true"},"#"),s(" 分析")],-1),u=p(`<p>简单证明： a. <u>经过⼀次变化之后的最⼤值 9^2 * 10 = 810 ( 2^31-1=2147483647 。选⼀个更⼤的最⼤ 9999999999 )，也就是变化的区间在 [1, 810] 之间</u>； b. 根据「鸽巢原理」，⼀个数变化 811 次之后，必然会形成⼀个循环； c. 因此，变化的过程最终会⾛到⼀个圈⾥⾯，因此可以⽤「快慢指针」来解决。</p><h2 id="方法一-快慢指针" tabindex="-1"><a class="header-anchor" href="#方法一-快慢指针" aria-hidden="true">#</a> 方法一：快慢指针</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">isHappy</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> n;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getSum</span><span style="color:#ABB2BF;">(n);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(slow </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> fast) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getSum</span><span style="color:#ABB2BF;">(slow);</span></span>
<span class="line"><span style="color:#ABB2BF;">            fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getSum</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">getSum</span><span style="color:#ABB2BF;">(fast));</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> slow </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getSum</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">num</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">   //获取 数值各个位上的数字的平方和</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> sum </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(num) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> x </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> num </span><span style="color:#56B6C2;">%</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            sum </span><span style="color:#C678DD;">+=</span><span style="color:#ABB2BF;"> x </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> x;</span></span>
<span class="line"><span style="color:#ABB2BF;">            num </span><span style="color:#C678DD;">/=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> sum;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法二-哈希表" tabindex="-1"><a class="header-anchor" href="#方法二-哈希表" aria-hidden="true">#</a> 方法二：哈希表</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">isHappy</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        unordered_set</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> set;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            n </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getSum</span><span style="color:#ABB2BF;">(n);</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(n </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">	//⼀直在 1 中死循环</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">count</span><span style="color:#ABB2BF;">(n)) {</span><span style="color:#7F848E;font-style:italic;">	//在历史的数据中死循环</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">set</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">insert</span><span style="color:#ABB2BF;">(n);</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getSum</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">num</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> sum </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(num) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> x </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> num </span><span style="color:#56B6C2;">%</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            sum </span><span style="color:#C678DD;">+=</span><span style="color:#ABB2BF;"> x </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> x;</span></span>
<span class="line"><span style="color:#ABB2BF;">            num </span><span style="color:#C678DD;">/=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> sum;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(D,m){const o=a("ExternalLinkIcon"),e=a("font");return B(),r("div",null,[n("p",null,[n("a",d,[s("leetcode 202. 快乐数"),l(o)])]),F,t("more"),A,n("p",null,[s("题⽬告诉我们，"),l(e,{color:"red"},{default:i(()=>[s("当我们不断重复 x 操作的时候，计算⼀定会「死循环」")]),_:1}),s("，死的⽅式有两种： ▪ 情况⼀：⼀直在 1 中死循环，即 1 -> 1 -> 1 -> 1...... ▪ 情况⼆：在历史的数据中死循环，但始终变不到 1 由于上述两种情况只会出现⼀种，因此，只要我们能确定循环是在「情况⼀」中进⾏，还是在「情况⼆」中进⾏，就能得到结果。")]),u])}const h=c(y,[["render",v],["__file","202. 快乐数.html.vue"]]);export{h as default};
