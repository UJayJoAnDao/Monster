document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelector('.category-item.active').classList.remove('active');
    this.classList.add('active');

    const categoryId = this.getAttribute('data-category');
    document.querySelectorAll('.product-row').forEach(row => {
      if (row.id === categoryId) {
        row.style.display = 'flex';
      } else {
        row.style.display = 'none';
      }
    });
  });
});
