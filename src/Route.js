export class Route {
  constructor(app) {
    this.app = app;
  }

  route() {
    const app = this.app;
    app.get("/", function (req, res) {
      res.render("index.html", {});
    });

    app.get("/conv", function (req, res) {
      res.render("conversation.html", {});
    });

    //1. enetry point
    app.listen(1117, function () {
      console.log("AirDrink Mock listen on *:1117");
    });
  }
}
