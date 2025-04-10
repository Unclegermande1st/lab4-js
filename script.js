document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const toggleBtn = document.getElementById("themeToggle");
    toggleBtn?.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  
    // Form Validation
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();
        const response = document.getElementById("response");
  
        if (!name || !message) {
          alert("Please fill out all fields.");
        } else {
          response.innerText = `Thanks, ${name}. We'll get back to you soon!`;
          form.reset();
        }
      });
    }
  
    // Fetch API for Services
    const loadUsersBtn = document.getElementById("loadUsersBtn");
    if (loadUsersBtn) {
      loadUsersBtn.addEventListener("click", async () => {
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/users');
          const users = await res.json();
          const userList = document.getElementById("userList");
          userList.innerHTML = "";
          users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
          });
        } catch (err) {
          console.error("Failed to load users:", err);
        }
      });
    }
  
    // FAQ Toggle
    document.querySelectorAll(".question").forEach((q) => {
      q.addEventListener("click", () => {
        q.nextElementSibling.classList.toggle("visible");
      });
    });
  });
  