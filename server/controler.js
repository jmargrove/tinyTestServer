

exports.getReq = async (ctx, next) => {
  console.log("server is pinged")
  ctx.response.body = {value: "server is working"}
}
