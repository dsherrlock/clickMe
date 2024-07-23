const snowContainer = document.getElementById('snow-container');
const snowflakesCount = 100;
const snowflakeChars = ['❅', '❆', '❄'];

for (let i = 0; i < snowflakesCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duration between 2s and 5s
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Font size between 10px and 20px
    snowflake.style.animationDelay = `${Math.random() * 5}s`; // Delay up to 5s
    snowContainer.appendChild(snowflake);
}
