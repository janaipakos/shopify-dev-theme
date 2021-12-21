/* PDP Zoom
// Toggle grid layout between 2 and 1 columns, and scroll to selected asset
*/
(function () {
  const nodes = document.querySelectorAll('[data-pdp-zoom]')

  nodes.forEach(function (node) {
    const classList = node.classList;
    const lists = node.querySelectorAll('.media__grid')
    const closeButtons = node.querySelectorAll('.media__grid-close-button')
    
    if (lists) {
      lists.forEach(function (list) {
        const items = list.querySelectorAll('li:not(.media__grid-item-full)');

        items.forEach(function (item, index) {
          item.addEventListener('click', function() {
            // Toggle 1/2 column layout
            if (classList.contains('media__grid-wrapper--full')) {
              classList.remove('media__grid-wrapper--full')
            } else {
              classList.add('media__grid-wrapper--full')
            }

            // Scroll viewport to element other than first on 'zoom in'
            // and first element on 'zoom out'
            if (index != 0) {
              if (classList.contains('media__grid-wrapper--full')) {
                scrollToElement(item);
              } else {
                scrollToElement(list);
              }
            }
          })
        })
      })
    }

    if (closeButtons) {
      closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function() {
          classList.remove('media__grid-wrapper--full')
        })
      })
    }

    function scrollToElement(element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  })
})();