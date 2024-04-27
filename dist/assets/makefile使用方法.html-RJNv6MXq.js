const e=JSON.parse('{"key":"v-f6ba6062","path":"/linux/03%20%E7%BC%96%E8%AF%91%E5%B7%A5%E5%85%B7/makefile%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.html","title":"makefile使用方法","lang":"zh-CN","frontmatter":{"title":"makefile使用方法","icon":"file","order":3,"headerDepth":4,"category":["linux"],"tag":["编译工具"],"description":"makefile使用方法 使用方法 先建立一个名为makefile或者是Makefile的文件，然后在里面写入符合语法规则的编译命令，完成以后只需要在文件所在目录使用make命令就能运行编译命令 书写规则 从第一行命令开始，先确认目标文件，根据目标文件确定所需的依赖文件，然后递归地找到依赖文件的依赖文件，直到依赖文件是没有子依赖文件 #注释 书写格式 [目标文件]:[依赖文件] &lt;tab&gt;[command]","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/linux/03%20%E7%BC%96%E8%AF%91%E5%B7%A5%E5%85%B7/makefile%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"makefile使用方法"}],["meta",{"property":"og:description","content":"makefile使用方法 使用方法 先建立一个名为makefile或者是Makefile的文件，然后在里面写入符合语法规则的编译命令，完成以后只需要在文件所在目录使用make命令就能运行编译命令 书写规则 从第一行命令开始，先确认目标文件，根据目标文件确定所需的依赖文件，然后递归地找到依赖文件的依赖文件，直到依赖文件是没有子依赖文件 #注释 书写格式 [目标文件]:[依赖文件] &lt;tab&gt;[command]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"编译工具"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"makefile使用方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"书写规则","slug":"书写规则","link":"#书写规则","children":[]},{"level":2,"title":"原则","slug":"原则","link":"#原则","children":[]},{"level":2,"title":"伪目标","slug":"伪目标","link":"#伪目标","children":[]},{"level":2,"title":"变量名","slug":"变量名","link":"#变量名","children":[{"level":3,"title":"= 和 := 的区别","slug":"和-的区别","link":"#和-的区别","children":[]}]},{"level":2,"title":"通配符和模式匹配","slug":"通配符和模式匹配","link":"#通配符和模式匹配","children":[{"level":3,"title":"使用bash的规则来应用通配符","slug":"使用bash的规则来应用通配符","link":"#使用bash的规则来应用通配符","children":[]},{"level":3,"title":"%通配符","slug":"通配符","link":"#通配符","children":[]}]},{"level":2,"title":"内置函数","slug":"内置函数","link":"#内置函数","children":[]},{"level":2,"title":"循环","slug":"循环","link":"#循环","children":[]},{"level":2,"title":"make命令的-f指定makefile文件","slug":"make命令的-f指定makefile文件","link":"#make命令的-f指定makefile文件","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[{"level":3,"title":"指定源文件生成一个可执行程序","slug":"指定源文件生成一个可执行程序","link":"#指定源文件生成一个可执行程序","children":[]},{"level":3,"title":"每个源文件生成可执行程序","slug":"每个源文件生成可执行程序","link":"#每个源文件生成可执行程序","children":[]},{"level":3,"title":"有头文件的情况","slug":"有头文件的情况","link":"#有头文件的情况","children":[]}]},{"level":2,"title":"Makefile missing separator. Stop.怎么解决","slug":"makefile-missing-separator-stop-怎么解决","link":"#makefile-missing-separator-stop-怎么解决","children":[]}],"git":{},"readingTime":{"minutes":4.51,"words":1352},"filePathRelative":"linux/03 编译工具/makefile使用方法.md","excerpt":"<h1> makefile使用方法</h1>\\n<h2> 使用方法</h2>\\n<p>先建立一个名为<code>makefile</code>或者是<code>Makefile</code>的文件，然后在里面写入符合语法规则的编译命令，完成以后只需要在<u>文件所在目录</u>使用<code>make</code>命令就能运行编译命令</p>\\n<h2> 书写规则</h2>\\n<p>从第一行命令开始，先确认目标文件，根据目标文件确定所需的依赖文件，然后递归地找到依赖文件的依赖文件，直到依赖文件是没有子依赖文件</p>\\n<div class=\\"language-makefile line-numbers-mode\\" data-ext=\\"makefile\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">#注释   书写格式</span></span>\\n<span class=\\"line\\"><span style=\\"color: #61AFEF\\">[目标文件]</span><span style=\\"color: #ABB2BF\\">:</span><span style=\\"color: #E06C75\\">[依赖文件]</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">&lt;tab&gt;[command]</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
