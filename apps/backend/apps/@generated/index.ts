import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: Identity<DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: Identity<DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: Identity<IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: Identity<DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: Identity<DateTimeFilter>;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: Identity<FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: Identity<IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: Identity<IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: Identity<IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: Identity<FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: Identity<IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: Identity<IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: Identity<IntFilter>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: Identity<UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: Identity<UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: Identity<UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: Identity<UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: Identity<UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:true})
    @Type(() => UserCreateInput)
    data?: Identity<UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: Identity<UserWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: Identity<UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: Identity<UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: Identity<UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: Identity<UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: Identity<UserWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: Identity<UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: Identity<UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: Identity<UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: Identity<UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: Identity<UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: Identity<UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: Identity<UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: Identity<UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: Identity<UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: Identity<UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<`${UserScalarFieldEnum}`>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: Identity<UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: Identity<UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: Identity<UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: Identity<UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: Identity<UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: Identity<UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: Identity<UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: Identity<UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: Identity<UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: Identity<UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: Identity<DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserUpdateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: Identity<DateTimeFilter>;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: Identity<DateTimeFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
