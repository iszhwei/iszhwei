const e=JSON.parse('{"key":"v-2877cc16","path":"/redis/set%E5%92%8Csorted_set%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","title":"set和sorted_set数据类型","lang":"zh-CN","frontmatter":{"title":"set和sorted_set数据类型","icon":"file","order":5,"headerDepth":4,"category":["redis"],"tag":["redis基础"],"description":"set和sorted_set数据类型 一、set类型概念 新的存储需求：存储大量的数据，在查询方面提供更高的效率 需要的存储结构：能够保存大量的数据，高效的内部存储机制，便于查询 set类型：与hash存储结构完全相同，底层数据结构使用哈希表，仅存储field，不存储value（nil），并且field不允许重复 二、set类型数据的基本操作 添加数据 sadd key member1 [member2]","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/redis/set%E5%92%8Csorted_set%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"set和sorted_set数据类型"}],["meta",{"property":"og:description","content":"set和sorted_set数据类型 一、set类型概念 新的存储需求：存储大量的数据，在查询方面提供更高的效率 需要的存储结构：能够保存大量的数据，高效的内部存储机制，便于查询 set类型：与hash存储结构完全相同，底层数据结构使用哈希表，仅存储field，不存储value（nil），并且field不允许重复 二、set类型数据的基本操作 添加数据 sadd key member1 [member2]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"redis基础"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"set和sorted_set数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"一、set类型概念","slug":"一、set类型概念","link":"#一、set类型概念","children":[]},{"level":2,"title":"二、set类型数据的基本操作","slug":"二、set类型数据的基本操作","link":"#二、set类型数据的基本操作","children":[]},{"level":2,"title":"三、set类型数据的扩展操作","slug":"三、set类型数据的扩展操作","link":"#三、set类型数据的扩展操作","children":[{"level":3,"title":"1. 业务场景一：资讯推荐","slug":"_1-业务场景一-资讯推荐","link":"#_1-业务场景一-资讯推荐","children":[]},{"level":3,"title":"2. 业务场景二：可能认识的好友推荐","slug":"_2-业务场景二-可能认识的好友推荐","link":"#_2-业务场景二-可能认识的好友推荐","children":[]},{"level":3,"title":"3. 业务场景三：多角色权限校验","slug":"_3-业务场景三-多角色权限校验","link":"#_3-业务场景三-多角色权限校验","children":[]},{"level":3,"title":"4. 业务场景四：统计网站访问量","slug":"_4-业务场景四-统计网站访问量","link":"#_4-业务场景四-统计网站访问量","children":[]},{"level":3,"title":"5. 业务场景五：黑名单","slug":"_5-业务场景五-黑名单","link":"#_5-业务场景五-黑名单","children":[]}]},{"level":2,"title":"四、set数据类型使用的注意事项","slug":"四、set数据类型使用的注意事项","link":"#四、set数据类型使用的注意事项","children":[]},{"level":2,"title":"五、sorted_set类型概念","slug":"五、sorted-set类型概念","link":"#五、sorted-set类型概念","children":[]},{"level":2,"title":"六、sorted_set类型数据的基本操作","slug":"六、sorted-set类型数据的基本操作","link":"#六、sorted-set类型数据的基本操作","children":[]},{"level":2,"title":"七、sorted_set类型数据的扩展操作","slug":"七、sorted-set类型数据的扩展操作","link":"#七、sorted-set类型数据的扩展操作","children":[{"level":3,"title":"1. 业务场景一：实时显示资讯热度","slug":"_1-业务场景一-实时显示资讯热度","link":"#_1-业务场景一-实时显示资讯热度","children":[]},{"level":3,"title":"2.业务场景二：限时操作","slug":"_2-业务场景二-限时操作","link":"#_2-业务场景二-限时操作","children":[]}]},{"level":2,"title":"八、sorted_set数据类型使用的注意事项","slug":"八、sorted-set数据类型使用的注意事项","link":"#八、sorted-set数据类型使用的注意事项","children":[]}],"git":{},"readingTime":{"minutes":9.24,"words":2771},"filePathRelative":"redis/set和sorted_set数据类型.md","excerpt":"<h1> set和sorted_set数据类型</h1>\\n<h2> 一、set类型概念</h2>\\n<p>新的存储需求：存储大量的数据，在查询方面提供更高的效率\\n需要的存储结构：能够保存大量的数据，高效的内部存储机制，便于查询\\nset类型：<strong>与hash存储结构完全相同，底层数据结构使用哈希表，仅存储field，不存储value（nil），并且field不允许重复</strong></p>\\n<figure><figcaption></figcaption></figure>\\n<h2> 二、set类型数据的基本操作</h2>\\n<p><strong>添加数据</strong></p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #ABB2BF\\">sadd </span><span style=\\"color: #C678DD\\">key</span><span style=\\"color: #ABB2BF\\"> member1 </span><span style=\\"color: #E06C75\\">[member2]</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
