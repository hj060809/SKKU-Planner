import { gql } from "@generated";

const GET_MAJORS = gql(`
    query GetMajors {
        getMajors {
            id
            majorName
            college {
                id
                campus
                collegeName
            }
        }
    }
`)

export {
    GET_MAJORS
}