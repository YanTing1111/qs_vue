// mongoose mongo的驱动 数据库抽象
import mongoose from 'mongoose'
import config from '../config'
import md5 from 'md5'
require('./user')
const User = mongoose.model('User')
const mongoUrl = `mongodb://${config.mongodb.host}:${config.mongodb.port}/
${config.mongodb.database}`
mongoose.Promise = global.Promise
mongoose.connection.openUri(mongoUrl).once('open',async() => {
    console.log('database connect success');
    let userInfo = config.user
    userInfo.password = md5(userInfo.password)
    let user = await User.findOne({role:'superAdmin'}).exec()
    if(!user){
        user= new User(userInfo)
        await user.save()
        console.log('ok,管理员已生成');

    }
}).on('error',(error) => {
    console.warn('database connect fail',error)
})