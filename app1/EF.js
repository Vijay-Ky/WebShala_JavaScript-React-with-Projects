//in all the pages that refere to this js changes of this js will be applied
document.querySelectorAll('.btn').forEach((item) => {
  item.addEventListener('click', () => {
    alert('this is good ')
  })
})
