exports.handler = function(event, context, callback) {
    const secretContent = `
    <h3>Welcome to the secret Area </h3>
    <p>Here we can tell you that the sky is <strong>blue</Strong>, and two plus two equals four.</p>
    `

    let body
    
    if (event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

if (body.password == "javascript" ){
    callback(null, {
        statusCode: 200,
        body: secretContent
    })
} else {
    callback(null, {
        statusCode: 401
    })
}

    callback(null, {
        statusCode: 200,
        body: "Welcome to the super secret area"
    })
}