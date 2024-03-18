import axios from "axios";

import {baseURL} from "../constants";

const apiService= axios.create({baseURL})

apiService.interceptors.request.use(request=>{
    request.headers.Authorization= 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2EyNDYwM2RlNDQ2NDJjZWQ1NjQ1MTUxNzFlNDIxMSIsInN1YiI6IjY1ZGIyZTcwYTI0YzUwMDE2MjBmYTE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2H7U25_ZXLDgaw9VWSvm4bq2S1mbrwKwI5SmpZt1BU'
    return request
})

export {
    apiService
}