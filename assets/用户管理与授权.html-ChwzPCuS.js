import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as l}from"./app-mYdPlPhZ.js";const o={},p=l(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">查看用户信息： </span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> user,host,plugin </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">mysql</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">user</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">创建用户示例： </span><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> user </span><span style="color:#98C379;">&#39;stu&#39;</span><span style="color:#ABB2BF;">@</span><span style="color:#98C379;">&#39;localhost&#39;</span><span style="color:#ABB2BF;"> identified </span><span style="color:#C678DD;">by</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;123456&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">创建用户指定加密方式 示例：</span><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> user </span><span style="color:#98C379;">&#39;stu1&#39;</span><span style="color:#ABB2BF;">@</span><span style="color:#98C379;">&#39;localhost&#39;</span><span style="color:#ABB2BF;"> identified </span><span style="color:#C678DD;">WITH</span><span style="color:#ABB2BF;"> mysql_native_password </span><span style="color:#C678DD;">by</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;123456&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">更新用户密码，指定加密方式，注意密码强度大小写数字：</span></span>
<span class="line"><span style="color:#C678DD;">ALTER</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">user</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;root&#39;</span><span style="color:#ABB2BF;">@</span><span style="color:#98C379;">&#39;localhost&#39;</span><span style="color:#ABB2BF;"> IDENTIFIED </span><span style="color:#C678DD;">WITH</span><span style="color:#ABB2BF;"> mysql_native_password </span><span style="color:#C678DD;">BY</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;123456&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">授权用户对那些数据库的那些表可以进行操作 示例：</span></span>
<span class="line"><span style="color:#C678DD;">GRANT</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">database_name</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">table_name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">TO</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;user_name&#39;</span><span style="color:#ABB2BF;">@</span><span style="color:#98C379;">&#39;localhost&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">GRANT</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">INSERT</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">database_name</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">table_name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">TO</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;user_name&#39;</span><span style="color:#ABB2BF;">@</span><span style="color:#98C379;">&#39;localhost&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">GRANT</span><span style="color:#ABB2BF;"> ALL </span><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">database_name</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">table_name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">TO</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;user_name&#39;</span><span style="color:#ABB2BF;">@</span><span style="color:#98C379;">&#39;localhost&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">GRANT</span><span style="color:#ABB2BF;"> ALL PRIVILEGES </span><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;"> *.* </span><span style="color:#C678DD;">TO</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;user_name&#39;</span><span style="color:#ABB2BF;">@</span><span style="color:#98C379;">&#39;%&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">-- * 表示任意所有库、所有表，%表示任意地址</span></span>
<span class="line"><span style="color:#C678DD;">GRANT</span><span style="color:#ABB2BF;"> REPLICATION SLAVE </span><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;"> *.* </span><span style="color:#C678DD;">to</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;mslave&#39;</span><span style="color:#ABB2BF;">@</span><span style="color:#98C379;">&#39;192.168.131.1&#39;</span><span style="color:#ABB2BF;">;#复制权限</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">删除用户：</span><span style="color:#C678DD;">drop</span><span style="color:#ABB2BF;"> user </span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;">@</span><span style="color:#98C379;">&#39;localhost&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[p];function B(c,r){return n(),a("div",null,e)}const i=s(o,[["render",B],["__file","用户管理与授权.html.vue"]]);export{i as default};
