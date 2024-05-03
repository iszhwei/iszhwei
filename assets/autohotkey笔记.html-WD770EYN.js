import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as l}from"./app-mYdPlPhZ.js";const e={},p=l(`<h1 id="autohotkey笔记" tabindex="-1"><a class="header-anchor" href="#autohotkey笔记" aria-hidden="true">#</a> Autohotkey笔记</h1><h2 id="脚本开机自启" tabindex="-1"><a class="header-anchor" href="#脚本开机自启" aria-hidden="true">#</a> 脚本开机自启</h2><p>将 .ahk （Ahk脚本）文件，创建快捷方式，并把快捷方式放入 <code>C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Startup </code>文件夹即可。如需取消开机自启，就删除这个快捷方式。</p><p>方法二：win + R 输入<code>shell:startup</code>回车后自动打开开机自启目录</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>如果第一次使用的话，双击 .ahk 文件（Ahk脚本所使用的文件名后缀）会弹出打开方式选择框，点“更多应用-&gt;在这台电脑上查找其他应用”，然后找到并选中上一步解<strong>压文件</strong>夹里的 “AutoHotkeyU64.exe” 文件即可。</p><h2 id="编写typora修改颜色的快捷键" tabindex="-1"><a class="header-anchor" href="#编写typora修改颜色的快捷键" aria-hidden="true">#</a> 编写typora修改颜色的快捷键</h2><p>1.桌面新建txt文件 2.将后缀改为.ahk 3.重命名为MyTyporaHotkeyScript.ahk</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">; </span><span style="color:#61AFEF;">Typora</span></span>
<span class="line"><span style="color:#ABB2BF;">; </span><span style="color:#61AFEF;">快捷增加字体颜色</span></span>
<span class="line"><span style="color:#ABB2BF;">; </span><span style="color:#61AFEF;">SendInput</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{Text}</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">解决中文输入法问题</span></span>
<span class="line"><span style="color:#ABB2BF;">; </span><span style="color:#61AFEF;">autohotkey</span><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">1.1</span><span style="color:#98C379;">.37.01</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#IfWinActive ahk_exe Typora.exe</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    ; </span><span style="color:#61AFEF;">Ctrl+Alt+o</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">橙色</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">^!o::addFontColor(</span><span style="color:#61AFEF;">&quot;orange&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    ; </span><span style="color:#61AFEF;">Ctrl+Alt+r</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">红色</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">^!r::addFontColor(</span><span style="color:#61AFEF;">&quot;red&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    ; </span><span style="color:#61AFEF;">Ctrl+Alt+b</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">浅蓝色</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">^!b::addFontColor(</span><span style="color:#61AFEF;">&quot;cornflowerblue&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">; </span><span style="color:#61AFEF;">快捷增加字体颜色</span></span>
<span class="line"><span style="color:#61AFEF;">addFontColor(color</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">clipboard</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">:=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> ; </span><span style="color:#61AFEF;">清空剪切板</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Send</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{ctrl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">down}c{ctrl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">up}</span><span style="color:#ABB2BF;"> ; </span><span style="color:#61AFEF;">复制</span></span>
<span class="line"><span style="color:#ABB2BF;">    ; </span><span style="color:#61AFEF;">SendInput</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{Text}</span><span style="color:#ABB2BF;"> ; </span><span style="color:#61AFEF;">解决中文输入法问题</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">SendInput</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{TEXT}</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#98C379;">font</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">color=&#39;%color%&#39;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">SendInput</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{ctrl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">down}v{ctrl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">up}</span><span style="color:#ABB2BF;"> ; </span><span style="color:#61AFEF;">粘贴</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">If(clipboard</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">SendInput</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{TEXT}</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#98C379;">/fon</span><span style="color:#ABB2BF;">t&gt; ; </span><span style="color:#61AFEF;">Typora</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">在这不会自动补充</span></span>
<span class="line"><span style="color:#ABB2BF;">    }else{</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">SendInput</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{TEXT}</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#98C379;">/</span><span style="color:#ABB2BF;"> ; </span><span style="color:#61AFEF;">Typora中自动补全标签</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.双击ahk脚本运行 2.Typora检测 Ctrl+Alt+O——橙色Orange Ctrl+Alt+R——红色Red Ctrl+Alt+B——蓝色Blue</p><p>按<code>Ctrl+\\</code>取消样式！</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">	; alt+0 黑色</span></span>
<span class="line"><span style="color:#abb2bf;">    !0::addFontColor(&quot;black&quot;)</span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">    ; alt+1 红色</span></span>
<span class="line"><span style="color:#abb2bf;">    !1::addFontColor(&quot;red&quot;)</span></span>
<span class="line"><span style="color:#abb2bf;">    </span></span>
<span class="line"><span style="color:#abb2bf;">    ; alt+2 绿色</span></span>
<span class="line"><span style="color:#abb2bf;">    !2::addFontColor(&quot;green&quot;)</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    ; alt+3 浅蓝色</span></span>
<span class="line"><span style="color:#abb2bf;">    ;!3::addFontColor(&quot;blue&quot;)</span></span>
<span class="line"><span style="color:#abb2bf;">    !3::addFontColor(&quot;cornflowerblue&quot;)</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    ; alt+4 橙色</span></span>
<span class="line"><span style="color:#abb2bf;">    !4::addFontColor(&quot;orange&quot;) </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">     ; alt+5 黄色</span></span>
<span class="line"><span style="color:#abb2bf;">    !5::addFontColor(&quot;yellow&quot;)</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">	; alt+6 青色</span></span>
<span class="line"><span style="color:#abb2bf;">    !6::addFontColor(&quot;cyan&quot;) </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">   ; alt+7 紫色</span></span>
<span class="line"><span style="color:#abb2bf;">    !7::addFontColor(&quot;purple&quot;)</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码解释" tabindex="-1"><a class="header-anchor" href="#代码解释" aria-hidden="true">#</a> 代码解释</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">;分号后面的是注释（不是脚本！！！）我就说我测试了这么长时间都不管用！</span></span>
<span class="line"><span style="color:#abb2bf;">热键标记</span></span>
<span class="line"><span style="color:#abb2bf;">!感叹号代表Alt键</span></span>
<span class="line"><span style="color:#abb2bf;"># 井号代表 Windows 键</span></span>
<span class="line"><span style="color:#abb2bf;">^ 上三角号代表 Ctrl键</span></span>
<span class="line"><span style="color:#abb2bf;">+ 加号代表 Shift 键</span></span>
<span class="line"><span style="color:#abb2bf;">执行</span></span>
<span class="line"><span style="color:#abb2bf;">::代表按下前面快捷键后会执行后面的命令。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[p];function c(r,i){return n(),a("div",null,o)}const b=s(e,[["render",c],["__file","autohotkey笔记.html.vue"]]);export{b as default};
