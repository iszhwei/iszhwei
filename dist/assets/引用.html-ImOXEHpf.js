const e=JSON.parse('{"key":"v-51ee3d17","path":"/ccpp/02%20c__%E5%9F%BA%E7%A1%80/%E5%BC%95%E7%94%A8.html","title":"引用","lang":"zh-CN","frontmatter":{"title":"引用","icon":"file","order":5,"headerDepth":4,"category":["c/c++"],"tag":["c++基础"],"description":"引用 什么是引用？ 在理解引用概念前，先回顾一下变量名。 变量名实质就是一段连续内存空间的别名。那一段连续的内存空间只能取一个别名吗？ 显然不是，引用的概念油然而生。在C++中，引用是一个已定义变量的别名。其语法是： 类型 &amp;引用名 = 目标变量名； void test0() { int a = 1; int &amp;ref1 = a; int &amp;ref2; }","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/02%20c__%E5%9F%BA%E7%A1%80/%E5%BC%95%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"引用"}],["meta",{"property":"og:description","content":"引用 什么是引用？ 在理解引用概念前，先回顾一下变量名。 变量名实质就是一段连续内存空间的别名。那一段连续的内存空间只能取一个别名吗？ 显然不是，引用的概念油然而生。在C++中，引用是一个已定义变量的别名。其语法是： 类型 &amp;引用名 = 目标变量名； void test0() { int a = 1; int &amp;ref1 = a; int &amp;ref2; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"c++基础"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"引用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"什么是引用？","slug":"什么是引用","link":"#什么是引用","children":[{"level":3,"title":"引用和取地址的区别","slug":"引用和取地址的区别","link":"#引用和取地址的区别","children":[]}]},{"level":2,"title":"引用的本质","slug":"引用的本质","link":"#引用的本质","children":[]},{"level":2,"title":"引用作为函数参数","slug":"引用作为函数参数","link":"#引用作为函数参数","children":[]},{"level":2,"title":"引用作为函数的返回值","slug":"引用作为函数的返回值","link":"#引用作为函数的返回值","children":[]},{"level":2,"title":"引用总结：","slug":"引用总结","link":"#引用总结","children":[]},{"level":2,"title":"课堂代码","slug":"课堂代码","link":"#课堂代码","children":[]},{"level":2,"title":"引用和指针的区别","slug":"引用和指针的区别","link":"#引用和指针的区别","children":[]},{"level":2,"title":"左值引用","slug":"左值引用","link":"#左值引用","children":[]},{"level":2,"title":"右值引用","slug":"右值引用","link":"#右值引用","children":[{"level":3,"title":"总结：","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"例题","slug":"例题","link":"#例题","children":[{"level":3,"title":"写一句代码在内存的0x0018ff44处写一个4字节的10","slug":"写一句代码在内存的0x0018ff44处写一个4字节的10","link":"#写一句代码在内存的0x0018ff44处写一个4字节的10","children":[]},{"level":3,"title":"判断对错🍗🍗🍗","slug":"判断对错🍗🍗🍗","link":"#判断对错🍗🍗🍗","children":[]}]}],"git":{},"readingTime":{"minutes":12.45,"words":3734},"filePathRelative":"ccpp/02 c++基础/引用.md","excerpt":"<h1> 引用</h1>\\n<figure><figcaption></figcaption></figure>\\n<!--more-->\\n<h2> 什么是引用？</h2>\\n<p>在理解引用概念前，先回顾一下变量名。 <u>变量名实质就是一段连续<strong>内存空间的别名</strong></u>。那一段连续的内存空间只能取一个别名吗？ 显然不是，引用的概念油然而生。在C++中，<u>引用是一个已定义变量的<strong>别名</strong></u>。其语法是：</p>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #ABB2BF\\">类型 </span><span style=\\"color: #56B6C2\\">&amp;</span><span style=\\"color: #ABB2BF\\">引用名 </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> 目标变量名；</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">test0</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> a </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&amp;</span><span style=\\"color: #ABB2BF\\">ref1 </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> a;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&amp;</span><span style=\\"color: #ABB2BF\\">ref2;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
