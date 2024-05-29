import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as B,c as r,d as n,e as s,f as l,w as p,a as e}from"./app-2pke9_a8.js";const o="/assets/image-20240415132553426-dHwm_OQU.png",t="/assets/image-20240415134755816-w_fLTaY1.png",d={},y=e(`<h1 id="多基继承" tabindex="-1"><a class="header-anchor" href="#多基继承" aria-hidden="true">#</a> 多基继承</h1><h2 id="形式" tabindex="-1"><a class="header-anchor" href="#形式" aria-hidden="true">#</a> 形式</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> 派生类 </span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;">/</span><span style="color:#C678DD;">protected</span><span style="color:#ABB2BF;">/</span><span style="color:#C678DD;">private</span><span style="color:#ABB2BF;"> 基类1</span></span>
<span class="line"><span style="color:#ABB2BF;">, ...</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;">/</span><span style="color:#C678DD;">protected</span><span style="color:#ABB2BF;">/</span><span style="color:#C678DD;">private</span><span style="color:#ABB2BF;"> 基类N</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class不写出来就是私有继承" tabindex="-1"><a class="header-anchor" href="#class不写出来就是私有继承" aria-hidden="true">#</a> class不写出来就是私有继承</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">D</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">B</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">C</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上面的写法中B和C属于私有继承，D的实例化的对象是无法访问B、C的成员方法的</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">D</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">C</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造和析构顺序" tabindex="-1"><a class="header-anchor" href="#构造和析构顺序" aria-hidden="true">#</a> 构造和析构顺序</h2><h3 id="派生类构造函数初始化列表不写时-构造和析构顺序" tabindex="-1"><a class="header-anchor" href="#派生类构造函数初始化列表不写时-构造和析构顺序" aria-hidden="true">#</a> 派生类构造函数初始化列表不写时，构造和析构顺序</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">D</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">C</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">D</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;D()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~D</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~D()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>构造函数调用顺序和派生列表一致</p><h3 id="派生类初始化列表顺序和派生列表顺序不一致时" tabindex="-1"><a class="header-anchor" href="#派生类初始化列表顺序和派生列表顺序不一致时" aria-hidden="true">#</a> 派生类初始化列表顺序和派生列表顺序不一致时</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">D</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">C</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">D</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">	: </span><span style="color:#61AFEF;">A</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">	, </span><span style="color:#61AFEF;">C</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">	, </span><span style="color:#61AFEF;">B</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;D()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~D</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;~D()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>顺序依然没变</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>多基继承和单基继承的派生类构造函数完成的任务和执行顺序并没有本质不同，唯一一点区别在于：首先要执行所有基类的构造函数，再执行派生类构造函数中初始化表达式的其他内容和构造函数体。<strong>各基类构造函数的执行顺序</strong>与其在初始化表中的顺序无关，而是<strong>由定义派生类时指定的基类顺序（派生列表）决定的。</strong></p><h2 id="成员名冲突的二义性" tabindex="-1"><a class="header-anchor" href="#成员名冲突的二义性" aria-hidden="true">#</a> 成员名冲突的二义性</h2>',19),v=n("strong",null,"同名成员",-1),u=e(`<p>如下面的例子，我们先定义3个不同的类A、B、C，这3个类中都有一个同名成员函数print，然后让类D继承自A、B、C，则当创建D的对象d，用d调用成员函数print时，发生编译错误。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {   </span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;A::print()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;   </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {   </span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;B::print()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;   </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">C</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">    {   </span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;C::print()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;   </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">D</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">C</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;">() </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    D d;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">d</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;">//error</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">d</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">A</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;">//ok</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">d</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">B</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;">//ok</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">d</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">C</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;">//ok</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),A=n("h3",{id:"菱形继承的二义性问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#菱形继承的二义性问题","aria-hidden":"true"},"#"),s(" 菱形继承的二义性问题")],-1),F=e('<figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setNumber</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">long</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">number</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {   </span></span>
<span class="line"><span style="color:#ABB2BF;">        _number </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> number;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">long</span><span style="color:#ABB2BF;"> _number;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">C</span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">D</span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">C</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b=e(`<li><p>D不能直接调用A的成员</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">D d;</span></span>
<span class="line"><span style="color:#E5C07B;">d</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">A</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;">	//error</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可以加作用域访问B或C中的成员</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">d</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">B</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">d</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">C</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),m=e(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setNumber</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">long</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">number</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {   </span></span>
<span class="line"><span style="color:#ABB2BF;">        _number </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> number;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">long</span><span style="color:#ABB2BF;"> _number;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">C</span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">D</span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">B</span></span>
<span class="line"><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">C</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    D d;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">d</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setNumber</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function D(C,h){const a=i("font");return B(),r("div",null,[y,n("p",null,[s("一般来说，在派生类中对基类成员的访问应当具有唯一性，但在多基继承时，"),l(a,{color:"red"},{default:p(()=>[s("如果多个基类中存在"),v,s("的情况，造成编译器无从判断具体要访问的哪个基类中的成员，则称为对基类成员访问的二义性问题。")]),_:1})]),u,n("p",null,[s("解决该问题的方式比较简单，只需要在调用时，指明要调用的是某个基类的成员函数即可，即"),n("strong",null,[s("使用"),l(a,{color:"green"},{default:p(()=>[s("作用域限定符")]),_:1}),s("就可以解决该问题")]),s("。")]),A,n("p",null,[n("strong",null,[s("多基派生中，如果在多条继承路径上"),l(a,{color:"red"},{default:p(()=>[s("有一个共同的基类")]),_:1})]),s("，如下图所示，不难看出，在D类对象中，会有来自两条不同路径的共同基类（类A）的双重拷贝。")]),F,n("ul",null,[b,n("li",null,[n("p",null,[s("D实例化对象会调用"),l(a,{color:"red"},{default:p(()=>[s("2次")]),_:1}),s("A的构造函数和析构函数，因此A的成员在D实例化的对象的内存中存在两份，会产生二义性")])])]),n("p",null,[s("出现这种问题时，我们的解决方案是采用**"),l(a,{color:"green"},{default:p(()=>[s("虚拟继承")]),_:1}),s("**，"),l(a,{color:"red"},{default:p(()=>[s("使公共基类的成员在内存中只有一份")]),_:1}),s("。中间的类B、C虚拟继承自A，就可以解决了。至于背后到底发生了什么，待我们学了多态的知识后一起做讲解。")]),m,n("ul",null,[n("li",null,[s("D实例化对象会调用"),l(a,{color:"red"},{default:p(()=>[s("1次")]),_:1}),s("A的构造函数和析构函数")]),n("li",null,[s("D继承B、C的虚基指针，只有"),l(a,{color:"red"},{default:p(()=>[s("一个")]),_:1}),s("A类的成员")])])])}const _=c(d,[["render",D],["__file","多基继承.html.vue"]]);export{_ as default};
