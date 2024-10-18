function performSearch() {
    // Get the input value from the search bar
    const query = document.getElementById("searchInput").value;

    // Display the search result
    const result = document.getElementById("result");
    
    if (query.trim()) {
        result.textContent = `You searched for: "${query}"`;
    } else {
        result.textContent = "Please enter a search term.";
    }
}