

function navigationMenu(){
const menu = document.getElementById('menuDiv');

const index = document.createElement("div");
const profile = document.createElement("div");
const faq = document.createElement("div");
const dashboard = document.createElement("div");
const blogHome = document.createElement("div");

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
}

window.addEventListener('load', navigationMenu);