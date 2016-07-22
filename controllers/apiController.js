function index(req, res) {
 res.json({
    message: "Welcome to the Astropol api! Here's what you need to know!",
    documentation_url: "https://github.com/Ryan-Brenner/SGProject01_api/README.md", // CHANGE ME
    base_url: "http://astropol.herokuapp.com", // CHANGE ME
    endpoints: [
        { method: "GET", path: "/api", description: "Describes all available endpoints"},
        { method: "GET", path: "/api/home", description: "Homepage"},
        { method: "GET", path: "/api/logs", description: "Logs posted by users"},
        { method: "GET", path: "/api/events", description: "upcoming astronomy events"},
        { method: "POST", path: "/api/logs", description: "post a new log"},
        { method: "POST", path: "/api/pins", description: "Create a new stargazing location"},
        ]
    });
};

module.exports.index = index;
