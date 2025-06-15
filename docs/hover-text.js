document.addEventListener("DOMContentLoaded", function () {

    // --- Header letter-by-letter ---
    const title = document.querySelector("h1");
    if (title) {
        const letters = title.textContent.split("");
        title.innerHTML = letters
            .map(letter =>
                letter === " "
                    ? " "
                    : `<span class="hover-letter">${letter}</span>`
            )
            .join("");
    }

    // Paragraph word-by-word (REVISED to ONLY EXCLUDE links)
    const paragraphsToEffect = document.querySelectorAll(".js-hover-effect p");
    
    paragraphsToEffect.forEach(paragraph => {
        // Prevent reprocessing
        if (paragraph.dataset.processed || paragraph.innerHTML.trim() === "") {
            return;
        }
        paragraph.dataset.processed = "true";
    
        // --- REFINED EXCLUSION LOGIC ---
        // ONLY skip this paragraph if it contains an anchor (<a>) tag.
        // This assumes you will NOT apply .js-hover-effect to paragraphs containing links.
        if (paragraph.querySelector('a')) {
            return; // Skip this paragraph if it contains a link
        }
        // --- END REFINED EXCLUSION LOGIC ---
    
        const words = paragraph.textContent.trim().split(/\s+/).filter(Boolean);
        const newHtml = [];
    
        words.forEach(word => {
            const span = document.createElement('span');
            span.className = 'hover-word';
            span.textContent = word;
            newHtml.push(span.outerHTML);
        });
    
        paragraph.innerHTML = newHtml.join(" ");
    });

    // --- MODAL IMAGE LOGIC ---
    const profileImg = document.querySelector('img[src*="profPic.webp"]');
    if (profileImg) {
        const modal = document.createElement("div");
        modal.id = "image-modal";
        modal.innerHTML = `
            <div id="image-modal-overlay"></div>
            <img id="image-modal-content" src="${profileImg.src}" />
        `;
        document.body.appendChild(modal);

        profileImg.addEventListener("click", function () {
            modal.style.display = "flex";
        });

        modal.addEventListener("click", function (e) {
            if (e.target.id === "image-modal-overlay") {
                modal.style.display = "none";
            }
        });
    }

    // --- Opens gmail ---
    const emailLink = document.querySelector('a[href*="mail.google.com/mail/?view=cm"]');
    if (emailLink) {
        emailLink.addEventListener("click", function (e) {
            e.preventDefault();
            window.open(
                this.href,
                "gmailCompose",
                "width=700,height=600,resizable=yes,scrollbars=yes"
            );
        });
    }

        // --- Banner Glow ---
    const glowTargets = document.querySelectorAll(
        '.quarto-title-banner, #title-block-header'
    );
    
    console.log("BANNER SCRIPT: Found target elements:", glowTargets);

    if (glowTargets.length === 0) {
        console.error("BANNER SCRIPT ERROR: No banner elements found on this page. The CSS selector is likely wrong for this page.");
    }
    
    glowTargets.forEach(target => {
        target.addEventListener('mousemove', e => {
            const rect = target.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            target.style.setProperty('--mouse-x', `${mouseX}px`);
            target.style.setProperty('--mouse-y', `${mouseY}px`);
        });
    
        target.addEventListener('mouseleave', () => {
            target.style.setProperty('--mouse-x', '50%');
            target.style.setProperty('--mouse-y', '50%');
        });
    });
});