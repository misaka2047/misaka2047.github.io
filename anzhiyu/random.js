var posts=["2024/07/05/hello-world/","2024/07/05/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };