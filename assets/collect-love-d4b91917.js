let t=document.querySelectorAll(".collect-love_bg");t.length>1&&t[1].classList.add("active");t.forEach(function(c){c.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),this.classList.toggle("active")})});