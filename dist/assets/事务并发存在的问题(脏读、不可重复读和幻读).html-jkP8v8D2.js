const t=JSON.parse('{"key":"v-51f2dcf6","path":"/mysql/05%20MySQL%E4%BA%8B%E5%8A%A1/%E4%BA%8B%E5%8A%A1%E5%B9%B6%E5%8F%91%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98(%E8%84%8F%E8%AF%BB%E3%80%81%E4%B8%8D%E5%8F%AF%E9%87%8D%E5%A4%8D%E8%AF%BB%E5%92%8C%E5%B9%BB%E8%AF%BB).html","title":"事务并发存在的问题(脏读、不可重复读和幻读)","lang":"zh-CN","frontmatter":{"title":"事务并发存在的问题(脏读、不可重复读和幻读)","icon":"file","order":3,"headerDepth":4,"category":["mysql"],"tag":["事务"],"description":"事务并发存在的问题(脏读、不可重复读和幻读) 事务处理如果，并发执行事务时通常会发生以下问题： 脏读（Dirty Read）：。 例如当事务A和事务B并发执行时，当事务A更新后，事务B查询读取到A尚未提交的数据，此时如果事务A rollback了，那事务B读到的数据就不是数据库所存放的数据了，而是无效的脏数据（脏读必须杜绝，因为事务没有commit；而不可重复读和幻读不一定出问题，因为事务已经commit） 不可重复读（NonRepeatable Read）：一个事务的操作导致另一个事务 。 例如当事务A和事务B并发执行时，当事务B查询读取数据后，事务A 更改事务B查询到的数据，此时事务B再次去读该数据，发现前后两次读的数据不一样（事务B读取了事务A已commit的数据） 幻读（Phantom Read）：一个事务的操作导致另一个事务前后。 例如 当事务A和事务B并发执行时，当事务B查询读取数据后，事务A或者了一条满足事务B查询条件的记录，此时事务B再去查询，发现查询到前一次不存在的记录，或者前一次查询的一些记录不见了（事务B读取了事务A新增加的数据或者读到事务A删除的数据）","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/mysql/05%20MySQL%E4%BA%8B%E5%8A%A1/%E4%BA%8B%E5%8A%A1%E5%B9%B6%E5%8F%91%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98(%E8%84%8F%E8%AF%BB%E3%80%81%E4%B8%8D%E5%8F%AF%E9%87%8D%E5%A4%8D%E8%AF%BB%E5%92%8C%E5%B9%BB%E8%AF%BB).html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"事务并发存在的问题(脏读、不可重复读和幻读)"}],["meta",{"property":"og:description","content":"事务并发存在的问题(脏读、不可重复读和幻读) 事务处理如果，并发执行事务时通常会发生以下问题： 脏读（Dirty Read）：。 例如当事务A和事务B并发执行时，当事务A更新后，事务B查询读取到A尚未提交的数据，此时如果事务A rollback了，那事务B读到的数据就不是数据库所存放的数据了，而是无效的脏数据（脏读必须杜绝，因为事务没有commit；而不可重复读和幻读不一定出问题，因为事务已经commit） 不可重复读（NonRepeatable Read）：一个事务的操作导致另一个事务 。 例如当事务A和事务B并发执行时，当事务B查询读取数据后，事务A 更改事务B查询到的数据，此时事务B再次去读该数据，发现前后两次读的数据不一样（事务B读取了事务A已commit的数据） 幻读（Phantom Read）：一个事务的操作导致另一个事务前后。 例如 当事务A和事务B并发执行时，当事务B查询读取数据后，事务A或者了一条满足事务B查询条件的记录，此时事务B再去查询，发现查询到前一次不存在的记录，或者前一次查询的一些记录不见了（事务B读取了事务A新增加的数据或者读到事务A删除的数据）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"事务"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事务并发存在的问题(脏读、不可重复读和幻读)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"事务相关命令","slug":"事务相关命令","link":"#事务相关命令","children":[]}],"git":{},"readingTime":{"minutes":3.88,"words":1163},"filePathRelative":"mysql/05 MySQL事务/事务并发存在的问题(脏读、不可重复读和幻读).md","excerpt":"<h1> 事务并发存在的问题(脏读、不可重复读和幻读)</h1>\\n<p>事务处理如果，<strong>并发执行事务</strong>时通常会发生以下问题：</p>\\n<ul>\\n<li>\\n<p>脏读（Dirty Read）：。</p>\\n<ul>\\n<li>例如当事务A和事务B并发执行时，当事务A更新后，事务B查询读取到A尚未提交的数据，此时如果事务A rollback了，那事务B读到的数据就不是数据库所存放的数据了，而是无效的脏数据（<mark>脏读必须杜绝，因为事务没有commit</mark>；<u>而不可重复读和幻读不一定出问题，因为事务<strong>已经commit</strong></u>）</li>\\n</ul>\\n</li>\\n<li>\\n<p>不可重复读（NonRepeatable Read）：一个事务的操作导致另一个事务 。</p>\\n<ul>\\n<li>\\n<p>例如当事务A和事务B并发执行时，当事务B查询读取数据后，事务A 更改事务B查询到的数据，此时事务B再次去读该数据，发现前后两次读的数据不一样（事务B读取了事务A已commit的数据）</p>\\n</li>\\n<li>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>幻读（Phantom Read）：一个事务的操作导致另一个事务前后。</p>\\n<ul>\\n<li>例如 当事务A和事务B并发执行时，当事务B查询读取数据后，事务A或者了一条满足事务B查询条件的记录，此时事务B再去查询，<u>发现查询到前一次不存在的记录，或者前一次查询的一些记录不见了</u>（事务B读取了事务A新增加的数据或者读到事务A删除的数据）</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};
