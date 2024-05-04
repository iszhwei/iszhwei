import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as i,d as s,e as a,f as n,w as e,a as o}from"./app-m9pC5KT-.js";const B="/assets/image-20240407142137472-w_10T4xx.png",d="/assets/image-20240407152129701-rUv4279F.png",y="/assets/image-20240407161232523-RdaoHT_l.png",D="/assets/image-20240407161936580-saysFwo-.png",g="/assets/image-20240407162501541-dbuEjckn.png",u="/assets/image-20240407165457459-pfvL4O1y.png",m="/assets/image-20240407165800066-eDKOg6a0.png",A="/assets/image-20240416133844078-w0NKw-df.png",F="/assets/image-20240416134958737-MVtl-qa2.png",C="/assets/image-20240416141102785-fGRx7L1z.png",h="/assets/image-20240416140713583-if7Pwd_R.png",b="/assets/image-20240416142800498-3Ru77sxM.png",f="/assets/image-20240416152636533-GdlZeAB-.png",_="/assets/image-20240416151903081-AlAHUyFO.png",v="/assets/image-20240416154304482-mpbA_A9Y.png",x="/assets/image-20240416154005875-K9dzif6U.png",k="/assets/image-20240416154052018-tbfuTdJS.png",q="/assets/image-20240416160806633-bl4IeWp8.png",w="/assets/image-20240416155709023-ucbqS0GK.png",z="/assets/image-20240416161857524-nlM5ZKJd.png",L="/assets/image-20240416162254040--Oxs7NuA.png",N="/assets/image-20240416170614307-0DveL9ax.png",E="/assets/image-20240416170857438-R4mF5YO_.png",S="/assets/image-20240416171430735-0_f6TtXE.png",I="/assets/image-20240416170741355-0EYyODQx.png",T="/assets/image-20240416170820087-vAp0cMLF.png",M={},O=o(`<h1 id="select查询" tabindex="-1"><a class="header-anchor" href="#select查询" aria-hidden="true">#</a> select查询</h1><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user; </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),U=s("mark",null,"项目中",-1),Q=s("code",null,"select * from user; ",-1),R=s("strong",null,"在可以控制的范围内，让代码尽量可控",-1),V=o(`<ul><li>因为可能后期<u>表结构</u>会根据需求<u>调整</u>，可能会出现没有预料的列出现</li><li>一下就查询到客户的所有信息，<u>容易造成信息泄露</u>，而第二种方法虽然麻烦点，但是安全程度更高</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),K=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&gt;</span><span style="color:#D19A66;">21</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">and</span><span style="color:#ABB2BF;"> sex</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;male&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&gt;=</span><span style="color:#D19A66;">21</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">and</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&lt;=</span><span style="color:#D19A66;">25</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> age </span><span style="color:#C678DD;">between</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">21</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">and</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">25</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">like</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;zhang%&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">like</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;zhang_&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">like</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;%si%&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去重distinct" tabindex="-1"><a class="header-anchor" href="#去重distinct" aria-hidden="true">#</a> 去重<code>distinct</code></h2>`,4),G=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select distinct</span><span style="color:#ABB2BF;"> age </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),H=s("code",null,"group by",-1),P=s("code",null,"group by",-1),W=s("strong",null,"耗时",-1),Y=s("code",null,"distinct",-1),$=o(`<h2 id="空值查询" tabindex="-1"><a class="header-anchor" href="#空值查询" aria-hidden="true">#</a> 空值查询</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">is</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">is not null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),J={id:"union-合并查询",tabindex:"-1"},Z=s("a",{class:"header-anchor",href:"#union-合并查询","aria-hidden":"true"},"#",-1),j=s("code",null,"union",-1),X=s("code",null,"UNION [ALL | DISTINCT]",-1),ss=s("strong",null,"union默认去重，不用修饰distinct",-1),as=o('<figure><img src="'+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&gt;</span><span style="color:#D19A66;">22</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">or</span><span style="color:#ABB2BF;"> sex</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;male&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&gt;</span><span style="color:#D19A66;">22</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">union all</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> sex</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;male&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ns=s("code",null,"or",-1),ls=s("strong",null,"优化",-1),es=s("code",null,"union",-1),os=o('<figure><img src="'+D+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="带in子查询" tabindex="-1"><a class="header-anchor" href="#带in子查询" aria-hidden="true">#</a> 带<code>in</code>子查询</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> age </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">21</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> age </span><span style="color:#C678DD;">not</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">21</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> id </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> id </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&gt;</span><span style="color:#D19A66;">21</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+'" alt="image-20240407162501541" tabindex="0" loading="lazy"><figcaption>image-20240407162501541</figcaption></figure><h2 id="分页查询limit" tabindex="-1"><a class="header-anchor" href="#分页查询limit" aria-hidden="true">#</a> 分页查询<code>limit</code></h2><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">limit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">;	#</span><span style="color:#C678DD;">limit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">3</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">limit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">limit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> offset </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;	#为了兼容其他关系型数据库的分页语法</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="limit只是对select显示条数进行限制了-还是说还能影响sql的查询效率呢" tabindex="-1"><a class="header-anchor" href="#limit只是对select显示条数进行限制了-还是说还能影响sql的查询效率呢" aria-hidden="true">#</a> limit只是对select显示条数进行限制了，还是说还能影响SQL的查询效率呢？</h3><h4 id="mysql是如何查询的" tabindex="-1"><a class="header-anchor" href="#mysql是如何查询的" aria-hidden="true">#</a> mysql是如何查询的</h4><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>mysql是查找名字为“lisi”的记录，是只找前两行还是全部查找后返回第二行？？？</p><h4 id="如何提高查询效率" tabindex="-1"><a class="header-anchor" href="#如何提高查询效率" aria-hidden="true">#</a> 如何提高查询效率？</h4><p>关系型数据库就是二维表，<strong>效率的高低取决于扫描表的数据量</strong> ，扫的少效率就高，扫地多效率就低</p><h4 id="explain查看执行计划" tabindex="-1"><a class="header-anchor" href="#explain查看执行计划" aria-hidden="true">#</a> <code>explain</code>查看执行计划</h4><p><code>explain</code>可以将执行语句的执行过程和一些关键信息罗列出来</p><figure><img src="'+F+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="explain各个字段代表的意思" tabindex="-1"><a class="header-anchor" href="#explain各个字段代表的意思" aria-hidden="true">#</a> explain各个字段代表的意思</h5><ul><li><p><code>id</code> ：select查询的序列号，包含一组数字，表示查询中执行select子句或操作表的顺序</p><ul><li>例子中属于单表搜索，没有联合搜索和多表的查询，因此只有1行</li></ul></li><li><p><code>select_type</code> ：查询类型 或者是 其他操作类型</p><ul><li><code>SIMPLE</code> 简单查询，不包括子查询和<code>union</code>查询</li></ul></li><li><p><code>table</code> ：正在访问哪个表</p></li><li><p><code>partitions</code> ：匹配的分区</p></li><li><p><code>type</code> ：访问的类型</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#D19A66;">NULL</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> system </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> eq_ref </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> ref </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> ref_or_null </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> index_merge </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> range </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> index </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> ALL</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>索引查询是const常量级的时间，表示不管哪个位置查询效率/时间是一样的</strong></li></ul></li><li><p><code>possible_keys</code> ：显示<u>可能应用在这张表中的索引</u>，一个或多个，但不一定实际使用到</p></li><li><p><code>key</code> ：<u>实际使用到的索引</u>，如果为NULL，则没有使用索引</p><ul><li>如果字段类型是<strong>unique，会自动创建一个唯一键索引</strong></li></ul></li><li><p><code>key_len</code> ：表示索引中使用的字节数，可通过该列计算查询中使用的索引的长度</p></li><li><p><code>ref</code> ：显示索引的哪一列被使用了，如果可能的话，是一个常数，哪些列或常量被用于查找索引列上的值</p></li><li><p><code>rows</code> ：表示查询时扫描的行数</p><ul><li><strong>没有加索引就会全文扫描</strong></li><li><strong>是索引，只扫1行</strong></li></ul></li><li><p><code>filtered</code> ：查询的表行占表的百分比</p></li><li><p><code>Extra</code> ：包含不适合在其它列中显示但十分重要的额外信息</p></li></ul><figure><img src="`+C+'" alt="image-20240416141102785" tabindex="0" loading="lazy"><figcaption>image-20240416141102785</figcaption></figure><figure><img src="'+h+'" alt="image-20240416140713583" tabindex="0" loading="lazy"><figcaption>image-20240416140713583</figcaption></figure><h3 id="limit对于查询的作用" tabindex="-1"><a class="header-anchor" href="#limit对于查询的作用" aria-hidden="true">#</a> limit对于查询的作用</h3><p>虽然explain查看执行计划显示全文扫描，实际上mysql看到用户只需要1条数据，查询到就会截至查询并返回；</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',24),ps=o('<h3 id="快速插入海量数据-存储过程" tabindex="-1"><a class="header-anchor" href="#快速插入海量数据-存储过程" aria-hidden="true">#</a> 快速插入海量数据-<strong>存储过程</strong></h3><figure><img src="'+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">delimiter $	#修改语句结束的符号 ; -</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> $</span></span>
<span class="line"><span style="color:#C678DD;">Create</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">Procedure</span><span style="color:#ABB2BF;">  add_t_user (</span><span style="color:#C678DD;">IN</span><span style="color:#ABB2BF;"> n </span><span style="color:#C678DD;">INT</span><span style="color:#ABB2BF;">)	#add_t_user 函数名字；n为int型输入变量, out可以定义输出变量 </span></span>
<span class="line"><span style="color:#C678DD;">BEGIN</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;">DECLARE</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">INT</span><span style="color:#ABB2BF;">; #声明变量, 赋初值也可以这样写declare i </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#C678DD;">SET</span><span style="color:#ABB2BF;"> i</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; #如果不修改语句结束符这里分号;代表着语句的结束</span></span>
<span class="line"><span style="color:#C678DD;">WHILE</span><span style="color:#ABB2BF;"> i</span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;">n DO #循环条件i</span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;">n  循环开始DO</span></span>
<span class="line"><span style="color:#C678DD;">INSERT INTO</span><span style="color:#ABB2BF;"> t_user </span><span style="color:#C678DD;">VALUES</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">NULL</span><span style="color:#ABB2BF;">,</span><span style="color:#56B6C2;">CONCAT</span><span style="color:#ABB2BF;">(i+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&#39;@ﬁxbug.com&#39;</span><span style="color:#ABB2BF;">),i+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">); </span></span>
<span class="line"><span style="color:#C678DD;">SET</span><span style="color:#ABB2BF;"> i</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">i+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#C678DD;">END</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">WHILE</span><span style="color:#ABB2BF;">; #开始循环不加分号，结束循环需要加</span></span>
<span class="line"><span style="color:#C678DD;">END</span><span style="color:#ABB2BF;">$ #函数结束</span></span>
<span class="line"><span style="color:#ABB2BF;">delimiter ; #修改回来</span></span>
<span class="line"><span style="color:#C678DD;">call</span><span style="color:#ABB2BF;"> add_t_user(</span><span style="color:#D19A66;">2000000</span><span style="color:#ABB2BF;">); #调用</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4),rs=s("h3",{id:"limit实际应用的优化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#limit实际应用的优化","aria-hidden":"true"},"#"),a(" limit实际应用的优化")],-1),ts=s("figure",null,[s("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),cs=s("figure",null,[s("img",{src:x,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),is=o('<figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="排序order-by" tabindex="-1"><a class="header-anchor" href="#排序order-by" aria-hidden="true">#</a> 排序order by</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> id,nickname,</span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> sex</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;M&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">and</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&gt;=</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">and</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&lt;=</span><span style="color:#D19A66;">25</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">order by</span><span style="color:#ABB2BF;"> age </span><span style="color:#C678DD;">asc</span><span style="color:#ABB2BF;">; #以age升序，不写默认也是升序</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> id,nickname,</span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> sex</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;M&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">and</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&gt;=</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">and</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&lt;=</span><span style="color:#D19A66;">25</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">order by</span><span style="color:#ABB2BF;"> age </span><span style="color:#C678DD;">desc</span><span style="color:#ABB2BF;">; #以age降序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> id,nickname,</span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">,age,sex </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> sex</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;M&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">and</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&gt;=</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">and</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&lt;=</span><span style="color:#D19A66;">25</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">order by</span><span style="color:#ABB2BF;"> age,</span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">asc</span><span style="color:#ABB2BF;">; #总体以age升序，当age相同时再以name升序</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="image-20240416155709023" tabindex="0" loading="lazy"><figcaption>image-20240416155709023</figcaption></figure><p>当数据量比较大时order by可能会出现比较耗时情况，然后通过explain查看执行计划，发现这条语句涉及到了外排序</p>',6),Bs=s("li",null,"外排序涉及到了磁盘IO，所以慢",-1),ds=s("strong",null,"外排序",-1),ys={href:"https://blog.csdn.net/CS_COPy/article/details/121621856",target:"_blank",rel:"noopener noreferrer"},Ds=o(`<p>优化：</p><ol><li>order by后以索引进行排序</li><li>注意select后的字段是否涉及到了回表查询</li></ol><h2 id="分组group-by" tabindex="-1"><a class="header-anchor" href="#分组group-by" aria-hidden="true">#</a> 分组group by</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> age,</span><span style="color:#56B6C2;">count</span><span style="color:#ABB2BF;">(age) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> count </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;"> age;</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> age,</span><span style="color:#56B6C2;">count</span><span style="color:#ABB2BF;">(age) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> count </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;"> age </span><span style="color:#C678DD;">having</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&gt;</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">; #可以使用having对order by结果进行过滤</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> age,</span><span style="color:#56B6C2;">count</span><span style="color:#ABB2BF;">(age) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> count </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> age</span><span style="color:#56B6C2;">&gt;</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;"> age;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',5),gs=o('<figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="mysql5-7-group-by会自动排序-mysql8-0没有" tabindex="-1"><a class="header-anchor" href="#mysql5-7-group-by会自动排序-mysql8-0没有" aria-hidden="true">#</a> MySQL5.7 group by会自动排序，MySQL8.0没有</h3><h4 id="mysql5-7" tabindex="-1"><a class="header-anchor" href="#mysql5-7" aria-hidden="true">#</a> MySQL5.7</h4><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>MySQL5.7分析explain可以看到涉及到了外排序</strong></li></ul><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7),us=o('<h4 id="mysql8-0" tabindex="-1"><a class="header-anchor" href="#mysql8-0" aria-hidden="true">#</a> MySQL8.0</h4><figure><img src="'+I+'" alt="image-20240416170741355" tabindex="0" loading="lazy"><figcaption>image-20240416170741355</figcaption></figure><figure><img src="'+T+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p><strong>order by和group by性能都和索引相关</strong></p><h3 id="练习题" tabindex="-1"><a class="header-anchor" href="#练习题" aria-hidden="true">#</a> 练习题</h3><p>下表bank_bill是某银行代缴话费的主流水表结构：</p><table><thead><tr><th>字段名</th><th>描述</th></tr></thead><tbody><tr><td>serno</td><td>流水号</td></tr><tr><td>date</td><td>交易日期</td></tr><tr><td>accno</td><td>账号</td></tr><tr><td>name</td><td>姓名</td></tr><tr><td>amount</td><td>金额</td></tr><tr><td>brno</td><td>缴费网点</td></tr></tbody></table><p>1、统计表中缴费的总笔数和总金额</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">count</span><span style="color:#ABB2BF;">(serno),</span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(amount) </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> bank_bill;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、给出一个sql，按网点和日期统计每个网点每天的营业额，并按照营业额进行倒序排序</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> brno,</span><span style="color:#C678DD;">date</span><span style="color:#ABB2BF;">,</span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(amount) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">money</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> bank_bill </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;"> brno,</span><span style="color:#C678DD;">date</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">order by</span><span style="color:#ABB2BF;"> brno,mone </span><span style="color:#C678DD;">desc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12);function ms(As,Fs){const l=p("font"),r=p("ExternalLinkIcon");return c(),i("div",null,[O,s("ul",null,[s("li",null,[s("p",null,[U,a("很少使用"),Q,a("，而是"),n(l,{color:"red"},{default:e(()=>[a("需要哪些字段写哪些字段")]),_:1}),a("（"),n(l,{color:"green"},{default:e(()=>[R]),_:1}),a("）")]),V]),s("li",null,[s("p",null,[a("select后面选择的具体的列需要具体考虑，因为会涉及**"),n(l,{color:"cornflowerblue"},{default:e(()=>[a("回表")]),_:1}),a("**问题，回表会降低查询效率")])])]),K,s("p",null,[a("查看哪个年龄段有分布-"),n(l,{color:"red"},{default:e(()=>[a("去重")]),_:1})]),G,s("p",null,[a("虽然"),H,a("也能去重，但是"),P,a("功能强大也"),W,a("，"),n(l,{color:"red"},{default:e(()=>[a("仅仅需要去重")]),_:1}),a("可以使用"),Y]),$,s("h2",J,[Z,a(),j,a(),n(l,{color:"green"},{default:e(()=>[a("合并")]),_:1}),a("查询")]),s("p",null,[X,a(" # 注意："),ss,a("，"),s("strong",null,[n(l,{color:"green"},{default:e(()=>[a("all表示显示所有重复值")]),_:1})])]),as,s("p",null,[a("仅看=="),n(l,{color:"red"},{default:e(()=>[ns,a("是无法使用索引的，但是mysql server会对sql进行"),ls,a("的，将其转换成"),es,a("就可以使用索引了")]),_:1}),a("==")]),os,s("ul",null,[s("li",null,[n(l,{color:"red"},{default:e(()=>[a("**对于mysql server的优化explain实际上是显示不出来的**")]),_:1})])]),ps,n(l,{color:"red"},{default:e(()=>[a("**没有索引的情况下，添加limit可以提高查询效率**")]),_:1}),rs,ts,cs,s("p",null,[a("分页查询中，"),n(l,{color:"red"},{default:e(()=>[a("使用limit主要性能消耗在偏移")]),_:1}),a("上，因此**"),n(l,{color:"green"},{default:e(()=>[a("可以通过索引先找到上一页数据的最后一条，然后再使用limit过滤")]),_:1}),a("**")]),is,s("ul",null,[Bs,s("li",null,[a("如果数据量太大，无法一次性弄到内存中怎么办呢？这种情况下的排序称为"),ds,a("。"),s("a",ys,[a("外排序——归并思想的实现_外排序归并问题的算法思想-CSDN博客"),n(r)])])]),Ds,s("p",null,[s("strong",null,[n(l,{color:"red"},{default:e(()=>[a("更推荐使用where，因为where可以使用索引")]),_:1})])]),gs,s("ul",null,[s("li",null,[n(l,{color:"red"},{default:e(()=>[a("**group by也能通过使用索引提升效率**")]),_:1})])]),us])}const bs=t(M,[["render",ms],["__file","select查询.html.vue"]]);export{bs as default};
