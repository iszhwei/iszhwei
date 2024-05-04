import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c,d as a,e as s,f as e,w as l,a as o}from"./app-m9pC5KT-.js";const p="/assets/image-20240418191910652-NXP4lYeY.png",d="/assets/image-20240418192008237-pX6LL2M9.png",u="/assets/image-20240418202216481-FyWnOv32.png",B={},h=o(`<h1 id="哈希索引" tabindex="-1"><a class="header-anchor" href="#哈希索引" aria-hidden="true">#</a> 哈希索引</h1><h2 id="查看索引类型" tabindex="-1"><a class="header-anchor" href="#查看索引类型" aria-hidden="true">#</a> 查看索引类型</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">show indexes </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> student;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="注意mysql5-7-show-create-table-反应的索引类型不准" tabindex="-1"><a class="header-anchor" href="#注意mysql5-7-show-create-table-反应的索引类型不准" aria-hidden="true">#</a> 注意MySQL5.7 show create table 反应的索引类型不准</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">index</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">nameidx</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">on</span><span style="color:#ABB2BF;"> student(</span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">hash</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">show </span><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">table</span><span style="color:#ABB2BF;"> student\\G</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>MySQL5.7 show create 只是显示我们创建索引的时候加的标志，实际上底层到底是不是哈希索引是不准确的</li><li>因为搜索引擎是InnoDB，默认创建的是B+树</li></ul><h2 id="哈希索引-1" tabindex="-1"><a class="header-anchor" href="#哈希索引-1" aria-hidden="true">#</a> 哈希索引</h2>',9),y=o(`<p>而平衡树的增删改查的时间复杂度是O ( logn )，此外B+树索引是把磁盘上的存储的索引文件加载到内存上构建的数据结构。</p><h3 id="看起来哈希表比b-树好-那为什么myisam和innodb存储引擎用的是b-树索引" tabindex="-1"><a class="header-anchor" href="#看起来哈希表比b-树好-那为什么myisam和innodb存储引擎用的是b-树索引" aria-hidden="true">#</a> 看起来哈希表比B+树好，那为什么MyISAM和InnoDB存储引擎用的是B+树索引？</h3><p>选择哪种数据结构构建索引，我们主要看：</p><ol><li>搜索的效率要高</li><li>磁盘IO花费要少</li></ol><h3 id="创建哈希索引" tabindex="-1"><a class="header-anchor" href="#创建哈希索引" aria-hidden="true">#</a> 创建哈希索引</h3><p>如果这个文件使用的是memory基于内存的存储引擎，然后我们创建的索引就是哈希索引，底层是通过链式哈希表实现的</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">index</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">nameidx</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">on</span><span style="color:#ABB2BF;"> student(</span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>构建链式哈希表</strong>：<u>根据选定的哈希函数，把每一行记录的name字段作为参数来求一个哈希值，哈希值对桶的长度取模得到桶的序号（会产生哈希冲突），然后进行存储。</u></p><p><strong>解决哈希冲突的方式</strong>：<u>在桶里面用链表串起来（链地址法）</u></p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',10),m=o(`<p><mark><strong>哈希表只能进行等值查找</strong></mark>，比如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> student </span><span style="color:#C678DD;">name</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;zhangsan&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),g=a("strong",null,"范围搜索、前缀搜索、排序操作",-1),_=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> student </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">like</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;zhang%&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>B+输入读取一个块（16K）可以放到相邻的4个页面上；而在哈希表中，不同元素，哪怕是15和16，通过求哈希值，模上桶的个数，最后存储的位置可能会相隔很远。如果用链式哈希表构建索引，一个桶里面的节点代表1次磁盘I/O，由于桶内元素也是没有顺序的，我们进行查找的时候都会遍历完所有的桶内节点，就会导致更多的磁盘I/O。</li></ul><p>哈希索引只适用于<u>小数据量的，在<strong>内存</strong>上的等值查询</u>，处理不在磁盘的数据，并不能为我们减少磁盘I/O的次数！！！</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>`,4),b=a("strong",null,"不同的索引值经过哈希函数计算以及取模后，最后存储的位置非常不确定，没有任何的顺序",-1),D=a("strong",null,"等值查找",-1),f=a("strong",null,"范围搜索、前缀搜索、排序操作",-1),v=a("li",null,[a("p",null,[s("由于我们"),a("strong",null,"绝大部分的数据都是存放在磁盘的，哈希索引没办法减少磁盘I/O的次数"),s("，从磁盘上加载数据到内存的次数太多，使用的比较少")])],-1),x=a("li",null,[a("p",null,[s("此外一旦哈希表扩容，就会导致所有的索引值"),a("u",null,"重新计算存储位置"),s("，效率很低。因此一般数据量也不是很大")])],-1);function F(A,C){const n=t("font");return i(),c("div",null,[h,a("p",null,[a("strong",null,[s("哈希索引是基于"),e(n,{color:"red"},{default:l(()=>[s("内存")]),_:1}),s("的支持，底层结构就是"),e(n,{color:"red"},{default:l(()=>[s("链式哈希表")]),_:1}),s("，增删改查的时间复杂度都是"),e(n,{color:"red"},{default:l(()=>[s("O(1)")]),_:1}),s("，一断电或重启mysql服务器就没了，因为内存搜索，哈希表是最快的")])]),y,a("ul",null,[a("li",null,[s("注意："),e(n,{color:"red"},{default:l(()=>[s("存放的是data指针")]),_:1}),s("，数据在内存的其他位置")])]),a("p",null,[s("注意："),a("strong",null,[s("虽然链式哈希表的桶看起来有顺序，实际上存储的"),e(n,{color:"red"},{default:l(()=>[s("索引值是没有任何顺序的，不仅是桶之间没有顺序，桶内元素也没有任何顺序")]),_:1})]),s("。因为我们用哈希函数进行了计算，然后还进行了取模的操作，不可能说我输入的索引值的字典序小，就一定在小的桶里面")]),m,a("p",null,[a("mark",null,[s("不能进行"),e(n,{color:"red"},{default:l(()=>[g]),_:1})]),s("，比如：")]),_,a("ol",null,[a("li",null,[a("p",null,[s("由于"),b,s("，"),a("mark",null,[s("只能进行"),D,s(",不能进行"),e(n,{color:"red"},{default:l(()=>[f]),_:1})])])]),v,x])])}const w=r(B,[["render",F],["__file","哈希索引.html.vue"]]);export{w as default};
