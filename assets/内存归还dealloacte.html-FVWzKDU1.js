const e=JSON.parse('{"key":"v-4e6c7a0a","path":"/ccpp/19%20SGI%20STL%E4%BA%8C%E7%BA%A7%E7%A9%BA%E9%97%B4%E9%85%8D%E7%BD%AE%E5%99%A8%E5%86%85%E5%AD%98%E6%B1%A0%E6%BA%90%E7%A0%81/%E5%86%85%E5%AD%98%E5%BD%92%E8%BF%98dealloacte.html","title":"内存归还dealloacte","lang":"zh-CN","frontmatter":{"title":"内存归还dealloacte","icon":"file","order":7,"headerDepth":4,"category":["c/c++"],"tag":["SGI STL源码"],"description":"内存归还dealloacte 归还分配出去的__chunk块，并 修改_S_free_list对应的元素（保存当前还未分配出去__chunk块的首地址） 修改归还的__chunk块的next域 归还__p指向的__n字节chunk块到内存池","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/19%20SGI%20STL%E4%BA%8C%E7%BA%A7%E7%A9%BA%E9%97%B4%E9%85%8D%E7%BD%AE%E5%99%A8%E5%86%85%E5%AD%98%E6%B1%A0%E6%BA%90%E7%A0%81/%E5%86%85%E5%AD%98%E5%BD%92%E8%BF%98dealloacte.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"内存归还dealloacte"}],["meta",{"property":"og:description","content":"内存归还dealloacte 归还分配出去的__chunk块，并 修改_S_free_list对应的元素（保存当前还未分配出去__chunk块的首地址） 修改归还的__chunk块的next域 归还__p指向的__n字节chunk块到内存池"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"SGI STL源码"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内存归还dealloacte\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.13,"words":340},"filePathRelative":"ccpp/19 SGI STL二级空间配置器内存池源码/内存归还dealloacte.md","excerpt":"<h1> 内存归还dealloacte</h1>\\n<p>归还分配出去的<code>__chunk</code>块，并</p>\\n<ol>\\n<li>修改<code>_S_free_list</code>对应的元素（<strong>保存当前还未分配出去<code>__chunk</code>块的首地址</strong>）</li>\\n<li><strong>修改归还的<code>__chunk</code>块的next域</strong></li>\\n</ol>\\n<figure><figcaption></figcaption></figure>\\n<p>归还__p指向的__n字节chunk块到内存池</p>","autoDesc":true}');export{e as data};
