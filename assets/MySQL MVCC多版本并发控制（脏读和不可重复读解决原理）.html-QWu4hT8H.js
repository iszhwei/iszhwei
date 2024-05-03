import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as n,c as o,d as t,e,f as r,w as s,a as l}from"./app-mYdPlPhZ.js";const _={},c=t("h1",{id:"mysql-mvcc多版本并发控制-脏读和不可重复读解决原理",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mysql-mvcc多版本并发控制-脏读和不可重复读解决原理","aria-hidden":"true"},"#"),e(" MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）")],-1),p=t("h2",{id:"一、mvcc概念",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#一、mvcc概念","aria-hidden":"true"},"#"),e(" 一、MVCC概念")],-1),h=t("p",null,[e("MVCC是多版本并发控制（Multi-Version Concurrency Control），"),t("u",null,[e("是MySQL中基于"),t("strong",null,"乐观锁"),e("理论实现隔离级别的方式，用于实现已提交读和可重复读隔离级别")]),e("，也经常称为多版本数据库。MVCC机制会生成一个数据请求时间点的一致性数据快照 （Snapshot)， 并用这个快照来提供一定级别 （语句级或事务级） 的一致性读取。从用户的角度来看，好象是数据库可以提供同一数据的多个版本（系统版本号和事务版本号）")],-1),m=t("p",null,"MVCC多版本并发控制中，读操作可以分为两类：",-1),u=t("strong",null,"快照读",-1),g=t("code",null,"select",-1),C=t("strong",null,"当前读",-1),V=t("strong",null,"并且对数据加锁",-1),x=t("code",null,"insert，delete，update，select…lock in share mode/for update",-1),F=l('<p>MVCC：<u>每一行记录实际上有多个版本</u>，每个版本的记录除了数据本身之外，增加了其它字段（DB_ROW_ID、DB_TRX_ID、DB_ROLL_PTR）</p><p><strong>已提交读</strong>隔离级别：<strong>每个</strong>语句<strong>执行前</strong>都会<strong>重新生成一快照</strong>（Read View），快照中<u>只包含已commit的数据</u>。</p><p><strong>可重复读</strong>隔离级别：<strong>启动事务时</strong>生成一个<strong>快照</strong>（Read View），<u>然后整个事务期间都在用这个 Read View，后续的查询语句利用这个 Read View，通过这个 Read View 就可以在 undo log 版本链找到事务开始时的数据，所以<strong>事务过程中每次查询的数据都是一样的</strong></u></p><p>什么叫事务启动呢？</p><ul><li>执行了 begin/start transaction 命令后，并不代表事务启动了。只有在执行这个命令后，执行了增删查改操作的 SQL 语句，才是事务真正启动的时机</li><li>执行了 start transaction with consistent snapshot 命令，就会马上启动事务</li></ul><p>快照内容读取原则：</p><ol><li>版本未commit，无法读取生成快照</li><li>版本已commit，但是在快照创建后提交的，无法读取</li><li>版本已commit，但是在快照创建前提交的，可以读取</li><li>当前事务做的修改，是需要重新生成快照的。读取的是最新版本，并且对数据加锁，阻塞其他操作事务修改记录。核心逻辑就是判断版本链中的哪个版本是当前事务可见可处理的</li></ol><p>&quot;数据快照&quot;中并不是数据，存储的是一些事务id</p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/cec5ca395e184437abf68a77ec43db2b.png)</p><p>Read View 有四个重要的字段：</p><ul><li><p>creator_trx_id ：指的是创建该 Read View 的事务的事务 id</p></li><li><p>m_ids ：指的是在创建 Read View 时，当前数据库中「活跃事务」的事务 id 列表，注意是一个列表，“活跃事务”指的就是，启动了但还没提交的事务。重新生成数据快照m_ids可能会有更新，不重新生成数据快照m_ids就不会更新</p></li><li><p>min_trx_id ：指的是在创建 Read View 时，当前数据库中「活跃事务」中事务 id 最小的事务，也就是 m_ids 的最小值</p></li><li><p>max_trx_id ：这个并不是 m_ids 的最大值，而是创建 Read View 时当前数据库中应该给下一个事务的 id 值，也就是所有已提交的和未提交的事务中最大的事务 id 值 + 1</p></li></ul><p>Innodb如何判断某条记录是否对当前事务可见呢？一个事务去访问记录的时候，<strong>除了自己的更新记录总是可见之外</strong>，还有这几种情况：</p><ul><li>如果记录的 trx_id 值小于 Read View 中的 min_trx_id 值，表示这个版本的记录是在创建 Read View 前已经提交的事务生成的，所以该版本的记录对当前事务可见。</li><li>如果记录的 trx_id 值大于等于 Read View 中的 max_trx_id 值，表示这个版本的记录是在创建 Read View 后才启动的事务生成的，所以该版本的记录对当前事务不可见。</li><li>如果记录的 trx_id 值在 Read View 的 min_trx_id 和 max_trx_id 之间，需要判断 trx_id 是否在 m_ids 列表中： <ul><li>如果记录的 trx_id 在 m_ids 列表中，表示生成该版本记录的活跃事务依然活跃着（还没提交事务），所以该版本的记录对当前事务不可见。</li><li>如果记录的 trx_id 不在 m_ids列表中，表示生成该版本记录的活跃事务已经被提交，所以该版本的记录对当前事务可见。</li></ul></li></ul><p>这种通过「版本链」来控制并发事务访问同一个记录时的行为就叫 MVCC（多版本并发控制）</p><p>在已提交读隔离级别下，每次查询都会重新生成数据快照，若其他事务已经提交了，当前事务再次查询时重新生成的数据快照中的m_ids、min_trx_id、max_trx_id可能会发生改变，这样对比每条记录的trx_id后，可见性就会发生改变</p><p>在可重复读隔离级别下，每次查询都使用第一次生成的数据快照，</p><h2 id="二、mvcc应用于已提交读隔离级别" tabindex="-1"><a class="header-anchor" href="#二、mvcc应用于已提交读隔离级别" aria-hidden="true">#</a> 二、MVCC应用于已提交读隔离级别</h2><h3 id="_1-解决脏读" tabindex="-1"><a class="header-anchor" href="#_1-解决脏读" aria-hidden="true">#</a> 1.解决脏读</h3><p>先设置隔离级别为已提交读并开启事务，已提交读解决了脏读，未解决可重复读和幻读</p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/image-20240420160437173.png)</p>',20),M=t("p",null,[e("不管是"),t("strong",null,"已提交读还是可重复读"),e("，只要我们select的时候，就会产生一个数据快照，"),t("u",null,"相当于给当前的数据拍个照片，以后去查询，都是查询快照上的数据（除非有新的数据被commit）"),e("。"),t("mark",null,"已提交读隔离级别采用非锁定读，非锁定读是在快照上的读取。")],-1),b=t("mark",null,[e("在"),t("strong",null,"已提交读"),e("隔离级别，"),t("strong",null,"每一次select都会产生一个新的数据快照")],-1),f=l('<ul><li><strong>数据有2种状态</strong>：<u>prepare（未提交时）和commit（已提交）</u></li></ul><p><u>事务2第二次select的时候，由于事务1并没有commit新的数据（数据处于prepare状态），<mark>当又一次产生数据快照时，产生的数据快照还是undo log回滚日志的链表指向的旧数据</mark>，这就解决了脏读问题</u></p><p>然而，在已提交读隔离级别依然会发生不可重复读的现象（两次查询，得到的数据内容不一样，属于正确读取的范围）</p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/d2de0f6308ee48d4ad209a141295607b.png)</p><h3 id="_2-无法解决不可重复读" tabindex="-1"><a class="header-anchor" href="#_2-无法解决不可重复读" aria-hidden="true">#</a> 2. 无法解决不可重复读</h3><p><mark>因为每一次select都会重新产生1次数据快照，其他事务update后commit，新的数据已经符合生成快照的要求了，于是再次select的时候新commit的数据也会出现在新生成的快照中，发生了不可重复读</mark></p><h3 id="_3-无法解决幻读" tabindex="-1"><a class="header-anchor" href="#_3-无法解决幻读" aria-hidden="true">#</a> 3. 无法解决幻读</h3><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16.png)</p><p><mark>和出现不可重复读现象的原因相同，由于新commit的数据符合生成快照的要求，再次select的时候新commit的数据也会出现在新生成的快照中，自然就出现了幻读</mark></p><h2 id="三、mvcc应用于可重复读隔离级别" tabindex="-1"><a class="header-anchor" href="#三、mvcc应用于可重复读隔离级别" aria-hidden="true">#</a> 三、MVCC应用于可重复读隔离级别</h2><h3 id="_1-解决脏读-1" tabindex="-1"><a class="header-anchor" href="#_1-解决脏读-1" aria-hidden="true">#</a> 1.解决脏读</h3><p><strong>事务第一次select就产生数据快照，而且只产生这一次快照，select时都是直接用老的数据快照，所以可以解决脏读</strong></p><h3 id="_2-解决不可重复读" tabindex="-1"><a class="header-anchor" href="#_2-解决不可重复读" aria-hidden="true">#</a> 2.解决不可重复读</h3>',13),Q=l('<p>设置可重复读隔离级 别，并2个开启事务。事务2 select，生成数据快照，在可重复读隔离级别下，以后再select都不会再生成快照</p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/62a2ec5eff0f4c45b1c3cb131751db46.png)</p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16-17136021990519.png)</p><h3 id="_3-理解-可重复读隔离级别-只生成一次数据快照" tabindex="-1"><a class="header-anchor" href="#_3-理解-可重复读隔离级别-只生成一次数据快照" aria-hidden="true">#</a> 3.理解 可重复读隔离级别，只生成一次数据快照</h3><p>再举一个例子理解：在可重复读隔离级别，只生成一次数据快照</p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/3034373b35e141b6aac48e4e377c245e.png)</p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/dadd16147c434974bbb33a909a48ecf0.png)</p><p><strong>由于事务1已经commit了，新的数据不再是prepare状态，已经符合了生成快照的条件。当事务2再select（快照读）的时候，这条age=22的数据自然就被查到了</strong></p><h3 id="_4-理解-可重复读隔离级别-只能部分解决幻读" tabindex="-1"><a class="header-anchor" href="#_4-理解-可重复读隔离级别-只能部分解决幻读" aria-hidden="true">#</a> 4. 理解 可重复读隔离级别，只能部分解决幻读</h3><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16-171360298211316.png)</p><p>事务2第一次select是两条数据，事务1 insert之后，事务2再次select依然是两条，看似解决了幻读，其实只是部分解决（并不能完全解决幻读）</p><p>那我们看一下为什么是<strong>部分解决幻读</strong></p><p>事务1 insert然后commit后，表格的数据应该是这样的</p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_12,color_FFFFFF,t_70,g_se,x_16.png)</p><p>此时事务2 update</p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/6670d39aad9e4af19b284a2666571e28.png)</p><p><mark>可以看见，update找到了id=24的数据，这就证明update做的是当前读（读最新的commit状态的数据），而不是快照读，因为快照上根本就没有id=24的数据</mark></p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16-171360312686323.png)</p><p>其中1000是事务1的ID，2000的事务2的ID</p><p><strong>由于每个事务可以看见自己修改、更新的数据</strong>，当事务2再次select的时候，就可以看见id=24的数据了，这就发生了幻读（<strong>主要因为insert，delete，update，select…lock in share mode/for update这些操作，是当前读</strong>）</p><p>![](MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_11,color_FFFFFF,t_70,g_se,x_16.png)</p><table><thead><tr><th>未提交读</th><th>已提交读</th><th>可重复读</th><th>串行化</th></tr></thead><tbody><tr><td><strong>/</strong></td><td>MVCC</td><td>MVCC + 临键锁</td><td>临键锁</td></tr><tr><td>脏读、不可重复读、幻读</td><td>不可重复读、幻读</td><td>幻读</td><td><strong>/</strong></td></tr></tbody></table>',22);function w(y,L){const a=i("font");return n(),o("div",null,[c,p,h,m,t("ul",null,[t("li",null,[u,e("（非锁定读）："),t("strong",null,[r(a,{color:"red"},{default:s(()=>[e("读的是记录的")]),_:1}),e("可见"),r(a,{color:"red"},{default:s(()=>[e("版本")]),_:1}),e("，不用加锁")]),e("。 "),t("ul",null,[t("li",null,[e("如 "),g,e("做的都是快照读，会把已经commit的数据（即整表数据）生成一个快照（"),r(a,{color:"red"},{default:s(()=>[e("这就可以防止不可重复读")]),_:1}),e("）")])])]),t("li",null,[C,e("：读取的是记录的最新版本，返回当前读的记录，"),V,e("。 "),t("ul",null,[t("li",null,[e("如 "),x,e("这些操作，都是"),r(a,{color:"red"},{default:s(()=>[e("读的是最新的数据")]),_:1})])])])]),F,t("ul",null,[t("li",null,[r(a,{color:"green"},{default:s(()=>[e("这样通过快照读，MVCC就解决了脏读")]),_:1})])]),M,t("p",null,[b,e("，当事务1进行更改的时候，事务2又去select，重新产生数据快照（有可能和前面的快照相同），然而"),t("mark",null,[e("产生新的数据快照的**"),r(a,{color:"red"},{default:s(()=>[e("前提是")]),_:1}),e("新的数据已经被事务正确commit**，prepare状态的数据不会出现在快照中")])]),f,t("p",null,[t("mark",null,[e("因为事务"),r(a,{color:"red"},{default:s(()=>[e("第一次select就产生数据快照")]),_:1}),e("，而且只产生这一次快照")])]),Q])}const R=d(_,[["render",w],["__file","MySQL MVCC多版本并发控制（脏读和不可重复读解决原理）.html.vue"]]);export{R as default};
