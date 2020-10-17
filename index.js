
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const x = document.getElementById('heatstats');

 nameInput.addEventListener('change', e => {
    pack.config.name = e.target.value;
    console.log(e.target.value);
  });
 descriptionInput.addEventListener('change', e => {
    pack.config.description = e.target.value;
    console.log(e.target.value);
  });

  const pack = {
    
    config: {
        name: '(no name)',
      description: '(no description)',
      base_url: '', 
      key: String(Math.random()) + Date.now() 
    },
    items: [
      
    ]
  };
  
  //buttons
  document.getElementById('result-btn').addEventListener('click', e => {
    console.log(JSON.stringify(pack, null, 2));
});
 