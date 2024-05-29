import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as i,d as s,e as l,f as a,a as e}from"./app-2pke9_a8.js";const t="/assets/image-20240408210426812-wXhd2EPq.png",r={},B=e(`<h1 id="连接池单例模式实践" tabindex="-1"><a class="header-anchor" href="#连接池单例模式实践" aria-hidden="true">#</a> 连接池单例模式实践</h1><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//饿汉式 线程安全的单例</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ConnectionPool</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ConnectionPool</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getConnectionPool</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">ConnectionPool</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~ConnectionPool</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 线程安全的懒汉单例函数接口</span></span>
<span class="line"><span style="color:#E5C07B;">ConnectionPool</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ConnectionPool</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">getConnectionPool</span><span style="color:#ABB2BF;">() {</span><span style="color:#7F848E;font-style:italic;"> //静态函数的实现，不写static</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> ConnectionPool pool;</span><span style="color:#7F848E;font-style:italic;"> //静态局部变量的初始化，编译器会生成lock和unlock</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">pool;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#ifndef</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_CONNECTIONPOOL_H</span></span>
<span class="line"><span style="color:#C678DD;">#define</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_CONNECTIONPOOL_H</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;string&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;queue&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;mutex&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;connection.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::string;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::queue;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::mutex;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ConnectionPool</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ConnectionPool</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getConnectionPool</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">ConnectionPool</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~ConnectionPool</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">public:</span><span style="color:#7F848E;font-style:italic;"> //测试的时候可以先变成共有的</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">loadConfigFile</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">	string _ip;</span><span style="color:#7F848E;font-style:italic;"> // mysql的ip地址</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">unsigned</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> _port;</span><span style="color:#7F848E;font-style:italic;"> // mysql的端口号 3306</span></span>
<span class="line"><span style="color:#ABB2BF;">	string _username;</span><span style="color:#7F848E;font-style:italic;"> // mysql登录用户名</span></span>
<span class="line"><span style="color:#ABB2BF;">	string _password;</span><span style="color:#7F848E;font-style:italic;"> // mysql登录密码</span></span>
<span class="line"><span style="color:#ABB2BF;">	string _dbname;</span><span style="color:#7F848E;font-style:italic;"> // 连接的数据库名称</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _initSize;</span><span style="color:#7F848E;font-style:italic;"> // 连接池的初始连接量</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _maxSize;</span><span style="color:#7F848E;font-style:italic;"> // 连接池的最大连接量</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _maxIdleTime;</span><span style="color:#7F848E;font-style:italic;"> // 连接池最大空闲时间</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _connectionTimeout;</span><span style="color:#7F848E;font-style:italic;"> // 连接池获取连接的超时时间</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    queue</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">Connection</span><span style="color:#56B6C2;">*</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> _connectionQue;</span><span style="color:#7F848E;font-style:italic;">  // 存储mysql连接的队列</span></span>
<span class="line"><span style="color:#ABB2BF;">    mutex _queueMutex;</span><span style="color:#7F848E;font-style:italic;">  // 维护连接队列的线程安全互斥锁</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#endif</span><span style="color:#7F848E;font-style:italic;"> //_CONNECTIONPOOL_H</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;connectionPool.h&quot;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;public.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">ConnectionPool</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">ConnectionPool</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"><span style="color:#ABB2BF;">ConnectionPool::</span><span style="color:#56B6C2;">~</span><span style="color:#61AFEF;">ConnectionPool</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 线程安全的懒汉单例函数接口</span></span>
<span class="line"><span style="color:#E5C07B;">ConnectionPool</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ConnectionPool</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">getConnectionPool</span><span style="color:#ABB2BF;">() {</span><span style="color:#7F848E;font-style:italic;"> //静态函数的实现，不写static</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> ConnectionPool pool;</span><span style="color:#7F848E;font-style:italic;"> //静态局部变量的初始化，编译器会生成lock和unlock</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">pool;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ConnectionPool</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">loadConfigFile</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    FILE</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> pf </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fopen</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;mysql.cnf&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&quot;r&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(pf </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">LOG</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;mysql.cnf file is not exit!&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">!</span><span style="color:#61AFEF;">feof</span><span style="color:#ABB2BF;">(pf)) {</span><span style="color:#7F848E;font-style:italic;">  //文件不为空</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">line</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">1024</span><span style="color:#ABB2BF;">] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">fgets</span><span style="color:#ABB2BF;">(line, </span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(line), pf);</span></span>
<span class="line"><span style="color:#ABB2BF;">        string str </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> line;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> idx </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">str</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;=&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;"> //从第0位开始找&#39;=&#39;的下标</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(idx </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">  //无效的配置项</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">continue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // password=123456\\n</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> endidx </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">str</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">&#39;</span><span style="color:#ABB2BF;">, idx);</span><span style="color:#7F848E;font-style:italic;"> //从第idx位开始找&#39;\\n&#39;的下标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        string key </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">str</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">substr</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,idx);</span><span style="color:#7F848E;font-style:italic;"> //从第0位开始idx个字符</span></span>
<span class="line"><span style="color:#ABB2BF;">        string value </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">str</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">substr</span><span style="color:#ABB2BF;">(idx </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, endidx </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> (idx </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> key </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;=&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> value </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={href:"https://blog.csdn.net/konghouy/article/details/80530937",target:"_blank",rel:"noopener noreferrer"},y=e(`<blockquote><p>feof()如果文件结束，则返回非0值，否则返回0</p></blockquote><p>[fgets()函数的详解-使用技巧-C语言基础_fgets函数用法-CSDN博客](https://blog.csdn.net/Devour_/article/details/110955333#:~:text=一般用法： char a %3D {0}%3B fgets,(a%2C 100%2C stdin)%3B 通俗来讲的话，fgets()函数的作用就是用来读取一行数据的。 但要详细且专业的说的话，fgets()函数的作用可以这么解释：从第三个参数指定的流中读取最多第二个参数大小的字符到第一个参数指定的容器地址中。 在这个过程中，在还没读取够第二个参数指定大小的字符前，读取到换行符&#39;n&#39;或者需要读取的流中已经没有数据了。)</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">char *fgets(char *restrict str, int size, FILE *restrict stream)</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><code>fgets()</code>函数的作用就是用来读取一行数据的</strong>,<strong>读取出错或读取文件时文件为空，则返回一个空指针</strong></p><p><strong><code>fgets()</code>函数的最大读取大小是其“<code>第二个参数减1</code>”，</strong></p><ul><li>这是由于字符串是以<code>’\\0’</code>为结束符的，<code>fgets()</code>为了保证输入内容的<code>字符串格式</code>，当输入的数据大小超过了<code>第二个参数</code>指定的大小的时候，<code>fgets()</code>会仅仅读取前面的“<code>第二个参数减1</code>”个字符，而预留<code>1个字符</code>的空间来存储字符串结束符<code>’\\0’</code>。</li></ul></blockquote>`,3),v={href:"https://blog.csdn.net/Hao_ge_666/article/details/90695409",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/weixin_42258743/article/details/107782394",target:"_blank",rel:"noopener noreferrer"},F=e(`<blockquote><p><code>string x=s.substr() //默认时的长度为从开始位置到尾 string y=s.substr(5) //获得字符串s中 从第5位开始到尾的字符串 string z=s.substr(5,3); //获得字符串s中 从第5位开始的长度为3的字符串</code></p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;connection.h&quot;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;connectionPool.h&quot;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;public.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // Connection conn;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // char sql[1024] = {0};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // sprintf(sql, &quot;insert into user(name, age, sex) values(&#39;%s&#39;, %d, &#39;%s&#39;)&quot;,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //  &quot;guan yu&quot;, 33, &quot;male&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // bool ret = conn.connection(&quot;127.0.0.1&quot;, 3306, &quot;root&quot;, &quot;147258&quot;, &quot;school&quot;);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // if(!ret) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //     LOG(&quot;连接失败&quot;);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // conn.update(sql);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    ConnectionPool::</span><span style="color:#61AFEF;">getConnectionPool</span><span style="color:#ABB2BF;">()-&gt;</span><span style="color:#61AFEF;">loadConfigFile</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#数据库连接池的配置文件，下面和宏一样就不要加多余的空格了</span></span>
<span class="line"><span style="color:#C678DD;">ip</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">127.0.0.1</span></span>
<span class="line"><span style="color:#C678DD;">port</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">3306</span></span>
<span class="line"><span style="color:#C678DD;">username</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">root</span></span>
<span class="line"><span style="color:#C678DD;">password</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">147258</span></span>
<span class="line"><span style="color:#C678DD;">initSize</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">10</span></span>
<span class="line"><span style="color:#C678DD;">maxSize</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">1024</span></span>
<span class="line"><span style="color:#98C379;">// 连接池最大空闲时间默认单位是秒</span></span>
<span class="line"><span style="color:#C678DD;">maxIdleTime</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">60</span></span>
<span class="line"><span style="color:#98C379;">// 连接池获取连接的超时时间单位是毫秒</span></span>
<span class="line"><span style="color:#C678DD;">connectionTimeOut</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">100</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="image-20240408210426812" tabindex="0" loading="lazy"><figcaption>image-20240408210426812</figcaption></figure>',4);function A(m,b){const n=p("ExternalLinkIcon");return c(),i("div",null,[B,s("p",null,[s("a",d,[l("feof()原理和用法-CSDN博客"),a(n)])]),y,s("p",null,[s("a",v,[l("C++String中的find用法_c++ string find-CSDN博客"),a(n)])]),s("p",null,[s("a",u,[l("C++string类中substr()函数的使用方法_c++ string substr-CSDN博客"),a(n)])]),F])}const f=o(r,[["render",A],["__file","连接池单例模式实践.html.vue"]]);export{f as default};
