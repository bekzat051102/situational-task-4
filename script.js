document.addEventListener('DOMContentLoaded', () => {
    const newsItems = [
        { date: '2024-06-01', content: 'Innovatech VR Pro release date revealed' },
        { date: '2024-05-25', content: 'Innovatech VR Pro feature preview' },
        { date: '2024-05-15', content: 'Innovatech wins VR innovation award' },
    ];

    const newsList = document.getElementById('news-list');

    newsItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = '<strong>${item.date}</strong>: ${item.content}';
        newsList.appendChild(listItem);
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const quantity = document.getElementById('quantity').value;

        if (name && email && quantity) {
            alert('Pre-order submitted! Thank you for your interest in Innovatech VR Pro.');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});