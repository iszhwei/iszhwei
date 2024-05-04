import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as i,c as t,d as s,e as n,f as a,w as p,a as e}from"./app-m9pC5KT-.js";const B={},r=e('<h1 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h1><h2 id="什么是单例模式" tabindex="-1"><a class="header-anchor" href="#什么是单例模式" aria-hidden="true">#</a> 什么是单例模式</h2><p>单例模式是指在整个系统生命周期内，保<u>证一个类只能产生一个实例</u>，确保该<strong>类的唯一性</strong>。</p><h2 id="为什么需要单例模式" tabindex="-1"><a class="header-anchor" href="#为什么需要单例模式" aria-hidden="true">#</a> 为什么需要单例模式</h2><ol><li>节省资源。一个类<u>只有一个实例，不存在多份实例</u>，节省资源。</li><li>方便控制。在一些操作<strong>公共资源</strong>的场景时，避免了多个对象引起的复杂操作。</li></ol><h2 id="线程安全" tabindex="-1"><a class="header-anchor" href="#线程安全" aria-hidden="true">#</a> 线程安全</h2><h3 id="什么是线程安全" tabindex="-1"><a class="header-anchor" href="#什么是线程安全" aria-hidden="true">#</a> 什么是线程安全？</h3><p>在拥有共享数据的多条线程并行执行的程序中，线程安全的代码会<u>通过同步机制保证各个线程都可以正常且正确的执行，不会出现数据污染等意外情况</u>。</p><h3 id="如何保证线程安全" tabindex="-1"><a class="header-anchor" href="#如何保证线程安全" aria-hidden="true">#</a> 如何保证线程安全？</h3>',9),d=s("strong",null,"共享的资源",-1),y=s("li",null,"让线程也拥有资源，不用去共享进程中的资源。如：使用threadlocal可以为每个线程维护一个私有的本地变量。",-1),v=e('<h2 id="单例类的特点" tabindex="-1"><a class="header-anchor" href="#单例类的特点" aria-hidden="true">#</a> 单例类的特点</h2><ul><li><u>构造函数和析构函数为私有类型</u>，目的是禁止外部构造和析构。</li><li><u>拷贝构造函数和赋值构造函数是私有类型</u>，目的是禁止外部拷贝和赋值，确保实例的唯一性。</li><li>类中<u>有一个获取实例的静态方法</u>，可以全局访问。</li></ul><h2 id="单例模式分类" tabindex="-1"><a class="header-anchor" href="#单例模式分类" aria-hidden="true">#</a> 单例模式分类</h2><p>单例模式可以分为 <strong>懒汉式</strong> 和 <strong>饿汉式</strong> ，两者之间的区别在于创建实例的时间不同。</p><h3 id="懒汉式" tabindex="-1"><a class="header-anchor" href="#懒汉式" aria-hidden="true">#</a> 懒汉式</h3>',5),F=s("u",null,"需要使用该实例时，才会去创建并使用实例",-1),A=s("h3",{id:"饿汉式",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#饿汉式","aria-hidden":"true"},"#"),n(" 饿汉式")],-1),u=s("u",null,[n("在"),s("strong",null,"编译期"),n("就初始化创建实例，当需要时，直接调用即可")],-1),D=s("ul",null,[s("li",null,"优点：线程安全"),s("li",null,[n("缺点： "),s("ol",null,[s("li",null,"浪费内存，即使对象没有使用也会被创建"),s("li",null,"不能加载一些运行时的资源")])])],-1),m=s("h2",{id:"单例模式实现",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#单例模式实现","aria-hidden":"true"},"#"),n(" 单例模式实现")],-1),b=e(`<h3 id="普通懒汉式单例-线程不安全" tabindex="-1"><a class="header-anchor" href="#普通懒汉式单例-线程不安全" aria-hidden="true">#</a> 普通懒汉式单例（线程不安全）</h3><p>这种情况是线程不安全的，不作详细介绍。</p><h3 id="加锁的懒汉式单例-线程安全" tabindex="-1"><a class="header-anchor" href="#加锁的懒汉式单例-线程安全" aria-hidden="true">#</a> 加锁的懒汉式单例（线程安全）</h3><p>使用<strong>互斥锁</strong>保证线程安全。</p><h4 id="方法1-返回普通指针" tabindex="-1"><a class="header-anchor" href="#方法1-返回普通指针" aria-hidden="true">#</a> 方法1：返回普通指针</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">///  加锁的懒汉式实现  //</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SingleInstance</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 获取单实例对象</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SingleInstance</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#61AFEF;">GetInstance</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //释放单实例，进程退出时调用</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">deleteInstance</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 打印实例地址</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Print</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 将其构造和析构成为私有的, 禁止外部构造和析构</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">SingleInstance</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~SingleInstance</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 将其拷贝构造和赋值构造成为私有函数, 禁止外部拷贝和赋值</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">SingleInstance</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SingleInstance</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">signal</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SingleInstance</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&amp;operator</span><span style="color:#ABB2BF;">=(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SingleInstance</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">signal</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 唯一单实例对象指针</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> SingleInstance </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">m_SingleInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> std::mutex m_Mutex;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源文件：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//初始化静态成员变量</span></span>
<span class="line"><span style="color:#ABB2BF;">SingleInstance </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">SingleInstance::m_SingleInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">std::mutex SingleInstance::m_Mutex;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 注意：不能返回指针的引用，否则存在外部被修改的风险！</span></span>
<span class="line"><span style="color:#E5C07B;">SingleInstance</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SingleInstance</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">GetInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //  这里使用了两个 if 判断语句的技术称为双检锁；好处是，只有判断指针为空的时候才加锁，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //  避免每次调用 GetInstance的方法都加锁，锁的开销毕竟还是有点大的。</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (m_SingleInstance </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        std::unique_lock</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">std::mutex</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">lock</span><span style="color:#ABB2BF;">(m_Mutex);</span><span style="color:#7F848E;font-style:italic;"> // 加锁</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (m_SingleInstance </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">volatile</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">auto</span><span style="color:#ABB2BF;"> temp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> (std::nothrow) </span><span style="color:#61AFEF;">SingleInstance</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">            m_SingleInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> temp;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> m_SingleInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SingleInstance</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">deleteInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    std::unique_lock</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">std::mutex</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">lock</span><span style="color:#ABB2BF;">(m_Mutex);</span><span style="color:#7F848E;font-style:italic;"> // 加锁</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (m_SingleInstance)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> m_SingleInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">        m_SingleInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SingleInstance</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">Print</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;我的实例内存地址是:&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">SingleInstance</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">SingleInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;构造函数&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">SingleInstance::</span><span style="color:#56B6C2;">~</span><span style="color:#61AFEF;">SingleInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;析构函数&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法2-返回智能指针" tabindex="-1"><a class="header-anchor" href="#方法2-返回智能指针" aria-hidden="true">#</a> 方法2：返回智能指针</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;memory&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;mutex&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> std::</span><span style="color:#E5C07B;">shared_ptr</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">getSingleton</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Hello World.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Singleton</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> __PRETTY_FUNCTION__ </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> __PRETTY_FUNCTION__ </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> std::shared_ptr</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">Singleton</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> singleton </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> std::mutex singletonMutex;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">std::</span><span style="color:#E5C07B;">shared_ptr</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">getSingleton</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (singleton </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        std::unique_lock</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">std::mutex</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">lock</span><span style="color:#ABB2BF;">(singletonMutex);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (singleton </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">volatile</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">auto</span><span style="color:#ABB2BF;"> temp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> std::</span><span style="color:#61AFEF;">shared_ptr</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">&gt;(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;">            singleton </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> temp;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> singleton;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态局部变量的懒汉单例-c-11线程安全" tabindex="-1"><a class="header-anchor" href="#静态局部变量的懒汉单例-c-11线程安全" aria-hidden="true">#</a> 静态局部变量的懒汉单例（C++11线程安全）</h3><p>头文件：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">///  内部静态变量的懒汉实现  //</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Single</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 获取单实例对象</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Single</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">GetInstance</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	// 打印实例地址</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Print</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 禁止外部构造</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Single</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 禁止外部析构</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Single</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 禁止外部拷贝构造</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Single</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> Single </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">single) </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 禁止外部赋值操作</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Single</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&amp;operator</span><span style="color:#ABB2BF;">=(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Single</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">single</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源文件：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">Single</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Single</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">GetInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * 局部静态特性的方式实现单实例。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * 静态局部变量只在当前函数内有效，其他函数无法访问。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * 静态局部变量只在第一次被调用的时候初始化，也存储在静态存储区，生命周期从第一次被初始化起至程序结束止。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> Single single;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> single;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Single</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">Print</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;我的实例内存地址是:&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">Single</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">Single</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;构造函数&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">Single::</span><span style="color:#56B6C2;">~</span><span style="color:#61AFEF;">Single</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;析构函数&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="饿汉式单例-线程安全" tabindex="-1"><a class="header-anchor" href="#饿汉式单例-线程安全" aria-hidden="true">#</a> 饿汉式单例（线程安全）</h3><p>头文件：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 饿汉实现 /</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 获取单实例</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">GetInstance</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 释放单实例，进程退出时调用</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">deleteInstance</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 打印实例地址</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Print</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 将其构造和析构成为私有的, 禁止外部构造和析构</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Singleton</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 将其拷贝构造和赋值构造成为私有函数, 禁止外部拷贝和赋值</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">signal</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&amp;operator</span><span style="color:#ABB2BF;">=(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">signal</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 唯一单实例对象指针</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> Singleton </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">g_pSingleton;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源文件：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 代码一运行就初始化创建实例 ，本身就线程安全</span></span>
<span class="line"><span style="color:#ABB2BF;">Singleton</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> Singleton::g_pSingleton </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> (std::nothrow) </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">Singleton</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">GetInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> g_pSingleton;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">deleteInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (g_pSingleton)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> g_pSingleton;</span></span>
<span class="line"><span style="color:#ABB2BF;">        g_pSingleton </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">Print</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;我的实例内存地址是:&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;构造函数&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">Singleton::</span><span style="color:#56B6C2;">~</span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;析构函数&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-c-11-std-call-once-实现单例-c-11线程安全" tabindex="-1"><a class="header-anchor" href="#使用-c-11-std-call-once-实现单例-c-11线程安全" aria-hidden="true">#</a> 使用 C++11 std::call_once 实现单例（C++11线程安全）</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;memory&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;mutex&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> std::</span><span style="color:#E5C07B;">shared_ptr</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">getSingleton</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Hello World.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Singleton</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> __PRETTY_FUNCTION__ </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> __PRETTY_FUNCTION__ </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> std::shared_ptr</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">Singleton</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> singleton </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> std::once_flag singletonFlag;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">std::</span><span style="color:#E5C07B;">shared_ptr</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">getSingleton</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    std::</span><span style="color:#61AFEF;">call_once</span><span style="color:#ABB2BF;">(singletonFlag, [</span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">] {</span></span>
<span class="line"><span style="color:#ABB2BF;">        singleton </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> std::</span><span style="color:#61AFEF;">shared_ptr</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;">&gt;(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> singleton;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单例模式的自动释放" tabindex="-1"><a class="header-anchor" href="#单例模式的自动释放" aria-hidden="true">#</a> 单例模式的自动释放</h2><p>使用单例设计模式的过程中，也难免会遇到内存泄漏的问题。那么是否有一个方法，可以让对象自动释放，而不需要程序员自己手动去释放呢？在学习了嵌套类之后，我们就可以完美的解决这一问题。 在涉及到自动的问题时，我们很自然的可以想到：<strong>当对象被销毁时，会自动调用其析构函数</strong>。利用这一特性，我们可以解决这一问题。</p><h3 id="可以使用友元形式进行设计" tabindex="-1"><a class="header-anchor" href="#可以使用友元形式进行设计" aria-hidden="true">#</a> 可以使用友元形式进行设计</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//1、友元实现单例对象的自动释放</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">AutoRelease</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">friend</span><span style="color:#ABB2BF;"> AutoRelease;</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#61AFEF;">getInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">     {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> _pInstance)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            _pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> _pInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">destroy</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(_pInstance)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> _pInstance;</span><span style="color:#7F848E;font-style:italic;"> //1、调用析构函数 2、operator delete</span></span>
<span class="line"><span style="color:#ABB2BF;">            _pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Singleton()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Singleton</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~Singleton()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> Singleton </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">_pInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">Singleton </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">Singleton::_pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">AutoRelease</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">AutoRelease</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;AutoRelease()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~AutoRelease</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~AutoRelease()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(Singleton::_pInstance)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> Singleton::_pInstance;</span><span style="color:#7F848E;font-style:italic;">//1、调用析构函数 2、operator delete</span></span>
<span class="line"><span style="color:#ABB2BF;">            Singleton::_pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内部类加静态数据成员形式" tabindex="-1"><a class="header-anchor" href="#内部类加静态数据成员形式" aria-hidden="true">#</a> 内部类加静态数据成员形式</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(_pInstance </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            _pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> _pInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">AutoRelease</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">AutoRelease</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;AutoRelease()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">~AutoReleas</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~AutoRelease()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(_pInstance) </span></span>
<span class="line"><span style="color:#ABB2BF;">            {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> _pInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">                _pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">         cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Singleton()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Singleton</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">         cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~Singleton()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> Singleton </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">_pInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> AutoRelease  _auto;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="atexit方式进行" tabindex="-1"><a class="header-anchor" href="#atexit方式进行" aria-hidden="true">#</a> atexit方式进行</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#61AFEF;">getInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        //对于多线程环境，不安全</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> _pInstance)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            _pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">atexit</span><span style="color:#ABB2BF;">(destroy);</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> _pInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">destroy</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(_pInstance)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> _pInstance;</span><span style="color:#7F848E;font-style:italic;">//1、调用析构函数 2、operator delete</span></span>
<span class="line"><span style="color:#ABB2BF;">            _pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Singleton()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Singleton</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~Singleton()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> Singleton </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">_pInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Singleton *Singleton::_pInstance = nullptr; //饱汉模式(懒汉模式)*/</span></span>
<span class="line"><span style="color:#ABB2BF;">Singleton </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">Singleton::_pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getInstance</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;">//饿汉模式</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pthread-once形式" tabindex="-1"><a class="header-anchor" href="#pthread-once形式" aria-hidden="true">#</a> pthread_once形式</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//4、pthread_once,平台相关性的函数</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Singleton</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#61AFEF;">getInstance</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">pthread_once</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">_once, init);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> _pInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">init</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        _pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">atexit</span><span style="color:#ABB2BF;">(destroy);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">destroy</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(_pInstance)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> _pInstance;</span><span style="color:#7F848E;font-style:italic;">//1、调用析构函数 2、operator delete</span></span>
<span class="line"><span style="color:#ABB2BF;">            _pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Singleton</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Singleton()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Singleton</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~Singleton()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> Singleton </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">_pInstance;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> pthread_once_t _once;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">Singleton </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">Singleton::_pInstance </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;"> //饱汉模式(懒汉模式)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Singleton *Singleton::_pInstance = getInstance();//饿汉模式 */</span></span>
<span class="line"><span style="color:#ABB2BF;">pthread_once_t Singleton::_once </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> PTHREAD_ONCE_INIT;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function C(g,h){const l=c("font");return i(),t("div",null,[r,s("ol",null,[s("li",null,[n("给"),d,a(l,{color:"red"},{default:p(()=>[n("加把锁")]),_:1}),n("，保证每个资源变量每时每刻至多被一个线程占用。")]),y]),v,s("p",null,[n("系统运行中，实例并不存在，只有当"),F,n("。这种方式"),a(l,{color:"red"},{default:p(()=>[n("要考虑线程安全。")]),_:1})]),A,s("p",null,[u,n("。这种方式本身就线程安全，没有多线程的"),a(l,{color:"red"},{default:p(()=>[n("线程安全")]),_:1}),n("问题。")]),D,m,s("p",null,[s("strong",null,[n("单例的经典实现方式是「"),a(l,{color:"green"},{default:p(()=>[n("静态局部变量的懒汉单例")]),_:1}),n("」，推荐使用这种方式。")])]),b])}const S=o(B,[["render",C],["__file","单例模式.html.vue"]]);export{S as default};
