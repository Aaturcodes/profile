// Example animation for the profile picture
document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.querySelector('.profile-pic');
    profilePic.addEventListener('mouseover', () => {
        profilePic.style.transition = 'transform 0.5s';
        profilePic.style.transform = 'scale(1.1)';
    });
    profilePic.addEventListener('mouseout', () => {
        profilePic.style.transform = 'scale(1)';
    });
});
// Optional JavaScript for additional effects

// Example: Change opacity on hover
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-img');
    
    projectImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.opacity = '0.8';
        });
        img.addEventListener('mouseout', () => {
            img.style.opacity = '1';
        });
    });
});
