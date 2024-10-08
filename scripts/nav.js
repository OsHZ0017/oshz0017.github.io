const menu = document.getElementById('menuDiv');

const index = document.createElement("p");
const profile = document.createElement("p");
const faq = document.createElement("p");
const dashboard = document.createElement("p");
const blogHome = document.createElement("p");



index.innerHTML = '<a href="index.html">Home page</a>';
profile.innerHTML = '<a href="profile.html">About me</a>';
faq.innerHTML = '<a href="faq.html">FAQ</a>';
dashboard.innerHTML = '<a href="dashboard.html">Dashboard</a>';
blogHome.innerHTML = '<a href="blog_home.html">Blog</a>'

menu.appendChild(index);
menu.appendChildd(profile);
menu.appendChild(faq);
menu.appendChild(dashboard);
menu.appendChild(blogHome);
