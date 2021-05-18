
const sortBtn = document.getElementById("sortBtn");


sortBtn.addEventListener("click", function(){
    sortBtn.classList.toggle("show");
  });

  // (function () {
  //   let today = new Date();
  //   document.getElementById("bday").max = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate() < 10 ? ("0" + (today.getDate()-1)) : (today.getDate()-1));
  // })();
  
  // var picker = new Pikaday({ 
  //   field: document.getElementById('datepicker'),
  //   format: 'yyyy-MM-dd',
  //   toString(date, format) {
  //     let day = ("0" + date.getDate()).slice(-2);
  //     let month = ("0" + (date.getMonth() + 1)).slice(-2);
  //     let year = date.getFullYear();
  //     return `${year}-${month}-${day}`;
  //   }
  // });