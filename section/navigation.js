module.exports = function() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <img src="assets/img/logos/42_SEOUL_BENEFITS_optimised.svg" alt="" /></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
          data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation">Menu<i class="fas fa-bars ml-1"></i></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#program">프로그램 소개</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#partner">파트너 소개</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">사용 방법</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">제안</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
}