window.addEventListener('load', () =>{ 

    setTimeout(loadingwebsite, 2000);
    function loadingwebsite(){

        document.getElementById('animationPreloader').className = 'hide';
        document.getElementById('content').className = '';
    }
    
})