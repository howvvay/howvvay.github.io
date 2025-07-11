var posts=["2025/07/09/hello-world/","2025/07/09/我的第一篇文章/","2025/07/10/MyBlog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };