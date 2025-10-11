import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    password = "password",
    role = "role",
    majorId = "majorId",
    studentId = "studentId",
    semester = "semester",
    lastLogin = "lastLogin",
    createTime = "createTime"
}

export enum TransactionIsolationLevel {
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum Role {
    User = "User",
    Admin = "Admin"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum Campus {
    ALL = "ALL",
    NSC = "NSC",
    HSSC = "HSSC"
}

export enum MajorScalarFieldEnum {
    id = "id",
    collegeId = "collegeId",
    majorName = "majorName"
}

export enum CollegeScalarFieldEnum {
    id = "id",
    campus = "campus",
    collegeName = "collegeName"
}

export enum AdminCodeScalarFieldEnum {
    id = "id",
    code = "code",
    name = "name"
}

registerEnumType(AdminCodeScalarFieldEnum, { name: 'AdminCodeScalarFieldEnum', description: undefined })
registerEnumType(CollegeScalarFieldEnum, { name: 'CollegeScalarFieldEnum', description: undefined })
registerEnumType(MajorScalarFieldEnum, { name: 'MajorScalarFieldEnum', description: undefined })
registerEnumType(Campus, { name: 'Campus', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(Role, { name: 'Role', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ArgsType()
export class AdminCodeAggregateArgs {
    @Field(() => AdminCodeWhereInput, {nullable:true})
    @Type(() => AdminCodeWhereInput)
    where?: InstanceType<typeof AdminCodeWhereInput>;
    @Field(() => [AdminCodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminCodeOrderByWithRelationInput>;
    @Field(() => AdminCodeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdminCodeWhereUniqueInput, 'id' | 'code'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AdminCodeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AdminCodeCountAggregateInput>;
    @Field(() => AdminCodeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AdminCodeAvgAggregateInput>;
    @Field(() => AdminCodeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AdminCodeSumAggregateInput>;
    @Field(() => AdminCodeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AdminCodeMinAggregateInput>;
    @Field(() => AdminCodeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AdminCodeMaxAggregateInput>;
}

@InputType()
export class AdminCodeAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class AdminCodeAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class AdminCodeAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
}

@InputType()
export class AdminCodeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class AdminCodeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class AdminCodeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@InputType()
export class AdminCodeCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class AdminCodeCreateInput {
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@ArgsType()
export class AdminCodeGroupByArgs {
    @Field(() => AdminCodeWhereInput, {nullable:true})
    @Type(() => AdminCodeWhereInput)
    where?: InstanceType<typeof AdminCodeWhereInput>;
    @Field(() => [AdminCodeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdminCodeOrderByWithAggregationInput>;
    @Field(() => [AdminCodeScalarFieldEnum], {nullable:false})
    by!: Array<`${AdminCodeScalarFieldEnum}`>;
    @Field(() => AdminCodeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof AdminCodeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AdminCodeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AdminCodeCountAggregateInput>;
    @Field(() => AdminCodeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AdminCodeAvgAggregateInput>;
    @Field(() => AdminCodeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AdminCodeSumAggregateInput>;
    @Field(() => AdminCodeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AdminCodeMinAggregateInput>;
    @Field(() => AdminCodeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AdminCodeMaxAggregateInput>;
}

@ObjectType()
export class AdminCodeGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => AdminCodeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AdminCodeCountAggregate>;
    @Field(() => AdminCodeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof AdminCodeAvgAggregate>;
    @Field(() => AdminCodeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof AdminCodeSumAggregate>;
    @Field(() => AdminCodeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AdminCodeMinAggregate>;
    @Field(() => AdminCodeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AdminCodeMaxAggregate>;
}

@InputType()
export class AdminCodeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class AdminCodeMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class AdminCodeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@InputType()
export class AdminCodeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class AdminCodeMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class AdminCodeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@InputType()
export class AdminCodeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => AdminCodeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AdminCodeCountOrderByAggregateInput>;
    @Field(() => AdminCodeAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AdminCodeAvgOrderByAggregateInput>;
    @Field(() => AdminCodeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AdminCodeMaxOrderByAggregateInput>;
    @Field(() => AdminCodeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AdminCodeMinOrderByAggregateInput>;
    @Field(() => AdminCodeSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AdminCodeSumOrderByAggregateInput>;
}

@InputType()
export class AdminCodeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@InputType()
export class AdminCodeScalarWhereWithAggregatesInput {
    @Field(() => [AdminCodeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdminCodeScalarWhereWithAggregatesInput>;
    @Field(() => [AdminCodeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdminCodeScalarWhereWithAggregatesInput>;
    @Field(() => [AdminCodeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdminCodeScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class AdminCodeSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class AdminCodeSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class AdminCodeSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
}

@InputType()
export class AdminCodeUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class AdminCodeUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class AdminCodeUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class AdminCodeUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class AdminCodeUpdateInput {
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class AdminCodeWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => [AdminCodeWhereInput], {nullable:true})
    AND?: Array<AdminCodeWhereInput>;
    @Field(() => [AdminCodeWhereInput], {nullable:true})
    OR?: Array<AdminCodeWhereInput>;
    @Field(() => [AdminCodeWhereInput], {nullable:true})
    NOT?: Array<AdminCodeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
}

@InputType()
export class AdminCodeWhereInput {
    @Field(() => [AdminCodeWhereInput], {nullable:true})
    AND?: Array<AdminCodeWhereInput>;
    @Field(() => [AdminCodeWhereInput], {nullable:true})
    OR?: Array<AdminCodeWhereInput>;
    @Field(() => [AdminCodeWhereInput], {nullable:true})
    NOT?: Array<AdminCodeWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AdminCode {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@ObjectType()
export class AggregateAdminCode {
    @Field(() => AdminCodeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AdminCodeCountAggregate>;
    @Field(() => AdminCodeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof AdminCodeAvgAggregate>;
    @Field(() => AdminCodeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof AdminCodeSumAggregate>;
    @Field(() => AdminCodeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AdminCodeMinAggregate>;
    @Field(() => AdminCodeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AdminCodeMaxAggregate>;
}

@ArgsType()
export class CreateManyAdminCodeArgs {
    @Field(() => [AdminCodeCreateManyInput], {nullable:false})
    @Type(() => AdminCodeCreateManyInput)
    data!: Array<AdminCodeCreateManyInput>;
}

@ArgsType()
export class CreateOneAdminCodeArgs {
    @Field(() => AdminCodeCreateInput, {nullable:false})
    @Type(() => AdminCodeCreateInput)
    data!: InstanceType<typeof AdminCodeCreateInput>;
}

@ArgsType()
export class DeleteManyAdminCodeArgs {
    @Field(() => AdminCodeWhereInput, {nullable:true})
    @Type(() => AdminCodeWhereInput)
    where?: InstanceType<typeof AdminCodeWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneAdminCodeArgs {
    @Field(() => AdminCodeWhereUniqueInput, {nullable:false})
    @Type(() => AdminCodeWhereUniqueInput)
    where!: Prisma.AtLeast<AdminCodeWhereUniqueInput, 'id' | 'code'>;
}

@ArgsType()
export class FindFirstAdminCodeOrThrowArgs {
    @Field(() => AdminCodeWhereInput, {nullable:true})
    @Type(() => AdminCodeWhereInput)
    where?: InstanceType<typeof AdminCodeWhereInput>;
    @Field(() => [AdminCodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminCodeOrderByWithRelationInput>;
    @Field(() => AdminCodeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdminCodeWhereUniqueInput, 'id' | 'code'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AdminCodeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AdminCodeScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstAdminCodeArgs {
    @Field(() => AdminCodeWhereInput, {nullable:true})
    @Type(() => AdminCodeWhereInput)
    where?: InstanceType<typeof AdminCodeWhereInput>;
    @Field(() => [AdminCodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminCodeOrderByWithRelationInput>;
    @Field(() => AdminCodeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdminCodeWhereUniqueInput, 'id' | 'code'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AdminCodeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AdminCodeScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyAdminCodeArgs {
    @Field(() => AdminCodeWhereInput, {nullable:true})
    @Type(() => AdminCodeWhereInput)
    where?: InstanceType<typeof AdminCodeWhereInput>;
    @Field(() => [AdminCodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminCodeOrderByWithRelationInput>;
    @Field(() => AdminCodeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdminCodeWhereUniqueInput, 'id' | 'code'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AdminCodeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AdminCodeScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueAdminCodeOrThrowArgs {
    @Field(() => AdminCodeWhereUniqueInput, {nullable:false})
    @Type(() => AdminCodeWhereUniqueInput)
    where!: Prisma.AtLeast<AdminCodeWhereUniqueInput, 'id' | 'code'>;
}

@ArgsType()
export class FindUniqueAdminCodeArgs {
    @Field(() => AdminCodeWhereUniqueInput, {nullable:false})
    @Type(() => AdminCodeWhereUniqueInput)
    where!: Prisma.AtLeast<AdminCodeWhereUniqueInput, 'id' | 'code'>;
}

@ArgsType()
export class UpdateManyAdminCodeArgs {
    @Field(() => AdminCodeUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminCodeUpdateManyMutationInput)
    data!: InstanceType<typeof AdminCodeUpdateManyMutationInput>;
    @Field(() => AdminCodeWhereInput, {nullable:true})
    @Type(() => AdminCodeWhereInput)
    where?: InstanceType<typeof AdminCodeWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneAdminCodeArgs {
    @Field(() => AdminCodeUpdateInput, {nullable:false})
    @Type(() => AdminCodeUpdateInput)
    data!: InstanceType<typeof AdminCodeUpdateInput>;
    @Field(() => AdminCodeWhereUniqueInput, {nullable:false})
    @Type(() => AdminCodeWhereUniqueInput)
    where!: Prisma.AtLeast<AdminCodeWhereUniqueInput, 'id' | 'code'>;
}

@ArgsType()
export class UpsertOneAdminCodeArgs {
    @Field(() => AdminCodeWhereUniqueInput, {nullable:false})
    @Type(() => AdminCodeWhereUniqueInput)
    where!: Prisma.AtLeast<AdminCodeWhereUniqueInput, 'id' | 'code'>;
    @Field(() => AdminCodeCreateInput, {nullable:false})
    @Type(() => AdminCodeCreateInput)
    create!: InstanceType<typeof AdminCodeCreateInput>;
    @Field(() => AdminCodeUpdateInput, {nullable:false})
    @Type(() => AdminCodeUpdateInput)
    update!: InstanceType<typeof AdminCodeUpdateInput>;
}

@ObjectType()
export class AggregateCollege {
    @Field(() => CollegeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CollegeCountAggregate>;
    @Field(() => CollegeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CollegeAvgAggregate>;
    @Field(() => CollegeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CollegeSumAggregate>;
    @Field(() => CollegeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CollegeMinAggregate>;
    @Field(() => CollegeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CollegeMaxAggregate>;
}

@ArgsType()
export class CollegeAggregateArgs {
    @Field(() => CollegeWhereInput, {nullable:true})
    @Type(() => CollegeWhereInput)
    where?: InstanceType<typeof CollegeWhereInput>;
    @Field(() => [CollegeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CollegeOrderByWithRelationInput>;
    @Field(() => CollegeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CollegeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CollegeCountAggregateInput>;
    @Field(() => CollegeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CollegeAvgAggregateInput>;
    @Field(() => CollegeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CollegeSumAggregateInput>;
    @Field(() => CollegeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CollegeMinAggregateInput>;
    @Field(() => CollegeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CollegeMaxAggregateInput>;
}

@InputType()
export class CollegeAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CollegeAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class CollegeAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
}

@InputType()
export class CollegeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    campus?: true;
    @Field(() => Boolean, {nullable:true})
    collegeName?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CollegeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    campus!: number;
    @Field(() => Int, {nullable:false})
    collegeName!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CollegeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    campus?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeName?: `${SortOrder}`;
}

@ObjectType()
export class CollegeCount {
    @Field(() => Int, {nullable:false})
    Major?: number;
}

@InputType()
export class CollegeCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Campus, {nullable:false})
    campus!: `${Campus}`;
    @Field(() => String, {nullable:false})
    collegeName!: string;
}

@InputType()
export class CollegeCreateNestedOneWithoutMajorInput {
    @Field(() => CollegeCreateWithoutMajorInput, {nullable:true})
    @Type(() => CollegeCreateWithoutMajorInput)
    create?: InstanceType<typeof CollegeCreateWithoutMajorInput>;
    @Field(() => CollegeCreateOrConnectWithoutMajorInput, {nullable:true})
    @Type(() => CollegeCreateOrConnectWithoutMajorInput)
    connectOrCreate?: InstanceType<typeof CollegeCreateOrConnectWithoutMajorInput>;
    @Field(() => CollegeWhereUniqueInput, {nullable:true})
    @Type(() => CollegeWhereUniqueInput)
    connect?: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
}

@InputType()
export class CollegeCreateOrConnectWithoutMajorInput {
    @Field(() => CollegeWhereUniqueInput, {nullable:false})
    @Type(() => CollegeWhereUniqueInput)
    where!: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
    @Field(() => CollegeCreateWithoutMajorInput, {nullable:false})
    @Type(() => CollegeCreateWithoutMajorInput)
    create!: InstanceType<typeof CollegeCreateWithoutMajorInput>;
}

@InputType()
export class CollegeCreateWithoutMajorInput {
    @Field(() => Campus, {nullable:false})
    campus!: `${Campus}`;
    @Field(() => String, {nullable:false})
    collegeName!: string;
}

@InputType()
export class CollegeCreateInput {
    @Field(() => Campus, {nullable:false})
    campus!: `${Campus}`;
    @Field(() => String, {nullable:false})
    collegeName!: string;
    @Field(() => MajorCreateNestedManyWithoutCollegeInput, {nullable:true})
    Major?: InstanceType<typeof MajorCreateNestedManyWithoutCollegeInput>;
}

@ArgsType()
export class CollegeGroupByArgs {
    @Field(() => CollegeWhereInput, {nullable:true})
    @Type(() => CollegeWhereInput)
    where?: InstanceType<typeof CollegeWhereInput>;
    @Field(() => [CollegeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CollegeOrderByWithAggregationInput>;
    @Field(() => [CollegeScalarFieldEnum], {nullable:false})
    by!: Array<`${CollegeScalarFieldEnum}`>;
    @Field(() => CollegeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CollegeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CollegeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CollegeCountAggregateInput>;
    @Field(() => CollegeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CollegeAvgAggregateInput>;
    @Field(() => CollegeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CollegeSumAggregateInput>;
    @Field(() => CollegeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CollegeMinAggregateInput>;
    @Field(() => CollegeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CollegeMaxAggregateInput>;
}

@ObjectType()
export class CollegeGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Campus, {nullable:false})
    campus!: `${Campus}`;
    @Field(() => String, {nullable:false})
    collegeName!: string;
    @Field(() => CollegeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CollegeCountAggregate>;
    @Field(() => CollegeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CollegeAvgAggregate>;
    @Field(() => CollegeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CollegeSumAggregate>;
    @Field(() => CollegeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CollegeMinAggregate>;
    @Field(() => CollegeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CollegeMaxAggregate>;
}

@InputType()
export class CollegeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    campus?: true;
    @Field(() => Boolean, {nullable:true})
    collegeName?: true;
}

@ObjectType()
export class CollegeMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Campus, {nullable:true})
    campus?: `${Campus}`;
    @Field(() => String, {nullable:true})
    collegeName?: string;
}

@InputType()
export class CollegeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    campus?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeName?: `${SortOrder}`;
}

@InputType()
export class CollegeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    campus?: true;
    @Field(() => Boolean, {nullable:true})
    collegeName?: true;
}

@ObjectType()
export class CollegeMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Campus, {nullable:true})
    campus?: `${Campus}`;
    @Field(() => String, {nullable:true})
    collegeName?: string;
}

@InputType()
export class CollegeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    campus?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeName?: `${SortOrder}`;
}

@InputType()
export class CollegeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    campus?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeName?: `${SortOrder}`;
    @Field(() => CollegeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CollegeCountOrderByAggregateInput>;
    @Field(() => CollegeAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CollegeAvgOrderByAggregateInput>;
    @Field(() => CollegeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CollegeMaxOrderByAggregateInput>;
    @Field(() => CollegeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CollegeMinOrderByAggregateInput>;
    @Field(() => CollegeSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CollegeSumOrderByAggregateInput>;
}

@InputType()
export class CollegeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    campus?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeName?: `${SortOrder}`;
    @Field(() => MajorOrderByRelationAggregateInput, {nullable:true})
    Major?: InstanceType<typeof MajorOrderByRelationAggregateInput>;
}

@InputType()
export class CollegeScalarRelationFilter {
    @Field(() => CollegeWhereInput, {nullable:true})
    is?: InstanceType<typeof CollegeWhereInput>;
    @Field(() => CollegeWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CollegeWhereInput>;
}

@InputType()
export class CollegeScalarWhereWithAggregatesInput {
    @Field(() => [CollegeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CollegeScalarWhereWithAggregatesInput>;
    @Field(() => [CollegeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CollegeScalarWhereWithAggregatesInput>;
    @Field(() => [CollegeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CollegeScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => EnumCampusWithAggregatesFilter, {nullable:true})
    campus?: InstanceType<typeof EnumCampusWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    collegeName?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CollegeSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CollegeSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CollegeSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
}

@InputType()
export class CollegeUncheckedCreateWithoutMajorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Campus, {nullable:false})
    campus!: `${Campus}`;
    @Field(() => String, {nullable:false})
    collegeName!: string;
}

@InputType()
export class CollegeUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Campus, {nullable:false})
    campus!: `${Campus}`;
    @Field(() => String, {nullable:false})
    collegeName!: string;
    @Field(() => MajorUncheckedCreateNestedManyWithoutCollegeInput, {nullable:true})
    Major?: InstanceType<typeof MajorUncheckedCreateNestedManyWithoutCollegeInput>;
}

@InputType()
export class CollegeUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Campus, {nullable:true})
    campus?: `${Campus}`;
    @Field(() => String, {nullable:true})
    collegeName?: string;
}

@InputType()
export class CollegeUncheckedUpdateWithoutMajorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Campus, {nullable:true})
    campus?: `${Campus}`;
    @Field(() => String, {nullable:true})
    collegeName?: string;
}

@InputType()
export class CollegeUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Campus, {nullable:true})
    campus?: `${Campus}`;
    @Field(() => String, {nullable:true})
    collegeName?: string;
    @Field(() => MajorUncheckedUpdateManyWithoutCollegeNestedInput, {nullable:true})
    Major?: InstanceType<typeof MajorUncheckedUpdateManyWithoutCollegeNestedInput>;
}

@InputType()
export class CollegeUpdateManyMutationInput {
    @Field(() => Campus, {nullable:true})
    campus?: `${Campus}`;
    @Field(() => String, {nullable:true})
    collegeName?: string;
}

@InputType()
export class CollegeUpdateOneRequiredWithoutMajorNestedInput {
    @Field(() => CollegeCreateWithoutMajorInput, {nullable:true})
    @Type(() => CollegeCreateWithoutMajorInput)
    create?: InstanceType<typeof CollegeCreateWithoutMajorInput>;
    @Field(() => CollegeCreateOrConnectWithoutMajorInput, {nullable:true})
    @Type(() => CollegeCreateOrConnectWithoutMajorInput)
    connectOrCreate?: InstanceType<typeof CollegeCreateOrConnectWithoutMajorInput>;
    @Field(() => CollegeUpsertWithoutMajorInput, {nullable:true})
    @Type(() => CollegeUpsertWithoutMajorInput)
    upsert?: InstanceType<typeof CollegeUpsertWithoutMajorInput>;
    @Field(() => CollegeWhereUniqueInput, {nullable:true})
    @Type(() => CollegeWhereUniqueInput)
    connect?: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
    @Field(() => CollegeUpdateToOneWithWhereWithoutMajorInput, {nullable:true})
    @Type(() => CollegeUpdateToOneWithWhereWithoutMajorInput)
    update?: InstanceType<typeof CollegeUpdateToOneWithWhereWithoutMajorInput>;
}

@InputType()
export class CollegeUpdateToOneWithWhereWithoutMajorInput {
    @Field(() => CollegeWhereInput, {nullable:true})
    @Type(() => CollegeWhereInput)
    where?: InstanceType<typeof CollegeWhereInput>;
    @Field(() => CollegeUpdateWithoutMajorInput, {nullable:false})
    @Type(() => CollegeUpdateWithoutMajorInput)
    data!: InstanceType<typeof CollegeUpdateWithoutMajorInput>;
}

@InputType()
export class CollegeUpdateWithoutMajorInput {
    @Field(() => Campus, {nullable:true})
    campus?: `${Campus}`;
    @Field(() => String, {nullable:true})
    collegeName?: string;
}

@InputType()
export class CollegeUpdateInput {
    @Field(() => Campus, {nullable:true})
    campus?: `${Campus}`;
    @Field(() => String, {nullable:true})
    collegeName?: string;
    @Field(() => MajorUpdateManyWithoutCollegeNestedInput, {nullable:true})
    Major?: InstanceType<typeof MajorUpdateManyWithoutCollegeNestedInput>;
}

@InputType()
export class CollegeUpsertWithoutMajorInput {
    @Field(() => CollegeUpdateWithoutMajorInput, {nullable:false})
    @Type(() => CollegeUpdateWithoutMajorInput)
    update!: InstanceType<typeof CollegeUpdateWithoutMajorInput>;
    @Field(() => CollegeCreateWithoutMajorInput, {nullable:false})
    @Type(() => CollegeCreateWithoutMajorInput)
    create!: InstanceType<typeof CollegeCreateWithoutMajorInput>;
    @Field(() => CollegeWhereInput, {nullable:true})
    @Type(() => CollegeWhereInput)
    where?: InstanceType<typeof CollegeWhereInput>;
}

@InputType()
export class CollegeWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [CollegeWhereInput], {nullable:true})
    AND?: Array<CollegeWhereInput>;
    @Field(() => [CollegeWhereInput], {nullable:true})
    OR?: Array<CollegeWhereInput>;
    @Field(() => [CollegeWhereInput], {nullable:true})
    NOT?: Array<CollegeWhereInput>;
    @Field(() => EnumCampusFilter, {nullable:true})
    campus?: InstanceType<typeof EnumCampusFilter>;
    @Field(() => StringFilter, {nullable:true})
    collegeName?: InstanceType<typeof StringFilter>;
    @Field(() => MajorListRelationFilter, {nullable:true})
    Major?: InstanceType<typeof MajorListRelationFilter>;
}

@InputType()
export class CollegeWhereInput {
    @Field(() => [CollegeWhereInput], {nullable:true})
    AND?: Array<CollegeWhereInput>;
    @Field(() => [CollegeWhereInput], {nullable:true})
    OR?: Array<CollegeWhereInput>;
    @Field(() => [CollegeWhereInput], {nullable:true})
    NOT?: Array<CollegeWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => EnumCampusFilter, {nullable:true})
    campus?: InstanceType<typeof EnumCampusFilter>;
    @Field(() => StringFilter, {nullable:true})
    collegeName?: InstanceType<typeof StringFilter>;
    @Field(() => MajorListRelationFilter, {nullable:true})
    Major?: InstanceType<typeof MajorListRelationFilter>;
}

@ObjectType()
export class College {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Campus, {nullable:false})
    campus!: `${Campus}`;
    @Field(() => String, {nullable:false})
    collegeName!: string;
    @Field(() => [Major], {nullable:true})
    Major?: Array<Major>;
    @Field(() => CollegeCount, {nullable:false})
    _count?: InstanceType<typeof CollegeCount>;
}

@ArgsType()
export class CreateManyCollegeArgs {
    @Field(() => [CollegeCreateManyInput], {nullable:false})
    @Type(() => CollegeCreateManyInput)
    data!: Array<CollegeCreateManyInput>;
}

@ArgsType()
export class CreateOneCollegeArgs {
    @Field(() => CollegeCreateInput, {nullable:false})
    @Type(() => CollegeCreateInput)
    data!: InstanceType<typeof CollegeCreateInput>;
}

@ArgsType()
export class DeleteManyCollegeArgs {
    @Field(() => CollegeWhereInput, {nullable:true})
    @Type(() => CollegeWhereInput)
    where?: InstanceType<typeof CollegeWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneCollegeArgs {
    @Field(() => CollegeWhereUniqueInput, {nullable:false})
    @Type(() => CollegeWhereUniqueInput)
    where!: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCollegeOrThrowArgs {
    @Field(() => CollegeWhereInput, {nullable:true})
    @Type(() => CollegeWhereInput)
    where?: InstanceType<typeof CollegeWhereInput>;
    @Field(() => [CollegeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CollegeOrderByWithRelationInput>;
    @Field(() => CollegeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CollegeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CollegeScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstCollegeArgs {
    @Field(() => CollegeWhereInput, {nullable:true})
    @Type(() => CollegeWhereInput)
    where?: InstanceType<typeof CollegeWhereInput>;
    @Field(() => [CollegeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CollegeOrderByWithRelationInput>;
    @Field(() => CollegeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CollegeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CollegeScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyCollegeArgs {
    @Field(() => CollegeWhereInput, {nullable:true})
    @Type(() => CollegeWhereInput)
    where?: InstanceType<typeof CollegeWhereInput>;
    @Field(() => [CollegeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CollegeOrderByWithRelationInput>;
    @Field(() => CollegeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CollegeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CollegeScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueCollegeOrThrowArgs {
    @Field(() => CollegeWhereUniqueInput, {nullable:false})
    @Type(() => CollegeWhereUniqueInput)
    where!: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCollegeArgs {
    @Field(() => CollegeWhereUniqueInput, {nullable:false})
    @Type(() => CollegeWhereUniqueInput)
    where!: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCollegeArgs {
    @Field(() => CollegeUpdateManyMutationInput, {nullable:false})
    @Type(() => CollegeUpdateManyMutationInput)
    data!: InstanceType<typeof CollegeUpdateManyMutationInput>;
    @Field(() => CollegeWhereInput, {nullable:true})
    @Type(() => CollegeWhereInput)
    where?: InstanceType<typeof CollegeWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneCollegeArgs {
    @Field(() => CollegeUpdateInput, {nullable:false})
    @Type(() => CollegeUpdateInput)
    data!: InstanceType<typeof CollegeUpdateInput>;
    @Field(() => CollegeWhereUniqueInput, {nullable:false})
    @Type(() => CollegeWhereUniqueInput)
    where!: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCollegeArgs {
    @Field(() => CollegeWhereUniqueInput, {nullable:false})
    @Type(() => CollegeWhereUniqueInput)
    where!: Prisma.AtLeast<CollegeWhereUniqueInput, 'id'>;
    @Field(() => CollegeCreateInput, {nullable:false})
    @Type(() => CollegeCreateInput)
    create!: InstanceType<typeof CollegeCreateInput>;
    @Field(() => CollegeUpdateInput, {nullable:false})
    @Type(() => CollegeUpdateInput)
    update!: InstanceType<typeof CollegeUpdateInput>;
}

@ObjectType()
export class AggregateMajor {
    @Field(() => MajorCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MajorCountAggregate>;
    @Field(() => MajorAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof MajorAvgAggregate>;
    @Field(() => MajorSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof MajorSumAggregate>;
    @Field(() => MajorMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MajorMinAggregate>;
    @Field(() => MajorMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MajorMaxAggregate>;
}

@ArgsType()
export class CreateManyMajorArgs {
    @Field(() => [MajorCreateManyInput], {nullable:false})
    @Type(() => MajorCreateManyInput)
    data!: Array<MajorCreateManyInput>;
}

@ArgsType()
export class CreateOneMajorArgs {
    @Field(() => MajorCreateInput, {nullable:false})
    @Type(() => MajorCreateInput)
    data!: InstanceType<typeof MajorCreateInput>;
}

@ArgsType()
export class DeleteManyMajorArgs {
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    where?: InstanceType<typeof MajorWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneMajorArgs {
    @Field(() => MajorWhereUniqueInput, {nullable:false})
    @Type(() => MajorWhereUniqueInput)
    where!: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstMajorOrThrowArgs {
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    where?: InstanceType<typeof MajorWhereInput>;
    @Field(() => [MajorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MajorOrderByWithRelationInput>;
    @Field(() => MajorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MajorScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MajorScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstMajorArgs {
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    where?: InstanceType<typeof MajorWhereInput>;
    @Field(() => [MajorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MajorOrderByWithRelationInput>;
    @Field(() => MajorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MajorScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MajorScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyMajorArgs {
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    where?: InstanceType<typeof MajorWhereInput>;
    @Field(() => [MajorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MajorOrderByWithRelationInput>;
    @Field(() => MajorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MajorScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MajorScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueMajorOrThrowArgs {
    @Field(() => MajorWhereUniqueInput, {nullable:false})
    @Type(() => MajorWhereUniqueInput)
    where!: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueMajorArgs {
    @Field(() => MajorWhereUniqueInput, {nullable:false})
    @Type(() => MajorWhereUniqueInput)
    where!: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
}

@ArgsType()
export class MajorAggregateArgs {
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    where?: InstanceType<typeof MajorWhereInput>;
    @Field(() => [MajorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MajorOrderByWithRelationInput>;
    @Field(() => MajorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MajorCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MajorCountAggregateInput>;
    @Field(() => MajorAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MajorAvgAggregateInput>;
    @Field(() => MajorSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MajorSumAggregateInput>;
    @Field(() => MajorMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MajorMinAggregateInput>;
    @Field(() => MajorMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MajorMaxAggregateInput>;
}

@InputType()
export class MajorAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    collegeId?: true;
}

@ObjectType()
export class MajorAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    collegeId?: number;
}

@InputType()
export class MajorAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeId?: `${SortOrder}`;
}

@InputType()
export class MajorCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    collegeId?: true;
    @Field(() => Boolean, {nullable:true})
    majorName?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class MajorCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    collegeId!: number;
    @Field(() => Int, {nullable:false})
    majorName!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class MajorCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    majorName?: `${SortOrder}`;
}

@ObjectType()
export class MajorCount {
    @Field(() => Int, {nullable:false})
    User?: number;
}

@InputType()
export class MajorCreateManyCollegeInputEnvelope {
    @Field(() => [MajorCreateManyCollegeInput], {nullable:false})
    @Type(() => MajorCreateManyCollegeInput)
    data!: Array<MajorCreateManyCollegeInput>;
}

@InputType()
export class MajorCreateManyCollegeInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    majorName!: string;
}

@InputType()
export class MajorCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    collegeId!: number;
    @Field(() => String, {nullable:false})
    majorName!: string;
}

@InputType()
export class MajorCreateNestedManyWithoutCollegeInput {
    @Field(() => [MajorCreateWithoutCollegeInput], {nullable:true})
    @Type(() => MajorCreateWithoutCollegeInput)
    create?: Array<MajorCreateWithoutCollegeInput>;
    @Field(() => [MajorCreateOrConnectWithoutCollegeInput], {nullable:true})
    @Type(() => MajorCreateOrConnectWithoutCollegeInput)
    connectOrCreate?: Array<MajorCreateOrConnectWithoutCollegeInput>;
    @Field(() => MajorCreateManyCollegeInputEnvelope, {nullable:true})
    @Type(() => MajorCreateManyCollegeInputEnvelope)
    createMany?: InstanceType<typeof MajorCreateManyCollegeInputEnvelope>;
    @Field(() => [MajorWhereUniqueInput], {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MajorWhereUniqueInput, 'id'>>;
}

@InputType()
export class MajorCreateNestedOneWithoutUserInput {
    @Field(() => MajorCreateWithoutUserInput, {nullable:true})
    @Type(() => MajorCreateWithoutUserInput)
    create?: InstanceType<typeof MajorCreateWithoutUserInput>;
    @Field(() => MajorCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => MajorCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof MajorCreateOrConnectWithoutUserInput>;
    @Field(() => MajorWhereUniqueInput, {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    connect?: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
}

@InputType()
export class MajorCreateOrConnectWithoutCollegeInput {
    @Field(() => MajorWhereUniqueInput, {nullable:false})
    @Type(() => MajorWhereUniqueInput)
    where!: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
    @Field(() => MajorCreateWithoutCollegeInput, {nullable:false})
    @Type(() => MajorCreateWithoutCollegeInput)
    create!: InstanceType<typeof MajorCreateWithoutCollegeInput>;
}

@InputType()
export class MajorCreateOrConnectWithoutUserInput {
    @Field(() => MajorWhereUniqueInput, {nullable:false})
    @Type(() => MajorWhereUniqueInput)
    where!: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
    @Field(() => MajorCreateWithoutUserInput, {nullable:false})
    @Type(() => MajorCreateWithoutUserInput)
    create!: InstanceType<typeof MajorCreateWithoutUserInput>;
}

@InputType()
export class MajorCreateWithoutCollegeInput {
    @Field(() => String, {nullable:false})
    majorName!: string;
    @Field(() => UserCreateNestedManyWithoutMajorInput, {nullable:true})
    User?: InstanceType<typeof UserCreateNestedManyWithoutMajorInput>;
}

@InputType()
export class MajorCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    majorName!: string;
    @Field(() => CollegeCreateNestedOneWithoutMajorInput, {nullable:false})
    college!: InstanceType<typeof CollegeCreateNestedOneWithoutMajorInput>;
}

@InputType()
export class MajorCreateInput {
    @Field(() => String, {nullable:false})
    majorName!: string;
    @Field(() => CollegeCreateNestedOneWithoutMajorInput, {nullable:false})
    college!: InstanceType<typeof CollegeCreateNestedOneWithoutMajorInput>;
    @Field(() => UserCreateNestedManyWithoutMajorInput, {nullable:true})
    User?: InstanceType<typeof UserCreateNestedManyWithoutMajorInput>;
}

@ArgsType()
export class MajorGroupByArgs {
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    where?: InstanceType<typeof MajorWhereInput>;
    @Field(() => [MajorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MajorOrderByWithAggregationInput>;
    @Field(() => [MajorScalarFieldEnum], {nullable:false})
    by!: Array<`${MajorScalarFieldEnum}`>;
    @Field(() => MajorScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof MajorScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MajorCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MajorCountAggregateInput>;
    @Field(() => MajorAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MajorAvgAggregateInput>;
    @Field(() => MajorSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MajorSumAggregateInput>;
    @Field(() => MajorMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MajorMinAggregateInput>;
    @Field(() => MajorMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MajorMaxAggregateInput>;
}

@ObjectType()
export class MajorGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    collegeId!: number;
    @Field(() => String, {nullable:false})
    majorName!: string;
    @Field(() => MajorCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MajorCountAggregate>;
    @Field(() => MajorAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof MajorAvgAggregate>;
    @Field(() => MajorSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof MajorSumAggregate>;
    @Field(() => MajorMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MajorMinAggregate>;
    @Field(() => MajorMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MajorMaxAggregate>;
}

@InputType()
export class MajorListRelationFilter {
    @Field(() => MajorWhereInput, {nullable:true})
    every?: InstanceType<typeof MajorWhereInput>;
    @Field(() => MajorWhereInput, {nullable:true})
    some?: InstanceType<typeof MajorWhereInput>;
    @Field(() => MajorWhereInput, {nullable:true})
    none?: InstanceType<typeof MajorWhereInput>;
}

@InputType()
export class MajorMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    collegeId?: true;
    @Field(() => Boolean, {nullable:true})
    majorName?: true;
}

@ObjectType()
export class MajorMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    collegeId?: number;
    @Field(() => String, {nullable:true})
    majorName?: string;
}

@InputType()
export class MajorMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    majorName?: `${SortOrder}`;
}

@InputType()
export class MajorMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    collegeId?: true;
    @Field(() => Boolean, {nullable:true})
    majorName?: true;
}

@ObjectType()
export class MajorMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    collegeId?: number;
    @Field(() => String, {nullable:true})
    majorName?: string;
}

@InputType()
export class MajorMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    majorName?: `${SortOrder}`;
}

@InputType()
export class MajorNullableScalarRelationFilter {
    @Field(() => MajorWhereInput, {nullable:true})
    is?: InstanceType<typeof MajorWhereInput>;
    @Field(() => MajorWhereInput, {nullable:true})
    isNot?: InstanceType<typeof MajorWhereInput>;
}

@InputType()
export class MajorOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class MajorOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    majorName?: `${SortOrder}`;
    @Field(() => MajorCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MajorCountOrderByAggregateInput>;
    @Field(() => MajorAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MajorAvgOrderByAggregateInput>;
    @Field(() => MajorMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MajorMaxOrderByAggregateInput>;
    @Field(() => MajorMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MajorMinOrderByAggregateInput>;
    @Field(() => MajorSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MajorSumOrderByAggregateInput>;
}

@InputType()
export class MajorOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    majorName?: `${SortOrder}`;
    @Field(() => CollegeOrderByWithRelationInput, {nullable:true})
    college?: InstanceType<typeof CollegeOrderByWithRelationInput>;
    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    User?: InstanceType<typeof UserOrderByRelationAggregateInput>;
}

@InputType()
export class MajorScalarWhereWithAggregatesInput {
    @Field(() => [MajorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MajorScalarWhereWithAggregatesInput>;
    @Field(() => [MajorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MajorScalarWhereWithAggregatesInput>;
    @Field(() => [MajorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MajorScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    collegeId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    majorName?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class MajorScalarWhereInput {
    @Field(() => [MajorScalarWhereInput], {nullable:true})
    AND?: Array<MajorScalarWhereInput>;
    @Field(() => [MajorScalarWhereInput], {nullable:true})
    OR?: Array<MajorScalarWhereInput>;
    @Field(() => [MajorScalarWhereInput], {nullable:true})
    NOT?: Array<MajorScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    collegeId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    majorName?: InstanceType<typeof StringFilter>;
}

@InputType()
export class MajorSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    collegeId?: true;
}

@ObjectType()
export class MajorSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    collegeId?: number;
}

@InputType()
export class MajorSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    collegeId?: `${SortOrder}`;
}

@InputType()
export class MajorUncheckedCreateNestedManyWithoutCollegeInput {
    @Field(() => [MajorCreateWithoutCollegeInput], {nullable:true})
    @Type(() => MajorCreateWithoutCollegeInput)
    create?: Array<MajorCreateWithoutCollegeInput>;
    @Field(() => [MajorCreateOrConnectWithoutCollegeInput], {nullable:true})
    @Type(() => MajorCreateOrConnectWithoutCollegeInput)
    connectOrCreate?: Array<MajorCreateOrConnectWithoutCollegeInput>;
    @Field(() => MajorCreateManyCollegeInputEnvelope, {nullable:true})
    @Type(() => MajorCreateManyCollegeInputEnvelope)
    createMany?: InstanceType<typeof MajorCreateManyCollegeInputEnvelope>;
    @Field(() => [MajorWhereUniqueInput], {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MajorWhereUniqueInput, 'id'>>;
}

@InputType()
export class MajorUncheckedCreateWithoutCollegeInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    majorName!: string;
    @Field(() => UserUncheckedCreateNestedManyWithoutMajorInput, {nullable:true})
    User?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutMajorInput>;
}

@InputType()
export class MajorUncheckedCreateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    collegeId!: number;
    @Field(() => String, {nullable:false})
    majorName!: string;
}

@InputType()
export class MajorUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    collegeId!: number;
    @Field(() => String, {nullable:false})
    majorName!: string;
    @Field(() => UserUncheckedCreateNestedManyWithoutMajorInput, {nullable:true})
    User?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutMajorInput>;
}

@InputType()
export class MajorUncheckedUpdateManyWithoutCollegeNestedInput {
    @Field(() => [MajorCreateWithoutCollegeInput], {nullable:true})
    @Type(() => MajorCreateWithoutCollegeInput)
    create?: Array<MajorCreateWithoutCollegeInput>;
    @Field(() => [MajorCreateOrConnectWithoutCollegeInput], {nullable:true})
    @Type(() => MajorCreateOrConnectWithoutCollegeInput)
    connectOrCreate?: Array<MajorCreateOrConnectWithoutCollegeInput>;
    @Field(() => [MajorUpsertWithWhereUniqueWithoutCollegeInput], {nullable:true})
    @Type(() => MajorUpsertWithWhereUniqueWithoutCollegeInput)
    upsert?: Array<MajorUpsertWithWhereUniqueWithoutCollegeInput>;
    @Field(() => MajorCreateManyCollegeInputEnvelope, {nullable:true})
    @Type(() => MajorCreateManyCollegeInputEnvelope)
    createMany?: InstanceType<typeof MajorCreateManyCollegeInputEnvelope>;
    @Field(() => [MajorWhereUniqueInput], {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MajorWhereUniqueInput, 'id'>>;
    @Field(() => [MajorWhereUniqueInput], {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MajorWhereUniqueInput, 'id'>>;
    @Field(() => [MajorWhereUniqueInput], {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MajorWhereUniqueInput, 'id'>>;
    @Field(() => [MajorWhereUniqueInput], {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MajorWhereUniqueInput, 'id'>>;
    @Field(() => [MajorUpdateWithWhereUniqueWithoutCollegeInput], {nullable:true})
    @Type(() => MajorUpdateWithWhereUniqueWithoutCollegeInput)
    update?: Array<MajorUpdateWithWhereUniqueWithoutCollegeInput>;
    @Field(() => [MajorUpdateManyWithWhereWithoutCollegeInput], {nullable:true})
    @Type(() => MajorUpdateManyWithWhereWithoutCollegeInput)
    updateMany?: Array<MajorUpdateManyWithWhereWithoutCollegeInput>;
    @Field(() => [MajorScalarWhereInput], {nullable:true})
    @Type(() => MajorScalarWhereInput)
    deleteMany?: Array<MajorScalarWhereInput>;
}

@InputType()
export class MajorUncheckedUpdateManyWithoutCollegeInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    majorName?: string;
}

@InputType()
export class MajorUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    collegeId?: number;
    @Field(() => String, {nullable:true})
    majorName?: string;
}

@InputType()
export class MajorUncheckedUpdateWithoutCollegeInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    majorName?: string;
    @Field(() => UserUncheckedUpdateManyWithoutMajorNestedInput, {nullable:true})
    User?: InstanceType<typeof UserUncheckedUpdateManyWithoutMajorNestedInput>;
}

@InputType()
export class MajorUncheckedUpdateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    collegeId?: number;
    @Field(() => String, {nullable:true})
    majorName?: string;
}

@InputType()
export class MajorUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    collegeId?: number;
    @Field(() => String, {nullable:true})
    majorName?: string;
    @Field(() => UserUncheckedUpdateManyWithoutMajorNestedInput, {nullable:true})
    User?: InstanceType<typeof UserUncheckedUpdateManyWithoutMajorNestedInput>;
}

@InputType()
export class MajorUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    majorName?: string;
}

@InputType()
export class MajorUpdateManyWithWhereWithoutCollegeInput {
    @Field(() => MajorScalarWhereInput, {nullable:false})
    @Type(() => MajorScalarWhereInput)
    where!: InstanceType<typeof MajorScalarWhereInput>;
    @Field(() => MajorUpdateManyMutationInput, {nullable:false})
    @Type(() => MajorUpdateManyMutationInput)
    data!: InstanceType<typeof MajorUpdateManyMutationInput>;
}

@InputType()
export class MajorUpdateManyWithoutCollegeNestedInput {
    @Field(() => [MajorCreateWithoutCollegeInput], {nullable:true})
    @Type(() => MajorCreateWithoutCollegeInput)
    create?: Array<MajorCreateWithoutCollegeInput>;
    @Field(() => [MajorCreateOrConnectWithoutCollegeInput], {nullable:true})
    @Type(() => MajorCreateOrConnectWithoutCollegeInput)
    connectOrCreate?: Array<MajorCreateOrConnectWithoutCollegeInput>;
    @Field(() => [MajorUpsertWithWhereUniqueWithoutCollegeInput], {nullable:true})
    @Type(() => MajorUpsertWithWhereUniqueWithoutCollegeInput)
    upsert?: Array<MajorUpsertWithWhereUniqueWithoutCollegeInput>;
    @Field(() => MajorCreateManyCollegeInputEnvelope, {nullable:true})
    @Type(() => MajorCreateManyCollegeInputEnvelope)
    createMany?: InstanceType<typeof MajorCreateManyCollegeInputEnvelope>;
    @Field(() => [MajorWhereUniqueInput], {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MajorWhereUniqueInput, 'id'>>;
    @Field(() => [MajorWhereUniqueInput], {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MajorWhereUniqueInput, 'id'>>;
    @Field(() => [MajorWhereUniqueInput], {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MajorWhereUniqueInput, 'id'>>;
    @Field(() => [MajorWhereUniqueInput], {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MajorWhereUniqueInput, 'id'>>;
    @Field(() => [MajorUpdateWithWhereUniqueWithoutCollegeInput], {nullable:true})
    @Type(() => MajorUpdateWithWhereUniqueWithoutCollegeInput)
    update?: Array<MajorUpdateWithWhereUniqueWithoutCollegeInput>;
    @Field(() => [MajorUpdateManyWithWhereWithoutCollegeInput], {nullable:true})
    @Type(() => MajorUpdateManyWithWhereWithoutCollegeInput)
    updateMany?: Array<MajorUpdateManyWithWhereWithoutCollegeInput>;
    @Field(() => [MajorScalarWhereInput], {nullable:true})
    @Type(() => MajorScalarWhereInput)
    deleteMany?: Array<MajorScalarWhereInput>;
}

@InputType()
export class MajorUpdateOneWithoutUserNestedInput {
    @Field(() => MajorCreateWithoutUserInput, {nullable:true})
    @Type(() => MajorCreateWithoutUserInput)
    create?: InstanceType<typeof MajorCreateWithoutUserInput>;
    @Field(() => MajorCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => MajorCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof MajorCreateOrConnectWithoutUserInput>;
    @Field(() => MajorUpsertWithoutUserInput, {nullable:true})
    @Type(() => MajorUpsertWithoutUserInput)
    upsert?: InstanceType<typeof MajorUpsertWithoutUserInput>;
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    disconnect?: InstanceType<typeof MajorWhereInput>;
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    delete?: InstanceType<typeof MajorWhereInput>;
    @Field(() => MajorWhereUniqueInput, {nullable:true})
    @Type(() => MajorWhereUniqueInput)
    connect?: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
    @Field(() => MajorUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => MajorUpdateToOneWithWhereWithoutUserInput)
    update?: InstanceType<typeof MajorUpdateToOneWithWhereWithoutUserInput>;
}

@InputType()
export class MajorUpdateToOneWithWhereWithoutUserInput {
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    where?: InstanceType<typeof MajorWhereInput>;
    @Field(() => MajorUpdateWithoutUserInput, {nullable:false})
    @Type(() => MajorUpdateWithoutUserInput)
    data!: InstanceType<typeof MajorUpdateWithoutUserInput>;
}

@InputType()
export class MajorUpdateWithWhereUniqueWithoutCollegeInput {
    @Field(() => MajorWhereUniqueInput, {nullable:false})
    @Type(() => MajorWhereUniqueInput)
    where!: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
    @Field(() => MajorUpdateWithoutCollegeInput, {nullable:false})
    @Type(() => MajorUpdateWithoutCollegeInput)
    data!: InstanceType<typeof MajorUpdateWithoutCollegeInput>;
}

@InputType()
export class MajorUpdateWithoutCollegeInput {
    @Field(() => String, {nullable:true})
    majorName?: string;
    @Field(() => UserUpdateManyWithoutMajorNestedInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateManyWithoutMajorNestedInput>;
}

@InputType()
export class MajorUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    majorName?: string;
    @Field(() => CollegeUpdateOneRequiredWithoutMajorNestedInput, {nullable:true})
    college?: InstanceType<typeof CollegeUpdateOneRequiredWithoutMajorNestedInput>;
}

@InputType()
export class MajorUpdateInput {
    @Field(() => String, {nullable:true})
    majorName?: string;
    @Field(() => CollegeUpdateOneRequiredWithoutMajorNestedInput, {nullable:true})
    college?: InstanceType<typeof CollegeUpdateOneRequiredWithoutMajorNestedInput>;
    @Field(() => UserUpdateManyWithoutMajorNestedInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateManyWithoutMajorNestedInput>;
}

@InputType()
export class MajorUpsertWithWhereUniqueWithoutCollegeInput {
    @Field(() => MajorWhereUniqueInput, {nullable:false})
    @Type(() => MajorWhereUniqueInput)
    where!: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
    @Field(() => MajorUpdateWithoutCollegeInput, {nullable:false})
    @Type(() => MajorUpdateWithoutCollegeInput)
    update!: InstanceType<typeof MajorUpdateWithoutCollegeInput>;
    @Field(() => MajorCreateWithoutCollegeInput, {nullable:false})
    @Type(() => MajorCreateWithoutCollegeInput)
    create!: InstanceType<typeof MajorCreateWithoutCollegeInput>;
}

@InputType()
export class MajorUpsertWithoutUserInput {
    @Field(() => MajorUpdateWithoutUserInput, {nullable:false})
    @Type(() => MajorUpdateWithoutUserInput)
    update!: InstanceType<typeof MajorUpdateWithoutUserInput>;
    @Field(() => MajorCreateWithoutUserInput, {nullable:false})
    @Type(() => MajorCreateWithoutUserInput)
    create!: InstanceType<typeof MajorCreateWithoutUserInput>;
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    where?: InstanceType<typeof MajorWhereInput>;
}

@InputType()
export class MajorWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [MajorWhereInput], {nullable:true})
    AND?: Array<MajorWhereInput>;
    @Field(() => [MajorWhereInput], {nullable:true})
    OR?: Array<MajorWhereInput>;
    @Field(() => [MajorWhereInput], {nullable:true})
    NOT?: Array<MajorWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    collegeId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    majorName?: InstanceType<typeof StringFilter>;
    @Field(() => CollegeScalarRelationFilter, {nullable:true})
    college?: InstanceType<typeof CollegeScalarRelationFilter>;
    @Field(() => UserListRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserListRelationFilter>;
}

@InputType()
export class MajorWhereInput {
    @Field(() => [MajorWhereInput], {nullable:true})
    AND?: Array<MajorWhereInput>;
    @Field(() => [MajorWhereInput], {nullable:true})
    OR?: Array<MajorWhereInput>;
    @Field(() => [MajorWhereInput], {nullable:true})
    NOT?: Array<MajorWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    collegeId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    majorName?: InstanceType<typeof StringFilter>;
    @Field(() => CollegeScalarRelationFilter, {nullable:true})
    college?: InstanceType<typeof CollegeScalarRelationFilter>;
    @Field(() => UserListRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserListRelationFilter>;
}

@ObjectType()
export class Major {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    collegeId!: number;
    @Field(() => String, {nullable:false})
    majorName!: string;
    @Field(() => College, {nullable:false})
    college?: InstanceType<typeof College>;
    @Field(() => [User], {nullable:true})
    User?: Array<User>;
    @Field(() => MajorCount, {nullable:false})
    _count?: InstanceType<typeof MajorCount>;
}

@ArgsType()
export class UpdateManyMajorArgs {
    @Field(() => MajorUpdateManyMutationInput, {nullable:false})
    @Type(() => MajorUpdateManyMutationInput)
    data!: InstanceType<typeof MajorUpdateManyMutationInput>;
    @Field(() => MajorWhereInput, {nullable:true})
    @Type(() => MajorWhereInput)
    where?: InstanceType<typeof MajorWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneMajorArgs {
    @Field(() => MajorUpdateInput, {nullable:false})
    @Type(() => MajorUpdateInput)
    data!: InstanceType<typeof MajorUpdateInput>;
    @Field(() => MajorWhereUniqueInput, {nullable:false})
    @Type(() => MajorWhereUniqueInput)
    where!: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneMajorArgs {
    @Field(() => MajorWhereUniqueInput, {nullable:false})
    @Type(() => MajorWhereUniqueInput)
    where!: Prisma.AtLeast<MajorWhereUniqueInput, 'id'>;
    @Field(() => MajorCreateInput, {nullable:false})
    @Type(() => MajorCreateInput)
    create!: InstanceType<typeof MajorCreateInput>;
    @Field(() => MajorUpdateInput, {nullable:false})
    @Type(() => MajorUpdateInput)
    update!: InstanceType<typeof MajorUpdateInput>;
}

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
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeNullableFilter {
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
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
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
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
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
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumCampusFilter {
    @Field(() => Campus, {nullable:true})
    equals?: `${Campus}`;
    @Field(() => [Campus], {nullable:true})
    in?: Array<`${Campus}`>;
    @Field(() => [Campus], {nullable:true})
    notIn?: Array<`${Campus}`>;
    @Field(() => NestedEnumCampusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCampusFilter>;
}

@InputType()
export class EnumCampusWithAggregatesFilter {
    @Field(() => Campus, {nullable:true})
    equals?: `${Campus}`;
    @Field(() => [Campus], {nullable:true})
    in?: Array<`${Campus}`>;
    @Field(() => [Campus], {nullable:true})
    notIn?: Array<`${Campus}`>;
    @Field(() => NestedEnumCampusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCampusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCampusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCampusFilter>;
    @Field(() => NestedEnumCampusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCampusFilter>;
}

@InputType()
export class EnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;
    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class EnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;
    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
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
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntNullableFilter {
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
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntNullableWithAggregatesFilter {
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
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
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
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
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
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
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
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
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
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
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
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumCampusFilter {
    @Field(() => Campus, {nullable:true})
    equals?: `${Campus}`;
    @Field(() => [Campus], {nullable:true})
    in?: Array<`${Campus}`>;
    @Field(() => [Campus], {nullable:true})
    notIn?: Array<`${Campus}`>;
    @Field(() => NestedEnumCampusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCampusFilter>;
}

@InputType()
export class NestedEnumCampusWithAggregatesFilter {
    @Field(() => Campus, {nullable:true})
    equals?: `${Campus}`;
    @Field(() => [Campus], {nullable:true})
    in?: Array<`${Campus}`>;
    @Field(() => [Campus], {nullable:true})
    notIn?: Array<`${Campus}`>;
    @Field(() => NestedEnumCampusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCampusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCampusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCampusFilter>;
    @Field(() => NestedEnumCampusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCampusFilter>;
}

@InputType()
export class NestedEnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;
    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedEnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;
    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedFloatFilter {
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
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatNullableFilter {
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
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}

@InputType()
export class NestedIntFilter {
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
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
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
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntNullableWithAggregatesFilter {
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
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
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
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: `${NullsOrder}`;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
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
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
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
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
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
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    majorId?: true;
    @Field(() => Boolean, {nullable:true})
    semester?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    majorId?: number;
    @Field(() => Float, {nullable:true})
    semester?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    majorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    semester?: `${SortOrder}`;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    majorId?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    semester?: true;
    @Field(() => Boolean, {nullable:true})
    lastLogin?: true;
    @Field(() => Boolean, {nullable:true})
    createTime?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    password!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    majorId!: number;
    @Field(() => Int, {nullable:false})
    studentId!: number;
    @Field(() => Int, {nullable:false})
    semester!: number;
    @Field(() => Int, {nullable:false})
    lastLogin!: number;
    @Field(() => Int, {nullable:false})
    createTime!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    majorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    studentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    semester?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lastLogin?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createTime?: `${SortOrder}`;
}

@InputType()
export class UserCreateManyMajorInputEnvelope {
    @Field(() => [UserCreateManyMajorInput], {nullable:false})
    @Type(() => UserCreateManyMajorInput)
    data!: Array<UserCreateManyMajorInput>;
}

@InputType()
export class UserCreateManyMajorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => Int, {nullable:true})
    majorId?: number;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserCreateNestedManyWithoutMajorInput {
    @Field(() => [UserCreateWithoutMajorInput], {nullable:true})
    @Type(() => UserCreateWithoutMajorInput)
    create?: Array<UserCreateWithoutMajorInput>;
    @Field(() => [UserCreateOrConnectWithoutMajorInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMajorInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutMajorInput>;
    @Field(() => UserCreateManyMajorInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyMajorInputEnvelope)
    createMany?: InstanceType<typeof UserCreateManyMajorInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>>;
}

@InputType()
export class UserCreateOrConnectWithoutMajorInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
    @Field(() => UserCreateWithoutMajorInput, {nullable:false})
    @Type(() => UserCreateWithoutMajorInput)
    create!: InstanceType<typeof UserCreateWithoutMajorInput>;
}

@InputType()
export class UserCreateWithoutMajorInput {
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
    @Field(() => MajorCreateNestedOneWithoutUserInput, {nullable:true})
    major?: InstanceType<typeof MajorCreateNestedOneWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<`${UserScalarFieldEnum}`>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:false})
    role!: `${Role}`;
    @Field(() => Int, {nullable:true})
    majorId?: number;
    @Field(() => String, {nullable:false})
    studentId!: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:false})
    createTime!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserListRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    every?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    some?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    none?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    majorId?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    semester?: true;
    @Field(() => Boolean, {nullable:true})
    lastLogin?: true;
    @Field(() => Boolean, {nullable:true})
    createTime?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => Int, {nullable:true})
    majorId?: number;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    majorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    studentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    semester?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lastLogin?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createTime?: `${SortOrder}`;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    majorId?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    semester?: true;
    @Field(() => Boolean, {nullable:true})
    lastLogin?: true;
    @Field(() => Boolean, {nullable:true})
    createTime?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => Int, {nullable:true})
    majorId?: number;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    majorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    studentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    semester?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lastLogin?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createTime?: `${SortOrder}`;
}

@InputType()
export class UserOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    majorId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    studentId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    semester?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    lastLogin?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createTime?: `${SortOrder}`;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    majorId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    studentId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    semester?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    lastLogin?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createTime?: `${SortOrder}`;
    @Field(() => MajorOrderByWithRelationInput, {nullable:true})
    major?: InstanceType<typeof MajorOrderByWithRelationInput>;
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
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    majorId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    studentId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    semester?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    lastLogin?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createTime?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    majorId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    studentId?: InstanceType<typeof StringFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    semester?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastLogin?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createTime?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    majorId?: true;
    @Field(() => Boolean, {nullable:true})
    semester?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    majorId?: number;
    @Field(() => Int, {nullable:true})
    semester?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    majorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    semester?: `${SortOrder}`;
}

@InputType()
export class UserUncheckedCreateNestedManyWithoutMajorInput {
    @Field(() => [UserCreateWithoutMajorInput], {nullable:true})
    @Type(() => UserCreateWithoutMajorInput)
    create?: Array<UserCreateWithoutMajorInput>;
    @Field(() => [UserCreateOrConnectWithoutMajorInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMajorInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutMajorInput>;
    @Field(() => UserCreateManyMajorInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyMajorInputEnvelope)
    createMany?: InstanceType<typeof UserCreateManyMajorInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>>;
}

@InputType()
export class UserUncheckedCreateWithoutMajorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => Int, {nullable:true})
    majorId?: number;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserUncheckedUpdateManyWithoutMajorNestedInput {
    @Field(() => [UserCreateWithoutMajorInput], {nullable:true})
    @Type(() => UserCreateWithoutMajorInput)
    create?: Array<UserCreateWithoutMajorInput>;
    @Field(() => [UserCreateOrConnectWithoutMajorInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMajorInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutMajorInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutMajorInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutMajorInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutMajorInput>;
    @Field(() => UserCreateManyMajorInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyMajorInputEnvelope)
    createMany?: InstanceType<typeof UserCreateManyMajorInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutMajorInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutMajorInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutMajorInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutMajorInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutMajorInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutMajorInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutMajorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => Int, {nullable:true})
    majorId?: number;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserUncheckedUpdateWithoutMajorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => Int, {nullable:true})
    majorId?: number;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserUpdateManyWithWhereWithoutMajorInput {
    @Field(() => UserScalarWhereInput, {nullable:false})
    @Type(() => UserScalarWhereInput)
    where!: InstanceType<typeof UserScalarWhereInput>;
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithoutMajorNestedInput {
    @Field(() => [UserCreateWithoutMajorInput], {nullable:true})
    @Type(() => UserCreateWithoutMajorInput)
    create?: Array<UserCreateWithoutMajorInput>;
    @Field(() => [UserCreateOrConnectWithoutMajorInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMajorInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutMajorInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutMajorInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutMajorInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutMajorInput>;
    @Field(() => UserCreateManyMajorInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyMajorInputEnvelope)
    createMany?: InstanceType<typeof UserCreateManyMajorInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutMajorInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutMajorInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutMajorInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutMajorInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutMajorInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutMajorInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutMajorInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
    @Field(() => UserUpdateWithoutMajorInput, {nullable:false})
    @Type(() => UserUpdateWithoutMajorInput)
    data!: InstanceType<typeof UserUpdateWithoutMajorInput>;
}

@InputType()
export class UserUpdateWithoutMajorInput {
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => Int, {nullable:true})
    semester?: number;
    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;
    @Field(() => Date, {nullable:true})
    createTime?: Date | string;
    @Field(() => MajorUpdateOneWithoutUserNestedInput, {nullable:true})
    major?: InstanceType<typeof MajorUpdateOneWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutMajorInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'studentId'>;
    @Field(() => UserUpdateWithoutMajorInput, {nullable:false})
    @Type(() => UserUpdateWithoutMajorInput)
    update!: InstanceType<typeof UserUpdateWithoutMajorInput>;
    @Field(() => UserCreateWithoutMajorInput, {nullable:false})
    @Type(() => UserCreateWithoutMajorInput)
    create!: InstanceType<typeof UserCreateWithoutMajorInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    studentId?: string;
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    majorId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    semester?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastLogin?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createTime?: InstanceType<typeof DateTimeFilter>;
    @Field(() => MajorNullableScalarRelationFilter, {nullable:true})
    major?: InstanceType<typeof MajorNullableScalarRelationFilter>;
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
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    majorId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    studentId?: InstanceType<typeof StringFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    semester?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastLogin?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createTime?: InstanceType<typeof DateTimeFilter>;
    @Field(() => MajorNullableScalarRelationFilter, {nullable:true})
    major?: InstanceType<typeof MajorNullableScalarRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {defaultValue:'User',nullable:false})
    role!: `${Role}`;
    @Field(() => Int, {nullable:true})
    majorId!: number | null;
    @Field(() => String, {defaultValue:'0000000000',nullable:false})
    studentId!: string;
    @Field(() => Int, {nullable:true})
    semester!: number | null;
    @Field(() => Date, {nullable:true})
    lastLogin!: Date | null;
    @Field(() => Date, {nullable:false})
    createTime!: Date;
    @Field(() => Major, {nullable:true})
    major?: InstanceType<typeof Major> | null;
}
