import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as i,d as s,e,f as a,w as n,a as o}from"./app-mYdPlPhZ.js";const c={},d=s("h1",{id:"server-层四个日志",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#server-层四个日志","aria-hidden":"true"},"#"),e(" Server 层四个日志")],-1),_=s("h2",{id:"一、mysql-server层日志简介",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#一、mysql-server层日志简介","aria-hidden":"true"},"#"),e(" 一、MySQL Server层日志简介")],-1),F=s("p",null,"一个mysql client发起一个连接请求，处理请求的过程如下图所示：",-1),g=s("p",null,"![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16.png)",-1),h=s("p",null,"MySQL日志是在MySQL server上生成的，不管更改哪个存储引擎，这些日志都是需要有的，包括：",-1),b=s("strong",null,"错误日志",-1),y=s("strong",null,"查询日志",-1),u=s("u",null,"由于上线项目的SQL太多了，开启查询日志IO太多导致MySQL效率低下，我们一般都不会开启查询日志，只有调试时才开启",-1),B=s("strong",null,"二进制日志",-1),m=s("strong",null,"主从复制技术",-1),v=s("strong",null,"慢查询日志",-1),A=o(`<h3 id="查看日志相关变量" tabindex="-1"><a class="header-anchor" href="#查看日志相关变量" aria-hidden="true">#</a> 查看日志相关变量</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">mysql</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> show variables </span><span style="color:#C678DD;">like</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;log%&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>![](Server 层四个日志.assets/image-20240421014049849.png)</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">show variables #查看变量</span></span>
<span class="line"><span style="color:#ABB2BF;">show </span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;"> #查看状态</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、配置文件参数" tabindex="-1"><a class="header-anchor" href="#二、配置文件参数" aria-hidden="true">#</a> 二、配置文件参数</h2><p><strong>my.cnf</strong></p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_19,color_FFFFFF,t_70,g_se,x_16.png)</p>`,7),Q=s("p",null,[e("linux下重启mysqld服务的命令："),s("code",null,"sudo service mysqld restart")],-1),x=s("p",null,[e("我们查看一下配置文件 "),s("code",null,"/etc/mysql/mysql.conf.d/mysqld.cnf ")],-1),S=s("p",null,"![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_16,color_FFFFFF,t_70,g_se,x_16.png)",-1),q=s("li",null,[s("p",null,"给出log-error的路径就是开启了log-error，如果不自定义log-error的路径，默认在data_dir")],-1),f=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">expire_log_days</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、错误日志" tabindex="-1"><a class="header-anchor" href="#三、错误日志" aria-hidden="true">#</a> 三、错误日志</h2><p>错误日志是 MySQL 中最重要的日志之一，<strong>它记录了mysqld 启动和停止，以及服务器在运行过程中发生任何严重错误（coredump，error，exception…）时的相关信息</strong>。当数据库出现故障导致无法正常使用时，可以首先查看此日志</p><p>mysqld 使用的错误日志名为 host_name.err(host_name 为主机名) ，并默认在参数data_dir(数据目录)指定的目录中写入日志文件</p><p>![](Server 层四个日志.assets/image-20240421114121369.png)</p><p>![](Server 层四个日志.assets/image-20240421114020759.png)</p><h2 id="四、查询日志" tabindex="-1"><a class="header-anchor" href="#四、查询日志" aria-hidden="true">#</a> 四、查询日志</h2><p>查询日志记录了client发送的所有SQL语句</p>`,8),k=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">show </span><span style="color:#C678DD;">global</span><span style="color:#ABB2BF;"> variables </span><span style="color:#C678DD;">like</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;%genera%&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>![](Server 层四个日志.assets/01caeb58b8a141a390482e91923d36bc.png)</p><p>打开全局变量general_log开关：</p><p>![](Server 层四个日志.assets/d76e9880719c4ff181c3b1841cf71a97.png)</p><h2 id="五、二进制日志" tabindex="-1"><a class="header-anchor" href="#五、二进制日志" aria-hidden="true">#</a> 五、二进制日志</h2><blockquote><p><strong>不是明文(记录数据库的详细内容，明文不安全)，不能直接查看，需要通过mysqlbinlog工具（mysql原生自带）解析binlog日志文件</strong></p></blockquote>`,6),L=s("p",null,"语句以“事件”的形式保存，它描述了数据的更改过程。二进制日志对于灾难时的数据恢复起着极其重要的作用。",-1),w=o(`<p><strong>主从复制</strong>：<u>主库所有的更新操作（update、delete、insert、alter …）都记录在binlog中，从库读主库的binlog，把binlog的所有操作在从库上在进行一遍</u></p><p>查看当前的binlog：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">show </span><span style="color:#C678DD;">binary</span><span style="color:#ABB2BF;"> logs;  </span><span style="color:#7F848E;font-style:italic;">-- show master logs;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>![](Server 层四个日志.assets/d508ea09b0b44e77a66982dbe8894d08.png)</p><p>binlog默认在MySQL的配置文件<code>/etc/mysql/my.cnf</code>配置的data_dir下</p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16-171363507402613.png)</p><h3 id="_1-演示binlog记录更改" tabindex="-1"><a class="header-anchor" href="#_1-演示binlog记录更改" aria-hidden="true">#</a> 1. 演示binlog记录更改</h3><p>我们先刷新一下，生成一个新的binlog</p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_11,color_FFFFFF,t_70,g_se,x_16.png)</p><p>切换数据库</p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_18,color_FFFFFF,t_70,g_se,x_16.png)</p><p>更改一下数据</p><p>![](Server 层四个日志.assets/58acce702aa9441a86491432ea8315c3.png)</p><p>再次查看binlog</p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_11,color_FFFFFF,t_70,g_se,x_16-171363514679822.png)</p><p>我们发现日志的filesize从154字节—&gt;710字节，肯定记录我们刚才的数据更改操作</p><p>如果我们直接cat日志查看，会发现不是明文，无法直接查看</p><p>![](Server 层四个日志.assets/9c810ccb629b445eaa9205e384e5e415.png)</p><p>我们需要通过mysqlbinlog进行查看，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">mysqlbinlog</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--no-defaults</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--database=school</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--base64-output=decode-rows</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-v</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--start-datetime=</span><span style="color:#98C379;">&#39;2022-03-01 00:00:00&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--stop-datetime=</span><span style="color:#98C379;">&#39;2022-03-31 00:00:00&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">mysql-bin.000003</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">more</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>database：指定查看某个库的更改</p></li><li><p>base64-output：binlog解码方式</p></li><li><p>start-datetime &amp; stop-datetime：指定查看某个时间段内的更改，不写则查看所有的更改</p></li><li><p>mysql-bin.000003：查看的二进制日志文件路径</p></li></ul><p>我们查看一下binlog</p><p>![](Server 层四个日志.assets/0aff49012e1e4ad5ba404436fed4022e.png)</p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16-171363526798929.png)</p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16-171363528522132.png)</p><ul><li>@1、@2、@3、@4：表示数据库表的4个字段</li><li>server id：表示我们在<code>my.cnf</code>中设置的id，用于标识当前MySQL的身份</li><li>at 565、at 621：<u>指的是当前事件在binlog记录的位置，数据恢复的时候使用</u></li></ul><h3 id="_2-演示binlog数据恢复" tabindex="-1"><a class="header-anchor" href="#_2-演示binlog数据恢复" aria-hidden="true">#</a> 2. 演示binlog数据恢复</h3><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_11,color_FFFFFF,t_70,g_se,x_16-171363531440435.png)</p><p>现在创建数据库mytest，并创建表，添加数据</p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_16,color_FFFFFF,t_70,g_se,x_16-171363533193338.png)</p><p>假如现在有人把库删除了：</p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_14,color_FFFFFF,t_70,g_se,x_16.png)</p>`,32),T=s("p",null,"我们现在知道，我们建库、建表、插入数据的操作都记录在mysql-bin.00003文件中",-1),D=s("p",null,"![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_12,color_FFFFFF,t_70,g_se,x_16.png)",-1),X=s("code",null,"flush logs",-1),E=o(`<p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_10,color_FFFFFF,t_70,g_se,x_16.png)</p><p>我们先查看mysql-bin.00003，找需要恢复的区间</p><p>![](Server 层四个日志.assets/image-20240421015016270.png)</p><p>从mysql-bin.000003中拿出区间内所有的操作，通过管道放到MySQL shell上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">mysqlbinlog</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--start-position=775</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--stop-position=1410</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">binlog.000003</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">mysql</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-uroot</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-p</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>![](Server 层四个日志.assets/d3b2c91361144652ae6c23c89c4b300e.png)</p><p>start-position和stop-position表示<strong>左闭右开区间</strong>：[start-position, stop-position)</p><p>查看一下当前的库</p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_9,color_FFFFFF,t_70,g_se,x_16.png)</p><p>再查看一下表和数据</p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16-171363548398851.png)</p><p>到这里，数据已经全部恢复了</p><p>我们不仅可以通过binlog记录的位置，得到需要恢复的区间，<strong>也可以通过binlog记录的时间得到需要恢复的区间</strong></p><p>![](Server 层四个日志.assets/808c1b4abe9b4249acdb95968b5c7109.png)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">mysqlbinlog</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--start-datetime=</span><span style="color:#98C379;">&#39;2021-05-06 04:34:32&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--stop-datetime=</span><span style="color:#98C379;">&#39;2022-04-24 04:36:02&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">binlog.000003</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">mysql</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-uroot</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-p</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数为：start-datetime、stop-datetime，也是<strong>左闭右开区间</strong></p>`,16),N=s("code",null,".sql",-1),V=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">mysql</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> source ~/</span><span style="color:#D19A66;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sql</span><span style="color:#ABB2BF;"> #备份文件的恢复</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">$cat ~/</span><span style="color:#D19A66;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sql</span><span style="color:#ABB2BF;"> | mysql -u  </span><span style="color:#C678DD;">root</span><span style="color:#ABB2BF;"> -p #shell命令恢复备份数据</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql数据恢复小结" tabindex="-1"><a class="header-anchor" href="#mysql数据恢复小结" aria-hidden="true">#</a> MysqL数据恢复小结</h3><p>![](Server 层四个日志.assets/image-20240421115737534.png)</p><p>MySQL数据恢复分为两部分，一部分由数据备份完成，另一部分由bin-log完成</p><ul><li>如果设置日志过期时间为7天，那么我们可以每七天备份一次</li><li>七天以内的数据恢复由bin-log完成</li><li>超过七天的数据备份在sql脚本，如备份在~/data.sql中</li><li>恢复备份文件 <code>source ~/data.sql </code></li></ul><h2 id="六、慢查询日志" tabindex="-1"><a class="header-anchor" href="#六、慢查询日志" aria-hidden="true">#</a> 六、慢查询日志</h2><p><strong>MySQL可以设置慢查询日志，当SQL执行的时间超过我们设定的时间，那么这些SQL就会被记录在慢查询日志当中</strong></p><p>我们通过查看日志，用explain分析这些SQL的执行计划，来判定为什么效率低下，是没有使用到索引？还是索引本身创建的有问题？或者是索引使用到了，但是由于表的数据量太大，花费的时间就是很长，那么此时我们可以把表分成n个小表，比如订单表按年份分成多个小表等</p><p>慢查询日志相关的参数如下所示：</p><p>![](Server 层四个日志.assets/46a5eb2d893d4b059475252bb4a70b69.png)</p><p>慢查询日志记录了包含所有执行时间超过参数 long_query_time（单位：秒）所设置值的 SQL语句的日志，在MySQL上用命令可以查看，如下：</p><p>![](Server 层四个日志.assets/eb0bab49501445e3aaf1c8251a48515e.png)</p><p>这个值是可以修改的：</p><p>![](Server 层四个日志.assets/14ba37259316444580233aac35698e7b.png)</p><p>现在修改成执行时间超过1秒的SQL都会被记录在慢查询日志当中！可以设置为0.01秒，表示10毫秒</p><p>慢查询日志，默认名称是host_name-slow.log，存放在MySQL的配置文件<code>/etc/mysql/my.cnf</code>配置的data_dir下，内容格式显示大致如下：</p><p>![](Server 层四个日志.assets/9433aa85c0e746a89a74883d5a0daa01.png)</p><p><code>show profiles</code>命令可有查看sql详细的运行时间，全局变量的名字是：profiling</p><p>首先需要：<code>set profiling=on</code></p><p>![](Server 层四个日志.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16-171363566787064.png)</p>`,20);function C(I,z){const l=t("font");return p(),i("div",null,[d,_,F,g,h,s("ul",null,[s("li",null,[s("p",null,[b,e("：记录mysqld服务运行过程中出现的"),a(l,{color:"red"},{default:n(()=>[e("coredump、error、exception")]),_:1}),e("等")])]),s("li",null,[s("p",null,[y,e("：记录MySQL Server收到的"),a(l,{color:"red"},{default:n(()=>[e("所有增删改查SQL")]),_:1}),e("。"),u])]),s("li",null,[s("p",null,[B,e("："),a(l,{color:"red"},{default:n(()=>[e("记录数据的更改（insert、update、delete、alter …）")]),_:1}),e("，非常重要，可用于数据恢复，主从复制。"),a(l,{color:"red"},{default:n(()=>[m,e("依赖于log-bin")]),_:1}),e("，"),a(l,{color:"green"},{default:n(()=>[e("主库所有的更改操作都记录在log-bin里，从库从log-bin读取主库所有的操作，自己再执行一遍。")]),_:1})])]),s("li",null,[s("p",null,[v,e("："),a(l,{color:"red"},{default:n(()=>[e("记录了一些执行时间超过指定值的SQL语句")]),_:1}),e("，可供开发人员分析耗时SQL，从而针对性优化")])])]),A,a(l,{color:"red"},{default:n(()=>[e("通过set方法只能影响当前session，session关闭后设置失效，如果想要配置永久有效，需要在配置文件上进行设置，然后重启MySQL服务，就可以永久生效")]),_:1}),Q,x,S,s("ul",null,[q,s("li",null,[s("p",null,[s("strong",null,[a(l,{color:"red"},{default:n(()=>[e("在开启log-bin=mysql-bin的同时还要加上server-id=1(表示当前MySQL Server的身份），否则sudo service mysqld restart无法重启服务")]),_:1})])])]),s("li",null,[a(l,{color:"red"},{default:n(()=>[e("设置过期的时间`expire_log_days`，因为总有一天磁盘会被这个日志占满，导致服务器不可运行，超过设置时间后日志文件会被删除")]),_:1})])]),f,s("p",null,[e("由于上线项目sql特别多，开启查询日志IO太多导致MySQL效率低，我们一般都不会开启，"),s("strong",null,[e("只有在调试时才开启，比如通过"),a(l,{color:"red"},{default:n(()=>[e("查看sql发现热点数据")]),_:1}),e("从而可以进行缓存")])]),k,s("p",null,[e("二进制日志(BINLOG)记录了所有的 DDL(数据定义语言)语句和 DML(数据操纵语言) 语句，但是不包括数据查询语句（"),a(l,{color:"red"},{default:n(()=>[e("不记录select操作，记录的是数据库的更改操作")]),_:1}),e("）")]),L,s("p",null,[e("两个重要的应用场景："),s("strong",null,[a(l,{color:"green"},{default:n(()=>[e("主从复制、数据恢复")]),_:1})])]),w,a(l,{color:"red"},{default:n(()=>[e("这时mytest库的所有表和数据都没有了，然而这些操作都会记录在二进制日志binlog里面")]),_:1}),a(l,{color:"green"},{default:n(()=>[e("理论上来说，可以从binlog把丢失的数据恢复出来。由于恢复过程也是对数据的修改，所以恢复过程产生的日志也要记录在binlog中，这就需要我们指定binlog恢复区间")]),_:1}),T,D,s("p",null,[s("strong",null,[e("我们现在"),a(l,{color:"red"},{default:n(()=>[X,e("刷新一下，生成一个新的binlog")]),_:1}),e("，这就可以让我们接下来数据恢复的操作被记录在mysql-bin.00004文件中，而不会在追加到mysql-bin.00003")])]),E,s("p",null,[s("strong",null,[a(l,{color:"green"},{default:n(()=>[e("由于binlog有一个过期时间，过期的日志数据都会备份到磁盘上的"),N,e("脚本文件中")]),_:1})]),e("，没有过期的数据可以直接通过binlog恢复，如果"),a(l,{color:"red"},{default:n(()=>[e("需要恢复过期的数据")]),_:1}),e("，通过以下命令即可：")]),V])}const Z=r(c,[["render",C],["__file","Server 层四个日志.html.vue"]]);export{Z as default};
