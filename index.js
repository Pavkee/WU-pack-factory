
const nameInput = document.getElementById('name');


nameInput.addEventListener('change', e => {
    pack.config.name = e.target.value;
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
  
  
  JSON.stringify(pack);
  console.log(JSON.stringify(pack, null, 2));
  