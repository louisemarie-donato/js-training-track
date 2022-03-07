const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function clickTab(event) {
  // hide tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  // unselect all tabs
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });

  // select clicked tab
  event.currentTarget.setAttribute('aria-selected', true);

  // show panel of selected tab
  const selectedTab = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === event.target.id
  );
  console.log(selectedTab);
  selectedTab.hidden = false;
}

tabButtons.forEach((button) => button.addEventListener('click', clickTab));
