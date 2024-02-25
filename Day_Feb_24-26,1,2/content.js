const tabs = [
    { id: 0, content: "Tab 1 content..." },
    { id: 1, content: "Tab 2 content..." },
    { id: 2, content: "Tab 3 content..." }
  ];
  
  function loadTab(tabId) {
    // Hide all content divs
    document.querySelectorAll('.content').forEach(contentDiv => {
      contentDiv.style.display = 'none';
    });
  
    // Find the content div for the clicked tab and display it
    const contentDiv = document.getElementById(`content${tabId + 1}`);
    contentDiv.style.display = 'block';
  
    // Insert the content for the clicked tab
    contentDiv.innerHTML = tabs[tabId].content;
  }