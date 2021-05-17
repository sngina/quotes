export class Quotes {
    showDescription: boolean;
  completeDate: Date;
    constructor(public id: number,
        public quote: string,
        public author: string,
        public description: string,
        public name: string,
        public date: Date,
        public upvotes: number,
        public downvotes: number) {
        this.showDescription = false;
    }
}
