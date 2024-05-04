import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as r,d as a,e as s,f as e,w as l,a as o}from"./app-m9pC5KT-.js";const c="/assets/image-20240504030520360-9lk9J1wK.png",d="/assets/31d4a370ab054b10921a32d5d7d2ff75-b9VyQ51s.png",B="/assets/fdf587bd47664298b5a528cc323ac408-AxdnZUnN.png",u="/assets/3b668ae15d5145c1b490857939097585-1CJwMHhq.png",y="/assets/b742e933562a4f72a4d2e46734ff1a46-i1n1Wane.png",g="/assets/d59ff3799b074997a5c81afbe3ca8ef0-teTsZWmj.png",f="/assets/f5931e46789344dfb79221387e1cf5ae-DTK8n1_a.png",b="/assets/612d13f834c94a1c885dcb92ea79117d-VNSZ25DS.png",h="/assets/50a4246f509b4f5686c2e45033f3f4d0-MZmDMl6L.png",_="/assets/0bf1190766bb4b99aa393247b5faab72-iBn834bd.png",m="/assets/555682fb898e4146b3a92580eb0ee59a-QeK9G2EK.png",v="/assets/41ad03722cdb49e485a62c14cdb2e14b-ecyFM1ca.png",D="/assets/77b43a60d7914eada826d33908225500-qGEebUIa.png",A={},F=a("h1",{id:"list数据类型",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#list数据类型","aria-hidden":"true"},"#"),s(" list数据类型")],-1),k=a("h2",{id:"一、list类型概念",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#一、list类型概念","aria-hidden":"true"},"#"),s(" 一、list类型概念")],-1),x=a("li",null,[s("数据存储需求："),a("u",null,"存储多个数据"),s("，并对数据"),a("u",null,"进入存储空间的顺序进行区分")],-1),C=a("strong",null,"双向链表",-1),E=o('<figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、基本命令" tabindex="-1"><a class="header-anchor" href="#二、基本命令" aria-hidden="true">#</a> 二、基本命令</h2><h3 id="_1-添加-修改数据" tabindex="-1"><a class="header-anchor" href="#_1-添加-修改数据" aria-hidden="true">#</a> 1. 添加/修改数据</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">lpush </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> value1 </span><span style="color:#E06C75;">[value2]</span><span style="color:#ABB2BF;"> …</span></span>
<span class="line"><span style="color:#ABB2BF;">rpush </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> value1 </span><span style="color:#E06C75;">[value2]</span><span style="color:#ABB2BF;"> …</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-获取数据" tabindex="-1"><a class="header-anchor" href="#_2-获取数据" aria-hidden="true">#</a> 2. 获取数据</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">lrange </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">start</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">stop</span><span style="color:#ABB2BF;">     # 从左边拿索引区间为</span><span style="color:#E06C75;">[start, stop]</span><span style="color:#ABB2BF;">的元素</span></span>
<span class="line"><span style="color:#ABB2BF;">lindex </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">index</span><span style="color:#ABB2BF;">          # 获取key对应list中，索引为index的元素</span></span>
<span class="line"><span style="color:#ABB2BF;">llen </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;">                  # 查看key对应list类型的长度</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里的索引有点类似于Python，<strong>支持负数索引</strong></p><figure><img src="'+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-删除并移除数据" tabindex="-1"><a class="header-anchor" href="#_3-删除并移除数据" aria-hidden="true">#</a> 3. 删除并移除数据</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">lpop </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;">           # 左边出</span></span>
<span class="line"><span style="color:#ABB2BF;">rpop </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;">           # 右边出</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、扩展命令" tabindex="-1"><a class="header-anchor" href="#三、扩展命令" aria-hidden="true">#</a> 三、扩展命令</h2>`,14),q=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">blpop key1 </span><span style="color:#E06C75;">[key2]</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">timeout</span><span style="color:#ABB2BF;">  # lpop的block版本 ，key1、key2用于指定list</span></span>
<span class="line"><span style="color:#ABB2BF;">brpop key1 </span><span style="color:#E06C75;">[key2]</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">timeout</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>list中本就<strong>有元素，blpop直接取不用等待</strong></p><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',3),z=o('<figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>取不出元素时，阻塞等待10s</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>一旦有另一个客户端push了数据，blpop立马就取出</strong></p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="四、使用注意事项" tabindex="-1"><a class="header-anchor" href="#四、使用注意事项" aria-hidden="true">#</a> 四、使用注意事项</h2>',6),L=a("strong",null,"string类型",-1),N=a("sup",null,"32",-1),R=o("<li>list具<strong>有索引</strong>的概念，但是操作数据时候<u>通常以<strong>队列</strong>的形式，或以<strong>栈</strong>的形式</u></li><li>获取全部数据操作结束索引设置为-1</li><li>list 可以对数据进行<strong>分页操作</strong>，通过<u>第一页的信息来自list，第2页及更多的信息通过数据库的形式加载（第一页查看较多，存放于Redis）</u></li>",3),P=o('<h2 id="五、业务场景" tabindex="-1"><a class="header-anchor" href="#五、业务场景" aria-hidden="true">#</a> 五、业务场景</h2><h3 id="_1-朋友圈点赞" tabindex="-1"><a class="header-anchor" href="#_1-朋友圈点赞" aria-hidden="true">#</a> 1. 朋友圈点赞</h3><p>微信朋友圈点赞，要求按照点赞顺序<strong>显示点赞好友信息</strong>，如果取消点赞，移除对应好友信息</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><u>一条朋友圈的点赞好友对应一个list，key对应发朋友圈的人，点赞就是把名单rpush到list，取消点赞就是移除指定元素</u></p>',5),S=o(`<p><strong>移除指定数据</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">lrem </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> count </span><span style="color:#C678DD;">value</span><span style="color:#ABB2BF;">  # 在key对应的list中，从左边开始移除count个值为value的元素，并不存在rrem这个命令</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-其他场景" tabindex="-1"><a class="header-anchor" href="#_2-其他场景" aria-hidden="true">#</a> 2. 其他场景</h3><p>twitter、新浪微博、腾讯微博中个人用于的关注列表需要<strong>按照用户的关注顺序进行展示</strong>，粉丝列表需要将最近关注的粉丝列在前面</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>企业运营过程中，系统将产生出大量的运营数据，<u>如果每台服务器都维护自己独立的日志，那运维人员管理起来会很麻烦，需要同时查看多个日志文件。我们<strong>使用redis统一管理日志</strong>，每台服务器一旦产生日志就发送到redis，这样日志就按时间顺序排好了</u></p><figure><img src="'+D+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="常用命令小结" tabindex="-1"><a class="header-anchor" href="#常用命令小结" aria-hidden="true">#</a> 常用命令小结</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">LPUSH </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> value1 value2 …  #将一个或多个值插入到列表头部，头插法</span></span>
<span class="line"><span style="color:#ABB2BF;">RPUSH </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> value1 value2 … #将一个或多个值插入到列表尾部，尾插法</span></span>
<span class="line"><span style="color:#ABB2BF;">LPOP </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> #队头出队 </span></span>
<span class="line"><span style="color:#ABB2BF;">RPOP </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> #队尾出队</span></span>
<span class="line"><span style="color:#ABB2BF;">LRANGE </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">start</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">stop</span><span style="color:#ABB2BF;">  #获取列表指定范围内的元素</span></span>
<span class="line"><span style="color:#ABB2BF;">LSET </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">index</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">value</span><span style="color:#ABB2BF;">  #通过下标设置列表元素的值，下标从0开始</span></span>
<span class="line"><span style="color:#ABB2BF;">LINDEX </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">index</span><span style="color:#ABB2BF;"> #通过下标获取列表中的元素</span></span>
<span class="line"><span style="color:#ABB2BF;">LREM </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> count </span><span style="color:#C678DD;">value</span><span style="color:#ABB2BF;">  #从队头开始移除count个值为value的列表元素</span></span>
<span class="line"><span style="color:#ABB2BF;">LTRIM </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">start</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">stop</span><span style="color:#ABB2BF;"> #对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除。</span></span>
<span class="line"><span style="color:#ABB2BF;">LINSERT </span><span style="color:#C678DD;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">BEFORE</span><span style="color:#ABB2BF;">|</span><span style="color:#C678DD;">AFTER</span><span style="color:#ABB2BF;"> pivot </span><span style="color:#C678DD;">value</span><span style="color:#ABB2BF;">  #在列表的元素前或者后插入元素</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function T(w,M){const n=t("font");return p(),r("div",null,[F,k,a("ul",null,[x,a("li",null,[s("需要的存储数据：一个存储空间保存多个数据，且通过数据可以"),e(n,{color:"red"},{default:l(()=>[s("体现进入顺序")]),_:1})]),a("li",null,[s("list类型保存多个数据，底层使用"),e(n,{color:"red"},{default:l(()=>[C]),_:1}),s("存储结构实现")])]),E,a("p",null,[a("strong",null,[s("规定时间内获取并移除数据，当无法获取时会阻塞，直到超时或者获取到元素（"),e(n,{color:"red"},{default:l(()=>[s("要么顺利取出元素，要么超时")]),_:1}),s("）")])]),q,a("p",null,[s("list中"),a("strong",null,[s("没有元素，blpop会"),e(n,{color:"cornflowerblue"},{default:l(()=>[s("阻塞等待")]),_:1}),s("，要么顺利取出元素，要么超时")])]),z,a("ul",null,[a("li",null,[s("list 中保存的数据都是"),L,s("的，数据总容量式有限的，"),a("strong",null,[s("最多"),e(n,{color:"red"},{default:l(()=>[s("2"),N,s("−1")]),_:1}),s("个元素")]),s("（4294967295，每个列表超过"),e(n,{color:"red"},{default:l(()=>[s("40亿")]),_:1}),s("个元素）")]),R]),P,a("p",null,[s("取消点赞就是在list中删除指定元素，我们前面学的"),e(n,{color:"red"},{default:l(()=>[s("lpop和rpop只能移除首尾元素")]),_:1}),s("，我们下面介绍移除指定元素的方法")]),S])}const K=i(A,[["render",T],["__file","list数据类型.html.vue"]]);export{K as default};
