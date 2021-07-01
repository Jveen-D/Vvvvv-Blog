// 创建时间
export function getDuration(createTime) {
  const millisecond = Date.now() - createTime
  const days = millisecond / 1000 / 60 / 60 / 24
  const daysRound = Math.floor(days)
  const hours = millisecond / 1000 / 60 / 60 - (24 * daysRound)
  const hoursRound = Math.floor(hours)
  const minutes = millisecond / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound)
  const minutesRound = Math.floor(minutes)
  const seconds = Math.floor(millisecond / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound))
  const time = daysRound + '天' + hoursRound + '小时' + minutesRound + '分' + seconds + '秒'
  return time
}

// 更新时间
export function getUpdateTime(updateTime) {
  return new Date(updateTime).toLocaleString()
}
