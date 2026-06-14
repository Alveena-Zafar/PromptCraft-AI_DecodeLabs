document.addEventListener('DOMContentLoaded', () => {

  // ==================== DARK MODE ====================
  const darkToggle = document.getElementById('dark-toggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkToggle.textContent = '☀️';
  }

  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    const isDark = body.classList.contains('dark-mode');

    darkToggle.textContent = isDark ? '☀️' : '🌙';

    localStorage.setItem(
      'theme',
      isDark ? 'dark' : 'light'
    );
  });

  // ==================== MOBILE MENU ====================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // ==================== GENERATOR ====================
const generateBtn = document.getElementById('generate-btn');
const promptOutput = document.getElementById('prompt-output');
const promptText = document.getElementById('prompt-text');
const copyBtn = document.getElementById('copy-btn');

let currentGeneratedPrompt = '';

generateBtn.addEventListener('click', async () => {
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;

    if (!category || !difficulty) {
        alert('Please select both Category and Difficulty');
        return;
    }

    // Button loading state
    generateBtn.textContent = 'Loading...';
    generateBtn.disabled = true;

    try {
        // Database se prompt fetch karo
        const response = await fetch(`http://localhost:3001/api/prompts/${category}`);
        const data = await response.json();

        if (!data.success) {
            alert('Error fetching prompt. Please try again.');
            return;
        }
const match = data.data.find(p => 
    p.difficulty === difficulty
);

if (!match) {
    alert('No prompt found for this combination.');
    return;
}

currentGeneratedPrompt = match.prompt_text;
        promptText.textContent = currentGeneratedPrompt;
        promptOutput.classList.remove('hidden');

    } catch (err) {
        alert('Server not reachable. Make sure backend is running!');
        console.error(err);
    } finally {
        generateBtn.textContent = 'Generate Prompt';
        generateBtn.disabled = false;
    }
});

  // ==================== COPY BUTTON ====================
  copyBtn.addEventListener('click', () => {

    if (!currentGeneratedPrompt) return;

    navigator.clipboard.writeText(
      currentGeneratedPrompt
    );

    copyBtn.textContent = '✅ Copied!';

    setTimeout(() => {

      copyBtn.textContent =
        '📋 Copy Prompt';

    }, 2000);

  });

  // ==================== CONTACT FORM ====================
document
    .getElementById('contact-form')
    .addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        try {
            const response = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            });

            const data = await response.json();

            if (data.success) {
                alert('✅ Message saved! Thank you.');
                e.target.reset();
            } else {
                alert('❌ Error: ' + data.error);
            }
        } catch (err) {
            alert('Server not reachable. Make sure backend is running!');
            console.error(err);
        }
    });

});