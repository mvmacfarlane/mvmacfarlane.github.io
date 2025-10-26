// Content Loading System
// Simple markdown to HTML converter
function markdownToHtml(markdown) {
    return markdown
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        .replace(/^- (.*$)/gim, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>')
        .replace(/\n\n/gim, '</p><p>')
        .replace(/^(?!<[h|u|l])/gim, '<p>')
        .replace(/(?![h|u|l]>)$/gim, '</p>')
        .replace(/<p><\/p>/gim, '')
        .replace(/<p>(<h[1-6])/gim, '$1')
        .replace(/(<\/h[1-6]>)<\/p>/gim, '$1')
        .replace(/<p>(<ul>)/gim, '$1')
        .replace(/(<\/ul>)<\/p>/gim, '$1');
}

// Load footer content (common to all pages)
async function loadFooterContent() {
    try {
        // Load footer about
        const footerAboutResponse = await fetch('/content/footer_about.md');
        const footerAboutText = await footerAboutResponse.text();
        const footerAboutElement = document.getElementById('footer-about');
        if (footerAboutElement) {
            footerAboutElement.innerHTML = footerAboutText.replace(/\n/g, '<br/>');
        }
        
        // Load footer contact
        const footerContactResponse = await fetch('/content/footer_contact.md');
        const footerContactText = await footerContactResponse.text();
        const footerContactElement = document.getElementById('footer-contact');
        if (footerContactElement) {
            footerContactElement.innerHTML = footerContactText;
        }
        
        // Load copyright
        const copyrightResponse = await fetch('/content/copyright.md');
        const copyrightText = await copyrightResponse.text();
        const copyrightElement = document.getElementById('copyright');
        if (copyrightElement) {
            copyrightElement.innerHTML = copyrightText;
        }
        
    } catch (error) {
        console.error('Error loading footer content:', error);
    }
}

// Load specific content based on page
async function loadPageContent() {
    try {
        // Load welcome content
        const welcomeElement = document.getElementById('welcome-content');
        if (welcomeElement) {
            const welcomeResponse = await fetch('/content/welcome.md');
            const welcomeText = await welcomeResponse.text();
            welcomeElement.innerHTML = markdownToHtml(welcomeText);
        }
        
        // Load about content
        const aboutElement = document.getElementById('about-content');
        if (aboutElement) {
            const aboutResponse = await fetch('/content/about.md');
            const aboutText = await aboutResponse.text();
            aboutElement.innerHTML = markdownToHtml(aboutText);
        }
        
        // Load news content
        const newsElement = document.getElementById('news-content');
        if (newsElement) {
            const newsResponse = await fetch('/content/news.md');
            const newsText = await newsResponse.text();
            newsElement.innerHTML = markdownToHtml(newsText);
        }
        
        // Load timeline content
        const timelineElement = document.getElementById('timeline-content');
        if (timelineElement) {
            const timelineResponse = await fetch('/content/timeline.md');
            const timelineText = await timelineResponse.text();
            timelineElement.innerHTML = markdownToHtml(timelineText);
        }
        
        // Load social links
        const socialElement = document.getElementById('social-links');
        if (socialElement) {
            const socialResponse = await fetch('/content/social_links.md');
            const socialText = await socialResponse.text();
            socialElement.innerHTML = socialText;
        }
        
        // Load software content
        const softwareElement = document.getElementById('software-content');
        if (softwareElement) {
            const softwareResponse = await fetch('/content/software.md');
            const softwareText = await softwareResponse.text();
            softwareElement.innerHTML = softwareText;
        }
        
    } catch (error) {
        console.error('Error loading page content:', error);
    }
}

// Main content loading function
async function loadContent() {
    await Promise.all([
        loadPageContent(),
        loadFooterContent()
    ]);
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadContent);
