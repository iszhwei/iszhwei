const t=JSON.parse('{"key":"v-4b65c060","path":"/algo/04%20%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.html","title":"归并排序","lang":"zh-CN","frontmatter":{"title":"归并排序","icon":"file","order":6,"category":["数据结构与算法"],"tag":["排序算法"],"description":"将⼀个⼤的⽆序数组有序，我们可以把⼤的数组分成两个，然后对这两个数组分别进⾏排序，之后在把这两个数组 合并成⼀个有序的数组。由于两个⼩的数组都是有序的，所以在合并的时候是很快的。 通过递归的⽅式将⼤的数组⼀直分割，直到数组的⼤⼩为 1，此时只有⼀个元素，那么该数组就是有序的了，之后 再把两个数组⼤⼩为1的合并成⼀个⼤⼩为2的，再把两个⼤⼩为2的合并成4的 … 直到全部⼩的数组合并起来。 该算法是采⽤分治法（Divide and Conquer）的⼀个⾮常典型的应⽤。将已有序的⼦序列合并，得到完全有序的序列；即先使每个⼦序列有序，再使⼦序列段间有序。若将两个有序表合并成⼀个有序表，称为2-路归并。","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/algo/04%20%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"归并排序"}],["meta",{"property":"og:description","content":"将⼀个⼤的⽆序数组有序，我们可以把⼤的数组分成两个，然后对这两个数组分别进⾏排序，之后在把这两个数组 合并成⼀个有序的数组。由于两个⼩的数组都是有序的，所以在合并的时候是很快的。 通过递归的⽅式将⼤的数组⼀直分割，直到数组的⼤⼩为 1，此时只有⼀个元素，那么该数组就是有序的了，之后 再把两个数组⼤⼩为1的合并成⼀个⼤⼩为2的，再把两个⼤⼩为2的合并成4的 … 直到全部⼩的数组合并起来。 该算法是采⽤分治法（Divide and Conquer）的⼀个⾮常典型的应⽤。将已有序的⼦序列合并，得到完全有序的序列；即先使每个⼦序列有序，再使⼦序列段间有序。若将两个有序表合并成⼀个有序表，称为2-路归并。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"排序算法"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"归并排序\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"algo/04 排序算法/归并排序.md","excerpt":"<p>将⼀个⼤的⽆序数组有序，我们可以<u>把⼤的数组分成两个，然后对这两个数组分别进⾏排序，之后在把这两个数组</u>\\n<u>合并成⼀个有序的数组。</u>由于两个⼩的数组都是有序的，所以在合并的时候是很快的。\\n通过递归的⽅式将⼤的数组⼀直分割，直到数组的⼤⼩为 1，此时只有⼀个元素，那么该数组就是有序的了，之后\\n再把两个数组⼤⼩为1的合并成⼀个⼤⼩为2的，再把两个⼤⼩为2的合并成4的 … 直到全部⼩的数组合并起来。</p>\\n<p>该算法是采⽤<strong>分治法</strong>（Divide and Conquer）的⼀个⾮常典型的应⽤。将已有序的⼦序列合并，得到完全有序的序列；即先使每个⼦序列有序，再使⼦序列段间有序。<u>若将两个有序表合并成⼀个有序表，称为2-路归并</u>。</p>","autoDesc":true}');export{t as data};
