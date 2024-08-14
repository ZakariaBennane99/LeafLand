document.addEventListener('DOMContentLoaded', function() {
    // Get current URL path, remove any trailing #, and trim spaces
    var currentPath = window.location.pathname.split('/').pop().replace(/#$/, '').trim();
    
    // Handle the case where the currentPath is empty (i.e., the URL is just the domain or ends with a slash)
    if (currentPath === '') {
        currentPath = 'index.html'; // Assuming the default file is 'index.html'
    }

    console.log('Current Path:', currentPath);

    // Select all nav links
    var navLinks = document.querySelectorAll('.navigation li a');

    navLinks.forEach(function(link) {
        // Get the href attribute of the link, remove any trailing #, and trim spaces
        var linkPath = link.getAttribute('href').replace(/#$/, '').trim();
        
        // If linkPath is empty, log it and continue
        if (!linkPath) {
            console.log(`Skipping empty link path for link: ${link.outerHTML}`);
            return;
        }

        // Log both paths for debugging
        console.log(`Comparing '${linkPath}' with '${currentPath}'`);

        // Check if the href of the link matches the current path (case insensitive)
        if (linkPath.toLowerCase() === currentPath.toLowerCase()) {
            // Add active-page class to the parent li
            link.parentElement.classList.add('active-page');
            console.log('YES ITS WORKING');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get current URL path, remove any trailing #, and trim spaces
    var currentPath = window.location.pathname.split('/').pop().replace(/#$/, '').trim();
    
    // Handle the case where the currentPath is empty (i.e., the URL is just the domain or ends with a slash)
    if (currentPath === '') {
        currentPath = 'index.html'; // Assuming the default file is 'index.html'
    }

    console.log('Current Path:', currentPath);

    // Select all nav links
    var navLinks = document.querySelectorAll('.navigation li a');

    navLinks.forEach(function(link) {
        // Get the href attribute of the link, remove any trailing #, and trim spaces
        var linkPath = link.getAttribute('href').replace(/#$/, '').trim();
        
        // If linkPath is empty, log it and continue
        if (!linkPath) {
            console.log(`Skipping empty link path for link: ${link.outerHTML}`);
            return;
        }

        // Log both paths for debugging
        console.log(`Comparing '${linkPath}' with '${currentPath}'`);

        // Check if the href of the link matches the current path (case insensitive)
        if (linkPath.toLowerCase() === currentPath.toLowerCase()) {
            // Add active-page class to the parent li
            link.parentElement.classList.add('active-page');
            console.log('YES ITS WORKING');
        }
    });
});
