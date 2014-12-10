var parseCookies = function () {
    var cookieData = (typeof document.cookie === 'string' ? document.cookie : '').trim();

    return (cookieData ? cookieData.split(';') : []).reduce(function (cookies, cookieString) {
        var cookiePair = cookieString.split('=');

        cookies[cookiePair[0].trim()] = cookiePair.length > 1 ? cookiePair[1].trim() : '';

        return cookies;
    }, {});
};

module.exports = parseCookies;
