class Question{

    constructor(){
        this.input1 = createInput("Enter your name ");
        this.Heading = createElement("MyQuiz Game ");
    }

    hide(){
        this.Heading.hide();
        this.input1.hide();
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 50);

        this.question.html("Question:- What starts and ends with the letter E , but has only one letter? ");
        this.question.position(150, 80);

        this.option1.html("1: Everyone ");
        this.option1.position(150, 100);

        this.option2.html("2: Envelope ");
        this.option2.position(150, 120);

        this.input1.position(50, 200);
    }
}
