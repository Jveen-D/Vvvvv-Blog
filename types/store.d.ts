export interface AppState {
    slug: string,
    mode: string,
    shadow: string
    shadowImg: ShadowImg
}

export interface Sluy {
    slug: string,
}

export interface Mode {
    mode: string;
}

export interface Shadow {
    shadow: boolean;
}

export interface ShadowImg {
    width: number,
    height: number,
    left: number,
    top: number,
    src: string
}
