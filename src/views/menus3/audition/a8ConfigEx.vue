<template>
  <t-l-collapse title="8,常见配置举例">
    <template v-slot:content>
      <pre>
        1，nginx配置
          root distDir;
          location / {
            index index.html;
            try_files $uri /index.html;
          }
          1，添加header
          location = /index.html {
            add_header X-Frame-Options DENY;
            add_header Cache-Control "no-cache, no-store";
          }
          2，添加资源缓存配置(资源扩展名匹配)
          location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|apk|tar.gz|ico|woff|svg|map|)$ {
            expires 30d;
          }
          3，禁止访问
          location ~ ^/(WEB_INF)/ {
            deny all;
          }
      </pre>
    </template>
  </t-l-collapse>
</template>

<script>
  import TLCollapse from '@/components/TLCollapse.vue'
  export default {
    name: 'a8ConfigEx',
    components: {
      TLCollapse
    }
  }
</script>

<style>
</style>
