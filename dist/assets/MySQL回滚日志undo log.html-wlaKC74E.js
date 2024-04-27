const o=JSON.parse('{"key":"v-329074fa","path":"/mysql/06%20MySQL%E7%9A%84%E9%94%81%E6%9C%BA%E5%88%B6/MySQL%E5%9B%9E%E6%BB%9A%E6%97%A5%E5%BF%97undo%20log.html","title":"MySQL回滚日志undo log","lang":"zh-CN","frontmatter":{"title":"MySQL回滚日志undo log","icon":"file","order":4,"headerDepth":4,"category":["mysql"],"tag":["mysql日志","mysql MVCC"],"description":"MySQL回滚日志undo log 一、引入 undo log ![](MySQL回滚日志undo log.assets/image-20240420132938427.png) 一般数据库引擎默认工作在事务的中间两个隔离级别： TRANSACTION_READ_COMMITTED，已提交读，oracle默认工作级别。不允许读取未commit的数据，这个级别仍然允许不可重复读和幻读产生。 TRANSACTION_REPEATABLE_READ，可重复读，MySQL默认工作级别。保证事务再次读取是依然得到相同的数据，部分解决了幻读，但幻读是仍然会出现的","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/mysql/06%20MySQL%E7%9A%84%E9%94%81%E6%9C%BA%E5%88%B6/MySQL%E5%9B%9E%E6%BB%9A%E6%97%A5%E5%BF%97undo%20log.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"MySQL回滚日志undo log"}],["meta",{"property":"og:description","content":"MySQL回滚日志undo log 一、引入 undo log ![](MySQL回滚日志undo log.assets/image-20240420132938427.png) 一般数据库引擎默认工作在事务的中间两个隔离级别： TRANSACTION_READ_COMMITTED，已提交读，oracle默认工作级别。不允许读取未commit的数据，这个级别仍然允许不可重复读和幻读产生。 TRANSACTION_REPEATABLE_READ，可重复读，MySQL默认工作级别。保证事务再次读取是依然得到相同的数据，部分解决了幻读，但幻读是仍然会出现的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"mysql日志"}],["meta",{"property":"article:tag","content":"mysql MVCC"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL回滚日志undo log\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"一、引入 undo log","slug":"一、引入-undo-log","link":"#一、引入-undo-log","children":[]},{"level":2,"title":"二、undo log","slug":"二、undo-log","link":"#二、undo-log","children":[{"level":3,"title":"1.undo log的概念","slug":"_1-undo-log的概念","link":"#_1-undo-log的概念","children":[]},{"level":3,"title":"2.undo log的作用","slug":"_2-undo-log的作用","link":"#_2-undo-log的作用","children":[]},{"level":3,"title":"3.undo log的数据结构","slug":"_3-undo-log的数据结构","link":"#_3-undo-log的数据结构","children":[]}]},{"level":2,"title":"三、undo log举例","slug":"三、undo-log举例","link":"#三、undo-log举例","children":[]}],"git":{},"readingTime":{"minutes":5.94,"words":1783},"filePathRelative":"mysql/06 MySQL的锁机制/MySQL回滚日志undo log.md","excerpt":"<h1> MySQL回滚日志undo log</h1>\\n<h2> 一、引入 undo log</h2>\\n<p>![](MySQL回滚日志undo log.assets/image-20240420132938427.png)</p>\\n<p>一般数据库引擎默认工作在事务的中间两个隔离级别：</p>\\n<ol>\\n<li>TRANSACTION_READ_COMMITTED，已提交读，oracle默认工作级别。不允许读取未commit的数据，这个级别仍然允许不可重复读和幻读产生。</li>\\n<li>TRANSACTION_REPEATABLE_READ，可重复读，MySQL默认工作级别。保证事务再次读取是依然得到相同的数据，部分解决了幻读，但幻读是仍然会出现的</li>\\n</ol>","autoDesc":true}');export{o as data};
