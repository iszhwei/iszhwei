import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as a,c as d,d as e,e as l,f as o,w as t,a as n}from"./app-mYdPlPhZ.js";const u={},c=n('<h1 id="索引基础" tabindex="-1"><a class="header-anchor" href="#索引基础" aria-hidden="true">#</a> 索引基础</h1><h2 id="索引是什么" tabindex="-1"><a class="header-anchor" href="#索引是什么" aria-hidden="true">#</a> 索引是什么</h2><p>索引：是存储引擎提高查询的<strong>数据结构</strong></p><p>索引的核心/目的：<strong>提高查询的速度</strong></p><h2 id="索引的好处和坏处" tabindex="-1"><a class="header-anchor" href="#索引的好处和坏处" aria-hidden="true">#</a> 索引的好处和坏处</h2><p>当表中的数据量到达几十万甚至上百万的时候，SQL查询所花费的时间会很长，导致业务超时出错，此时就需要用索引来加速SQL查询。</p>',6),h=e("strong",null,"索引文件",-1),_=e("ul",null,[e("li",null,"使用索引也会涉及磁盘IO的")],-1),g=e("p",null,"好处：提高查询的效率",-1),p=e("p",null,"缺点：",-1),f=e("u",null,"由于数据的改变，会造成索引文件的改动，过多的磁盘I/O造成CPU负荷太重;",-1),m=n('<h2 id="索引的分类" tabindex="-1"><a class="header-anchor" href="#索引的分类" aria-hidden="true">#</a> 索引的分类</h2><p>物理（真实存在的）上：聚集索引、非聚集索引</p><p>逻辑（抽象出来的）上：</p><ul><li>普通索引/二级索引：没有任何限制条件，可以给任何类型的字段创建普通索引 <ul><li>主要是相对于主键索引和唯一索引的说法</li><li>创建新表时和已创建的表都可以加索引</li><li>数量是不限的，但并非越多越好</li><li><strong>一张表</strong>的<strong>一次sql</strong>查询<strong>只能用一个索引</strong>，索引看 where字段而不是select字段<code>where a=1 and b=&#39;M&#39;</code></li></ul></li><li>唯一索引：使用UNIQUE修饰的字段，值不能够重复，主键索引就隶属于唯一性索引 <ul><li>不能重复，可以为空。[完整性约束/约束条件 | 张威的编程学习笔记 (gitee.io)](https://iszhwei.gitee.io/mysql/01 MySQL基础/完整性约束.html)</li></ul></li><li>主键索引：使用Primary Key修饰的字段会自动创建索引(MyISAM, InnoDB) <ul><li>没有加主键时，innodb会自动增加一个int字段当主键索引，而myisam不会</li><li>不能重复，不能为空，唯一标识</li></ul></li><li>单列索引：在一个字段上创建索引</li><li>多列索引：在表的多个字段上创建索引 <ul><li><code>uid+cid</code>，<strong>多列索引必须使用到第一个列，才能用到多列索引，否则索引用不上</strong><ul><li>只用uid或者uid+cid都可以用到多列索引</li><li>只用cid不会使用到多列索引</li></ul></li></ul></li><li>全文索引：只有myisam支持，使用<code>FULLTEXT参数</code>可以设置全文索引，只支持<code>CHAR，VARCHAR和TEXT类型</code>的字段上，<u>常用于<strong>数据量较大</strong>的<strong>字符串</strong>类型上</u>，可以提高查询速度 <ul><li><u>评论字符串搜索</u>，如果不加索引就会变成字符串匹配</li><li>线上项目<u>支持专门的搜索功能</u>，给后台服务器增加专门的<strong>搜索引擎</strong>支持快速高效的搜索 **elasticsearch 简称es **JAVA实现的，使用的时候简单配置调用API接口即可实现高可用的搜索</li><li><strong>C++开源的搜索引擎</strong> 搜狗的workﬂow <ul><li>因为和es相比效率太低，因此文本的搜索很少在后台数据库上搜索，用的比较少</li></ul></li></ul></li></ul>',4);function x(I,w){const i=s("font");return a(),d("div",null,[c,e("p",null,[l("由于索引也是需要存储成"),h,l("的，因此对索引的使用也会"),e("strong",null,[l("涉及"),o(i,{color:"red"},{default:t(()=>[l("磁盘I/O操作")]),_:1}),l("。如果索引创建过多，使用不当，会造成SQL查询时，进行大量无用的磁盘I/O操作，降低了SQL的查询效率，适得其反")]),l("，因此掌握良好的索引创建原则非常重要！")]),_,g,p,e("ul",null,[e("li",null,[o(i,{color:"red"},{default:t(()=>[l("占用额外的空间")]),_:1}),l("。有时候索引占用的空间甚至比数据占用的空间还多。")]),e("li",null,[e("p",null,[l("虽然索引大大提高了查询的速度，但同时也"),o(i,{color:"red"},{default:t(()=>[l("降低了更新表的速度")]),_:1}),l("。因为数据库不仅仅要更新数据，还要更新对应的索引信息。")])])]),e("p",null,[l("索引不是越多越好！ 过多的索引会"),o(i,{color:"red"},{default:t(()=>[l("导致CPU使用率居高不下")]),_:1}),l("，"),f,l(" 索引太少，查询速度会变慢。我们应该建立合适的索引，找到一个平衡点！")]),m])}const C=r(u,[["render",x],["__file","索引基础.html.vue"]]);export{C as default};
