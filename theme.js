(function(){
  try{
    const stored = localStorage.getItem('theme');
    if(stored === 'dark'){ document.body.classList.add('dark-mode'); }
  }catch(e){}
})();

document.addEventListener('DOMContentLoaded', function(){
  const t = document.getElementById('navToggle');
  const l = document.getElementById('navLinks');
  if(t){ t.addEventListener('click', () => l.classList.toggle('open')); }

  const themeBtn = document.getElementById('themeToggle');
  if(themeBtn){
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀' : '☾';
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      try{ localStorage.setItem('theme', isDark ? 'dark' : 'light'); }catch(e){}
      themeBtn.textContent = isDark ? '☀' : '☾';
    });
  }
});
