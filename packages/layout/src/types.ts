

export type HTMLElementCustomStyles = Record<string, string | Record<string, string>>
export type HTMLElementCustomClasss = Record<string, string>


export type Union<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

export type MutableRecord<Items, KindKey extends string = 'type', Share = unknown, DefaultKind extends keyof Items = never> = {
    [Kind in keyof Items]: Union<{
        [type in KindKey]: Kind;
    } & Items[Kind] & Share>
}[Exclude<keyof Items, DefaultKind>] | (
        DefaultKind extends never ? never : (
            Union<{ [K in KindKey]?: DefaultKind } & Items[DefaultKind] & Share>
        )
    )

export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
export type RequiredKeys<T extends object, Keys extends keyof T> = Expand<T & Required<Pick<T, Keys>>>

