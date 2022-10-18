const left = document.querySelector('.left');
const right = document.querySelector('.right');
const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
left2.addEventListener('mouseenter', () => container.classList.add('hover-left2'));
left2.addEventListener('mouseleave', () => container.classList.remove('hover-left2'));
right2.addEventListener('mouseenter', () => container.classList.add('hover-right2'));
right2.addEventListener('mouseleave', () => container.classList.remove('hover-right2'));

