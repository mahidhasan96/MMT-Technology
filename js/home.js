const productContainer = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i) =>{
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.Width;

  nextBtn[i].addEventListener('click', () =>{
      item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () =>{
    item.scrollLeft -= containerWidth;
})

})
    

    

    