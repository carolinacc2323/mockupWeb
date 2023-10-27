const tabLinks= document.querySelectorAll('.tab-link');
const tabPanes= document.querySelectorAll('.tab-pane');
tabLinks.forEach(
    function (link,index) {
        link.addEventListener('click',function (e){
            // console.log('erestontojose');
            // console.log(e);Anula a donde te dirige el link
            tabPanes.forEach(function(pane,index){
                pane.style.display='none';
            });
            tabPanes[index].style.display='block';
        })
    }
);