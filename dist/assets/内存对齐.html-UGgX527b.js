const t=JSON.parse('{"key":"v-f8fc3194","path":"/ccpp/02%20c__%E5%9F%BA%E7%A1%80/%E5%86%85%E5%AD%98%E5%AF%B9%E9%BD%90.html","title":"内存对齐","lang":"zh-CN","frontmatter":{"title":"内存对齐","icon":"file","order":13,"headerDepth":4,"category":["c/c++"],"tag":["c++基础","内存对齐"],"description":"内存对齐 对齐规则 对齐规则是按照成员的，依次安排内存，其为大小的整数倍，，最后的大小为的整数倍 为什么要内存对齐？ 1.平台原因(移植原因)：不是所有的硬件平台都能访问任意地址上的任意数据的；某些硬件平台只能在某些地址处取某些特定类型的数据，否则抛出硬件异常。 2.性能原因：数据结构(尤其是栈)应该尽可能地在自然边界上对齐。原因在于，为了访问未对齐的内存，处理器需要作两次内存访问；而对齐的内存访问仅需要一次访问。 解释二 原因有这么几点： 1、的读取不是连续的，而是的，块的大小只能是1、2、4、8、16 ... 字节； 2、总线周期来，因此； 3、，否则会。","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/02%20c__%E5%9F%BA%E7%A1%80/%E5%86%85%E5%AD%98%E5%AF%B9%E9%BD%90.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"内存对齐"}],["meta",{"property":"og:description","content":"内存对齐 对齐规则 对齐规则是按照成员的，依次安排内存，其为大小的整数倍，，最后的大小为的整数倍 为什么要内存对齐？ 1.平台原因(移植原因)：不是所有的硬件平台都能访问任意地址上的任意数据的；某些硬件平台只能在某些地址处取某些特定类型的数据，否则抛出硬件异常。 2.性能原因：数据结构(尤其是栈)应该尽可能地在自然边界上对齐。原因在于，为了访问未对齐的内存，处理器需要作两次内存访问；而对齐的内存访问仅需要一次访问。 解释二 原因有这么几点： 1、的读取不是连续的，而是的，块的大小只能是1、2、4、8、16 ... 字节； 2、总线周期来，因此； 3、，否则会。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"c++基础"}],["meta",{"property":"article:tag","content":"内存对齐"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内存对齐\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"对齐规则","slug":"对齐规则","link":"#对齐规则","children":[]},{"level":2,"title":"为什么要内存对齐？","slug":"为什么要内存对齐","link":"#为什么要内存对齐","children":[]},{"level":2,"title":"内存对齐的三大规则","slug":"内存对齐的三大规则","link":"#内存对齐的三大规则","children":[{"level":3,"title":"数据成员对齐规则","slug":"数据成员对齐规则","link":"#数据成员对齐规则","children":[]},{"level":3,"title":"结构(或联合)的整体对齐规则","slug":"结构-或联合-的整体对齐规则","link":"#结构-或联合-的整体对齐规则","children":[]},{"level":3,"title":"结构体作为成员","slug":"结构体作为成员","link":"#结构体作为成员","children":[]}]}],"git":{},"readingTime":{"minutes":3.04,"words":913},"filePathRelative":"ccpp/02 c++基础/内存对齐.md","excerpt":"<h1> 内存对齐</h1>\\n<h2> 对齐规则</h2>\\n<p>对齐规则是<strong>按照成员的，依次安排内存，其为大小的整数倍，，最后的大小为的整数倍</strong></p>\\n<h2> 为什么要内存对齐？</h2>\\n<p>1.平台原因(移植原因)：不是所有的硬件平台都能访问任意地址上的任意数据的；某些硬件平台只能在某些地址处取某些特定类型的数据，否则抛出硬件异常。\\n2.性能原因：数据结构(尤其是栈)应该尽可能地在自然边界上对齐。原因在于，为了访问未对齐的内存，处理器需要作两次内存访问；而对齐的内存访问仅需要一次访问。\\n解释二\\n原因有这么几点：\\n<strong>1、的读取不是连续的，而是的，块的大小只能是1、2、4、8、16 ... 字节；</strong>\\n<strong>2、总线周期来，因此；</strong>\\n<strong>3、，否则会。</strong></p>","autoDesc":true}');export{t as data};
