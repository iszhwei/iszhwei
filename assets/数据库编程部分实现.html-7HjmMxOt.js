import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as l,a}from"./app-2pke9_a8.js";const p="/assets/image-20240408192608189-BZde24q7.png",o={},e=a(`<h1 id="数据库编程部分的实现" tabindex="-1"><a class="header-anchor" href="#数据库编程部分的实现" aria-hidden="true">#</a> 数据库编程部分的实现</h1><h2 id="在vs上使用mysql的头文件和库文件的配置" tabindex="-1"><a class="header-anchor" href="#在vs上使用mysql的头文件和库文件的配置" aria-hidden="true">#</a> 在VS上使用MySQL的头文件和库文件的配置</h2><ol><li><p>右键项目 - C/C++ - 常规 - 附加包含目录，填写mysql.h头文件的路径</p></li><li><p>右键项目 - 链接器 - 常规 - 附加库目录，填写libmysql.lib的路径</p></li><li><p>右键项目 - 链接器 - 输入 - 附加依赖项，填写libmysql.lib库的名字</p></li><li><p>把libmysql.dll动态链接库（Linux下后缀名是.so库）放在工程目录下</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//public.h</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 这是一个公共的头文件</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#C678DD;">#ifndef</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_PUBLIC_H</span></span>
<span class="line"><span style="color:#C678DD;">#define</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_PUBLIC_H</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//日志</span></span>
<span class="line"><span style="color:#C678DD;">#define</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">LOG</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">str</span><span style="color:#ABB2BF;">) \\</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout &lt;&lt; __FILE__ &lt;&lt; &quot;:&quot; &lt;&lt; __LINE__ &lt;&lt; &quot; &quot; &lt;&lt;   \\</span></span>
<span class="line"><span style="color:#ABB2BF;">    __TIMESTAMP__ &lt;&lt; &quot;:&quot; &lt;&lt; str &lt;&lt; endl;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#endif</span><span style="color:#7F848E;font-style:italic;"> //_PUBLIC_H</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是对MySQL操作的封装</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//connection.h</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 实现MySQL数据库的操作</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#ifndef</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_CONNECTION_H</span></span>
<span class="line"><span style="color:#C678DD;">#define</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_CONNECTION_H</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;string&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;mysql/mysql.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::string;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Connection</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Connection</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~Connection</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //数据库的连接操作</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">connection</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">ip</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">unsigned</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">port</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">user</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">passward</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">dbname</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //更新操作 insert delete update</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">update</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">sql</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //查询操作select</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">MYSQL_RES</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">query</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">sql</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    MYSQL</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> _conn;</span><span style="color:#7F848E;font-style:italic;">    //表示和MySQL的一条连接</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#endif</span><span style="color:#7F848E;font-style:italic;">  // _CONNECTION_H</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//connection.cc</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;connection.h&quot;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;public.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">Connection</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">Connection</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //初始化</span></span>
<span class="line"><span style="color:#ABB2BF;">    _conn </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">mysql_init</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//释放资源</span></span>
<span class="line"><span style="color:#ABB2BF;">Connection::</span><span style="color:#56B6C2;">~</span><span style="color:#61AFEF;">Connection</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(_conn </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">mysql_close</span><span style="color:#ABB2BF;">(_conn);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Connection</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">connection</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">ip</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">unsigned</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">port</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">user</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">passward</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">dbname</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //建立连接</span></span>
<span class="line"><span style="color:#ABB2BF;">    MYSQL</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> p </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">mysql_real_connect</span><span style="color:#ABB2BF;">(_conn, </span><span style="color:#E5C07B;">ip</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">c_str</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">user</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">c_str</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#E5C07B;">passward</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">c_str</span><span style="color:#ABB2BF;">(),</span><span style="color:#E5C07B;">dbname</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">c_str</span><span style="color:#ABB2BF;">(), port, </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> p </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Connection</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">update</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">sql</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //更新操作 insert delete update</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">mysql_query</span><span style="color:#ABB2BF;">(_conn, </span><span style="color:#E5C07B;">sql</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">c_str</span><span style="color:#ABB2BF;">())) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">LOG</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;更新失败:&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">  sql);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">MYSQL_RES</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Connection</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">query</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">sql</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">mysql_query</span><span style="color:#ABB2BF;">(_conn, </span><span style="color:#E5C07B;">sql</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">c_str</span><span style="color:#ABB2BF;">())) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">LOG</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;查询失败&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> sql);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">mysql_use_result</span><span style="color:#ABB2BF;">(_conn);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//main.cc</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;connection.h&quot;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;public.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    Connection conn;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sql</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">1024</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">sprintf</span><span style="color:#ABB2BF;">(sql, </span><span style="color:#98C379;">&quot;insert into user(name, age, sex) values(&#39;</span><span style="color:#D19A66;">%s</span><span style="color:#98C379;">&#39;, </span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">, &#39;</span><span style="color:#D19A66;">%s</span><span style="color:#98C379;">&#39;)&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#98C379;">&quot;guan yu&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">33</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;male&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">conn</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">connection</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;127.0.0.1&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3306</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;147258&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;school&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">!</span><span style="color:#ABB2BF;">ret) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">LOG</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;连接失败&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">conn</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">update</span><span style="color:#ABB2BF;">(sql);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">$g</span><span style="color:#ABB2BF;">++ connection.cc main.cc -o main -I /usr/include/ -lmysqlclient</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',11),c=[e];function i(t,r){return n(),l("div",null,c)}const d=s(o,[["render",i],["__file","数据库编程部分实现.html.vue"]]);export{d as default};
