async function fetchSocialStats() {
    // GitHub Stats
    try {
        const githubCard = document.querySelector('[data-platform="github"]');
        const githubStats = await fetch('https://api.github.com/users/bybirthright');
        const ghData = await githubStats.json();
        
        if (ghData.avatar_url) {
            githubCard.querySelector('.social-pic').src = ghData.avatar_url;
        }
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
    }
}

// Fetch stats when page loads
document.addEventListener('DOMContentLoaded', fetchSocialStats); 