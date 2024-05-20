function alertComimgSoon(){
    alert("Coming sooon!")
}
document.querySelector('.burger__btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav__info').classList.toggle('open');
})
