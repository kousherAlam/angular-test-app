export class Pagination {
    constructor(
        public perpage: number = 10,
        public pageno: number = 1,
        public pageLength: number = 0,
        public pageSizeOption: number[] = [10, 25, 50, 100],
    ) { }

    setTotalCount(length: number) {
        this.pageLength = length;
    }

    decreaseTotoalCount() {
        this.pageLength--;
    }

    increaseTotoalCount() {
        this.pageLength++;
    }
    reset() {
        this.pageLength = 0;
        this.perpage = 10;
        this.pageno = 0;
    }
}