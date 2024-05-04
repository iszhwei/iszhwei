import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as e,c as o,d as s,e as n,f as t,b as c,a as B}from"./app-m9pC5KT-.js";const r="/assets/rotate1-XCoYPXeq.jpg",i={},y={href:"https://leetcode.cn/problems/rotate-list/",target:"_blank",rel:"noopener noreferrer"},d=s("p",null,[n("给你一个链表的头节点 "),s("code",null,"head"),n(" ，旋转链表，将链表每个节点向右移动 "),s("code",null,"k"),n(" 个位置。")],-1),F=B('<figure><img src="'+r+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>思路</strong>：</p><ol><li>计算链表长度</li><li>找到 k取模链表长度 (k % length) 开始的子链表</li><li>拼接子链表和原链表(被截取后的部分)</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * struct ListNode {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *     int val;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *     ListNode *next;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *     ListNode() : val(0), next(nullptr) {}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *     ListNode(int x) : val(x), next(nullptr) {}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *     ListNode(int x, ListNode *next) : val(x), next(next) {}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * };</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">rotateRight</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">head</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">k</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(k </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> head </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">head</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> len </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> tail </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(p1) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">len;</span></span>
<span class="line"><span style="color:#ABB2BF;">            tail </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> p1;</span></span>
<span class="line"><span style="color:#ABB2BF;">            p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">p1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        k </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> k </span><span style="color:#56B6C2;">%</span><span style="color:#ABB2BF;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> pre </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">findFromEnd</span><span style="color:#ABB2BF;">(head, k </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">//倒数第K+1</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">tail</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">        head </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">pre</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">pre</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">findFromEnd</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">head</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">N</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(N</span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fast</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(fast) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fast</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">slow</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> slow;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function A(v,D){const l=p("ExternalLinkIcon");return e(),o("div",null,[s("p",null,[s("a",y,[n("Leetcode 61. 旋转链表"),t(l)])]),d,c("more"),F])}const m=a(i,[["render",A],["__file","leetcode61.旋转链表.html.vue"]]);export{m as default};
