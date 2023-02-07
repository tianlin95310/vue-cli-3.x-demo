### 使用方式

```
import TLWaveView from 'vue-waveview'
import 'vue-waveview/vue-waveview.css'

  <div style="width: 200px;height: 200px;">
    <TLWaveView
    	:waveAmplitude="30"
    	:waveHeight="100"
    	:width="200"
    	:height="200"
    	:styleObj="{border: '1px solid gainsboro', borderRadius: '200px'}"
    	bgColor="white"
    	waveColor="rgba(255, 0, 0, 255)"
    ></TLWaveView>
  </div>
	
	<!-- versin >= v1.0.3 -->
	<!-- waveColor：设置水波纹的颜色 -->
	 
	<!-- version >= v1.0.2-->
	<!-- waveAmplitude: 波纹振幅，默认等于1/4组件宽度 --> 
	<!-- waveHeight: 波纹高度，介于0到组件高度之间 -->
	<!-- styleObj: 样式变量，通常可添加圆边框，不需边框可不加 -->
	<!-- bgColor: 内部背景，出现组件默认背景(white)与父容器不一致时，可设置bgColor和父容器的背景颜色一致即可 -->
```

>示例图1：
![动图1](static/动图 (1).png)

>示例图2：
![动图2](static/动图 (2).png)