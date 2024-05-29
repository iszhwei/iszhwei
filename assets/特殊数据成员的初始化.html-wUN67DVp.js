import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as t,c as i,d as n,e as s,f as a,w as p,a as o}from"./app-2pke9_a8.js";const B={},r=o(`<h1 id="特殊数据成员的初始化" tabindex="-1"><a class="header-anchor" href="#特殊数据成员的初始化" aria-hidden="true">#</a> 特殊数据成员的初始化</h1><p>在C++的类中，有4种比较特殊的数据成员，他们分别是<strong>常量成员、引用成员、类对象成员和静态成员</strong>，他们的初始化与普通数据成员有所不同。</p><h2 id="常量数据成员" tabindex="-1"><a class="header-anchor" href="#常量数据成员" aria-hidden="true">#</a> 常量数据成员</h2><p>当数据成员用const关键字进行修饰以后，就成为常量成员。一经初始化，该数据成员便具有“只读属 性”，在程序中无法对其值修改。事实上，在构造函数体内初始化const数据成员是非法的，它们<strong>只能在</strong><strong>构造函数初始化列表中进行初始化</strong>。如：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Point</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //错误写法</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Point</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">ix</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">iy</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        _ix </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> ix;</span><span style="color:#7F848E;font-style:italic;">//error, 这是赋值语句，const成员不能修改</span></span>
<span class="line"><span style="color:#ABB2BF;">        _iy </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> iy;</span><span style="color:#7F848E;font-style:italic;">//error</span></span>
<span class="line"><span style="color:#ABB2BF;">        _iz </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> _ix;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //正确写法</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Point</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">ix</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">iy</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    : </span><span style="color:#61AFEF;">_ix</span><span style="color:#ABB2BF;">(ix)</span></span>
<span class="line"><span style="color:#ABB2BF;">    , </span><span style="color:#61AFEF;">_iy</span><span style="color:#ABB2BF;">(iy)</span></span>
<span class="line"><span style="color:#ABB2BF;">    , </span><span style="color:#61AFEF;">_iz</span><span style="color:#ABB2BF;">(_ix)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _ix;</span><span style="color:#7F848E;font-style:italic;">	//常量数据成员,必须在初始化列表中进行</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _iy;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;"> _iz;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用数据成员" tabindex="-1"><a class="header-anchor" href="#引用数据成员" aria-hidden="true">#</a> 引用数据成员</h2><p>和常量成员相同，引用成员也必须在构造函数初始化列表中进行初始化，否则编译报错。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Point</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Point</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">ix</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">iy</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    : </span><span style="color:#61AFEF;">_ix</span><span style="color:#ABB2BF;">(ix)</span></span>
<span class="line"><span style="color:#ABB2BF;">    , </span><span style="color:#61AFEF;">_iy</span><span style="color:#ABB2BF;">(iy)</span></span>
<span class="line"><span style="color:#ABB2BF;">    , </span><span style="color:#61AFEF;">_ref</span><span style="color:#ABB2BF;">(_ix)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Point(int = 0, int = 0)&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        /* _ix = ix;//error,赋值 */</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        /* _iy = iy; */</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;(&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> _ix </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;, &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> _iy </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;)&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">  endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Point</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~Point()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _ix;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _iy;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">_ref;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//成员函数不占用类的大小，成员函数存在于程序代码区，被该类的</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//左右对象共享</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">argc</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">**</span><span style="color:#E06C75;font-style:italic;">argv</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;sizeof(Point) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(Point) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    Point </span><span style="color:#61AFEF;">pt</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">//栈对象</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">$./a.out</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">sizeof(Point</span><span style="color:#ABB2BF;">) = 16 </span><span style="color:#7F848E;font-style:italic;">#有内存对齐</span></span>
<span class="line"><span style="color:#61AFEF;">Point(int</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#98C379;">,</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;">~Point</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类对象成员" tabindex="-1"><a class="header-anchor" href="#类对象成员" aria-hidden="true">#</a> 类对象成员</h2><p>当<u>数据成员本身也是<strong>自定义类类型对象</strong>时</u>，比如一个直线类Line对象中包含两个Point类对象，对Point 对象的创建就必须要放在Line的构造函数的初始化列表中进行。如</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Point</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    /* Point(int ix = 0, int iy = 0) */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Point</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">ix</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">iy</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    : </span><span style="color:#61AFEF;">_ix</span><span style="color:#ABB2BF;">(ix)</span></span>
<span class="line"><span style="color:#ABB2BF;">    , </span><span style="color:#61AFEF;">_iy</span><span style="color:#ABB2BF;">(iy)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Point(int = 0, int = 0)&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;(&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> _ix </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;, &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> _iy </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;)&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;">  endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Point</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~Point()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _ix;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _iy;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Line</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Line</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y1</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x2</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">y2</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    : </span><span style="color:#61AFEF;">_pt1</span><span style="color:#ABB2BF;">(x1, y1)</span><span style="color:#7F848E;font-style:italic;">//类对象成员需要显示进行初始化，否则就是默认值</span></span>
<span class="line"><span style="color:#ABB2BF;">    , </span><span style="color:#61AFEF;">_pt2</span><span style="color:#ABB2BF;">(x2, y2)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Line(int, int, int,int)&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">printLine</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">_pt1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">_pt2</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Line</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~Line()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    Point _pt1;</span><span style="color:#7F848E;font-style:italic;">//类对象成员(子对象)</span></span>
<span class="line"><span style="color:#ABB2BF;">    Point _pt2;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">argc</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">**</span><span style="color:#E06C75;font-style:italic;">argv</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    Line </span><span style="color:#61AFEF;">line</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">line</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">printLine</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当Line的构造函数没有在其初始化列表中初始化对象<code>_pt1</code>和<code>_pt2</code>时，系统也会自动调用Point类的默认构造函数，此时就会与预期的构造不一致。因此需要显式在Line的构造函数初始化列表中初始化<code>_pt1</code>和<code>_pt2</code>对象。</p><h2 id="静态数据成员" tabindex="-1"><a class="header-anchor" href="#静态数据成员" aria-hidden="true">#</a> 静态数据成员</h2>`,14),y=n("strong",null,"就被创建并初始化的（与之相比，对象是在",-1),d=n("u",null,"静态数据成员和之前介绍的静态变量一样，当程序执行时，该成员已经存在，一直到程序结束，任何该类对象都可对其进行访问，静态数据成员存储在全局/静态区，并不占据对象的存储空间。",-1),F=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Computer</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Computer</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;">brand</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">double</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">price</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    : </span><span style="color:#61AFEF;">_brand</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;">[</span><span style="color:#61AFEF;">strlen</span><span style="color:#ABB2BF;">(brand) </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">]())</span></span>
<span class="line"><span style="color:#ABB2BF;">    , </span><span style="color:#61AFEF;">_price</span><span style="color:#ABB2BF;">(price)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        _totalPrice </span><span style="color:#C678DD;">+=</span><span style="color:#ABB2BF;"> _price;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;品牌:&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> _brand </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;价格:&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> _price </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;总价:&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> _totalPrice </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //...</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> _brand;	</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">double</span><span style="color:#ABB2BF;"> _price;</span><span style="color:#7F848E;font-style:italic;">	//4和 _brand 会有内存对齐</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">double</span><span style="color:#ABB2BF;"> _totalPrice;</span><span style="color:#7F848E;font-style:italic;">//4静态的数据成员不占类的大小，被类</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">                            //创建的所有对象所共享</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=n("u",null,"不属于类的任何一个对象，所以它们并不是在创建类对象时被定义的。这意味着它们不是由类的的构造函数初始化的",-1),A=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">类型 类名::变量名 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> 初始化表达式;</span><span style="color:#7F848E;font-style:italic;"> //普通变量</span></span>
<span class="line"><span style="color:#ABB2BF;">类型 类名::对象名(构造参数);</span><span style="color:#7F848E;font-style:italic;">     //对象变量</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//静态数据成员要放在全局静态位置进行初始化，特别是对于头文件与</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//实现文件的形式，要放在实现文件里面，否则会有多重定义的报错</span></span>
<span class="line"><span style="color:#C678DD;">double</span><span style="color:#ABB2BF;"> Computer::_totalPrice </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function u(D,b){const l=c("font");return t(),i("div",null,[r,n("p",null,[n("u",null,[s("C++允许使用static（静态存储）修饰数据成员，这样的成员在**"),a(l,{color:"green"},{default:p(()=>[s("编译时")]),_:1}),y,a(l,{color:"green"},{default:p(()=>[s("运行时")]),_:1}),s("**被创建的），且其实例只有一个，被所有该类的对象共享")]),s("，就像住在同一宿舍里的同学共享一个房间号一样。"),d]),F,n("p",null,[s("因为静态数据成员"),v,s("，一般来说，我们不能在类的内部初始化静态数据成员，"),n("strong",null,[s("必须在类的外部定义和初始化静态数据成员，且"),a(l,{color:"red"},{default:p(()=>[s("不再包含static关键字")]),_:1})]),s("，格式如下:")]),A,n("p",null,[n("strong",null,[s("注意：要放在"),a(l,{color:"red"},{default:p(()=>[s("实现文件")]),_:1}),s("里面，否则会有"),a(l,{color:"red"},{default:p(()=>[s("多重定义")]),_:1}),s("的报错")])])])}const _=e(B,[["render",u],["__file","特殊数据成员的初始化.html.vue"]]);export{_ as default};
