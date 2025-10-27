import { gql } from "@generated";

const SIGNUP = gql(`
    mutation SignUp (
        $studentId: String!
        $password: String!
        $majorId: Int!
        $semester: Int!
    ) {
        signUp(
            studentId: $studentId
            password: $password
            majorId: $majorId
            semester: $semester
        ) {
            studentId
            password
            majorId
            semester
            id
            role
            lastLogin
            createTime
        }
    }
`)

const LOGIN = gql(`
    mutation Login (
        $studentId: String!
        $password: String!
    ) {
        login(
            studentId: $studentId
            password: $password
        ) {
            studentId
            password
            majorId
            semester
            id
            role
            lastLogin
            createTime
        }
    }
`)

export {
    SIGNUP,
    LOGIN
}
