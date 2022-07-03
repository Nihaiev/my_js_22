const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xtn3m4n';

const message = logins.includes(loginToFind)
    ? `Користувача ${loginToFind} знайдено.`
    : `Користувача ${loginToFind} не знайдено.`;

console.log(message);