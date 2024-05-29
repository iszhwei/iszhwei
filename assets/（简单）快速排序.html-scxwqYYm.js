const n=JSON.parse('{"key":"v-155d00d3","path":"/algo/04%20%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/%EF%BC%88%E7%AE%80%E5%8D%95%EF%BC%89%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.html","title":"（简单）快速排序","lang":"zh-CN","frontmatter":{"title":"（简单）快速排序","icon":"file","order":4,"category":["数据结构与算法"],"tag":["排序算法"],"description":"关键在于找一个基准（一般选第一个元素） 小于基准的放左边，大于的放右边 递归 //quickSort.h #ifndef _QUICK_SORT_H_ #define _QUICK_SORT_H_ #include &lt;vector&gt; using std::vector; using std::swap; void quickSort(vector&lt;int&gt; &amp;nums, int begin, int end); #endif //_QUICK_SORT_H_","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/algo/04%20%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/%EF%BC%88%E7%AE%80%E5%8D%95%EF%BC%89%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"（简单）快速排序"}],["meta",{"property":"og:description","content":"关键在于找一个基准（一般选第一个元素） 小于基准的放左边，大于的放右边 递归 //quickSort.h #ifndef _QUICK_SORT_H_ #define _QUICK_SORT_H_ #include &lt;vector&gt; using std::vector; using std::swap; void quickSort(vector&lt;int&gt; &amp;nums, int begin, int end); #endif //_QUICK_SORT_H_"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"排序算法"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"（简单）快速排序\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.3,"words":390},"filePathRelative":"algo/04 排序算法/（简单）快速排序.md","excerpt":"<p>关键在于找一个基准（一般选第一个元素）</p>\\n<ul>\\n<li>小于基准的放左边，大于的放右边</li>\\n<li>递归</li>\\n</ul>\\n<!--more-->\\n<div class=\\"language-c++ line-numbers-mode\\" data-ext=\\"c++\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//quickSort.h</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#ifndef</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">_QUICK_SORT_H_</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#define</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">_QUICK_SORT_H_</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#include</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">&lt;vector&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">using</span><span style=\\"color: #ABB2BF\\"> std::vector;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">using</span><span style=\\"color: #ABB2BF\\"> std::swap;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">quickSort</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">vector</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\">&gt; </span><span style=\\"color: #C678DD\\">&amp;</span><span style=\\"color: #E06C75; font-style: italic\\">nums</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">begin</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">end</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#endif</span><span style=\\"color: #7F848E; font-style: italic\\"> //_QUICK_SORT_H_</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
