import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as t,c,d as s,e as n,f as e,w as a,a as i}from"./app--8O2lHwG.js";const p="/assets/516bc66a190e4369b11cd34fa4262342-Dbl70-xC.png",d="/assets/image-20240421154811672-YCbEowro.png",B={},u=i(`<h1 id="sql的完整处理流程" tabindex="-1"><a class="header-anchor" href="#sql的完整处理流程" aria-hidden="true">#</a> SQL的完整处理流程</h1><p>mysql client和 mysql server进行通信的时候，如果走完所有的MySQL Server模块，需要依次经过连接器、解析器、优化器、执行器、存储引擎</p><ol><li><strong>连接器</strong>：使用<strong>TCP加密的ssl通信协议</strong>，<u>管理连接，控制最大连接量，检测连接时长（长时间不通信会断开，释放连接资源），权限验证（账号密码等），查询缓存（两次同样的select之间有更新操作，缓存会清空）</u></li><li><strong>解析器</strong>：生成语法树，<u>解析SQL词法以及语法分</u>析</li><li><strong>优化器</strong>：<u>生成执行计划，选择索引</u>（explain可查看）</li><li><strong>执行器</strong>：<u>调用存储引擎提供的相应API接口进行数据的读写</u></li><li><strong>存储引擎</strong>：<u>读写磁盘数据，构建B+树索引，事务日志（undo log/redo log），锁机制，隔离级别…</u></li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">BaseEngine</span><span style="color:#ABB2BF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">MyISAM</span><span style="color:#ABB2BF;"> : </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">BaseEngine</span><span style="color:#ABB2BF;">{}</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">InnoDB</span><span style="color:#ABB2BF;"> : </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">BaseEngine</span><span style="color:#ABB2BF;">{}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>基类向外提供统一的接口，基类指针指向哪个对象，就调用哪个存储引擎类的方法</li></ul><p>MySQL server相当于可以划分成3个模块（红色框）：</p><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7),g=s("strong",null,"负责关闭这个连接，回收这个连接的资源",-1),_=s("figure",null,[s("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1);function y(m,f){const l=r("font");return t(),c("div",null,[u,s("p",null,[n("如果单纯的"),s("u",null,[n("一次通信，client拿到结果，会"),e(l,{color:"red"},{default:a(()=>[n("主动关闭连接")]),_:1})]),n("。"),s("u",null,[n("MySQL Server这边由"),e(l,{color:"red"},{default:a(()=>[n("连接器")]),_:1}),g])]),_])}const h=o(B,[["render",y],["__file","SQL的完整处理流程.html.vue"]]);export{h as default};
