const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      console.log(entry)

      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }
      else{
          entry.target.classList.remove('show');
      }
  });
});

const hide = document.querySelectorAll('.page') ;
hide.forEach((el)=> observer.observe(el));

const observerr = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
    console.log(entry)

    if(entry.isIntersecting){
        entry.target.classList.add('handshow');
    }
    else{
        entry.target.classList.remove('handshow');
    }
});
});
