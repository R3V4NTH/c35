
var peopleCount = 0;

function setup() {
    canvas = createCanvas(displayWidth-20, displayHeight-30);

    database = firebase.database();
    form = new Form()
    form.display();
    user = new User();

}