import { getBlogStatistics } from '/@/api'
// 博主&统计信息
export function GetsBloggerProfile () {
    return getBlogStatistics().then(( res ) => {
        return res.data.data
    })
}

// 创建时间
export function getDuration ( createTime ) {
    let millisecond = Date.now() - createTime
    let days = millisecond / 1000 / 60 / 60 / 24
    let daysRound = Math.floor(days)
    let hours = millisecond / 1000 / 60 / 60 - (24 * daysRound)
    let hoursRound = Math.floor(hours)
    let minutes = millisecond / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound)
    let minutesRound = Math.floor(minutes)
    let seconds = Math.floor(millisecond / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound))
    let time = daysRound + '天' + hoursRound + '小时' + minutesRound + '分' + seconds + '秒'
    return time
}

// 更新时间
export function getUpdateTime ( updateTime ) {
    return new Date(updateTime).toLocaleString()
}