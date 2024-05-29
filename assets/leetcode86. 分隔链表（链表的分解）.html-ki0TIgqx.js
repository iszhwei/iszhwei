import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as B,d as n,e as s,f as a,b as r,w as i,a as e}from"./app-2pke9_a8.js";const y={},d={href:"https://leetcode.cn/problems/partition-list/",target:"_blank",rel:"noopener noreferrer"},F=n("strong",null,"链表的分解",-1),A=e("<p>给你一个链表的头节点 <code>head</code> 和一个特定值 <code>x</code> ，请你对链表进行分隔，使得所有 <strong>小于</strong> <code>x</code> 的节点都出现在 <strong>大于或等于</strong> <code>x</code> 的节点之前。</p>",1),v=e(`<p>你应当 <strong>保留</strong> 两个分区中每个节点的初始相对位置。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">解这道题两个关键点：</span></span>
<span class="line"><span style="color:#D19A66;">1.</span><span style="color:#ABB2BF;"> 先分成两个链表，一个链表存放小，另一个存放大的（创建链表用虚拟头结点）</span></span>
<span class="line"><span style="color:#D19A66;">2.</span><span style="color:#ABB2BF;"> 原链表结点给新链表后记得断开与原链表的结点的连接（next </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> nullptr） </span><span style="color:#56B6C2;">!!!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
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
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">partition</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">head</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">dummyHead1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ListNode</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">    //小于x</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">dummyHead2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ListNode</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">    //大于或等于x</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> dummyHead1;</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">p2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> dummyHead2;</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">pcur </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(pcur) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">pcur</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">val</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> x) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">p1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> pcur;</span></span>
<span class="line"><span style="color:#ABB2BF;">                p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">p1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">p2</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> pcur;</span></span>
<span class="line"><span style="color:#ABB2BF;">                p2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">p2</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            //如果你不断开原链表中的每个节点的 next 指针</span></span>
<span class="line"><span style="color:#ABB2BF;">            ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> temp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> pcur;</span></span>
<span class="line"><span style="color:#ABB2BF;">            pcur </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">pcur</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">temp</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">p1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">dummyHead2</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        head </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">dummyHead1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> dummyHead1;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> dummyHead2;</span></span>
<span class="line"><span style="color:#ABB2BF;">        dummyHead1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        dummyHead2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u=n("code",null,"next",-1),m=n("strong",null,"把原链表的节点接到新链表上，而不是 new 新节点来组成新链表的话",-1);function D(C,b){const p=l("ExternalLinkIcon"),o=l("font");return c(),B("div",null,[n("p",null,[n("a",d,[s("leetcode 86. 分隔链表（"),F,s("）"),a(p)])]),A,r("more"),v,n("blockquote",null,[n("p",null,[s("如果你不断开原链表中的每个节点的 "),u,s(" 指针，结果链表中会包含一个环。总的来说，"),n("u",null,[s("如果我们需要"),m,s("，"),a(o,{color:"red"},{default:i(()=>[s("那么断开节点和原链表之间的链接可能是必要的")]),_:1})]),s("。那其实我们可以养成一个好习惯，但凡遇到这种情况，就把原链表的节点断开，这样就不会出错了。")])])])}const x=t(y,[["render",D],["__file","leetcode86. 分隔链表（链表的分解）.html.vue"]]);export{x as default};
