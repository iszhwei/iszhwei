import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as t,c,d as s,e as a,f as l,w as e,a as o}from"./app-mYdPlPhZ.js";const i="/assets/899141f439714f3cbbbb7bf942881148-CSSWsGOw.png",B="/assets/fac09d5b641148cb97110f3831bb8824-55P9m-UK.png",d="/assets/3dbcb55ae02040cea7aa9bbbba770a6b-jzzMmF6D.png",y="/assets/6178987f0e51409b8325ef9311ad4acd-cIphTCtd.png",u="/assets/ae4f87e6afca4cbca3f79b4db06fbd4c-LUT81RXe.png",A="/assets/5f4495c46e5541679a088d615feaba64-Q2Kw0MG7.png",D="/assets/47659c3efdf74ca5a26756b9db53a554-6LkKs_Uv.png",b="/assets/6d781f0f59244c72861d9e24fc177247-cb7zf99p.png",F="/assets/30528ca8d61a41beaad9e01e0cf43880-FHkXgXmY.png",g="/assets/6a64a42b0f2a4fa7915ab10ca49fa18a-U3EYfCvS.png",m="/assets/5093a2b8ebdc4ea89e6a07eece4a9237-7zMV07T7.png",_="/assets/5fa4e3bdfc794d98a3ef421a86f27455-4sECYy_L.png",v="/assets/5fa4e3bdfc794d98a3ef421a86f27455-4sECYy_L.png",f={},h=o('<h1 id="sql优化" tabindex="-1"><a class="header-anchor" href="#sql优化" aria-hidden="true">#</a> sql优化</h1><h2 id="一、大批量插入数据" tabindex="-1"><a class="header-anchor" href="#一、大批量插入数据" aria-hidden="true">#</a> 一、大批量插入数据</h2><p>当使用load 命令导入数据的时候，适当的设置可以提高导入的效率</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-主键顺序插入" tabindex="-1"><a class="header-anchor" href="#_1-主键顺序插入" aria-hidden="true">#</a> 1） 主键顺序插入</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">load</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">data</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">local</span><span style="color:#ABB2BF;"> infile </span><span style="color:#98C379;">&#39;/root/data1.log&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">into</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">table</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`tb_user`</span><span style="color:#ABB2BF;"> fields terminated </span><span style="color:#C678DD;">by</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;,&#39;</span><span style="color:#ABB2BF;"> lines terminated </span><span style="color:#C678DD;">by</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;\\n&#39;</span><span style="color:#ABB2BF;">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插入ID顺序排列数据：</p><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>插入ID无序排列数据：</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-关闭唯一性校验" tabindex="-1"><a class="header-anchor" href="#_2-关闭唯一性校验" aria-hidden="true">#</a> 2） 关闭唯一性校验</h3><p>在导入数据前执行 <code>SET UNIQUE_CHECKS=0</code>，关闭唯一性校验，在导入结束后执行<code>SET UNIQUE_CHECKS=1</code>，恢复唯一性校验，可以提高导入的效率</p><h3 id="_3-手动提交事务" tabindex="-1"><a class="header-anchor" href="#_3-手动提交事务" aria-hidden="true">#</a> 3） 手动提交事务</h3><p>如果应用使用自动提交的方式，建议在导入前执行 <code>SET AUTOCOMMIT=0</code>，关闭自动提交，导入结束后再执行 <code>SET AUTOCOMMIT=1</code>，打开自动提交，也可以提高导入的效率</p><h2 id="二、优化insert" tabindex="-1"><a class="header-anchor" href="#二、优化insert" aria-hidden="true">#</a> 二、优化insert</h2><h3 id="_1-逐条插入改为批量插入" tabindex="-1"><a class="header-anchor" href="#_1-逐条插入改为批量插入" aria-hidden="true">#</a> 1.逐条插入改为批量插入</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Tom&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Cat&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Jerry&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化后的方案为 ：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Tom&#39;</span><span style="color:#ABB2BF;">),(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Cat&#39;</span><span style="color:#ABB2BF;">)，(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Jerry&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-在事务中进行数据插入" tabindex="-1"><a class="header-anchor" href="#_2-在事务中进行数据插入" aria-hidden="true">#</a> 2.在事务中进行数据插入</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">start transaction</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Tom&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Cat&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Jerry&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">commit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-数据有序插入" tabindex="-1"><a class="header-anchor" href="#_3-数据有序插入" aria-hidden="true">#</a> 3.数据有序插入</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Tom&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Jerry&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Cat&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化后</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Tom&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Cat&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Jerry&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Tim&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> tb_test </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;Rose&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、优化order-by" tabindex="-1"><a class="header-anchor" href="#三、优化order-by" aria-hidden="true">#</a> 三、优化order by</h2><p>MySQL中有两种排序方式：using filesort 和 using index</p>`,27),C=s("li",null,"index：有序索引顺序扫描直接返回有序数据，这种情况即为 using index，不需要额外排序，操作效率高",-1),x=o('<figure><img src="'+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们现在有联合索引A、B，当A相等时，B升序排列，比如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">A：</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span></span>
<span class="line"><span style="color:#ABB2BF;">B：</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于Filesort ， MySQL 有两种排序算法：</p><p>1） 两次扫描算法 ：MySQL4.1 之前，使用该方式排序。首先根据条件取出排序字段和行指针信息，然后在排序区 sort buffer 中排序，如果sort buffer不够，则在临时表 temporary table 中存储排序结果。完成排序之后，再根据行指针回表读取记录，该操作可能会导致大量随机I/O操作。</p><p>2）一次扫描算法：一次性取出满足条件的所有字段，然后在排序区 sort buffer 中排序后直接输出结果集。排序时内存开销较大，但是排序效率比两次扫描算法要高。</p>`,6),k=s("strong",null,"加快 Filesort的排序操作",-1),q=s("p",null,"MySQL 通过比较系统变量 max_length_for_sort_data 的大小和Query语句取出的字段总大小， 来判定使用哪种排序算法，如果max_length_for_sort_data 更大，那么使用第二种优化之后的算法；否则使用第一种。",-1),T=s("code",null,"sort_buffer_size",-1),z=s("code",null,"max_length_for_sort_data",-1),E=s("figure",null,[s("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),S=s("h2",{id:"四、mysql5-7优化group-by",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#四、mysql5-7优化group-by","aria-hidden":"true"},"#"),a(" 四、MySQL5.7优化group by")],-1),M=s("p",null,"由于GROUP BY 实际上也同样会进行排序操作，而且与ORDER BY 相比，GROUP BY 主要只是多了排序之后的分组操作。既然会排序，就可以用到索引",-1),O=s("p",null,"于是我们有两种方式优化group by：",-1),U=s("code",null,"order by null",-1),L=s("figure",null,[s("img",{src:A,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),I=o('<figure><img src="'+D+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="五、优化子查询" tabindex="-1"><a class="header-anchor" href="#五、优化子查询" aria-hidden="true">#</a> 五、优化子查询</h2><p><strong>用更高效的连接（JOIN）替代子查询</strong></p><p>示例 ，查找有角色的所有的用户信息 :</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">explain </span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> t_user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> id </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> user_id </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user_role);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">#优化1 </span><span style="color:#C678DD;">join</span></span>
<span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> t_user.*  </span></span>
<span class="line"><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> t_user  </span></span>
<span class="line"><span style="color:#C678DD;">JOIN</span><span style="color:#ABB2BF;"> user_role </span><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">t_user</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">user_role</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">user_id</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">#优化2</span></span>
<span class="line"><span style="color:#ABB2BF;">explain </span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> t_user u , user_role ur </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">u</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">ur</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">user_id</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="六、优化or" tabindex="-1"><a class="header-anchor" href="#六、优化or" aria-hidden="true">#</a> 六、优化OR</h2><p><strong>建议使用 union all替换 or</strong></p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这就把type字段从range优化为了const</p><h2 id="七、优化分页查询" tabindex="-1"><a class="header-anchor" href="#七、优化分页查询" aria-hidden="true">#</a> 七、优化分页查询</h2><p>一般分页查询时，通过创建覆盖索引能够比较好地提高性能。一个常见又非常头疼的问题就是 limit 2000000,10 ，<strong>此时MySQL需要排序前2000010 记录</strong>，仅仅返回2000000 - 2000010 的记录，其他记录丢弃，查询排序的代价非常大 。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">-- 耗时2.12s</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> tb_item </span><span style="color:#C678DD;">limit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2000000</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">; </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>优化思路一：在索引上完成排序分页操作，最后根据主键关联回原表查询所需要的其他列内容</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">-- 耗时1.51s</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> tb_item t, (</span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> id </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> tb_item </span><span style="color:#C678DD;">order by</span><span style="color:#ABB2BF;"> id </span><span style="color:#C678DD;">limit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2000000</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">) a </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">t</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">a</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">; </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>优化思路二：该方案适用于主键自增且连续的表，可以把limit查询转换成某个位置的查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">-- 耗时0.00s</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> tb_item </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> id </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2000000</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">limit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',22);function Q(N,w){const n=r("font");return t(),c("div",null,[h,s("ul",null,[s("li",null,[a("filesort ：对返回数据进行排序，"),l(n,{color:"red"},{default:e(()=>[a("所有不是通过索引直接返回排序结果的排序都叫 FileSort 排序")]),_:1})]),C]),x,s("p",null,[s("strong",null,[a("通过创建合适的"),l(n,{color:"red"},{default:e(()=>[a("索引")]),_:1}),a("，能够减少 Filesort 的出现")]),a("，但是在某些情况下，条件限制不能让Filesort消失，那就需要"),k]),q,s("p",null,[a("可以"),l(n,{color:"red"},{default:e(()=>[a("适当提高 "),T,a(" 和 "),z,a(" 系统变量，来增大排序区的大小，提高排序的效率。")]),_:1})]),E,S,M,O,s("ul",null,[s("li",null,[U,a("，"),l(n,{color:"red"},{default:e(()=>[a("手动禁止排序")]),_:1})])]),L,s("ul",null,[s("li",null,[a("给group by字段"),l(n,{color:"red"},{default:e(()=>[a("创建索引，优化排序")]),_:1})])]),I])}const Y=p(f,[["render",Q],["__file","sql优化.html.vue"]]);export{Y as default};
