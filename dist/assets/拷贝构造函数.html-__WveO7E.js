import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as r,c as t,d as n,e as s,f as l,w as o,a as e}from"./app--8O2lHwG.js";const i="/assets/1683811298573-d7177260-78f6-4189-b15e-ade4960e3c65-FENNwera.png",B="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQxNjkz_size_16_color_FFFFFF_t_70-Hs7aHU2Q.png",d="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQxNjkz_size_16_color_FFFFFF_t_70-17127569102475-Ay4xkqHc.png",y={},F=e('<h1 id="拷贝构造函数" tabindex="-1"><a class="header-anchor" href="#拷贝构造函数" aria-hidden="true">#</a> 拷贝构造函数</h1><figure><img src="'+i+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>C++中经常会使用一个变量初始化另一个变量，如</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> x </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> y </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> x;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们希望这样的操作也能作用于自定义类类型，如</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">Point</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">pt1</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">Point pt2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> pt1;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>pt1对象已经存在，而pt2对象还不存在，所以也是这句创建了pt2对象，既然涉及到对象的创建，就必然需要调用构造函数，而这里<u>会调用的就是<strong>复制构造函数</strong>，又称为<strong>拷贝构造函数</strong></u>。如果类中没有显式定义拷贝构造函数时，编译器会自动提供一个缺省的拷贝构造函数。其原型是:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">类名::类名(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> 类名 </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="缺省的拷贝构造函数" tabindex="-1"><a class="header-anchor" href="#缺省的拷贝构造函数" aria-hidden="true">#</a> 缺省的拷贝构造函数</h2><p>如果成员比较简单，缺省的拷贝构造函数已经可以满足需求了，所以可以不显式定义</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">Point</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">Point</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> Point </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">rhs)</span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">_ix</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">rhs</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">_ix</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#61AFEF;">_iy</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">rhs</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">_iy</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浅拷贝和深拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝和深拷贝" aria-hidden="true">#</a> 浅拷贝和深拷贝</h2>`,12),u=n("strong",null,"只拷贝指针地址的方式，我们称为浅拷贝",-1),A=n("figure",null,[n("img",{src:B,alt:"在这里插入图片描述",tabindex:"0",loading:"lazy"}),n("figcaption",null,"在这里插入图片描述")],-1),v=e(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Computer</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Computer</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;">brand</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">double</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">price</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    : </span><span style="color:#61AFEF;">_brand</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;">[</span><span style="color:#61AFEF;">strlen</span><span style="color:#ABB2BF;">(brand) </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">]())</span></span>
<span class="line"><span style="color:#ABB2BF;">    , </span><span style="color:#61AFEF;">_price</span><span style="color:#ABB2BF;">(price)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">         cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Computer(const char *, double)&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Computer</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Computer</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">rhs</span><span style="color:#ABB2BF;">)</span><span style="color:#7F848E;font-style:italic;">	//缺省的拷贝构造函数</span></span>
<span class="line"><span style="color:#ABB2BF;">	: </span><span style="color:#61AFEF;">_brand</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">rhs</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">_brand</span><span style="color:#ABB2BF;">)</span><span style="color:#7F848E;font-style:italic;">	//浅拷贝</span></span>
<span class="line"><span style="color:#ABB2BF;">	, </span><span style="color:#61AFEF;">_price</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">rhs</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">_price</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Computer</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Computer</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">rhs</span><span style="color:#ABB2BF;">)	</span></span>
<span class="line"><span style="color:#ABB2BF;">	: </span><span style="color:#61AFEF;">_brand</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;">[</span><span style="color:#61AFEF;">strlen</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">rhs</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">_brand</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">]())</span><span style="color:#7F848E;font-style:italic;">	//深拷贝</span></span>
<span class="line"><span style="color:#ABB2BF;">	, </span><span style="color:#61AFEF;">_price</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">rhs</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">_price</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">_brand;</span><span style="color:#7F848E;font-style:italic;">	//指向堆内存的指针</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">double</span><span style="color:#ABB2BF;"> _price;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//执行构造初始化</span></span>
<span class="line"><span style="color:#E5C07B;">Computer</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">pc1</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;Huawei Matebook14&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5699</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">Computer pc2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> pc1;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时需要重新显式定义拷贝构造函数，<u>让两个指针指向不同堆空间的方式叫<strong>深拷贝</strong></u>，<strong>源对象与拷贝对象互相独立，其中任何一个对象的改动都不会对另外一个对象造成影响</strong></p><figure><img src="`+d+'" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><h2 id="拷贝构造函数的调用时机" tabindex="-1"><a class="header-anchor" href="#拷贝构造函数的调用时机" aria-hidden="true">#</a> 拷贝构造函数的调用时机</h2><ol><li>当用一个已经存在的<strong>对象初始化另一个新对象时</strong>，会调用拷贝构造函数。</li><li>当实参和形参都是对象，进行<strong>实参与形参的结合时</strong>，会调用拷贝构造函数。</li><li>当函数的<strong>返回值是对象</strong>，函数调用完成返回时，会调用拷贝构造函数。(优化选项<code>-fno-elide-constructors</code>)</li></ol>',5),m={id:"q-拷贝构造函数参数中的引用符号可以去掉吗",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#q-拷贝构造函数参数中的引用符号可以去掉吗","aria-hidden":"true"},"#",-1),b=n("em",null,"一个已经存在的对象初始化一个新对象",-1),h=n("u",null,"函数的参数是会入栈，这样的话栈空间肯定会溢出的",-1),C={id:"q-拷贝构造函数参数中的const可以去掉吗",tabindex:"-1"},D=n("a",{class:"header-anchor",href:"#q-拷贝构造函数参数中的const可以去掉吗","aria-hidden":"true"},"#",-1),g={id:"q-为什么拷贝时候要使用for循环-使用memcpy函数补上更简单吗",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#q-为什么拷贝时候要使用for循环-使用memcpy函数补上更简单吗","aria-hidden":"true"},"#",-1),E=n("strong",null,"但如果拷贝时候拷贝的对象，每一个对象中都含有指针，指针指向外部资源，会发生浅拷贝，析构指向时，释放同一块内存，程序崩溃。",-1);function x(k,N){const a=c("font");return r(),t("div",null,[F,n("p",null,[u,s("。"),l(a,{color:"red"},{default:o(()=>[s("当其中一个对象被销毁时，另外一个对象就获取不到相应的brand值了。")]),_:1})]),A,n("p",null,[n("strong",null,[s("浅拷贝出错问题： 对象使用浅拷贝不一定有错，但是对象有"),l(a,{color:"green"},{default:o(()=>[s("成员变量中有指针指向了对象内存之外的外部资源")]),_:1}),s("，那么当发生浅拷贝时，两个对象不同的指针指向同一个资源。第一次析构将堆内存释放，"),l(a,{color:"red"},{default:o(()=>[s("第二次析构时候就会出错")]),_:1}),s("。")])]),v,n("h2",m,[_,s(" Q：拷贝构造"),n("u",null,[s("函数参数中的"),l(a,{color:"red"},{default:o(()=>[s("引用符号")]),_:1})]),s("可以去掉吗？")]),n("p",null,[s("不能去掉，如果去掉引用符号，"),n("u",null,[s("在满足拷贝构造函数的情况，"),n("strong",null,[s("会满足拷贝构造函数的用 "),b,s(" 的调用时机，然后进行"),l(a,{color:"red"},{default:o(()=>[s("无限循环")]),_:1}),s("调用拷贝构造函数")])]),s("，"),h,s("，所以引用符号不能去掉")]),n("h2",C,[D,s(" Q：拷贝构造函数"),n("u",null,[s("参数中的"),l(a,{color:"red"},{default:o(()=>[s("const")]),_:1})]),s("可以去掉吗？")]),n("p",null,[s("不能去掉，当"),n("strong",null,[s("传递的是"),l(a,{color:"red"},{default:o(()=>[s("右值")]),_:1}),s("（临时对象、临时变量、匿名对象）的时候，会返回报错")]),s("（非const左值引用不能绑定到右值），当传递临时对象的时候，就会报错")]),n("h2",g,[f,s(" Q:为什么拷贝时候要使用"),l(a,{color:"red"},{default:o(()=>[s("for循环")]),_:1}),s("，使用memcpy函数补上更简单吗？")]),n("p",null,[s("因为在进行数据拷贝时候，如果是整型，不会占用整型之外的资源，进行memcpy拷贝没有问题。"),l(a,{color:"red"},{default:o(()=>[E]),_:1})])])}const w=p(y,[["render",x],["__file","拷贝构造函数.html.vue"]]);export{w as default};
