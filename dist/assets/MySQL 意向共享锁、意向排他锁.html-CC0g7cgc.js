const e=JSON.parse('{"key":"v-a01dbb18","path":"/mysql/06%20MySQL%E7%9A%84%E9%94%81%E6%9C%BA%E5%88%B6/MySQL%20%E6%84%8F%E5%90%91%E5%85%B1%E4%BA%AB%E9%94%81%E3%80%81%E6%84%8F%E5%90%91%E6%8E%92%E4%BB%96%E9%94%81.html","title":"MySQL意向共享锁、意向排他锁","lang":"zh-CN","frontmatter":{"title":"MySQL意向共享锁、意向排他锁","icon":"file","order":6,"headerDepth":4,"category":["mysql"],"tag":["mysql锁机制"],"description":"MySQL 意向共享锁、意向排他锁 ![image-20240420193947369](MySQL 意向共享锁、意向排他锁.assets/image-20240420193947369.png) 一、InnoDB表级锁 我们知道，InnoDB是支持行锁，但不是每次都获取行锁，如果不使用索引的，那还是获取的表锁。而且有的时候，我们希望直接去使用表锁 适合使用表索的情况 在绝大部分情况下都应该使用行锁，因为事务的并发效率比表锁更高，但个别情况下也使用表级锁： 事务需要更新大部分或全部数据，表又比较大，如果使用默认的行锁，给大部分行都加锁（此时不如直接加表锁），不仅这个事务执行效率低，而且可能造成其他事务长时间等待和锁冲突 事务涉及多个表，比较复杂，如果都用行锁，很可能引起死锁，造成大量事务回滚","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/mysql/06%20MySQL%E7%9A%84%E9%94%81%E6%9C%BA%E5%88%B6/MySQL%20%E6%84%8F%E5%90%91%E5%85%B1%E4%BA%AB%E9%94%81%E3%80%81%E6%84%8F%E5%90%91%E6%8E%92%E4%BB%96%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"MySQL意向共享锁、意向排他锁"}],["meta",{"property":"og:description","content":"MySQL 意向共享锁、意向排他锁 ![image-20240420193947369](MySQL 意向共享锁、意向排他锁.assets/image-20240420193947369.png) 一、InnoDB表级锁 我们知道，InnoDB是支持行锁，但不是每次都获取行锁，如果不使用索引的，那还是获取的表锁。而且有的时候，我们希望直接去使用表锁 适合使用表索的情况 在绝大部分情况下都应该使用行锁，因为事务的并发效率比表锁更高，但个别情况下也使用表级锁： 事务需要更新大部分或全部数据，表又比较大，如果使用默认的行锁，给大部分行都加锁（此时不如直接加表锁），不仅这个事务执行效率低，而且可能造成其他事务长时间等待和锁冲突 事务涉及多个表，比较复杂，如果都用行锁，很可能引起死锁，造成大量事务回滚"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"mysql锁机制"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL意向共享锁、意向排他锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"一、InnoDB表级锁","slug":"一、innodb表级锁","link":"#一、innodb表级锁","children":[{"level":3,"title":"适合使用表索的情况","slug":"适合使用表索的情况","link":"#适合使用表索的情况","children":[]},{"level":3,"title":"表索的相关命令","slug":"表索的相关命令","link":"#表索的相关命令","children":[]},{"level":3,"title":"在使用表锁的时候，涉及到效率的问题","slug":"在使用表锁的时候-涉及到效率的问题","link":"#在使用表锁的时候-涉及到效率的问题","children":[]}]},{"level":2,"title":"二、意向共享锁和意向排他锁（表锁而非行锁）","slug":"二、意向共享锁和意向排他锁-表锁而非行锁","link":"#二、意向共享锁和意向排他锁-表锁而非行锁","children":[]}],"git":{},"readingTime":{"minutes":3.61,"words":1083},"filePathRelative":"mysql/06 MySQL的锁机制/MySQL 意向共享锁、意向排他锁.md","excerpt":"<h1> MySQL 意向共享锁、意向排他锁</h1>\\n<p>![image-20240420193947369](MySQL 意向共享锁、意向排他锁.assets/image-20240420193947369.png)</p>\\n<h2> 一、InnoDB表级锁</h2>\\n<p>我们知道，InnoDB是支持行锁，但不是每次都获取行锁，如果不使用索引的，那还是获取的表锁。而且有的时候，我们希望直接去使用表锁</p>\\n<h3> 适合使用表索的情况</h3>\\n<p>在绝大部分情况下都应该使用行锁，因为事务的并发效率比表锁更高，但个别情况下也使用表级锁：</p>\\n<ul>\\n<li>\\n<p>事务需要<strong>更新大部分或全部数据，表又比较大</strong>，如果使用默认的行锁，给大部分行都加锁（此时不如直接加表锁），不仅这个事务执行效率低，而且可能造成其他事务长时间等待和锁冲突</p>\\n</li>\\n<li>\\n<p><strong>事务涉及多个表</strong>，比较复杂，如果都用行锁，很可能引起死锁，造成大量事务回滚</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
