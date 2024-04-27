import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,a as l}from"./app--8O2lHwG.js";const o="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_20_color_FFFFFF_t_70_g_se_x_16-zqEf4EuL.png",p="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_20_color_FFFFFF_t_70_g_se_x_16-17137049644523-ebNDs9Ko.png",t="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_20_color_FFFFFF_t_70_g_se_x_16-17137050329486-Rba8jugU.png",e="/assets/d32e4e44010a4184940264fb955a0f44-2TmAH52g.png",r="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_20_color_FFFFFF_t_70_g_se_x_16-171370506607711-bTpi-JWu.png",B="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_20_color_FFFFFF_t_70_g_se_x_16-171370507563714-H5vcY6Dq.png",c="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_20_color_FFFFFF_t_70_g_se_x_16-171370508766917-wdnEdkuk.png",y="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_19_color_FFFFFF_t_70_g_se_x_16-YpEFk3Ro.png",i="/assets/ee57c40963e04198a9e085cd4cf174cb-9TCkmxkF.png",A="/assets/9e4671d901914a24bd1ec872d0c58214-xgHnIS1d.png",d="/assets/235d56e882f74caeb6d2c621cf4c755b-qqz2ki1K.png",F="/assets/851407bacf194e0c8938cca8e768c597-R_vGbEld.png",u="/assets/image-20240421213310286-7l4s8Usp.png",m="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_11_color_FFFFFF_t_70_g_se_x_16-7aC3uJgU.png",_={},g=l(`<h1 id="分库分表实践" tabindex="-1"><a class="header-anchor" href="#分库分表实践" aria-hidden="true">#</a> 分库分表实践</h1><h2 id="一、为什么要分库分表" tabindex="-1"><a class="header-anchor" href="#一、为什么要分库分表" aria-hidden="true">#</a> 一、为什么要分库分表</h2><p>数据库架构演变</p><p>刚开始多数项目用单机数据库就够了，随着服务器流量越来越大，面对的请求也越来越多，我们做了数据库读写分离， 使用多个从库副本（Slave）负责读，使用主库（Master）负责写，master和slave通过主从复制实现数据同步更新，保持数据一致。slave 从库可以水平扩展，所以更多的读请求不成问题</p><p>但是当用户量级上升，写请求越来越多，怎么保证数据库的负载足够？增加一个Master是不能解决问题的， 因为数据要保存一致性，写操作需要2个master之间同步，相当于是重复了，而且架构设计更加复杂</p><p>这时需要用到分库分表（sharding），把库和表存放在不同的MySQL Server上，每台服务器可以均衡写请求的次数</p><h2 id="二、库表太大产生的问题" tabindex="-1"><a class="header-anchor" href="#二、库表太大产生的问题" aria-hidden="true">#</a> 二、库表太大产生的问题</h2><p>单库太大：单库处理能力有限、所在服务器上的磁盘空间不足、遇到IO瓶颈，需要把单库切分成更多更小的库</p><p>单表太大：CRUD效率都很低，数据量太大导致索引文件过大，磁盘IO加载索引花费时间，导致查询超时。所以只用索引还是不行的，需要把单表切分成多个数据集更小的表。MyCat提供的分表算法都在rule.xml，可以根据不同的分表算法进行拆分，比如根据时间拆分、一致性哈希、直接用主键对分表的个数取模等</p><p>拆分策略</p><p>单个库太大，先考虑是表多还是数据多：</p><p>如果因为表多而造成数据过多，则使用垂直拆分，即根据业务拆分成不同的库 如果因为单张表的数据量太大，则使用水平拆分，即把表的数据按照某种规则（mycat/conf/rule.xml定义的分表算法）拆分成多张表 分库分表的原则应该是先考虑垂直拆分，再考虑水平拆分</p><h2 id="三、垂直拆分" tabindex="-1"><a class="header-anchor" href="#三、垂直拆分" aria-hidden="true">#</a> 三、垂直拆分</h2><p>分库分表和读写分离可以共同进行</p><h3 id="_1-垂直分库" tabindex="-1"><a class="header-anchor" href="#_1-垂直分库" aria-hidden="true">#</a> 1.垂直分库</h3><p>server.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">user</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">property</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;password&quot;</span><span style="color:#ABB2BF;">&gt;123456&lt;/</span><span style="color:#E06C75;">property</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">property</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;schemas&quot;</span><span style="color:#ABB2BF;">&gt;USERDB1,USERDB2&lt;/</span><span style="color:#E06C75;">property</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">user</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置了USERDB1、USERDB2这两个逻辑库</p><p>schema.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;?</span><span style="color:#E06C75;">xml</span><span style="color:#D19A66;"> version</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;1.0&quot;</span><span style="color:#ABB2BF;">?&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;!</span><span style="color:#C678DD;">DOCTYPE</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">mycat:schema</span><span style="color:#ABB2BF;"> SYSTEM &quot;schema.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">mycat:schema</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">xmlns:mycat</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;http://io.mycat/&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">&lt;!-- 逻辑数据库 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">schema</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;USERDB1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">checkSQLschema</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;false&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">sqlMaxLimit</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;100&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dataNode</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;dn1&quot;</span><span style="color:#ABB2BF;"> /&gt; </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 两个逻辑库对应两个不同的数据节点 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">schema</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;USERDB2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">checkSQLschema</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;false&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">sqlMaxLimit</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;100&quot;</span><span style="color:#ABB2BF;">dataNode=</span><span style="color:#98C379;">&quot;dn2&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">&lt;!-- 存储节点 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">dataNode</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;dn1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dataHost</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;node1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">database</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;mytest1&quot;</span><span style="color:#ABB2BF;"> /&gt;  </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 两个数据节点对应两个不同的物理机器 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">dataNode</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;dn2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dataHost</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;node2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">database</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;mytest2&quot;</span><span style="color:#ABB2BF;"> /&gt;  </span><span style="color:#7F848E;font-style:italic;">&lt;!-- USERDB1对应mytest1，USERDB2对应mytest2 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">&lt;!-- 数据库主机 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">dataHost</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;node1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">maxCon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;1000&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">minCon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;10&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">balance</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">writeType</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dbType</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;mysql&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dbDriver</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;native&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		&lt;</span><span style="color:#E06C75;">heartbeat</span><span style="color:#ABB2BF;">&gt;select user()&lt;/</span><span style="color:#E06C75;">heartbeat</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		&lt;</span><span style="color:#E06C75;">writeHost</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">host</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;192.168.131.129&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">url</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;192.168.131.129:3306&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">user</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">password</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;123456&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;/</span><span style="color:#E06C75;">dataHost</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">dataHost</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;node2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">maxCon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;1000&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">minCon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;10&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">balance</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;">writeType=</span><span style="color:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dbType</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;mysql&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dbDriver</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;native&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		&lt;</span><span style="color:#E06C75;">heartbeat</span><span style="color:#ABB2BF;">&gt;select user()&lt;/</span><span style="color:#E06C75;">heartbeat</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		&lt;</span><span style="color:#E06C75;">writeHost</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">host</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;192.168.0.6&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">url</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;192.168.0.6:3306&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">user</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">password</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;123456&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;/</span><span style="color:#E06C75;">dataHost</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">mycat:schema</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个逻辑库对应两个不同的数据节点，两个数据节点对应两个不同的物理机器</p><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>mytest1和mytest2分成了不同机器上的不同的库，各包含一部分表，它们原来是合在一块的，在一台机器上，现在做了垂直的拆分。 客户端就需要去连接不同的逻辑库了，根据业务操作不同的逻辑库</p><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后配置了两个写库，两台机器把库平分了，分担了原来单机的压力。分库伴随着分表，从业务上对表拆分</p><h3 id="_2-垂直分表" tabindex="-1"><a class="header-anchor" href="#_2-垂直分表" aria-hidden="true">#</a> 2.垂直分表</h3><p>垂直分表，基于列字段进行。一般是针对几百列的这种大表，也避免查询时，数据量太大造成的“跨页”问题。</p><p>一般是表中的字段较多，将不常用的， 数据较大，长度较长（比如text类型字段）的拆分到扩展表。访问频率较高的字段单独放在一张表</p><h2 id="四、水平分表" tabindex="-1"><a class="header-anchor" href="#四、水平分表" aria-hidden="true">#</a> 四、水平分表</h2><p>针对数据量巨大的单张表（比如订单表），按照某种规则（RANGE、HASH取模等），切分到多张表里面去。 但是这些表还是在同一个库中，所以库级别的数据库操作还是有IO瓶颈，不建议采用</p><p>将单张表的数据切分到多个服务器上去，每个服务器具有一部分库与表，只是表中数据集合不同。 水平分库分表能够有效的缓解单机和单库的性能瓶颈和压力，突破IO、连接数、硬件资源等的瓶颈</p><p><strong>分库分表可以和主从复制同时进行，但不基于主从复制；读写分离才基于主从复制</strong></p><h3 id="_1-配置水平分表" tabindex="-1"><a class="header-anchor" href="#_1-配置水平分表" aria-hidden="true">#</a> 1.配置水平分表</h3><p>server.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">user</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">property</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;password&quot;</span><span style="color:#ABB2BF;">&gt;123456&lt;/</span><span style="color:#E06C75;">property</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">property</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;schemas&quot;</span><span style="color:#ABB2BF;">&gt;USERDB&lt;/</span><span style="color:#E06C75;">property</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">user</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>schema.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;?</span><span style="color:#E06C75;">xml</span><span style="color:#D19A66;"> version</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;1.0&quot;</span><span style="color:#ABB2BF;">?&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;!</span><span style="color:#C678DD;">DOCTYPE</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">mycat:schema</span><span style="color:#ABB2BF;"> SYSTEM &quot;schema.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">mycat:schema</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">xmlns:mycat</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;http://io.mycat/&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">&lt;!-- 逻辑数据库 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">schema</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;USERDB&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">checkSQLschema</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;false&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">sqlMaxLimit</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;100&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		&lt;</span><span style="color:#E06C75;">table</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;user&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dataNode</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;dn1&quot;</span><span style="color:#ABB2BF;"> /&gt; </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 这里的user和student都是实际存在的物理表名 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		&lt;</span><span style="color:#E06C75;">table</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;student&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">primaryKey</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;id&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">autoIncrement</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dataNode</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;dn1,dn2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">rule</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;mod-long&quot;</span><span style="color:#ABB2BF;">/&gt; </span><span style="color:#7F848E;font-style:italic;">&lt;!-- student表按照id取模拆分 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;/</span><span style="color:#E06C75;">schema</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">&lt;!-- 存储节点 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">dataNode</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;dn1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dataHost</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;node1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">database</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;mytest1&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">dataNode</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;dn2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dataHost</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;node2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">database</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;mytest2&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">&lt;!-- 数据库主机 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">dataHost</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;node1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">maxCon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;1000&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">minCon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;10&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">balance</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">writeType</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dbType</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;mysql&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dbDriver</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;native&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		&lt;</span><span style="color:#E06C75;">heartbeat</span><span style="color:#ABB2BF;">&gt;select user()&lt;/</span><span style="color:#E06C75;">heartbeat</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		&lt;</span><span style="color:#E06C75;">writeHost</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">host</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;192.168.131.129&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">url</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;192.168.131.129:3306&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">user</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">password</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;123456&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;/</span><span style="color:#E06C75;">dataHost</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">dataHost</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;node2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">maxCon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;1000&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">minCon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;10&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">balance</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">writeType</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dbType</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;mysql&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dbDriver</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;native&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		&lt;</span><span style="color:#E06C75;">heartbeat</span><span style="color:#ABB2BF;">&gt;select user()&lt;/</span><span style="color:#E06C75;">heartbeat</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		&lt;</span><span style="color:#E06C75;">writeHost</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">host</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;192.168.0.6&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">url</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;192.168.0.6:3306&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">user</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">password</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;123456&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;/</span><span style="color:#E06C75;">dataHost</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">mycat:schema</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>user表示一个普通的表，直接放在数据节点dn1上，放在一台机器上，这张表不用进行拆分</p><p>student表的primaryKey是id，根据id拆分，放在dn1和dn2上，最终这个表要分在两台机器上，在物理上分开了，但是在逻辑上还是一个，往哪张表里增加，在2台机器上查询然后如何合并这些操作都是由mycat完成的</p><p>拆分的规则是取模（mod - long)，每次插入用id模上存在的机器数（2）</p><p>此外还需要在rule.xml中配置以下拆分算法</p><p>找到算法mod-long，因为我们将逻辑表student分开映射到两台主机上，所以修改数据节点的数量为2</p><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-测试水平分表" tabindex="-1"><a class="header-anchor" href="#_2-测试水平分表" aria-hidden="true">#</a> 2. 测试水平分表</h3><p>Linux主机</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Windows主机</p><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>登录到mycat的8066端口</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用MyCat给user表插入两条数据</p><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由于schema.xml配置文件中，逻辑表user只在Linux主机的mytest1库中存在，mycat操作的逻辑表user会影响Linux主机上的物理表，而不会影响Windows主机上的表。我们分别查看一下Linux和Windows主机的user表：</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们再通过MyCat给student表插入两条数据</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们知道schema.xml配置文件中，逻辑表student对应两台主机上的两个库mytest1、mytest2中的两张表，所以对逻辑表插入的两条数据，会实际影响到两张物理表（用id%机器数，决定插入到哪张物理表）。我们分别查看一下Linux和Windows主机的student表：</p><figure><img src="'+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再通过MyCat插入id=3和id=4的数据，应该插入不同主机上的不同物理表</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这就相当于把student表进行水平拆分了</p><p>通过MyCat查询的时候只需要正常输入就行，我们配置的是表拆分后放在这2个数据节点上，MyCat会根据配置在两个库上查询并进行数据合并</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',65),q=[g];function C(b,v){return a(),n("div",null,q)}const f=s(_,[["render",C],["__file","分库分表实践.html.vue"]]);export{f as default};
