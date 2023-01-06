type ElementType<x> = x extends ReadonlyArray<
infer type
>
? type
: never

export default ElementType;