export interface IVideo {
    src: string;
    onPan: (event: any, info: any) => void;
    onPanEnd: (event: any, info: any) => void;
    active: boolean;
}
