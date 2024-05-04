import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as l,a}from"./app-m9pC5KT-.js";const p="/assets/41ce7c6a48d44277b1f56f35b068b92e-oewwSvUg.png",e="/assets/dd88dc2087504d1fb1059b8a9e245b35-yFVxzOer.png",o={},t=a('<h1 id="观察者observer模式" tabindex="-1"><a class="header-anchor" href="#观察者observer模式" aria-hidden="true">#</a> 观察者Observer模式</h1><ul><li>观察者模式是<strong>行为型模式</strong>；</li><li>行为型模式： 主要关注的是<strong>对象之间的通信</strong></li><li><strong>观察者模式</strong>又叫做<strong>观察者(Observer)监听者(Listener)模式</strong>，也叫<strong>发布(Publish)订阅(Subscribe)模式</strong></li><li><strong>主要关注的是对象的一对多的关系，也就是多个对象都依赖一个对象，当该对象的状态发生改变时，其它对象都能够接收到相应的通知</strong></li></ul><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;string&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;unordered_map&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;list&gt;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">namespace</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">行为型模式：主要关注的是对象之间的通信</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">观察者模式Observer Pattern（发布-订阅模式）设计模式:主要关注的是对象的一对多的关系，也就是多个对象</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">都依赖一个对象，当该对象的状态发生改变时，其它对象都能够接收到相应的通知。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">一组数据（数据对象）   =&gt;  通过这一组数据 =》  曲线图(对象1)/柱状图(对象2)/圆饼图(对象3)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">当数据对象改变时，对象1、对象2、对象3应该及时的收到相应的通知！</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">Observer1  Observer2   Observer3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		   Subject（主题）主题有更改，应该及时通知相应的观察者，去处理相应的事件</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 观察者抽象类</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Observer</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	// 处理消息的接口</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">handle</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">msgid</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 第一个观察者实例：12感兴趣</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Observer1</span><span style="color:#ABB2BF;"> : </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Observer</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">handle</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">msgid</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">switch</span><span style="color:#ABB2BF;"> (msgid)</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">case</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">			cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Observer1 recv 1 msg!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">case</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">			cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Observer1 recv 2 msg!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">			cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Observer1 recv unknow msg!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 第二个观察者实例：2感兴趣</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Observer2</span><span style="color:#ABB2BF;"> : </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Observer</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">handle</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">msgid</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">switch</span><span style="color:#ABB2BF;"> (msgid)</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">case</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">			cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Observer2 recv 2 msg!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">			cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Observer2 recv unknow msg!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 第三个观察者实例：13感兴趣</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Observer3</span><span style="color:#ABB2BF;"> : </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Observer</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">handle</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">msgid</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">switch</span><span style="color:#ABB2BF;"> (msgid)</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">case</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">			cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Observer3 recv 1 msg!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">case</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">			cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Observer3 recv 3 msg!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">			cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Observer3 recv unknow msg!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 主题类</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Subject</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	// 给主题增加观察者对象</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">addObserver</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Observer</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">obser</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">msgid</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		//map添加数据的方法1：</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">_subMap</span><span style="color:#ABB2BF;">[msgid].</span><span style="color:#61AFEF;">push_back</span><span style="color:#ABB2BF;">(obser);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		//map添加数据的方法2：</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		/*auto it = _subMap.find(msgid);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		if (it != _subMap.end())</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">			it-&gt;second.push_back(obser);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		else</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">			list&lt;Observer*&gt; lis;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">			lis.push_back(obser);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">			_subMap.insert({ msgid, lis });</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		}*/</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	// 主题检测发生改变，通知相应的观察者对象处理事件</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">dispatch</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">msgid</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">auto</span><span style="color:#ABB2BF;"> it </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_subMap</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(msgid);</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (it </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_subMap</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (Observer</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> pObser : </span><span style="color:#E5C07B;">it</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">second</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">			{</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E5C07B;">pObser</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#61AFEF;">handle</span><span style="color:#ABB2BF;">(msgid);</span></span>
<span class="line"><span style="color:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">	unordered_map</span><span style="color:#C678DD;">&lt;int</span><span style="color:#ABB2BF;">, list</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">Observer</span><span style="color:#56B6C2;">*</span><span style="color:#C678DD;">&gt;&gt;</span><span style="color:#ABB2BF;"> _subMap;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	Subject subject;</span></span>
<span class="line"><span style="color:#ABB2BF;">	Observer</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Observer1</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">	Observer</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> p2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Observer2</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">	Observer</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> p3 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Observer3</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">subject</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addObserver</span><span style="color:#ABB2BF;">(p1, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">subject</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addObserver</span><span style="color:#ABB2BF;">(p1, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">subject</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addObserver</span><span style="color:#ABB2BF;">(p2, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">subject</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addObserver</span><span style="color:#ABB2BF;">(p3, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">subject</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addObserver</span><span style="color:#ABB2BF;">(p3, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> msgid </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (;;)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;输入消息id:&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		cin </span><span style="color:#C678DD;">&gt;&gt;</span><span style="color:#ABB2BF;"> msgid;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (msgid </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">subject</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">dispatch</span><span style="color:#ABB2BF;">(msgid);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',5),c=[t];function i(B,r){return n(),l("div",null,c)}const v=s(o,[["render",i],["__file","观察者Observer模式.html.vue"]]);export{v as default};
