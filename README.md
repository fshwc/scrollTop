<h1>基于jq，使用面向对象的思想封装一个返回顶部的功能</h1>
<h3>初始化方法：</h3>
<p>new ScrollTop(DOM对象，配置参数)</p>
<p>例：var scroll = new ScrollTop($("#top"),{speed:500,mode:"top"});</p>
<h3>可修改的参数有:</h3>
<table>
<tr>
<th>参数名</th><th>类型</th><th>解析</th><th>默认值</th>
</tr>
<tr>
<td>mode</td><td>string</td><td>运动的方式</td><td>"move"--动画运动到指定地点；"go"--一下到位。默认move</td>
</tr>
<tr>
<td>pos</td><td>number</td><td>显示按钮的滚动位置</td><td>默认是屏幕的高</td>
</tr>
<tr>
<td>dest</td><td>number</td><td>终点</td><td>默认为0</td>
</tr>
<tr>
<td>speed</td><td>number</td><td>滚动速度</td><td>默认800ms</td>
</tr>
<tr>
<td>ischeckPosition</td><td>boolean</td><td>是否需要到达某一地方再显示按钮</td><td>默认true</td>
</tr>
</table>
