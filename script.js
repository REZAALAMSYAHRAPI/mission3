document.getElementById('searchButton').addEventListener('click', function() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var songItems = document.querySelectorAll('.song-item');

    songItems.forEach(function(item) {
        var title = item.querySelector('.song-title').textContent.toLowerCase();
        var audio = item.querySelector('audio');

        if (title.includes(input)) {
            item.style.display = '';
            audio.style.display = '';
        } else {
            item.style.display = 'none';
            audio.style.display = 'none';
        }
    });
});

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});
