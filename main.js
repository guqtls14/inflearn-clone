

// 화살표바꾸기
const $btn = document.querySelector('.fa-light');
const $i = document.querySelector('button i');
const $a = document.querySelector('.a');
$btn.addEventListener('click',function(){
    if($a.style.display === 'block') {
        $a.style.display = 'none';
        $i.className = 'fa-light .fa-circle-chevron-up'
    } else{
        $a.style.display = 'block';
        // $i.className = "fa-light .fa-circle-chevron-down"
    }
})