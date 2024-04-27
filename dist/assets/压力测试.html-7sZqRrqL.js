const n=JSON.parse('{"key":"v-379adba2","path":"/mysql/12%20%E8%BF%9E%E6%8E%A5%E6%B1%A0/%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95.html","title":"连接池压力测试","lang":"zh-CN","frontmatter":{"title":"连接池压力测试","icon":"file","order":8,"headerDepth":4,"category":["mysql"],"tag":["mysql连接池"],"description":"连接池压力测试 连接池代码 mysql.cnf配置文件 #数据库连接池的配置文件，下面和宏一样就不要加多余的空格了 ip=127.0.0.1 port=3306 username=root password=147258 dbname=chat initSize=10 maxSize=1024 // 连接池最大空闲时间默认单位是秒 maxIdleTime=60 // 连接池获取连接的超时时间单位是毫秒 connectionTimeOut=100","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/mysql/12%20%E8%BF%9E%E6%8E%A5%E6%B1%A0/%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"连接池压力测试"}],["meta",{"property":"og:description","content":"连接池压力测试 连接池代码 mysql.cnf配置文件 #数据库连接池的配置文件，下面和宏一样就不要加多余的空格了 ip=127.0.0.1 port=3306 username=root password=147258 dbname=chat initSize=10 maxSize=1024 // 连接池最大空闲时间默认单位是秒 maxIdleTime=60 // 连接池获取连接的超时时间单位是毫秒 connectionTimeOut=100"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"mysql连接池"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"连接池压力测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"连接池代码","slug":"连接池代码","link":"#连接池代码","children":[{"level":3,"title":"mysql.cnf配置文件","slug":"mysql-cnf配置文件","link":"#mysql-cnf配置文件","children":[]},{"level":3,"title":"public.h公共头文件","slug":"public-h公共头文件","link":"#public-h公共头文件","children":[]},{"level":3,"title":"connection.h数据库操作头文件","slug":"connection-h数据库操作头文件","link":"#connection-h数据库操作头文件","children":[]},{"level":3,"title":"connection.cc数据库操作的封装实现","slug":"connection-cc数据库操作的封装实现","link":"#connection-cc数据库操作的封装实现","children":[]},{"level":3,"title":"connectionPool.h连接池的头文件","slug":"connectionpool-h连接池的头文件","link":"#connectionpool-h连接池的头文件","children":[]},{"level":3,"title":"connectionPool.cc连接池的实现","slug":"connectionpool-cc连接池的实现","link":"#connectionpool-cc连接池的实现","children":[]}]},{"level":2,"title":"压力测试","slug":"压力测试","link":"#压力测试","children":[{"level":3,"title":"单线程","slug":"单线程","link":"#单线程","children":[]}]}],"git":{},"readingTime":{"minutes":6.41,"words":1922},"filePathRelative":"mysql/12 连接池/压力测试.md","excerpt":"<h1> 连接池压力测试</h1>\\n<h2> 连接池代码</h2>\\n<h3> <code>mysql.cnf</code>配置文件</h3>\\n<div class=\\"language-ini line-numbers-mode\\" data-ext=\\"ini\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">#数据库连接池的配置文件，下面和宏一样就不要加多余的空格了</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">ip</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">127.0.0.1</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">port</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">3306</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">username</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">root</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">password</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">147258</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">dbname</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">chat</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">initSize</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">10</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">maxSize</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">1024</span></span>\\n<span class=\\"line\\"><span style=\\"color: #98C379\\">// 连接池最大空闲时间默认单位是秒</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">maxIdleTime</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">60</span></span>\\n<span class=\\"line\\"><span style=\\"color: #98C379\\">// 连接池获取连接的超时时间单位是毫秒</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">connectionTimeOut</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">100</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
