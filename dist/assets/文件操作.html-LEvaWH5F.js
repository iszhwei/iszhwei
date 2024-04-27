import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as c,c as r,d as e,f as t,w as n,e as o,a}from"./app--8O2lHwG.js";const d="/assets/image-20240312103817142-4s5uMq7d.png",p={},_=e("h1",{id:"文件操作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文件操作","aria-hidden":"true"},"#"),o(" 文件操作")],-1),u=e("p",null,"文件：狭义上的文件，指的是磁盘上数据的集合；广义上的文件指的是一类容量大、读写慢、可以长期存储的数据",-1),h=e("p",null,[o("FILE结构体是满足ISOC标准的文件流/文件缓冲区；本次学习的是"),e("strong",null,"遵循POSIX标准的文件读写的系统调用")],-1),g=e("figure",null,[e("img",{src:d,alt:"image-20240312103817142",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20240312103817142")],-1),f=e("p",null,[o("ISO C是国际标准化组织（ISO）为了"),e("strong",null,"提高C语言的移植性而设立的C语言标准"),o("。它包含两部分：C语法及语义，以及C标准函数库。ISO C主要定义了C语言的语法规则、语义以及标准库中的函数原型和功能，但并未定义函数的具体实现。它的目标是确保不同的编译器在遵循ISO C标准时，对C语言的解释和执行方式保持一致。")],-1),m=e("p",null,[o("POSIX是Portable Operating System Interfaces的缩写，意为可移植操作系统接口。这是一组由IEEE制定的标准簇，"),e("strong",null,"旨在提升应用程序在不同UNIX系统环境之间的可移植性"),o("。POSIX标准不仅包含了ISO C的部分内容，还定义了很多系统服务接口，例如socket相关接口、pthread线程相关接口等。这些接口使得应用程序能够更方便地访问和操作系统提供的各种功能。")],-1),I=a('<h2 id="文件的分类" tabindex="-1"><a class="header-anchor" href="#文件的分类" aria-hidden="true">#</a> 文件的分类</h2><p>Linux文件类型：</p><ul><li><p>普通文件：也称为磁盘文件，可以随机存储数据</p></li><li><p>目录文件 ：实际上是一个<strong>链表</strong>，每个结点称为<strong>目录项</strong></p></li><li><p>符号链接/软链接：存储另一个文件的路径</p></li><li><p>字符设备文件：IO设备到文件的映射，如鼠标、键盘、显示器</p></li><li><p>块设备文件：磁盘、固态硬盘</p></li><li><p>管道：进程间通信</p></li><li><p>socket：网络通信</p></li><li><p>Windows系统使用<code>\\r\\n</code>作为换行符</p><ul><li>Windows上<code>r</code>模式读取linux保存的文件，自动将<code>\\n</code>转换为<code>\\r\\n</code></li><li></li><li>使用<code>rb</code>（二进制读取）模式打开文件时，读取到的换行符会保持文件中的原始形式。</li></ul></li><li><p>linux下<code>rb</code>模式和<code>r</code>模式读取文本文件时，换行符都是<code>\\n</code></p></li></ul>',3);function C(O,S){const l=s("font");return c(),r("div",null,[_,u,h,g,e("blockquote",null,[f,m,e("p",null,[e("strong",null,[t(l,{color:"green"},{default:n(()=>[o("ISO C为C语言的标准化和移植性提供了基础")]),_:1})]),o("，而**"),t(l,{color:"orange"},{default:n(()=>[o("POSIX则进一步提升了应用程序在不同操作系统之间的可移植性")]),_:1}),o("**。")])]),I])}const k=i(p,[["render",C],["__file","文件操作.html.vue"]]);export{k as default};
