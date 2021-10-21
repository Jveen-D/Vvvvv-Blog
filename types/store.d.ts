export interface AppState {
    slug: String,
    mode: String,
    shadow: String
    shadowImg: ShadowImg
}

export interface Sluy {
    slug: String,
}

export interface Mode {
    mode: String;
}

export interface Shadow {
    shadow: Boolean;
}

export interface ShadowImg {
    width: Number,
    height: Number,
    left: Number,
    top: Number,
    src: String
}
