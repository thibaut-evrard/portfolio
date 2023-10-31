export interface IMenu {
    mediaCount: number;
    onSelect: (value: number) => void;
    activeIndex: number;
}

export interface IMediaSelector {
    active: boolean;
}
