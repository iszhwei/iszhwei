const s=JSON.parse(`{"key":"v-1df5d4d6","path":"/mysql/01%20MySQL%E5%9F%BA%E7%A1%80/%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%E4%B8%8E%E6%8E%88%E6%9D%83.html","title":"用户管理与授权","lang":"zh-CN","frontmatter":{"title":"用户管理与授权","icon":"file","order":10,"headerDepth":4,"category":["mysql"],"tag":["mysql基础"],"description":"查看用户信息： select user,host,plugin from mysql.user; 创建用户示例： create user 'stu'@'localhost' identified by '123456'; 创建用户指定加密方式 示例：create user 'stu1'@'localhost' identified WITH mysql_native_password by '123456'; 更新用户密码，指定加密方式，注意密码强度大小写数字： ALTER user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'; 授权用户对那些数据库的那些表可以进行操作 示例： GRANT SELECT ON database_name.table_name TO 'user_name'@'localhost'; GRANT INSERT ON database_name.table_name TO 'user_name'@'localhost'; GRANT ALL ON database_name.table_name TO 'user_name'@'localhost'; GRANT ALL PRIVILEGES ON *.* TO 'user_name'@'%'; -- * 表示任意所有库、所有表，%表示任意地址 GRANT REPLICATION SLAVE ON *.* to 'mslave'@'192.168.131.1';#复制权限 删除用户：drop user 'name'@'localhost';","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/mysql/01%20MySQL%E5%9F%BA%E7%A1%80/%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%E4%B8%8E%E6%8E%88%E6%9D%83.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"用户管理与授权"}],["meta",{"property":"og:description","content":"查看用户信息： select user,host,plugin from mysql.user; 创建用户示例： create user 'stu'@'localhost' identified by '123456'; 创建用户指定加密方式 示例：create user 'stu1'@'localhost' identified WITH mysql_native_password by '123456'; 更新用户密码，指定加密方式，注意密码强度大小写数字： ALTER user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'; 授权用户对那些数据库的那些表可以进行操作 示例： GRANT SELECT ON database_name.table_name TO 'user_name'@'localhost'; GRANT INSERT ON database_name.table_name TO 'user_name'@'localhost'; GRANT ALL ON database_name.table_name TO 'user_name'@'localhost'; GRANT ALL PRIVILEGES ON *.* TO 'user_name'@'%'; -- * 表示任意所有库、所有表，%表示任意地址 GRANT REPLICATION SLAVE ON *.* to 'mslave'@'192.168.131.1';#复制权限 删除用户：drop user 'name'@'localhost';"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"mysql基础"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户管理与授权\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.81,"words":244},"filePathRelative":"mysql/01 MySQL基础/用户管理与授权.md","excerpt":"<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #ABB2BF\\">查看用户信息： </span><span style=\\"color: #C678DD\\">select</span><span style=\\"color: #ABB2BF\\"> user,host,plugin </span><span style=\\"color: #C678DD\\">from</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">mysql</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #D19A66\\">user</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">创建用户示例： </span><span style=\\"color: #C678DD\\">create</span><span style=\\"color: #ABB2BF\\"> user </span><span style=\\"color: #98C379\\">'stu'</span><span style=\\"color: #ABB2BF\\">@</span><span style=\\"color: #98C379\\">'localhost'</span><span style=\\"color: #ABB2BF\\"> identified </span><span style=\\"color: #C678DD\\">by</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'123456'</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">创建用户指定加密方式 示例：</span><span style=\\"color: #C678DD\\">create</span><span style=\\"color: #ABB2BF\\"> user </span><span style=\\"color: #98C379\\">'stu1'</span><span style=\\"color: #ABB2BF\\">@</span><span style=\\"color: #98C379\\">'localhost'</span><span style=\\"color: #ABB2BF\\"> identified </span><span style=\\"color: #C678DD\\">WITH</span><span style=\\"color: #ABB2BF\\"> mysql_native_password </span><span style=\\"color: #C678DD\\">by</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'123456'</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">更新用户密码，指定加密方式，注意密码强度大小写数字：</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">ALTER</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">user</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'root'</span><span style=\\"color: #ABB2BF\\">@</span><span style=\\"color: #98C379\\">'localhost'</span><span style=\\"color: #ABB2BF\\"> IDENTIFIED </span><span style=\\"color: #C678DD\\">WITH</span><span style=\\"color: #ABB2BF\\"> mysql_native_password </span><span style=\\"color: #C678DD\\">BY</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'123456'</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">授权用户对那些数据库的那些表可以进行操作 示例：</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">GRANT</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">SELECT</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">ON</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">database_name</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #D19A66\\">table_name</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">TO</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'user_name'</span><span style=\\"color: #ABB2BF\\">@</span><span style=\\"color: #98C379\\">'localhost'</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">GRANT</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">INSERT</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">ON</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">database_name</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #D19A66\\">table_name</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">TO</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'user_name'</span><span style=\\"color: #ABB2BF\\">@</span><span style=\\"color: #98C379\\">'localhost'</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">GRANT</span><span style=\\"color: #ABB2BF\\"> ALL </span><span style=\\"color: #C678DD\\">ON</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">database_name</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #D19A66\\">table_name</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">TO</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'user_name'</span><span style=\\"color: #ABB2BF\\">@</span><span style=\\"color: #98C379\\">'localhost'</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">GRANT</span><span style=\\"color: #ABB2BF\\"> ALL PRIVILEGES </span><span style=\\"color: #C678DD\\">ON</span><span style=\\"color: #ABB2BF\\"> *.* </span><span style=\\"color: #C678DD\\">TO</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'user_name'</span><span style=\\"color: #ABB2BF\\">@</span><span style=\\"color: #98C379\\">'%'</span><span style=\\"color: #ABB2BF\\">; </span><span style=\\"color: #7F848E; font-style: italic\\">-- * 表示任意所有库、所有表，%表示任意地址</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">GRANT</span><span style=\\"color: #ABB2BF\\"> REPLICATION SLAVE </span><span style=\\"color: #C678DD\\">ON</span><span style=\\"color: #ABB2BF\\"> *.* </span><span style=\\"color: #C678DD\\">to</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'mslave'</span><span style=\\"color: #ABB2BF\\">@</span><span style=\\"color: #98C379\\">'192.168.131.1'</span><span style=\\"color: #ABB2BF\\">;#复制权限</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">删除用户：</span><span style=\\"color: #C678DD\\">drop</span><span style=\\"color: #ABB2BF\\"> user </span><span style=\\"color: #98C379\\">'name'</span><span style=\\"color: #ABB2BF\\">@</span><span style=\\"color: #98C379\\">'localhost'</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{s as data};
