import { Context, Next } from 'koa'
import HttpStatusCode from '../../common/constant/http-code.constants'
import { ApiException } from '../../common/exception/api.exception'
import { driverLoginSchema, driverRegisterSchema } from '../../user/schema/driver.schema'

/**
 * 校验司机注册的参数
 * @param ctx
 * @param next
 */
export const validateRegisterDriverInfo = async (ctx: Context, next: Next) => {
  const { code, nickname, photo }: any = ctx.request.body

  try {
    await driverRegisterSchema.validateAsync({
      code,
      nickname,
      photo
    })
  } catch (e: any) {
    throw new ApiException(HttpStatusCode.BAD_REQUEST, e.message)
  }

  ctx.registerDriverInfo = {
    code,
    nickname,
    photo,

  }
  await next()
}

/**
 * 用户登录校验参数
 * @param ctx
 * @param next
 */
export const validateLoginDriverInfo = async (ctx: Context, next: Next) => {
  const { code }: any = ctx.request.body

  try {
    await driverLoginSchema.validateAsync({
      code
    })
  } catch (e: any) {
    throw new ApiException(HttpStatusCode.BAD_REQUEST, e.message)
  }

  ctx.loginDriverInfo = {
    code
  }
  await next()
}
