import tb_driverModel from './tb_driver.model'
import tb_driver_settingsModel from './tb_driver_settings'
import tb_walletModel from './tb_wallet'
import { sequelize_DR } from '../../db'

const models = [tb_driverModel, tb_driver_settingsModel, tb_walletModel]

models.forEach((model) => {
  model.initModel(sequelize_DR)
})

export default sequelize_DR
