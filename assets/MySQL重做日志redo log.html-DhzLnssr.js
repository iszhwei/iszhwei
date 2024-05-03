import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as i,c,d as o,e,f as r,w as t,a as d}from"./app-mYdPlPhZ.js";const g={},a=o("h1",{id:"mysql重做日志redo-log",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#mysql重做日志redo-log","aria-hidden":"true"},"#"),e(" MySQL重做日志redo log")],-1),_=o("p",null,"在事务的ACID特性中，原子性（A）、一致性（C）、持久性（D）由undo log和redo log实现，隔离性（I）由锁+MVCC实现",-1),m=o("strong",null,"undo log",-1),u=o("u",null,"事务还没有commit，中途执行异常，可以使用undo log把数据恢复到事务执行前的状态，确保事务的原子性",-1),p=o("strong",null,"redo log",-1),f=o("strong",null,"确保事务的持久性",-1),h=o("h2",{id:"一、redo-log概念",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#一、redo-log概念","aria-hidden":"true"},"#"),e(" 一、redo log概念")],-1),b=o("strong",null,"redo log",-1),Q=o("strong",null,"物理日志",-1),y=o("strong",null,"操作的变化",-1),F=o("strong",null,"undo log",-1),L=o("strong",null,"逻辑日志",-1),x=o("strong",null,"SQL语句",-1),S=d("<p>redo log默认放在<code>/var/lib/mysql</code>下</p><p>![](MySQL重做日志redo log.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_15,color_FFFFFF,t_70,g_se,x_16.png)</p><p><strong>redo log是在事务begin时就开始记录</strong>（并不是事务commit时才记录，因为整个事务做的操作可能很多，如果在commit的时候才写redo log，此时一旦发生异常，redo log还没写，这就太晚了，无法确保事务的持久性），<strong>不管事务是否提交都会记录下来</strong>，在异常发生时（如数据持久化过程中掉电），InnoDB会使用redo log恢复到掉电前的时刻，保证数据的完整性</p><p><strong><code>innodb_log_buffer_size</code>默认是16M，就是redo log缓冲区的大小</strong>，它随着事务开始，就开始写redo log，<u>如果事务比较大，为了避免事务执行过程中花费过多磁盘IO，可以设置比较大的redo log缓存，节省磁盘IO</u>。往磁盘上刷是有刷新的时机，达到时机就花费磁盘IO，如果buffer比较大，会更慢的达到刷新的时机，效率更高。</p><p>![](MySQL重做日志redo log.assets/f60d9030542748d68ba123288bd2f366.png)</p><p>**InnoDB修改操作数据，不是直接修改磁盘上的数据，实际只是修改Buffer Pool中的数据。**InnoDB总是先把Buffer Pool中的数据改变记录到redo log中，用来进行崩溃后的数据恢复。 <u><strong>优先记录redo log</strong>，然后会有一个独立的线程找时机慢慢的将Buffer Pool中的脏数据刷新到磁盘上（异步过程）</u></p><p><code>innodb_log_group_home_dir</code>指定的目录下的两个文件：<code>ib_logfile0，ib_logfile1</code>，该文件被称作重做日志</p>",7),B=o("strong",null,"buffer pool缓存池",-1),I=o("strong",null,"索引缓存、数据缓存",-1),M=d('<p>buffer pool大致结构如图所示：</p><p>![](MySQL重做日志redo log.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16.png)</p><p>事务读取，修改都是优先操作缓存池中的数据。<u>在实际项目中，mysqld会单独的跑在一个机器上，可以分配大量的内存专门作为InnoDB的buffer pool，加快CRUD</u></p><p><strong>buffer pool默认大小为128M</strong>（MySQL 5.7和8.0一样）</p><p>![](MySQL重做日志redo log.assets/e9dcd78f6d444a1d869a00b6bac9028f.png)</p><h2 id="二、缓存、磁盘结构" tabindex="-1"><a class="header-anchor" href="#二、缓存、磁盘结构" aria-hidden="true">#</a> 二、缓存、磁盘结构</h2><p>![](MySQL重做日志redo log.assets/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQnVnTWFrZXItc2hlbg==,size_20,color_FFFFFF,t_70,g_se,x_16-17136210429909.png)</p>',7),k=o("strong",null,"事务commit",-1),D=o("p",null,[o("mark",null,"log在写入磁盘的过程中也有可能发生异常，断电等问题，导致在写redo log的时候没有写完（这相当于事务没有commit成功），此时MySQL下次再恢复的时候就没有必要考虑这个事务的完整性，因为状态并不是commit，都写入磁盘上才表示redo log写成功，状态才变成commit，状态变成commit后需要维护事务的ACID特性。")],-1),q=o("h3",{id:"是不是commit的时候-buffer-pool里面的脏数据-数据有被修改-同步被写入磁盘",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#是不是commit的时候-buffer-pool里面的脏数据-数据有被修改-同步被写入磁盘","aria-hidden":"true"},"#"),e(" 是不是commit的时候，buffer pool里面的脏数据（数据有被修改）同步被写入磁盘？")],-1),w=o("p",null,[e("并不需要等commit的时候才开始。事务可能修改的数据量比较大，而缓存容量有限，"),o("u",null,"对于buffer pool缓存的数据，会有专门的线程在合适的时间，往磁盘上去刷新，如果出现掉电，下一次MySQL启动后，会根据redo log里面记录的数据，对数据进行恢复"),e("。所以当事务commit后，"),o("strong",null,"最重要的是redo log要写成功")],-1),C=o("h3",{id:"undo-log本身也是记录在redo-log中",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#undo-log本身也是记录在redo-log中","aria-hidden":"true"},"#"),e(" undo log本身也是记录在redo log中")],-1),V=o("mark",null,"回滚过程也会出现异常，下次服务重启时，需要使用undo log重新回滚，所以undo log要记录在redo log里面。事务commit成功或者rollback成功，对于底层，都是成功的把操作写到磁盘上的redo log里面",-1),N=d('<h3 id="什么是真正的事务commit成功" tabindex="-1"><a class="header-anchor" href="#什么是真正的事务commit成功" aria-hidden="true">#</a> 什么是真正的事务commit成功？</h3><p>不是把数据全部刷到磁盘，而是<mark>把记录事务完整操作的redo log从log buffer写入磁盘，再把被修改数据的状态置为commit才算是实现了事务commit成功</mark>。此时虽然数据还在buffer pool，但只要我们的redo log保存完整，数据就可以恢复，会有专门的线程去负责把buffer pool里的数据写入磁盘</p><blockquote><p>一个事务commit成功通常涉及以下几个关键步骤：</p><ol><li><strong>Redo Log的写入</strong>：在事务执行过程中，所有对数据的修改操作都会被记录在redo log中。这些redo log首先被写入log buffer，然后在事务提交时，会被刷新（flush）到磁盘上的redo log文件中。这一步是确保事务持久性的关键，因为如果系统崩溃，redo log可以用来恢复数据到事务提交时的状态。</li><li><strong>数据页状态的更改</strong>：在InnoDB存储引擎中（以MySQL为例），数据通常保存在buffer pool中，这是一个内存缓存，用于加速数据的读取和写入。当事务提交时，被修改的数据页的状态会被标记为“commit”。这意味着这些页上的修改是持久的，即使它们还没有被刷新到磁盘上的数据文件中。</li><li><strong>后台的I/O操作</strong>：尽管数据页可能还在buffer pool中，但后台的I/O线程会异步地将这些页刷新到磁盘。这个过程是异步的，它不会影响事务的提交。即使刷新过程中发生了错误，由于有redo log的存在，数据仍然可以恢复。</li></ol></blockquote><h3 id="什么叫事务commit成功-和上面的问题一样" tabindex="-1"><a class="header-anchor" href="#什么叫事务commit成功-和上面的问题一样" aria-hidden="true">#</a> 什么叫事务commit成功？（和上面的问题一样）</h3><p>事务执行commit命令后，mysqld将记录了数据修改的Log Buffer写入磁盘上的redo log，然后将这部分数据的状态修改为commit，写完redo log后才算是事务提交成功，MySQL Server需要保持commit状态的数据的持久性。如果写redo log失败，数据的状态还是prepare，尽管事务执行了commit命令，这依然不算commit成功</p><hr><p>事务进行操作的时候，永远是先写log buffer，然后才是写buffer pool；事务成功commit，就是要保证redo log完整记录到磁盘上</p><p>至于表数据的更改，buffer pool的脏数据页是不是刷新到磁盘上，我们根本不用担心，只要redo log完整的写到磁盘上，我们可以随时通过redo log重做日志来恢复事务成功commit的数据状态（数据库最重要的是日志，而不是数据）</p>',8);function T(A,X){const l=s("font");return i(),c("div",null,[a,_,o("p",null,[m,e("："),u,p,e("："),o("u",null,[e("事务commit成功，"),r(l,{color:"red"},{default:t(()=>[e("由于更新磁盘数据需要一段时间")]),_:1}),e("，此时若发生异常，就要使用redo log重新执行这一事务的SQL，"),f]),e("（只要事务commit成功，不管发生什么异常事件，只要下一次MySQL服务正常进行，那上一次commit的数据一定要恢复回来）")]),h,o("p",null,[b,e("：被称为"),Q,e("，用于记录事务"),y,e("，确保事务的持久性。"),r(l,{color:"red"},{default:t(()=>[e("事务begin就开始记录")]),_:1}),e("，无论事务是否commit都会记录，若异常发生，下一次mysqld再启动时，会使用redo log将数据重新写入磁盘，确保事务的持久性。"),r(l,{color:"red"},{default:t(()=>[e("记录的就是最终修改后的按页面存储的数据页，直接存数据最终的状态")]),_:1})]),o("p",null,[F,e("：被称为"),L,e("，存储的是具体的相应的"),x,e("。"),r(l,{color:"green"},{default:t(()=>[e("如果现在执行的是insert，回滚的时候就执行delete；如果现在执行的update，就把原来的旧值再update回来")]),_:1})]),S,o("p",null,[B,e("： 可存放"),I,e("等，可加速读写，直接操作数据页，"),r(l,{color:"red"},{default:t(()=>[e("写redo log修改就算完成")]),_:1}),e("，有专门的线程去做把buffer pool中的dirty page写入磁盘")]),M,o("p",null,[o("mark",null,[e("当"),k,e("的时候，在关系图上的操作就是"),r(l,{color:"red"},{default:t(()=>[e("把InnoDB Log Buffer的内容写入磁盘上的redo log")]),_:1}),e("，写成功的话，在磁盘上的redo log会记录状态为commit，如果没有写成功或者写完，则记录状态为prepare")])]),D,q,w,C,o("p",null,[e("undo log支持事务回滚，也不是一瞬间就能完整，"),r(l,{color:"red"},{default:t(()=>[e("最终要修改的也是磁盘上的数据")]),_:1}),e("font>，"),V]),N])}const z=n(g,[["render",T],["__file","MySQL重做日志redo log.html.vue"]]);export{z as default};
