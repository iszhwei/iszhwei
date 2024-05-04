const e=JSON.parse('{"key":"v-9ee97fea","path":"/redis/Redis%E7%9A%84%E5%AE%89%E8%A3%85.html","title":"Redis的安装","lang":"zh-CN","frontmatter":{"title":"Redis的安装","icon":"file","order":1,"headerDepth":4,"category":["redis"],"tag":["redis安装"],"description":"Redis的安装 Redis的安装 redis官网上下载最新安装包到家目录 解压压缩包，然后会在家目录下面生成一个对应文件夹redis-6.0.8。 tar zxvf redis-6.0.8.tar.gz 进入到解压后的目录redis-6.0.8，然后执行make cd redis-6.0.8 make sudo make install 进入utils目录 cd utils 接着进入到install_server.sh文件，注释掉下面的内容（大于在77行，有8行，shell的注释是以#进行的注释） 注释之后，保存退出并且执行下面命令 sudo ./install_server.sh","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/redis/Redis%E7%9A%84%E5%AE%89%E8%A3%85.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"Redis的安装"}],["meta",{"property":"og:description","content":"Redis的安装 Redis的安装 redis官网上下载最新安装包到家目录 解压压缩包，然后会在家目录下面生成一个对应文件夹redis-6.0.8。 tar zxvf redis-6.0.8.tar.gz 进入到解压后的目录redis-6.0.8，然后执行make cd redis-6.0.8 make sudo make install 进入utils目录 cd utils 接着进入到install_server.sh文件，注释掉下面的内容（大于在77行，有8行，shell的注释是以#进行的注释） 注释之后，保存退出并且执行下面命令 sudo ./install_server.sh"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"redis安装"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis的安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"Redis的安装","slug":"redis的安装-1","link":"#redis的安装-1","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[{"level":3,"title":"基本配置","slug":"基本配置","link":"#基本配置","children":[]},{"level":3,"title":"其他相关配置","slug":"其他相关配置","link":"#其他相关配置","children":[]}]},{"level":2,"title":"编译安装库文件","slug":"编译安装库文件","link":"#编译安装库文件","children":[{"level":3,"title":"编译hiredis","slug":"编译hiredis","link":"#编译hiredis","children":[]},{"level":3,"title":"编译redis_plus_plus","slug":"编译redis-plus-plus","link":"#编译redis-plus-plus","children":[]}]}],"git":{},"readingTime":{"minutes":10.1,"words":3030},"filePathRelative":"redis/Redis的安装.md","excerpt":"<h1> Redis的安装</h1>\\n<h2> Redis的安装</h2>\\n<ol>\\n<li>\\n<p>redis官网上下载最新安装包到家目录</p>\\n</li>\\n<li>\\n<p>解压压缩包，然后会在家目录下面生成一个对应文件夹redis-6.0.8。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #61AFEF\\">tar</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">zxvf</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">redis-6.0.8.tar.gz</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>进入到解压后的目录redis-6.0.8，然后执行make</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #56B6C2\\">cd</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">redis-6.0.8</span></span>\\n<span class=\\"line\\"><span style=\\"color: #61AFEF\\">make</span></span>\\n<span class=\\"line\\"><span style=\\"color: #61AFEF\\">sudo</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">make</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">install</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>进入utils目录</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #56B6C2\\">cd</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">utils</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>接着进入到<code>install_server.sh</code>文件，注释掉下面的内容（大于在77行，有8行，shell的注释是以<code>#</code>进行的注释）</p>\\n<figure><figcaption></figcaption></figure>\\n<p>注释之后，保存退出并且执行下面命令</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #61AFEF\\">sudo</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">./install_server.sh</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><figure><figcaption></figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};
