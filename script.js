const menu=document.querySelector(".menu-toggle"),links=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>{const open=links.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();
const form=document.getElementById("contactForm"),status=document.getElementById("formStatus");
form.addEventListener("submit",e=>{
 e.preventDefault();
 const name=document.getElementById("name").value.trim(), email=document.getElementById("email").value.trim(), service=document.getElementById("service").value, message=document.getElementById("message").value.trim();
 if(!name||!email||!service||!message){status.textContent="Please complete all fields before sending.";return}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){status.textContent="Please enter a valid email address.";return}
 const subject=encodeURIComponent(`New project inquiry — ${service}`);
 const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject:\n${message}`);
 window.location.href=`mailto:hello@novastudio.co?subject=${subject}&body=${body}`;
 status.textContent="Opening your email app…";
});
document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener("click",e=>e.preventDefault()));
