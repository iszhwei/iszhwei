const e=JSON.parse('{"key":"v-afe3b5ec","path":"/mysql/10%20MySQL%E9%9B%86%E7%BE%A4/%E8%AF%BB%E5%86%99%E5%88%86%E7%A6%BB%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B5.html","title":"读写分离配置实践","lang":"zh-CN","frontmatter":{"title":"读写分离配置实践","icon":"file","order":3,"headerDepth":4,"category":["mysql"],"tag":["mysql集群"],"description":"读写分离配置实践 一、环境准备 master（虚拟机centos7，NAT模式，固定ip）：192.168.131.129 slave（win10，路由器局域网，DHCP协议）：192.168.31.27 由于MyCat是用Java写的，需要JDK1.7版本以上 MySQL的root账户有远程访问权限 1.查看主从复制状态 读写分离基于主从复制，查看主从复制状态 2. 查看JDK版本 java -version","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/mysql/10%20MySQL%E9%9B%86%E7%BE%A4/%E8%AF%BB%E5%86%99%E5%88%86%E7%A6%BB%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B5.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"读写分离配置实践"}],["meta",{"property":"og:description","content":"读写分离配置实践 一、环境准备 master（虚拟机centos7，NAT模式，固定ip）：192.168.131.129 slave（win10，路由器局域网，DHCP协议）：192.168.31.27 由于MyCat是用Java写的，需要JDK1.7版本以上 MySQL的root账户有远程访问权限 1.查看主从复制状态 读写分离基于主从复制，查看主从复制状态 2. 查看JDK版本 java -version"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"mysql集群"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"读写分离配置实践\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"一、环境准备","slug":"一、环境准备","link":"#一、环境准备","children":[{"level":3,"title":"1.查看主从复制状态","slug":"_1-查看主从复制状态","link":"#_1-查看主从复制状态","children":[]},{"level":3,"title":"2. 查看JDK版本","slug":"_2-查看jdk版本","link":"#_2-查看jdk版本","children":[]},{"level":3,"title":"3. 打开root的远程连接权限","slug":"_3-打开root的远程连接权限","link":"#_3-打开root的远程连接权限","children":[]}]},{"level":2,"title":"二、配置文件","slug":"二、配置文件","link":"#二、配置文件","children":[{"level":3,"title":"1. server.xml","slug":"_1-server-xml","link":"#_1-server-xml","children":[]},{"level":3,"title":"2.schema.xml","slug":"_2-schema-xml","link":"#_2-schema-xml","children":[]}]},{"level":2,"title":"三、启动服务","slug":"三、启动服务","link":"#三、启动服务","children":[{"level":3,"title":"1. 配置文件问题一","slug":"_1-配置文件问题一","link":"#_1-配置文件问题一","children":[]},{"level":3,"title":"2. 配置文件问题二","slug":"_2-配置文件问题二","link":"#_2-配置文件问题二","children":[]}]},{"level":2,"title":"四、MyCat 9066端口和8066端口","slug":"四、mycat-9066端口和8066端口","link":"#四、mycat-9066端口和8066端口","children":[{"level":3,"title":"1. 9066管理端口","slug":"_1-9066管理端口","link":"#_1-9066管理端口","children":[]},{"level":3,"title":"2.8066数据端口","slug":"_2-8066数据端口","link":"#_2-8066数据端口","children":[]}]},{"level":2,"title":"五、验证读写分离","slug":"五、验证读写分离","link":"#五、验证读写分离","children":[{"level":3,"title":"1. 打开查询日志general_log","slug":"_1-打开查询日志general-log","link":"#_1-打开查询日志general-log","children":[]},{"level":3,"title":"2. 验证读操作在slave","slug":"_2-验证读操作在slave","link":"#_2-验证读操作在slave","children":[]},{"level":3,"title":"3. 验证写操作在master","slug":"_3-验证写操作在master","link":"#_3-验证写操作在master","children":[]},{"level":3,"title":"验证容灾功能","slug":"验证容灾功能","link":"#验证容灾功能","children":[]}]}],"git":{},"readingTime":{"minutes":9.85,"words":2955},"filePathRelative":"mysql/10 MySQL集群/读写分离配置实践.md","excerpt":"<h1> 读写分离配置实践</h1>\\n<h2> 一、环境准备</h2>\\n<p>master（虚拟机centos7，NAT模式，固定ip）：192.168.131.129\\nslave（win10，路由器局域网，DHCP协议）：192.168.31.27</p>\\n<p>由于MyCat是用Java写的，需要JDK1.7版本以上\\nMySQL的root账户有远程访问权限</p>\\n<h3> 1.查看主从复制状态</h3>\\n<p>读写分离基于主从复制，查看主从复制状态</p>\\n<figure><figcaption></figcaption></figure>\\n<h3> 2. 查看JDK版本</h3>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #abb2bf\\">java -version</span></span>\\n<span class=\\"line\\"><span style=\\"color: #abb2bf\\"></span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
