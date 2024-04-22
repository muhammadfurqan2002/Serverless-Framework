module.exports.handler = async (event) => {
    return {
        statusCode: 200,
        Headers:{
            "Content-Type":"application/Json"
        },
        body:JSON.stringify({
            message:"Hi, From ServerLess Framework 😁"
        })
    };
  };
  