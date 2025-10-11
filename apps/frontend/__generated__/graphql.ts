/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AdminCodeAvgAggregate = {
  __typename?: 'AdminCodeAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type AdminCodeCountAggregate = {
  __typename?: 'AdminCodeCountAggregate';
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type AdminCodeMaxAggregate = {
  __typename?: 'AdminCodeMaxAggregate';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AdminCodeMinAggregate = {
  __typename?: 'AdminCodeMinAggregate';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AdminCodeSumAggregate = {
  __typename?: 'AdminCodeSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export enum Campus {
  All = 'ALL',
  Hssc = 'HSSC',
  Nsc = 'NSC'
}

export type College = {
  __typename?: 'College';
  Major?: Maybe<Array<Major>>;
  _count: CollegeCount;
  campus: Campus;
  collegeName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type CollegeAvgAggregate = {
  __typename?: 'CollegeAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type CollegeCount = {
  __typename?: 'CollegeCount';
  Major: Scalars['Int']['output'];
};

export type CollegeCountAggregate = {
  __typename?: 'CollegeCountAggregate';
  _all: Scalars['Int']['output'];
  campus: Scalars['Int']['output'];
  collegeName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type CollegeMaxAggregate = {
  __typename?: 'CollegeMaxAggregate';
  campus?: Maybe<Campus>;
  collegeName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type CollegeMinAggregate = {
  __typename?: 'CollegeMinAggregate';
  campus?: Maybe<Campus>;
  collegeName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type CollegeSumAggregate = {
  __typename?: 'CollegeSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type Major = {
  __typename?: 'Major';
  User?: Maybe<Array<User>>;
  _count: MajorCount;
  college: College;
  collegeId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  majorName: Scalars['String']['output'];
};

export type MajorAvgAggregate = {
  __typename?: 'MajorAvgAggregate';
  collegeId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type MajorCount = {
  __typename?: 'MajorCount';
  User: Scalars['Int']['output'];
};

export type MajorCountAggregate = {
  __typename?: 'MajorCountAggregate';
  _all: Scalars['Int']['output'];
  collegeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  majorName: Scalars['Int']['output'];
};

export type MajorMaxAggregate = {
  __typename?: 'MajorMaxAggregate';
  collegeId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  majorName?: Maybe<Scalars['String']['output']>;
};

export type MajorMinAggregate = {
  __typename?: 'MajorMinAggregate';
  collegeId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  majorName?: Maybe<Scalars['String']['output']>;
};

export type MajorSumAggregate = {
  __typename?: 'MajorSumAggregate';
  collegeId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signUp: User;
};


export type MutationSignUpArgs = {
  majorId: Scalars['Int']['input'];
  password: Scalars['String']['input'];
  semester: Scalars['Int']['input'];
  studentId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getMajors: Array<Major>;
  getUser: User;
  say: Scalars['String']['output'];
};


export type QueryGetUserArgs = {
  userId: Scalars['Int']['input'];
};

export enum Role {
  Admin = 'Admin',
  User = 'User'
}

export type User = {
  __typename?: 'User';
  createTime: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  major?: Maybe<Major>;
  majorId?: Maybe<Scalars['Int']['output']>;
  password: Scalars['String']['output'];
  role: Role;
  semester?: Maybe<Scalars['Int']['output']>;
  studentId: Scalars['String']['output'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  majorId?: Maybe<Scalars['Float']['output']>;
  semester?: Maybe<Scalars['Float']['output']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createTime: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastLogin: Scalars['Int']['output'];
  majorId: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  semester: Scalars['Int']['output'];
  studentId: Scalars['Int']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createTime?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  majorId?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  semester?: Maybe<Scalars['Int']['output']>;
  studentId?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createTime?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  majorId?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  semester?: Maybe<Scalars['Int']['output']>;
  studentId?: Maybe<Scalars['String']['output']>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  majorId?: Maybe<Scalars['Int']['output']>;
  semester?: Maybe<Scalars['Int']['output']>;
};

export type GetMajorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMajorsQuery = { __typename?: 'Query', getMajors: Array<{ __typename?: 'Major', id: string, majorName: string, college: { __typename?: 'College', id: string, campus: Campus, collegeName: string } }> };

export type SignUpMutationVariables = Exact<{
  studentId: Scalars['String']['input'];
  password: Scalars['String']['input'];
  majorId: Scalars['Int']['input'];
  semester: Scalars['Int']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', studentId: string, password: string, majorId?: number | null, semester?: number | null, id: string, role: Role, lastLogin?: any | null, createTime: any } };


export const GetMajorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMajors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMajors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"majorName"}},{"kind":"Field","name":{"kind":"Name","value":"college"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"campus"}},{"kind":"Field","name":{"kind":"Name","value":"collegeName"}}]}}]}}]}}]} as unknown as DocumentNode<GetMajorsQuery, GetMajorsQueryVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"majorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"semester"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"majorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"majorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"semester"},"value":{"kind":"Variable","name":{"kind":"Name","value":"semester"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"majorId"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"createTime"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;