
export default class CursorToggler {
    private target: HTMLElement | null = null;
    private firstCursor: HTMLElement | null = null;
    private secondCursor: HTMLElement | null = null;
    private x: number;
    private y: number;

    constructor(target: string, firstCursor: string, secondCursor: string) {
        this.target = document.querySelector(target);
        this.firstCursor = document.querySelector(firstCursor);
        this.secondCursor = document.querySelector(secondCursor);

        this.x = 0;
        this.y = 0;
    }

    private captureMouseMovement = (event: MouseEvent): number[] => {
        return [event.clientX, event.clientY];
    };

    private moveCursor = (element: HTMLElement): void => {
        element.style.left = `${this.x}px`;
        element.style.top = `${this.y}px`;
    };

    private getPreviousCursor = (): number[] => {
        let element = this.isToggle() ? this.secondCursor : this.firstCursor;

        if (!element) return [0, 0];

        return [parseFloat(element.style.left), parseFloat(element.style.top)];
    };

    private isToggle = (): boolean => {
        return this.target?.dataset.toggleCursor == "true";
    };
    
    public handleCursor = (event: MouseEvent | null = null): void => {        
        if (event instanceof MouseEvent) {
            [this.x, this.y] = this.captureMouseMovement(event);
        } else {
            [this.x, this.y] = this.getPreviousCursor();
        }

        if (!this.target || !this.firstCursor || !this.secondCursor) return;

        if (this.isToggle()) {
            this.moveCursor(this.firstCursor);
            this.firstCursor.style.display = "block";
        } else {
            this.moveCursor(this.secondCursor);
            this.firstCursor.style.display = "none";
        }
    };
    
    public toggleCursor = (): void => {
        if (!this.target) return;

        this.target.dataset.toggleCursor = this.isToggle() ? "false" : "true";
        this.handleCursor();
    };
}

