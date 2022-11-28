const levels = ["obs", "dwd", "dws", "dm", "app"]

class TableDefinition {
  constructor(catalog, instance, database, table, desc, id = "-1") {
    const level_ = database.split("_")[0]

    if (levels.includes(level_))
      this.level = level_
    else
      this.level = ""

    this.catalog = catalog;
    this.instance = instance;
    this.database = database;
    this.table = table;
    this.desc = desc;
    this.id = id;
  }

  print() {
    console.log(`${this.id} ${this.catalog} ${this.instance} ${this.database} ${this.table}`);
  }
}

const t0 = new TableDefinition("hive", "127.0.0.1:10000", "obs_sdk70000", "sdk70000_log_day",
  "原始日志 json格式 采集服务器发送至kafka 实时同步到ods hudi", "0")

const t1 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "sdk70000_log_day",
  "清洗后的原始日志 清洗规则包括json转结构化数据 上报时间采集时间对比 生成事件时间 空值空字符串0值处理", "1")

const t2 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "session_state_day",
  "登录至登出 用户状态 设备状态  在线时长 去除静默在线时长 心跳在线时长 20分位数", "2")

const t3 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "session_state_trim_day",
  "修正最大最小10%的会话 登录至登出 用户状态 设备状态  在线时长 去除静默在线时长 心跳在线时长 20分位数", "3")

const t4 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "user_online_activity_day",
  "活跃用户 在线时长 修正及非修正", "4")

const t5 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "device_online_activity_day",
  "活跃设备 在线时长 修正及非修正", "5")

const t6 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "daily_active_user_day",
  "日活 总时长 修正及非修正", "6")

const t7 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "daily_active_device_day",
  "设备日活 总时长 修正及非修正", "7")


const t8 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "game_session_ini_state_day",
  "通过游戏启动事件生成game_session启动状态维度表 地图类型 单机联机 服务器类型", "8")

const t9 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "game_session_period_day",
  "游戏期间捕获的关键事件 游戏时长 去除静默游戏时长 心跳游戏时长", "9")

const t10 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "game_session_state_day",
  "总game session维度表", "10")

const t11 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "game_session_state_trim_day",
  "去除最大最小10%的游戏后的game session维度表", "11")

const t12 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "user_game_activity_day",
  "游戏活跃用户 在线时长 修正及非修正", "12")

const t13 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "device_game_activity_day",
  "游戏活跃设备 在线时长 修正及非修正", "13")

const t14 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "daily_game_active_user_day",
  "游戏用户日活 总时长 修正及非修正", "14")

const t15 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "daily_game_active_device_day",
  "游戏设备日活 总时长 修正及非修正", "15")


export const tables = [t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15]

export const tl = [{st: "0", tt: "1"},
  {st: "1", tt: "2"},
  {st: "2", tt: "3"},
  {st: "3", tt: "4"},
  {st: "2", tt: "5"},
  {st: "2", tt: "4"},
  {st: "3", tt: "5"},
  {st: "4", tt: "6"},
  {st: "5", tt: "7"},
  {st: "1", tt: "8"},
  {st: "1", tt: "9"},
  {st: "8", tt: "10"},
  {st: "9", tt: "10"},
  {st: "8", tt: "11"},
  {st: "9", tt: "11"},
  {st: "10", tt: "12"},
  {st: "11", tt: "12"},
  {st: "10", tt: "13"},
  {st: "11", tt: "13"},
  {st: "13", tt: "15"},
  {st: "12", tt: "14"},

]