const scriptURL = 'https://script.google.com/macros/s/AKfycbzvof1Jgiw2A6UeCOa3p1H5oUA9M7C1Bl6UKC37YZnYcXAoU2Q3Ois7h18izf6UZv_7/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById('msg');


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Thank You For Subscribing!';
        form.reset();
        setTimeout(function(){
            msg.innerHTML = "";
        },5000);
        
      })
      .catch(error => console.error('Error!', error.message))
  })