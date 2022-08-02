项目需求：使用Kafka进行日志收集，用户点击页面，收集信息且发送之kafka。

架构组成：HIML+Nginx+Nginx_kafka_module+Kafka

Kafka集群，kafka-eagle，zookeeper集群安装步骤略过

 1.底层依赖 librdkafka ，web服务器nginx，插件nginx_kafka_module于Linux128节点的安装完成

![image-20220802220937808](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220802220937808.png)

2.配置nginx.conf文件，配置此处文件的作用是令nginx能知道broker节点的位置，以及点击页面要反馈发送的内容。

![image-20220802230634555](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220802230634555.png)

3.

视频演示<video src="C:\Users\Administrator\20220802_234143.mp4"></video>