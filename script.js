// อัปเดตปี ค.ศ. ปัจจุบันอัตโนมัติในส่วน Footer
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// เอฟเฟกต์ Scroll Fade-In เลื่อนหน้าจอแล้วค่อยๆ ปรากฏ
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { 
    threshold: 0.1 
});

sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
});

console.log("Portfolio Updated!");
