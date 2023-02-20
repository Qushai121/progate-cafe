
const display1 = document.getElementById('nav-dapat1')
  const display2 = document.getElementById('nav-dapat2')
  const display3 = document.getElementById('nav-dapat3')
  const pathNow = window.location.pathname;
  if(pathNow === '/contact.html'){
    display3.style.borderBottom = 'solid #EC9A29'
    
}else if (pathNow === '/store.html'){
    display2.style.borderBottom = 'solid #EC9A29'
    
    
}else if(pathNow === '/product.html'){
    display1.style.borderBottom = 'solid #EC9A29'

  }