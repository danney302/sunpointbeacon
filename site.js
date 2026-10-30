document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
/* Navigation disclosure stays keyboard accessible and closes predictably. */
document.addEventListener('click',event=>{document.querySelectorAll('.site-more[open]').forEach(menu=>{if(!menu.contains(event.target))menu.open=false})});document.addEventListener('keydown',event=>{if(event.key==='Escape')document.querySelectorAll('.site-more[open]').forEach(menu=>{menu.open=false;menu.querySelector('summary').focus()})});
