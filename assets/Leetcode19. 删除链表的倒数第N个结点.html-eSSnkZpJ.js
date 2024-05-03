import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as B,d as s,e as n,f as a,b as r,w as i,a as p}from"./app-mYdPlPhZ.js";const y="/assets/image-20240113171317370-MN_bxWR7.png",d={},F={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},A=s("p",null,[n("**题目描述：**给你一个链表，删除链表的倒数第 "),s("code",null,"n"),n(" 个结点，并且返回链表的头结点。")],-1),v=s("p",null,"**关键：**fast首先走n + 1步 ，为什么是n+1呢，因为只有这样同时移动的时候slow才能指向删除节点的上一个节点（方便做删除操作）",-1),m=p('<figure><img src="'+y+`" alt="image-20240113171317370" tabindex="0" loading="lazy"><figcaption>image-20240113171317370</figcaption></figure><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
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
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">removeNthFromEnd</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">head</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(head </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> dummyHead </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ListNode</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, head);</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> dummyHead;</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> dummyHead;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">n;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(n</span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">    //这里不要写成--n</span></span>
<span class="line"><span style="color:#ABB2BF;">            fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fast</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(fast) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fast</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">slow</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> temp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">slow</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">slow</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">slow</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E5C07B;">next</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> temp;</span></span>
<span class="line"><span style="color:#ABB2BF;">        temp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">dummyHead</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> dummyHead;</span></span>
<span class="line"><span style="color:#ABB2BF;">        dummyHead </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> temp;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u=s("code",null,"while()",-1),C=s("code",null,"--n",-1),D=s("code",null,"n--",-1),b=p(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//借用2.6的代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">findFromEnd</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">list</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">		ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> list;</span></span>
<span class="line"><span style="color:#ABB2BF;">		ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> list;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(fast </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> n</span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">	//先走N步</span></span>
<span class="line"><span style="color:#ABB2BF;">			fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fast</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(fast) {</span><span style="color:#7F848E;font-style:italic;">	//当fast为空时 slow刚好指在目标元素上</span></span>
<span class="line"><span style="color:#ABB2BF;">			fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fast</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">			slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">slow</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> slow;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">removeNthFromEnd</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">head</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  		ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> cur </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">findFromEnd</span><span style="color:#ABB2BF;">(head, n </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">	//因为删除元素需要知道前一个元素的位置</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> temp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">cur</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">cur</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">cur</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E5C07B;">next</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> temp;</span></span>
<span class="line"><span style="color:#ABB2BF;">        temp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(f,_){const o=l("ExternalLinkIcon"),e=l("font");return c(),B("div",null,[s("p",null,[s("a",F,[n("Leetcode 19. 删除链表的倒数第 N 个结点"),a(o)])]),A,v,r("more"),m,s("p",null,[s("mark",null,[s("strong",null,[a(e,{color:"red"},{default:i(()=>[n("注意：")]),_:1}),u,n("中"),C,n("和"),D,n("不一样")])])]),b])}const N=t(d,[["render",E],["__file","Leetcode19. 删除链表的倒数第N个结点.html.vue"]]);export{N as default};
