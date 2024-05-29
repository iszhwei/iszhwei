import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as t,c,d as s,e as n,f as a,w as o,b as i,a as r}from"./app-2pke9_a8.js";const B="/assets/image-20240130150034776-aiasgBS2.png",d="/assets/image-20240130153420171-51Glw04V.png",u={},y=s("strong",null,"指令和数据",-1),D=s("code",null,"***.exe",-1),_=s("u",null,"磁盘",-1),A=s("strong",null,"不可能直接加载到物理内存的！！！",-1),v=s("p",null,[s("strong",null,"产生几个问题"),n("：")],-1),m=s("ol",null,[s("li",null,[s("u",null,"运行时把可执行程序的哪些东西加载到内存中？")]),s("li",null,[s("u",null,"加载到内存后是如何存放的？")]),s("li",null,[s("u",null,"内存空间有没有区域划分？划分后是什么样的？？")])],-1),F=s("strong",null,"前提条件",-1),C=r('<p><strong>虚拟如何理解？</strong></p><blockquote><p>存在，能看见 是物理的</p><p>存在， 看不见 是透明的</p><p>不存在， 看得见 是虚拟的</p><p>不存在， 看不见 被删除了</p></blockquote><p>linux系统会为当前进程分配一个2^32大小的空间</p><figure><img src="'+B+`" alt="image-20240130150034776" tabindex="0" loading="lazy"><figcaption>image-20240130150034776</figcaption></figure><p>0x00000000到0x08048000是<code>系统预留的空间</code>，<strong>不可访问</strong>，如访问<u>空指针</u>时程序会崩溃</p><p><code>.text</code>段：代码段,存放<u>指令</u></p><p><code>.rodata</code>：<u>只读数据段</u>，常量就存放在此，例如const char *p = “hello”;//p在栈上，而“hello”在只读数据段上，因为这个是字符串常量</p><p><code>.data</code>：数据段，存放<u>已经初始化且初始化不为0</u>的<strong>全局变量/静态变量</strong></p><p><code>.bss</code>：数据段，存放<u>初始化为0和未初始化</u>的<strong>全局变量/静态变量</strong>，内核会将此数据段都置0</p><p><code>.heap</code>：堆区，当程序<u>运行时</u>，new或malloc后才会分配堆内存，由低地址向高地址增长，程序员自己管理内存</p><p><code>.dll，*so</code>：<u>加载共享库，也就是动态链接库</u>，window下是.dll，linux下是so</p><p><code>.stack</code>：函数运行或产生线程时，每一个函数或线程独有的栈空间，由高地址向低地址增长</p><p><code>命令行参数，环境变量</code>：命令行参数如main函数传参，环境变量如搜索头文件或库文件时默认的路径</p><p><code>内核空间</code>：</p><ul><li>ZONE_DMA：ZONE“区域的意思”，约16M</li><li>ZONE_BORMAL：约800多M，存放进程控制块（PCB块，task_struct）、内核空间的线程、内核函数运行时所依赖的栈空间……</li><li>ZONE_HIGHMEN：高地址物理内存，做内存映射用的</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#98C379;">&lt;bits/stdc++.h&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">namespace</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> a</span><span style="color:#C678DD;">=</span><span style="color:#D19A66;">7</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> b</span><span style="color:#C678DD;">=</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> c;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> sa</span><span style="color:#C678DD;">=</span><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> sb</span><span style="color:#C678DD;">=</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> sc;</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> d</span><span style="color:#C678DD;">=</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">	//move dword ptr[d],0AH </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    			//move dword ptr[esp],0AH</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> e</span><span style="color:#C678DD;">=</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> f;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> sd</span><span style="color:#C678DD;">=</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> se</span><span style="color:#C678DD;">=</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> sf;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    cout</span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">c</span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">sc</span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">f</span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">sf;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),b=s("li",null,[s("p",null,"全局变量都是数据，放在数据段（a，sa在.data段 b，c，sb，sc在.bss段）")],-1),g=s("u",null,"局部变量",-1),f=s("u",null,"函数形参",-1),h=s("code",null,".text",-1),x=s("code",null,"cout << f << c << endl",-1),E=s("code",null,"f",-1),N=s("code",null,"c",-1),k=s("u",null,"e在.data，f，g在.bss",-1),q=s("figure",null,[s("img",{src:d,alt:"image-20240130153420171",tabindex:"0",loading:"lazy"}),s("figcaption",null,"image-20240130153420171")],-1),w=s("p",null,"为什么进程间通信比较困难，主要原因是用户空间是私有的，只要内核空间是共享的",-1);function V(M,O){const l=p("font");return t(),c("div",null,[s("p",null,[n("任何的编程语言都会产生两种东西："),y,n("。c++代码编译链接之后产生一个可执行文件"),D,n("存储在"),_,n("上，运行时会把程序从磁盘加载到内存（虚拟）中，"),a(l,{color:"red"},{default:o(()=>[A]),_:1})]),i("more"),v,m,s("p",null,[F,n("："),a(l,{color:"green"},{default:o(()=>[n("x86 32位Linux环境下")]),_:1})]),C,s("ul",null,[b,s("li",null,[s("p",null,[n("🍊声名**"),a(l,{color:"red"},{default:o(()=>[g,n("a，b，c以及"),f,n("生成的是指令，指令放在"),h,n("段")]),_:1}),n("，运行时会在栈上开辟空间存储变量值，**"),x,n(),E,n("不为0、"),N,n("为0")])]),s("li",null,[a(l,{color:"red"},{default:o(()=>[n("static局部变量是程序第一次运行到时初始化")]),_:1}),n("，"),k]),s("li",null,[a(l,{color:"red"},{default:o(()=>[n("每个进程的用户空间是私有的，内核空间是共享的")]),_:1}),n("，匿名管道通信就是在内核空间划分一道地址空间进行通信")])]),q,w])}const z=e(u,[["render",V],["__file","进程虚拟地址空间.html.vue"]]);export{z as default};
