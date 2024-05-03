import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as i,c as r,b as t,d as s,e as n,f as l,w as p,a as e}from"./app-mYdPlPhZ.js";const B="/assets/1683811200259-a13465eb-84ec-4937-b00d-62e05235c8c6-1sYM3kPQ.png",d="/assets/20200307101255868-yw_vTY9N.png",y={},v=s("h1",{id:"类和对象",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#类和对象","aria-hidden":"true"},"#"),n(" 类和对象")],-1),u=s("figure",null,[s("img",{src:B,alt:"img",tabindex:"0",loading:"lazy"}),s("figcaption",null,"img")],-1),F=e('<h2 id="什么是oop思想" tabindex="-1"><a class="header-anchor" href="#什么是oop思想" aria-hidden="true">#</a> 什么是OOP思想？</h2><p>面向对象的程序设计语言必须有描述对象及其相互之间关系的语言成分。这些程序设计语言可以归纳为以下几类：<strong>系统中一切事物皆为对象；对象是属性及其操作的封装体；对象可按其性质划分为类，对象成为类的实例；实例关系和继承关系是对象之间的静态关系；消息传递是对象之间动态联系的唯一形式，也是计算的唯一形式；方法是消息的序列。</strong></p><h2 id="oop编程方法" tabindex="-1"><a class="header-anchor" href="#oop编程方法" aria-hidden="true">#</a> oop编程方法：</h2><ol><li>先确定有哪些实体，根据实体的属性和行为抽象出 ADT(abstract data type)</li><li>类（属性-&gt;成员变量，行为-&gt;成员方法）实例化得到对象</li></ol><h2 id="面向对象基本概念" tabindex="-1"><a class="header-anchor" href="#面向对象基本概念" aria-hidden="true">#</a> 面向对象基本概念</h2><p>c语言：各种各样的函数定义</p><p>c++： 类，表示实体的抽象数据类型</p><figure><img src="'+d+`" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><h2 id="oop语言的四大特征是什么" tabindex="-1"><a class="header-anchor" href="#oop语言的四大特征是什么" aria-hidden="true">#</a> oop语言的四大特征是什么？</h2><ol><li><strong>抽象：忽略一个主题中与当前目标无关的东西,专注的注意与当前目标有关的方面，将其抽象。</strong></li><li>**封装/隐藏：只隐藏对象的属性和实现细节，仅对外提供公共访问方式。**通过访问限定符体现的出来的 <ol><li>public</li><li>private</li><li>protected</li></ol></li><li><strong>继承：提高代码复用性；继承是多态的前提。</strong></li><li><strong>多态：是父类或接口定义的引用变量可以指向子类或具体实现类的实例对象。</strong></li></ol><h2 id="c-中类的定义" tabindex="-1"><a class="header-anchor" href="#c-中类的定义" aria-hidden="true">#</a> C++中类的定义</h2><p>C++用类来描述对象，类是对现实世界中相似事物的抽象，比如同是“双轮车”的摩托车和自行车，有共同点，也有许多不同点。“车”类是对摩托车、自行车、汽车等相同点的提取与抽象。</p><p><u>类的定义分为两个部分：<strong>数据</strong>（相当于属性）和<strong>对数据的操作</strong>（相当于行为</u>）。</p><p>从程序设计的观点来说，<strong>类就是数据类型</strong>，是用户定义的数据类型，对象可以看成某个类的实例（某个类的变量）。所以说类是对象的封装，对象是类的实例</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> 类名</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //公有数据成员和成员函数</span></span>
<span class="line"><span style="color:#C678DD;">protected:</span><span style="color:#7F848E;font-style:italic;">//面向对象用的少，继承用的多</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //保护数据成员和成员函数</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //私有数据成员和成员函数</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span><span style="color:#7F848E;font-style:italic;">  // 千万不要忘了这个分号</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),A=s("strong",null,"关键字",-1),b=s("u",null,[n("其中"),s("code",null,"public"),n("进行修饰的成员表示的是该类可以提供的"),s("strong",null,"接口、功能、或者服务")],-1),m=s("u",null,[s("code",null,"protected"),n("进行修饰的成员，其"),s("strong",null,"访问权限是开放给其子类")],-1),D=s("code",null,"private",-1),C=e(`<p>下面以一台大家 熟悉的计算机来举例:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Computer</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //成员函数</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setBrand</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">brand</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">strcpy</span><span style="color:#ABB2BF;">(_brand, brand);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setPrice</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">price</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        _price </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> price;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //数据成员</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_brand</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> _price;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">argc</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">argv</span><span style="color:#ABB2BF;">[])</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    Computer pc;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">pc</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setBrand</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;Huawei Matebook14&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">pc</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setPrice</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">5600</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=s("strong",null,"类中",-1),_=s("strong",null,"inline函数",-1),g=s("u",null,[n("在"),s("strong",null,"类的外部"),n("定义成员函数时，应使用**作用域限定符（"),s("code",null,"::"),n("）**来标识函数所属的类")],-1),f=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">返回类型 类名::成员函数名(参数列表)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //....</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于Computer中的两个成员函数，我们在类之外实现，其实现如下:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Computer</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">setBrand</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">brand</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{   </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">strcpy</span><span style="color:#ABB2BF;">(_brand, brand);  </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Computer</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">setPrice</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">price</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{   </span></span>
<span class="line"><span style="color:#ABB2BF;">    _price </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> price; </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p>`,4),E=e(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Goods</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //char* getName();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> getName;</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> _name;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=e(`<h3 id="class与struct的区别" tabindex="-1"><a class="header-anchor" href="#class与struct的区别" aria-hidden="true">#</a> class与struct的区别</h3><p>在C++中，与C相比，struct的功能已经进行了扩展。<u>class能做的事儿，struct一样能做，他们之间唯一的区别，就是<strong>默认访问权限不同</strong>。class的默认访问权限是private，struct的默认访问权限是public</u></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Computer</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //成员函数, 其访问权限是public</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setBrand</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;">brand</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">strcpy</span><span style="color:#ABB2BF;">(_brand, brand);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setPrice</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">price</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        _price </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> price;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //数据成员, 其访问权限是public</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_brand</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> _price;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Computer2</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //成员函数, 其访问权限是private</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setBrand</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;">brand</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">strcpy</span><span style="color:#ABB2BF;">(_brand, brand);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setPrice</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">price</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        _price </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> price;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //数据成员, 其访问权限是private</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_brand</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> _price;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(N,P){const a=c("font");return i(),r("div",null,[v,u,t("more"),F,s("p",null,[n("class内部可以拥有的是数据成员(属性)和成员函数(行为)，他们可以分别用三个不同的"),A,n("进行修饰，public、protected、private. "),b,n("；"),m,n("；"),s("u",null,[D,n("进行修饰的成员是不可以在类之外进行访问的，只能在类内部访问，可以说**"),l(a,{color:"red"},{default:p(()=>[n("封装性")]),_:1}),n("就是由private关键字来体现**")]),n("。")]),C,s("p",null,[s("u",null,[n("在"),l(a,{color:"green"},{default:p(()=>[h]),_:1}),n("定义的成员函数，都是")]),l(a,{color:"green"},{default:p(()=>[_]),_:1}),n("。除了可以在类内部实现外，成员函数还可以在类之外实现。"),g,n("，即有如下形式:")]),f,s("p",null,[s("mark",null,[s("strong",null,[n("如果类给外部的接口，返回的是成员属性的"),l(a,{color:"blue"},{default:p(()=>[n("指针")]),_:1}),n("记得加const，"),l(a,{color:"red"},{default:p(()=>[n("如果不加const可能会被通过解引用修改私有成员变量的内存")]),_:1})])])]),E,s("ul",null,[s("li",null,[l(a,{color:"red"},{default:p(()=>[n("**类型是不占用内存空间的，只有实例化对象，对象才会占用内存**")]),_:1})])]),x])}const T=o(y,[["render",k],["__file","类和对象.html.vue"]]);export{T as default};
