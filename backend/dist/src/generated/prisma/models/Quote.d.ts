import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuoteModel = runtime.Types.Result.DefaultSelection<Prisma.$QuotePayload>;
export type AggregateQuote = {
    _count: QuoteCountAggregateOutputType | null;
    _avg: QuoteAvgAggregateOutputType | null;
    _sum: QuoteSumAggregateOutputType | null;
    _min: QuoteMinAggregateOutputType | null;
    _max: QuoteMaxAggregateOutputType | null;
};
export type QuoteAvgAggregateOutputType = {
    id: number | null;
    bookNumber: number | null;
    chapterNumber: number | null;
};
export type QuoteSumAggregateOutputType = {
    id: number | null;
    bookNumber: number | null;
    chapterNumber: number | null;
};
export type QuoteMinAggregateOutputType = {
    id: number | null;
    character: string | null;
    text: string | null;
    bookNumber: number | null;
    chapterNumber: number | null;
};
export type QuoteMaxAggregateOutputType = {
    id: number | null;
    character: string | null;
    text: string | null;
    bookNumber: number | null;
    chapterNumber: number | null;
};
export type QuoteCountAggregateOutputType = {
    id: number;
    character: number;
    text: number;
    bookNumber: number;
    chapterNumber: number;
    _all: number;
};
export type QuoteAvgAggregateInputType = {
    id?: true;
    bookNumber?: true;
    chapterNumber?: true;
};
export type QuoteSumAggregateInputType = {
    id?: true;
    bookNumber?: true;
    chapterNumber?: true;
};
export type QuoteMinAggregateInputType = {
    id?: true;
    character?: true;
    text?: true;
    bookNumber?: true;
    chapterNumber?: true;
};
export type QuoteMaxAggregateInputType = {
    id?: true;
    character?: true;
    text?: true;
    bookNumber?: true;
    chapterNumber?: true;
};
export type QuoteCountAggregateInputType = {
    id?: true;
    character?: true;
    text?: true;
    bookNumber?: true;
    chapterNumber?: true;
    _all?: true;
};
export type QuoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuoteWhereInput;
    orderBy?: Prisma.QuoteOrderByWithRelationInput | Prisma.QuoteOrderByWithRelationInput[];
    cursor?: Prisma.QuoteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuoteCountAggregateInputType;
    _avg?: QuoteAvgAggregateInputType;
    _sum?: QuoteSumAggregateInputType;
    _min?: QuoteMinAggregateInputType;
    _max?: QuoteMaxAggregateInputType;
};
export type GetQuoteAggregateType<T extends QuoteAggregateArgs> = {
    [P in keyof T & keyof AggregateQuote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuote[P]> : Prisma.GetScalarType<T[P], AggregateQuote[P]>;
};
export type QuoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuoteWhereInput;
    orderBy?: Prisma.QuoteOrderByWithAggregationInput | Prisma.QuoteOrderByWithAggregationInput[];
    by: Prisma.QuoteScalarFieldEnum[] | Prisma.QuoteScalarFieldEnum;
    having?: Prisma.QuoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuoteCountAggregateInputType | true;
    _avg?: QuoteAvgAggregateInputType;
    _sum?: QuoteSumAggregateInputType;
    _min?: QuoteMinAggregateInputType;
    _max?: QuoteMaxAggregateInputType;
};
export type QuoteGroupByOutputType = {
    id: number;
    character: string;
    text: string;
    bookNumber: number;
    chapterNumber: number;
    _count: QuoteCountAggregateOutputType | null;
    _avg: QuoteAvgAggregateOutputType | null;
    _sum: QuoteSumAggregateOutputType | null;
    _min: QuoteMinAggregateOutputType | null;
    _max: QuoteMaxAggregateOutputType | null;
};
export type GetQuoteGroupByPayload<T extends QuoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuoteGroupByOutputType[P]>;
}>>;
export type QuoteWhereInput = {
    AND?: Prisma.QuoteWhereInput | Prisma.QuoteWhereInput[];
    OR?: Prisma.QuoteWhereInput[];
    NOT?: Prisma.QuoteWhereInput | Prisma.QuoteWhereInput[];
    id?: Prisma.IntFilter<"Quote"> | number;
    character?: Prisma.StringFilter<"Quote"> | string;
    text?: Prisma.StringFilter<"Quote"> | string;
    bookNumber?: Prisma.IntFilter<"Quote"> | number;
    chapterNumber?: Prisma.IntFilter<"Quote"> | number;
};
export type QuoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    character?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    bookNumber?: Prisma.SortOrder;
    chapterNumber?: Prisma.SortOrder;
};
export type QuoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.QuoteWhereInput | Prisma.QuoteWhereInput[];
    OR?: Prisma.QuoteWhereInput[];
    NOT?: Prisma.QuoteWhereInput | Prisma.QuoteWhereInput[];
    character?: Prisma.StringFilter<"Quote"> | string;
    text?: Prisma.StringFilter<"Quote"> | string;
    bookNumber?: Prisma.IntFilter<"Quote"> | number;
    chapterNumber?: Prisma.IntFilter<"Quote"> | number;
}, "id">;
export type QuoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    character?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    bookNumber?: Prisma.SortOrder;
    chapterNumber?: Prisma.SortOrder;
    _count?: Prisma.QuoteCountOrderByAggregateInput;
    _avg?: Prisma.QuoteAvgOrderByAggregateInput;
    _max?: Prisma.QuoteMaxOrderByAggregateInput;
    _min?: Prisma.QuoteMinOrderByAggregateInput;
    _sum?: Prisma.QuoteSumOrderByAggregateInput;
};
export type QuoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuoteScalarWhereWithAggregatesInput | Prisma.QuoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuoteScalarWhereWithAggregatesInput | Prisma.QuoteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Quote"> | number;
    character?: Prisma.StringWithAggregatesFilter<"Quote"> | string;
    text?: Prisma.StringWithAggregatesFilter<"Quote"> | string;
    bookNumber?: Prisma.IntWithAggregatesFilter<"Quote"> | number;
    chapterNumber?: Prisma.IntWithAggregatesFilter<"Quote"> | number;
};
export type QuoteCreateInput = {
    character: string;
    text: string;
    bookNumber: number;
    chapterNumber: number;
};
export type QuoteUncheckedCreateInput = {
    id?: number;
    character: string;
    text: string;
    bookNumber: number;
    chapterNumber: number;
};
export type QuoteUpdateInput = {
    character?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    bookNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    chapterNumber?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type QuoteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    character?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    bookNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    chapterNumber?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type QuoteCreateManyInput = {
    id?: number;
    character: string;
    text: string;
    bookNumber: number;
    chapterNumber: number;
};
export type QuoteUpdateManyMutationInput = {
    character?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    bookNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    chapterNumber?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type QuoteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    character?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    bookNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    chapterNumber?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type QuoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    character?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    bookNumber?: Prisma.SortOrder;
    chapterNumber?: Prisma.SortOrder;
};
export type QuoteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookNumber?: Prisma.SortOrder;
    chapterNumber?: Prisma.SortOrder;
};
export type QuoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    character?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    bookNumber?: Prisma.SortOrder;
    chapterNumber?: Prisma.SortOrder;
};
export type QuoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    character?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    bookNumber?: Prisma.SortOrder;
    chapterNumber?: Prisma.SortOrder;
};
export type QuoteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookNumber?: Prisma.SortOrder;
    chapterNumber?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type QuoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    character?: boolean;
    text?: boolean;
    bookNumber?: boolean;
    chapterNumber?: boolean;
}, ExtArgs["result"]["quote"]>;
export type QuoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    character?: boolean;
    text?: boolean;
    bookNumber?: boolean;
    chapterNumber?: boolean;
}, ExtArgs["result"]["quote"]>;
export type QuoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    character?: boolean;
    text?: boolean;
    bookNumber?: boolean;
    chapterNumber?: boolean;
}, ExtArgs["result"]["quote"]>;
export type QuoteSelectScalar = {
    id?: boolean;
    character?: boolean;
    text?: boolean;
    bookNumber?: boolean;
    chapterNumber?: boolean;
};
export type QuoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "character" | "text" | "bookNumber" | "chapterNumber", ExtArgs["result"]["quote"]>;
export type $QuotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Quote";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
    }, ExtArgs["result"]["quote"]>;
    composites: {};
};
export type QuoteGetPayload<S extends boolean | null | undefined | QuoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuotePayload, S>;
export type QuoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuoteCountAggregateInputType | true;
};
export interface QuoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Quote'];
        meta: {
            name: 'Quote';
        };
    };
    findUnique<T extends QuoteFindUniqueArgs>(args: Prisma.SelectSubset<T, QuoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuoteFindFirstArgs>(args?: Prisma.SelectSubset<T, QuoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuoteFindManyArgs>(args?: Prisma.SelectSubset<T, QuoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuoteCreateArgs>(args: Prisma.SelectSubset<T, QuoteCreateArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuoteCreateManyArgs>(args?: Prisma.SelectSubset<T, QuoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuoteDeleteArgs>(args: Prisma.SelectSubset<T, QuoteDeleteArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuoteUpdateArgs>(args: Prisma.SelectSubset<T, QuoteUpdateArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuoteUpdateManyArgs>(args: Prisma.SelectSubset<T, QuoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuoteUpsertArgs>(args: Prisma.SelectSubset<T, QuoteUpsertArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuoteCountArgs>(args?: Prisma.Subset<T, QuoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuoteCountAggregateOutputType> : number>;
    aggregate<T extends QuoteAggregateArgs>(args: Prisma.Subset<T, QuoteAggregateArgs>): Prisma.PrismaPromise<GetQuoteAggregateType<T>>;
    groupBy<T extends QuoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuoteGroupByArgs['orderBy'];
    } : {
        orderBy?: QuoteGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuoteFieldRefs;
}
export interface Prisma__QuoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuoteFieldRefs {
    readonly id: Prisma.FieldRef<"Quote", 'Int'>;
    readonly character: Prisma.FieldRef<"Quote", 'String'>;
    readonly text: Prisma.FieldRef<"Quote", 'String'>;
    readonly bookNumber: Prisma.FieldRef<"Quote", 'Int'>;
    readonly chapterNumber: Prisma.FieldRef<"Quote", 'Int'>;
}
export type QuoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    where: Prisma.QuoteWhereUniqueInput;
};
export type QuoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    where: Prisma.QuoteWhereUniqueInput;
};
export type QuoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    where?: Prisma.QuoteWhereInput;
    orderBy?: Prisma.QuoteOrderByWithRelationInput | Prisma.QuoteOrderByWithRelationInput[];
    cursor?: Prisma.QuoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuoteScalarFieldEnum | Prisma.QuoteScalarFieldEnum[];
};
export type QuoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    where?: Prisma.QuoteWhereInput;
    orderBy?: Prisma.QuoteOrderByWithRelationInput | Prisma.QuoteOrderByWithRelationInput[];
    cursor?: Prisma.QuoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuoteScalarFieldEnum | Prisma.QuoteScalarFieldEnum[];
};
export type QuoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    where?: Prisma.QuoteWhereInput;
    orderBy?: Prisma.QuoteOrderByWithRelationInput | Prisma.QuoteOrderByWithRelationInput[];
    cursor?: Prisma.QuoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuoteScalarFieldEnum | Prisma.QuoteScalarFieldEnum[];
};
export type QuoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuoteCreateInput, Prisma.QuoteUncheckedCreateInput>;
};
export type QuoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuoteCreateManyInput | Prisma.QuoteCreateManyInput[];
};
export type QuoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    data: Prisma.QuoteCreateManyInput | Prisma.QuoteCreateManyInput[];
};
export type QuoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuoteUpdateInput, Prisma.QuoteUncheckedUpdateInput>;
    where: Prisma.QuoteWhereUniqueInput;
};
export type QuoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuoteUpdateManyMutationInput, Prisma.QuoteUncheckedUpdateManyInput>;
    where?: Prisma.QuoteWhereInput;
    limit?: number;
};
export type QuoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuoteUpdateManyMutationInput, Prisma.QuoteUncheckedUpdateManyInput>;
    where?: Prisma.QuoteWhereInput;
    limit?: number;
};
export type QuoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    where: Prisma.QuoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuoteCreateInput, Prisma.QuoteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuoteUpdateInput, Prisma.QuoteUncheckedUpdateInput>;
};
export type QuoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    where: Prisma.QuoteWhereUniqueInput;
};
export type QuoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuoteWhereInput;
    limit?: number;
};
export type QuoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
};
