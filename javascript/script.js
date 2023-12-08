function show_hidden(id1,id2){
    const nav = document.querySelector('.links');
    const btn1 = document.getElementById(id1);
    const btn2 = document.getElementById(id2);
    console.log(nav)
    btn_show(btn1,btn2);
    if (!nav.classList.contains('show')) {
        nav.classList.add('show')
    } else {
        nav.classList.remove('show')
    }

}

function btn_show(btn1,btn2){
    if (btn1.classList.contains('active-btn')) {
        btn1.classList.remove('active-btn');
        btn1.classList.add('hidden-btn');
        btn2.classList.add('active-btn');
    }else{
        btn1.classList.add('active-btn');
        btn1.classList.remove('hidden-btn');
        btn2.classList.remove('active-btn');
    }
}