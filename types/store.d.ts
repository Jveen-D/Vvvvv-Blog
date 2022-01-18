/*
 * @Date: 2022-01-07 11:03:05
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/types/store.d.ts
 */
export interface AppState {
    slug: string,
    mode: string|null,
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
