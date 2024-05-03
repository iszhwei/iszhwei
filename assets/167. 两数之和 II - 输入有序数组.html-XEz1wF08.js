import{_ as B}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as t,c,d as s,e as a,f as p,b as r,w as y,a as n}from"./app-mYdPlPhZ.js";const i={},A={href:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/",target:"_blank",rel:"noopener noreferrer"},F=n("<p>给你一个下标从 <strong>1</strong> 开始的整数数组 <code>numbers</code> ，该数组已按 <strong>非递减顺序排列</strong> ，请你从数组中找出满足相加之和等于目标数 <code>target</code> 的两个数。如果设这两个数分别是 <code>numbers[index1]</code> 和 <code>numbers[index2]</code> ，则 <code>1 &lt;= index1 &lt; index2 &lt;= numbers.length</code> 。</p><p>以长度为 2 的整数数组 <code>[index1, index2]</code> 的形式返回这两个整数的下标 <code>index1</code> 和 <code>index2</code>。</p><p>你可以假设每个输入 <strong>只对应唯一的答案</strong> ，而且你 <strong>不可以</strong> 重复使用相同的元素。</p><p>你所设计的解决方案必须只使用常量级的额外空间。</p>",4),d=n(`<h2 id="方法一-哈希" tabindex="-1"><a class="header-anchor" href="#方法一-哈希" aria-hidden="true">#</a> 方法一：哈希</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">twoSum</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">numbers</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        unordered_map</span><span style="color:#C678DD;">&lt;int</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int&gt;</span><span style="color:#ABB2BF;"> hashMap;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">(); </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">hashMap</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">count</span><span style="color:#ABB2BF;">(target </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[i])) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span><span style="color:#E5C07B;">hashMap</span><span style="color:#ABB2BF;">[target </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[i]] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,i </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">hashMap</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[i]] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),D=s("strong",null,"无序数组",-1),C=s("li",null,"时间复杂度O(n) 空间复杂度O(n)",-1),v=n(`<h2 id="方法二-二分查找" tabindex="-1"><a class="header-anchor" href="#方法二-二分查找" aria-hidden="true">#</a> 方法二：二分查找</h2><ul><li>对有序数组 可以使用二分查找法 查找target - nums.at(i)</li><li>时间复杂度O(nlogn) 空间复杂度O(1)</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">twoSum</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">numbers</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">(); </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">binarySearch</span><span style="color:#ABB2BF;">(numbers, i </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> , target </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[i]);</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(ret </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {i </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, ret </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">binarySearch</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">left</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">right</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">   //左闭右闭</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> right </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> middle </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> left </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> (right </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> left) </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(target </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[middle]) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> middle </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(target </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[middle]) {</span><span style="color:#7F848E;font-style:italic;">//判断相等时一定要小心，不要写成赋值</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> middle;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">                right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> middle </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法三-双指针法" tabindex="-1"><a class="header-anchor" href="#方法三-双指针法" aria-hidden="true">#</a> 方法三 ：双指针法</h2><ul><li>时间复杂度：O(n)，其中 n 是数组的长度。两个指针移动的总次数最多为 n 次。</li><li>空间复杂度：O(1)。</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">twoSum</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">numbers</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[left] </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> target </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[left] </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[left] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[right] </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> target) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">right;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[left] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[right] </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> target) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">left;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[left] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">numbers</span><span style="color:#ABB2BF;">[right] </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> target) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {left </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, right </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function u(m,b){const o=l("ExternalLinkIcon"),e=l("font");return t(),c("div",null,[s("p",null,[s("a",A,[a("167. 两数之和 II - 输入有序数组"),p(o)])]),F,r("more"),d,s("ul",null,[s("li",null,[a("一般用于"),p(e,{color:"red"},{default:y(()=>[D]),_:1})]),C]),v])}const E=B(i,[["render",u],["__file","167. 两数之和 II - 输入有序数组.html.vue"]]);export{E as default};
