import {test, expect, request} from "@playwright/test"

let token;

test.skip("GET - REQ", async ({}) => {
    const apiRequestContext = await request.newContext()

    const response = await apiRequestContext.get(process.env.API_BASE_URL + "/users")

    const body = await response.json()
    console.log(body)

    expect(response.status()).toBe(200)


})

test.skip("POST - REQ", async ({}) => {
    const apiRequestContext = await request.newContext()

    const response = await apiRequestContext.post(process.env.API_BASE_URL + "/user/login", 
        {
            data : {
                username : process.env.USERNAMEAPI,
                password : process.env.PASSWORDAPI
            },
            headers : {
                "Content-Type" : "application/json"
            }
        }
    )

    const body = await response.json()
    console.log(body)
    token = await body.accessToken

    expect(response.status()).toBe(200)


})

test.skip("GET-AUTH REQ", async () => {

      const apiRequestContext = await request.newContext()

       const response = await apiRequestContext.get(process.env.API_BASE_URL + "/user/me", 
        {
            headers : {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"

            }
        }
    )

     const body = await response.json()
    console.log(body)
    expect(response.status()).toBe(200)
})

//ADD USER
test.skip("POST - ADD USER", async ({}) => {
    const apiRequestContext = await request.newContext()

    const response = await apiRequestContext.post(process.env.API_BASE_URL + "/users/add", 
        {
            data : {
                firstName : 'Praveen',
                lastName :  'kumar',
                age : 250
            },
            headers : {
                "Content-Type" : "application/json"
            }
        }
    )

    const body = await response.json()
    console.log(body)
    expect(response.status()).toBe(201)


})

//UPDATE USER
test.skip("PUT - UPDATE USER", async ({}) => {
    const apiRequestContext = await request.newContext()

    const response = await apiRequestContext.put(process.env.API_BASE_URL + "/users/2", 
        {
            data : {
                lastName : 'Mukesh'
            },
            headers : {
                "Content-Type" : "application/json"
            }
        }
    )

    const body = await response.json()
    console.log(body)
    expect(response.status()).toBe(200)


})

//DELETE USER
test("DELETE - UPDATE USER", async ({}) => {
    const apiRequestContext = await request.newContext()

    const response = await apiRequestContext.delete(process.env.API_BASE_URL + "/users/2")

        const body = await response.json()
    console.log(body)
    

})






