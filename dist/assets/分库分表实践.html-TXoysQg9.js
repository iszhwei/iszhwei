const e=JSON.parse('{"key":"v-73d634fe","path":"/mysql/11%20%E6%8B%93%E5%B1%95/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8%E5%AE%9E%E8%B7%B5.html","title":"分库分表实践","lang":"zh-CN","frontmatter":{"title":"分库分表实践","icon":"file","order":2,"headerDepth":4,"category":["mysql"],"tag":["mysql拓展"],"description":"分库分表实践 一、为什么要分库分表 数据库架构演变 刚开始多数项目用单机数据库就够了，随着服务器流量越来越大，面对的请求也越来越多，我们做了数据库读写分离， 使用多个从库副本（Slave）负责读，使用主库（Master）负责写，master和slave通过主从复制实现数据同步更新，保持数据一致。slave 从库可以水平扩展，所以更多的读请求不成问题 但是当用户量级上升，写请求越来越多，怎么保证数据库的负载足够？增加一个Master是不能解决问题的， 因为数据要保存一致性，写操作需要2个master之间同步，相当于是重复了，而且架构设计更加复杂","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/mysql/11%20%E6%8B%93%E5%B1%95/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8%E5%AE%9E%E8%B7%B5.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"分库分表实践"}],["meta",{"property":"og:description","content":"分库分表实践 一、为什么要分库分表 数据库架构演变 刚开始多数项目用单机数据库就够了，随着服务器流量越来越大，面对的请求也越来越多，我们做了数据库读写分离， 使用多个从库副本（Slave）负责读，使用主库（Master）负责写，master和slave通过主从复制实现数据同步更新，保持数据一致。slave 从库可以水平扩展，所以更多的读请求不成问题 但是当用户量级上升，写请求越来越多，怎么保证数据库的负载足够？增加一个Master是不能解决问题的， 因为数据要保存一致性，写操作需要2个master之间同步，相当于是重复了，而且架构设计更加复杂"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"mysql拓展"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分库分表实践\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"一、为什么要分库分表","slug":"一、为什么要分库分表","link":"#一、为什么要分库分表","children":[]},{"level":2,"title":"二、库表太大产生的问题","slug":"二、库表太大产生的问题","link":"#二、库表太大产生的问题","children":[]},{"level":2,"title":"三、垂直拆分","slug":"三、垂直拆分","link":"#三、垂直拆分","children":[{"level":3,"title":"1.垂直分库","slug":"_1-垂直分库","link":"#_1-垂直分库","children":[]},{"level":3,"title":"2.垂直分表","slug":"_2-垂直分表","link":"#_2-垂直分表","children":[]}]},{"level":2,"title":"四、水平分表","slug":"四、水平分表","link":"#四、水平分表","children":[{"level":3,"title":"1.配置水平分表","slug":"_1-配置水平分表","link":"#_1-配置水平分表","children":[]},{"level":3,"title":"2. 测试水平分表","slug":"_2-测试水平分表","link":"#_2-测试水平分表","children":[]}]}],"git":{},"readingTime":{"minutes":7.13,"words":2138},"filePathRelative":"mysql/11 拓展/分库分表实践.md","excerpt":"<h1> 分库分表实践</h1>\\n<h2> 一、为什么要分库分表</h2>\\n<p>数据库架构演变</p>\\n<p>刚开始多数项目用单机数据库就够了，随着服务器流量越来越大，面对的请求也越来越多，我们做了数据库读写分离， 使用多个从库副本（Slave）负责读，使用主库（Master）负责写，master和slave通过主从复制实现数据同步更新，保持数据一致。slave 从库可以水平扩展，所以更多的读请求不成问题</p>\\n<p>但是当用户量级上升，写请求越来越多，怎么保证数据库的负载足够？增加一个Master是不能解决问题的， 因为数据要保存一致性，写操作需要2个master之间同步，相当于是重复了，而且架构设计更加复杂</p>","autoDesc":true}');export{e as data};
