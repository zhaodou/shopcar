var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");
gulp.task("server", function () {
    gulp.src(".")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            middleware: function (req, res, next) {
                var requestUrl = url.parse(req.url).pathname;
                console.log(requestUrl);
                if (requestUrl == "/api") {
                    var data = [{
                        id: 1,
                        title:'美的生活电器旗舰店烫衣服怪烫机家用蒸汽双杠苏宁京东商',
                        name: "玫瑰粉",
                        image: "Content/images/1.jpg",
                        addr: "北京",
                        state: false,
                        num: 1,
                        price: 1500,
                        size: "M",
                        color: "red"
                    },
                        {
                            id: 2,
                            name: "玫瑰粉",
                            title:'美的生活电器旗舰店烫衣服怪烫机家用蒸汽双杠苏宁京东商',
                            image: "Content/images/1.jpg",
                            addr: "北京",
                            state: false,
                            num: 1,
                            price: 2300,
                            size: "L",
                            color: "green"
                        },
                        {
                            id: 3,
                            name: "玫瑰粉",
                            title:'美的生活电器旗舰店烫衣服怪烫机家用蒸汽双杠苏宁京东商',
                            image: "Content/images/1.jpg",
                            addr: "北京",
                            state: false,
                            num: 1,
                            price: 3600,
                            size: "s",
                            color: "blue"
                        }

                    ];
                    res.writeHead(200, {
                        "Content-type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    });
                    res.write(JSON.stringify(data));
                    res.end();
                }
                next()
            },
            open: "/index.html",
            port: 8080
        }))
});