interface Observable {
    attach(o: Observer);
    detach(o: Observer);
    notify();
}

interface Observer {
    update();
}

class YoutubeChannel implements Observable {
  private channelSubscribers: Observer[] = [];

  attach(o: Observer) {
    this.channelSubscribers.push(o)
  }

  detach(o: Observer) {
    // unsusbscribe
  }

  addNewVideo(title: string) {
    this.notify()
    console.log('New  youtube video added to channel');
  }

  notify() {
    for (let suscriptor of this.channelSubscribers) {
      suscriptor.update();
    }
  }
}

class Subscriber implements Observer {
  private observable = null;

  constructor(observable: Observable) {
    this.observable = observable;
  }

  update() {
    console.log('New video posted');
  }
}

