import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as c,c as r,d as n,e as s,f as l,w as B,b as i,a as e}from"./app-2pke9_a8.js";const d={},y={href:"https://leetcode.cn/problems/linked-list-cycle/",target:"_blank",rel:"noopener noreferrer"},F=n("strong",null,"判断链表是否有环",-1),v=e("<p>每当慢指针 <code>slow</code> 前进一步，快指针 <code>fast</code> 就前进两步。如果 <code>fast</code> 最终遇到空指针，说明链表中没有环；如果 <code>fast</code> 最终和 <code>slow</code> 相遇，那肯定是 <code>fast</code> 超过了 <code>slow</code> 一圈（<strong>相对静止</strong>），说明链表中含有环。</p>",1),_=e(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">hasCycle</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">head</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 初始化快慢指针，指向头结点</span></span>
<span class="line"><span style="color:#ABB2BF;">	ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">	ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 快指针到尾部时停止</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(fast </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fast</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // 慢指针走一步，快指针走两步</span></span>
<span class="line"><span style="color:#ABB2BF;">		fast </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fast</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E5C07B;">next</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		slow </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">slow</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // 快慢指针相遇，说明含有环</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(fast </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;">  slow) {</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> ture;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	 // 不包含环</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(A,u){const o=a("ExternalLinkIcon"),p=a("font");return c(),r("div",null,[n("p",null,[n("a",y,[s("leetcode 141. 环形链表 ("),F,s(")"),l(o)])]),n("p",null,[s("判断链表是否包含环属于经典问题了，解决方案也是用"),l(p,{color:"red"},{default:B(()=>[s("快慢指针")]),_:1}),s("：")]),v,i("more"),_])}const b=t(d,[["render",m],["__file","leetcode141.环形链表(判断链表是否有环).html.vue"]]);export{b as default};
