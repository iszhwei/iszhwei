const s=JSON.parse('{"key":"v-7e13dfea","path":"/ccpp/19%20SGI%20STL%E4%BA%8C%E7%BA%A7%E7%A9%BA%E9%97%B4%E9%85%8D%E7%BD%AE%E5%99%A8%E5%86%85%E5%AD%98%E6%B1%A0%E6%BA%90%E7%A0%81/%E4%B8%A4%E4%B8%AA%E9%87%8D%E8%A6%81%E7%9A%84%E5%87%BD%E6%95%B0.html","title":"两个重要的辅助接口函数","lang":"zh-CN","frontmatter":{"title":"两个重要的辅助接口函数","icon":"file","order":3,"headerDepth":4,"category":["c/c++"],"tag":["SGI STL源码"],"description":"两个重要的辅助接口函数 template &lt;bool threads, int inst&gt; class __default_alloc_template { //... //将 __bytes 上调至最邻近的8的倍数 static size_t \\t_S_round_up(size_t __bytes) { return (((__bytes) + (size_t) _ALIGN-1) &amp; ~((size_t) _ALIGN - 1)); } //返回 __bytes 大小的chunk块位于 free-list 中的编号 static size_t _S_freelist_index(size_t __bytes) { \\t\\treturn (( (__bytes) + (size_t)_ALIGN-1) / (size_t)_ALIGN - 1); \\t} };","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/19%20SGI%20STL%E4%BA%8C%E7%BA%A7%E7%A9%BA%E9%97%B4%E9%85%8D%E7%BD%AE%E5%99%A8%E5%86%85%E5%AD%98%E6%B1%A0%E6%BA%90%E7%A0%81/%E4%B8%A4%E4%B8%AA%E9%87%8D%E8%A6%81%E7%9A%84%E5%87%BD%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"两个重要的辅助接口函数"}],["meta",{"property":"og:description","content":"两个重要的辅助接口函数 template &lt;bool threads, int inst&gt; class __default_alloc_template { //... //将 __bytes 上调至最邻近的8的倍数 static size_t \\t_S_round_up(size_t __bytes) { return (((__bytes) + (size_t) _ALIGN-1) &amp; ~((size_t) _ALIGN - 1)); } //返回 __bytes 大小的chunk块位于 free-list 中的编号 static size_t _S_freelist_index(size_t __bytes) { \\t\\treturn (( (__bytes) + (size_t)_ALIGN-1) / (size_t)_ALIGN - 1); \\t} };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"SGI STL源码"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"两个重要的辅助接口函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"ccpp/19 SGI STL二级空间配置器内存池源码/两个重要的函数.md","excerpt":"<h1> 两个重要的辅助接口函数</h1>\\n<div class=\\"language-c++ line-numbers-mode\\" data-ext=\\"c++\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\"> &lt;</span><span style=\\"color: #C678DD\\">bool</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">threads</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">inst</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">__default_alloc_template</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">    //...</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">    //将 __bytes 上调至最邻近的8的倍数</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">static</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">size_t</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  \\t</span><span style=\\"color: #61AFEF\\">_S_round_up</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">__bytes</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> (((__bytes) </span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\">) _ALIGN</span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">&amp;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">~</span><span style=\\"color: #ABB2BF\\">((</span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\">) _ALIGN </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">)); </span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">    //返回 __bytes 大小的chunk块位于 free-list 中的编号</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">static</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">_S_freelist_index</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">__bytes</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> (( (__bytes) </span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\">)_ALIGN</span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">/</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\">)_ALIGN </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">};</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
