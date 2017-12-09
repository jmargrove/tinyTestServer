

exports.getReq = async (ctx, next) => {
  console.log("server is pinged")
  ctx.status = 200
  ctx.response.body = {value: "server is working"}
}
