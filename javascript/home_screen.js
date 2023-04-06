    let theEnd = 0;
    let nav = document.getElementById("nav");

    window.addEventListener('scroll', function(){
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > theEnd) {
        nav.style.top = '-90px';
    }
    else{
        nav.style.top = 0;
    }
    theEnd = scrollTop;
    })