export interface IAnimatedText {
    innerHtml: string;
    isVisible: boolean;
    onAnimationEnd?: () => void;
}

export enum EMarkup {
    Br = 'br',
    Text = 'text',
    Em = 'em',
    B = 'b',
    Strong = 'strong',
}

export enum EVariants {
    Visible = 'visible',
    Hidden = 'hidden',
}