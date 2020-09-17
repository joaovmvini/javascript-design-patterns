class Developer {
  askQuestions() {
    console.log("Asking about react js");
  }
}

class CommunityExecutive {
  askQuestions() {
    console.log("Asking about community building");
  }
}

class HiringManager {
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  makeInterviewer() {
    return new CommunityExecutive();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview();

const marketingManager = new MarketingManager();
marketingManager.takeInterview();

/*
When to use?
Useful when there is some generic processing in a class but the required sub-class is dynamically decided at runtime. Or putting it in other words, when the client doesn't know what exact sub-class it might need.
*/
