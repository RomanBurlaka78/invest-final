console.log("file 1"),console.log("file 2"),function(){const e=document.querySelector(".burger"),t=document.querySelector(".menu"),s=document.querySelectorAll(".menu_item-link"),c=document.querySelector("body"),i=document.querySelector(".nav_btns");t.addEventListener("click",(()=>{t.classList.contains("active")&&(t.classList.toggle("active"),e.classList.toggle("active"),c.classList.toggle("locked"),i.classList.toggle("active"))})),e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active"),c.classList.toggle("locked"),i.classList.toggle("active")})),s.forEach((s=>{s.addEventListener("click",(()=>{window.innerWidth<992&&(e.classList.remove("active"),t.classList.remove("active"),c.classList.add("active"),i.classList.toggle("active"))}))})),window.addEventListener("resize",(()=>{window.innerWidth<992&&(e.classList.remove("active"),t.classList.remove("active"),c.classList.remove("active"),i.classList.remove("active"))}))}(),function(){const e=document.querySelector(".submenu"),t=document.querySelector(".with_submenu"),s=document.querySelector(".trigger_link"),c=document.querySelector(".submenu_arrow");t.addEventListener("click",(()=>{e.classList.toggle("active"),s.classList.toggle("active"),c.classList.toggle("active")})),window.addEventListener("resize",(()=>{window.innerWidth<1400&&(e.classList.remove("active"),c.classList.remove("active"),s.classList.remove("active"))}))}();