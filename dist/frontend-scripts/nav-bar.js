  /*  
  * Dropdown management (TODO: export to seperate utility file in dist folder)
  */
  const dropdowns = document.querySelectorAll(".dropd");
  dropdowns.forEach(parent => {
    parent.addEventListener("click", (evDropdown) => {
      let drop = {
        parent:         parent, // taiwlind class for "top" offset
        child:          parent.childNodes[1], // 1st child is innertext of parent
        topOffset:      parent.clientHeight,
        get isOpened()  { return this.child.classList.contains("hidden") }
      }
      if(drop.isOpened) {
        document.addEventListener("click", globalClickHandler);
        updateStyleAndClassList(drop.child, `hidden flex flex-col`);
      }
      else {
        document.removeEventListener("click", globalClickHandler);
        updateStyleAndClassList(drop.child, `hidden flex flex-col`);
      }

      function globalClickHandler(evGlob) {
        let clickedOnBtn  = (evGlob.target === drop.parent);
        let clickedOnList = (evGlob.target.parentNode === drop.child);
        if(!(clickedOnBtn || clickedOnList) && !drop.isOpened){
          updateStyleAndClassList(drop.child, `hidden flex flex-col`);
          document.removeEventListener("click", globalClickHandler);
        }
      }
      function updateStyleAndClassList(targetNode, classListString){
        toggleClasslist(drop.child, `hidden flex flex-col`);
        targetNode.style.top = `${drop.topOffset}px`
      }
    }); 
  });

  /* 
  * NAV burger menu management
  */
  const navBackground = document.querySelector("[data-nav-modal]");
  function toggleNavBurger() {
    navBackground.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }

  /*
  * Helper functions
  */
  function toggleClasslist(targetNode, classListString) {
    let classes = classListString.split(" ");
    for(let i = 0; i < classes.length; i++)
      targetNode.classList.toggle(classes[i]);
  }