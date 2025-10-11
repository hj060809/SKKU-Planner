/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    query GetMajors {\n        getMajors {\n            id\n            majorName\n            college {\n                id\n                campus\n                collegeName\n            }\n        }\n    }\n": typeof types.GetMajorsDocument,
    "\n    mutation SignUp (\n        $studentId: String!\n        $password: String!\n        $majorId: Int!\n        $semester: Int!\n    ) {\n        signUp(\n            studentId: $studentId\n            password: $password\n            majorId: $majorId\n            semester: $semester\n        ) {\n            studentId\n            password\n            majorId\n            semester\n            id\n            role\n            lastLogin\n            createTime\n        }\n    }\n": typeof types.SignUpDocument,
};
const documents: Documents = {
    "\n    query GetMajors {\n        getMajors {\n            id\n            majorName\n            college {\n                id\n                campus\n                collegeName\n            }\n        }\n    }\n": types.GetMajorsDocument,
    "\n    mutation SignUp (\n        $studentId: String!\n        $password: String!\n        $majorId: Int!\n        $semester: Int!\n    ) {\n        signUp(\n            studentId: $studentId\n            password: $password\n            majorId: $majorId\n            semester: $semester\n        ) {\n            studentId\n            password\n            majorId\n            semester\n            id\n            role\n            lastLogin\n            createTime\n        }\n    }\n": types.SignUpDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetMajors {\n        getMajors {\n            id\n            majorName\n            college {\n                id\n                campus\n                collegeName\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetMajors {\n        getMajors {\n            id\n            majorName\n            college {\n                id\n                campus\n                collegeName\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SignUp (\n        $studentId: String!\n        $password: String!\n        $majorId: Int!\n        $semester: Int!\n    ) {\n        signUp(\n            studentId: $studentId\n            password: $password\n            majorId: $majorId\n            semester: $semester\n        ) {\n            studentId\n            password\n            majorId\n            semester\n            id\n            role\n            lastLogin\n            createTime\n        }\n    }\n"): (typeof documents)["\n    mutation SignUp (\n        $studentId: String!\n        $password: String!\n        $majorId: Int!\n        $semester: Int!\n    ) {\n        signUp(\n            studentId: $studentId\n            password: $password\n            majorId: $majorId\n            semester: $semester\n        ) {\n            studentId\n            password\n            majorId\n            semester\n            id\n            role\n            lastLogin\n            createTime\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;