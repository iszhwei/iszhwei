import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as i,c as u,d as t,e as o,f as r,w as e,a as l}from"./app-mYdPlPhZ.js";const c={},d=l('<h1 id="事务的acid特性" tabindex="-1"><a class="header-anchor" href="#事务的acid特性" aria-hidden="true">#</a> 事务的ACID特性</h1><h2 id="acid特性" tabindex="-1"><a class="header-anchor" href="#acid特性" aria-hidden="true">#</a> ACID特性</h2><p>每一个事务必须满足下面的4个特性：</p><ul><li><p><strong>原子性（Atomic）</strong>：事务是一个不可分割的整体，事务必须具有原子特性。当修改数据时，<u>要么全执行，要么全不执行</u>，即不允许部分事务完成</p></li><li><p><strong>一致性（Consistency）</strong>：事务执行之前和执行之后，数据库<u><strong>数据</strong>必须保持一致性状态</u>。数据库的一致性状态必须由用户来负责，由<strong>并发</strong>控制机制实现。拿银行转账来说，只有让一个用户的余额减少，又让一个用户的余额增加才能构成一个完整的事务</p></li><li><p><strong>隔离性（Isolation）</strong>：当两个或者多个<strong>事务并发执行时</strong>，为了保证数据的安全性，将<u>一个事物内部的操作</u>与其它事务的操作隔离起来，<u>不被其它正在执行的事务所看到</u>，使得并发执行的各个事务之间不能互相影响。隔离级别：数据的安全性和事务的并发性。<u>隔离越严格，安全性越高，并发性越低</u>（就是并发控制，保证数据安全）</p></li><li><p><strong>持久性（Durability）</strong>：<u>事务完成（<strong>事务commit成功</strong>）以后</u>，DBMS保证它对数据库中的数据的修改是永久性的，<u>即使数据库因为故障出错，也应该能够恢复数据</u></p></li></ul><h2 id="innodb-引擎通过什么技术来保证事务的这四个特性的呢" tabindex="-1"><a class="header-anchor" href="#innodb-引擎通过什么技术来保证事务的这四个特性的呢" aria-hidden="true">#</a> InnoDB 引擎通过什么技术来保证事务的这四个特性的呢？</h2>',5),_=t("u",null,"先在cache缓存上写的",-1),g=t("u",null,"然后cache再慢慢往磁盘上写数据",-1),h=t("strong",null,"系统重启后",-1),m=t("strong",null,"redo log",-1),p=t("strong",null,"来保证数据库的持久性",-1),f=t("strong",null,"MySQL最重要的是日志，不是数据！",-1),k=l("<ul><li><mark><strong>持久性</strong>是通过 <u>redo log （重做日志）</u>来保证的</mark></li><li><mark><strong>原子性</strong>是通过 <u>undo log（回滚日志）</u> 来保证的</mark></li><li><mark><strong>隔离性</strong>是通过 <u>MVCC（多版本并发控制） 或锁机制</u>来保证的</mark></li><li><mark><strong>一致性</strong>则是通过<u>持久性+原子性+隔离性</u>来保证</mark></li></ul><p>事务的ACD特性由redo log和undo log机制保证，事务的I特性由事务的锁机制来保证，锁粒度越大，事务隔离性越好，安全性越高，并发性越低，效率越低</p>",2);function C(D,I){const n=a("font");return i(),u("div",null,[d,t("blockquote",null,[t("p",null,[o("DB写数据都是"),_,o("（因为速度快），然后操作系统通过磁盘I/O往磁盘上写，当"),r(n,{color:"cornflowerblue"},{default:e(()=>[o("事务成功提交后，commit就返回了（commit只是一个状态，表示成功提交了事务）")]),_:1}),o("。"),g,o("，"),r(n,{color:"red"},{default:e(()=>[o("这个过程中如果由于不可抗因素中断了，导致缓存上的数据向磁盘上写的时候没写完，那此时数据就丢了")]),_:1}),o("。"),r(n,{color:"green"},{default:e(()=>[h,o("MySQL数据库会根据"),m,o("来重新执行这个事务并写入缓存，然后写入磁盘，"),p]),_:1}),o("。由于用户会写很多数据，所以commit不会等着这些数据从缓存全部写到磁盘再返回，因为要经过磁盘I/O，业务上不可能让用户去等那么长时间")])]),t("p",null,[t("mark",null,[r(n,{color:"red"},{default:e(()=>[f]),_:1})])]),k])}const A=s(c,[["render",C],["__file","事务的ACID特性.html.vue"]]);export{A as default};
