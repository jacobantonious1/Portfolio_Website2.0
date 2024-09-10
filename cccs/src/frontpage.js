function scrollIntoView(element){
    var elementTop = element.offsettop;
    
    window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
    });
}