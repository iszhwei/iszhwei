import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c as e,d as s,e as n,f as t,b as B,a as c}from"./app--8O2lHwG.js";const r="/assets/3c4c1f8e623b45eea674667e6ebd72d9-mhj7iGCK.jpeg",i={},y={href:"https://leetcode.cn/problems/spiral-matrix-ii/",target:"_blank",rel:"noopener noreferrer"},A=s("p",null,"**题目描述：**给定正整数n，将1到n²按顺时针顺序填入n×n的正方形矩阵，返回该矩阵。",-1),F=s("figure",null,[s("img",{src:r,alt:"img",tabindex:"0",loading:"lazy"}),s("figcaption",null,"img")],-1),D=s("ul",null,[s("li",null,[s("strong",null,"循环不变量"),n("：考虑每一圈的四条边按"),s("strong",null,"左闭右开"),n("进行处理")])],-1),d=c(`<p><strong>思路：</strong></p><ul><li>每一圈从(startx, starty)位置开始 <ul><li>上：行号不变，列号从 starty（闭）到 starty + n - offset（开）</li><li>右：行号从 startx（闭）到 startx + n - offset（开），列号不变</li><li>下：行号不变，列号从 starty + n - offset（闭）到 starty（开）</li><li>左：行号从 startx + n - offset（闭）到 startx（开）</li><li>更新startx、starty、offset（每次+2）</li></ul></li><li>n为奇数，单独处理中心位置</li></ul><p>![img](LeetCode 59.螺旋矩阵Ⅱ.assets/d8bc6e4874094de4849792b5a05963c0.png)</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;&gt; </span><span style="color:#61AFEF;">generateMatrix</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> offSet </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> count </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> startx </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> starty </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> loop </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        vector</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">vector</span><span style="color:#C678DD;">&lt;int&gt;&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">result</span><span style="color:#ABB2BF;">(n,</span><span style="color:#61AFEF;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;(n,</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">));</span><span style="color:#7F848E;font-style:italic;">	//定义一个返回值</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(loop </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> n</span><span style="color:#56B6C2;">/</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">//根据规律找需要循环的次数</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> startx;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> j </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> starty;  </span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(; j </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> n </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> offSet; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">j) {</span><span style="color:#7F848E;font-style:italic;">//前闭后开</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;">[i][j] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> count</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> n </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> offSet; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;">[i][j] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> count</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(; j </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> starty ; </span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">j) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;">[i][j] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> count</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(; i </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> startx; </span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">i) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;">[i][j] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> count</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">offSet;</span><span style="color:#7F848E;font-style:italic;">	//n - offSet为x末端</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">startx;</span><span style="color:#7F848E;font-style:italic;">	//x的前端</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">starty;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">loop;</span><span style="color:#7F848E;font-style:italic;">	//循环次数</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(n </span><span style="color:#56B6C2;">%</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">//若为奇数，会剩最后一个</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;">[n</span><span style="color:#56B6C2;">/</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">][n</span><span style="color:#56B6C2;">/</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> count;</span><span style="color:#7F848E;font-style:italic;">//最后一个元素</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> result;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(u,C){const l=o("ExternalLinkIcon");return p(),e("div",null,[s("p",null,[s("a",y,[n("LeetCode 59.螺旋矩阵Ⅱ"),t(l)])]),A,F,D,B("more"),d])}const f=a(i,[["render",v],["__file","LeetCode 59.螺旋矩阵Ⅱ.html.vue"]]);export{f as default};
