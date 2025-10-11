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

export {
    SIGNUP
}