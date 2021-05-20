

const accordion = (triggerButton) => {

  const sortBtn = document.querySelector(triggerButton);

  sortBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    sortBtn.classList.toggle('sort-btn_active');
    sortBtn.nextElementSibling.classList.toggle('sort-choice_active');
  });
};

accordion('.sort-btn');

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