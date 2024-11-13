function createCard(title, cname, views, monthSolde, duration, thumbnail) {
    let viewsnum;
    if (views > 1000 && views < 1000000) {
        viewsnum = (views / 1000) + "K";
    } else if (views >= 1000000) {
        viewsnum = (views / 1000000) + "M";
    } else {
        viewsnum = views;
    }
    
    let html = `<div class="card">
                    <div class="img">
                        <img src="${thumbnail}" alt="">
                        <div class="duration">${duration}</div>
                    </div>
                    <div class="text">
                        <h1>${title}</h1>
                        <p>${cname} . ${viewsnum} views . ${monthSolde} months ago</p>
                    </div>
                    <br>
                </div>`;
    
    document.querySelector(".container").insertAdjacentHTML("beforeend", html);
}

createCard("Introduction to Backend | Sigma web Dev video #2", "CodewithHarry", 5600000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

createCard("Introduction to Backend | Sigma web Dev video #3", "CodewithHarry", 560000, 7, "29:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");


createCard("Introduction to Backend | Sigma web Dev video #4", "CodewithHarry", 560000, 7, "20:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

createCard("Introduction to Backend | Sigma web Dev video #5", "CodewithHarry", 560000, 7, "20:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Introduction to Backend | Sigma web Dev video #6", "CodewithHarry", 560000, 7, "20:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Introduction to Backend | Sigma web Dev video #7", "CodewithHarry", 560000, 7, "20:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Introduction to Backend | Sigma web Dev video #8", "CodewithHarry", 560000, 7, "20:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");