const t=JSON.parse('{"key":"v-5f9477f2","path":"/ccpp/03%20%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1/this.html","title":"this指针","lang":"zh-CN","frontmatter":{"title":"this指针","icon":"file","order":4,"headerDepth":4,"category":["c/c++"],"tag":["类和对象"],"description":"类可以实例无数的对象，每个对象都有自己的成员变量，但是共享一套成员方法代码（存储在.text）。类的成员方法一经，会给的非静态成员函数都加一个this指针，接收调用该方法的对象的地址（即this指针的作用就是区分不同对象的(接收调用该方法的对象的地址) this指针指向本身 this指针隐藏在**（非静态）成员函数的第一个参数的位置** 被const修饰类类型 * const this ，即指针常量","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/03%20%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1/this.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"this指针"}],["meta",{"property":"og:description","content":"类可以实例无数的对象，每个对象都有自己的成员变量，但是共享一套成员方法代码（存储在.text）。类的成员方法一经，会给的非静态成员函数都加一个this指针，接收调用该方法的对象的地址（即this指针的作用就是区分不同对象的(接收调用该方法的对象的地址) this指针指向本身 this指针隐藏在**（非静态）成员函数的第一个参数的位置** 被const修饰类类型 * const this ，即指针常量"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"类和对象"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"this指针\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.54,"words":462},"filePathRelative":"ccpp/03 类和对象/this.md","excerpt":"<p><u>类可以实例无数的对象，每个对象都有自己的成员变量，但是共享一套成员方法代码（存储在.text）</u>。类的成员方法一经<u>，会给的<strong>非静态成员函数</strong>都加一个this指针，接收调用该方法的对象的地址（即<strong>this指针的作用就是区分不同对象的</strong>(<strong>接收调用该方法的对象的地址</strong>)</u></p>\\n<!--more-->\\n<figure><figcaption></figcaption></figure>\\n<ol>\\n<li>this指针<strong>指向本身</strong></li>\\n<li>this指针隐藏在**（非静态）成员函数<strong>的</strong>第一个参数的位置**</li>\\n<li>被const修饰<code>类类型 * const this</code> ，即<strong>指针常量</strong></li>\\n</ol>","autoDesc":true}');export{t as data};