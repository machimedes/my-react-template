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

const t16 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "map_game_detail_dim",
  "地图明细 维度 游戏类型 游戏时长", "16")

const t17 = new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "daily_map_active_day",
  "地图日活", "17")


export const tables = [t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17]

const tableLinks = [{src: "0", tgt: "1"},
  {src: "1", tgt: "2"},
  {src: "2", tgt: "3"},
  {src: "3", tgt: "4"},
  {src: "2", tgt: "5"},
  {src: "2", tgt: "4"},
  {src: "3", tgt: "5"},
  {src: "4", tgt: "6"},
  {src: "5", tgt: "7"},
  {src: "1", tgt: "8"},
  {src: "1", tgt: "9"},
  {src: "8", tgt: "10"},
  {src: "9", tgt: "10"},
  {src: "8", tgt: "11"},
  {src: "9", tgt: "11"},
  {src: "10", tgt: "12"},
  {src: "11", tgt: "12"},
  {src: "10", tgt: "13"},
  {src: "11", tgt: "13"},
  {src: "13", tgt: "15"},
  {src: "12", tgt: "14"},
  {src: "10", tgt: "16"},
  {src: "11", tgt: "16"},
  {src: "16", tgt: "17"},]
//
// const tableLinks = [{src: "0", tgt: "1"},
//  {src: "1", tgt: "2"},
//  {src: "1", tgt: "3"},
//  {src: "3", tgt: "4"},
//  {src: "3", tgt: "5"},
//  {src: "2", tgt: "4"},
//  {src: "2", tgt: "5"},]

const nodes = []
const inListMap = new Map()
const outListMap = new Map()

const nodesLevely = new Map()
const nodesLevelx = new Map()

for (const edge of tableLinks) {
  const s = edge.src
  const t = edge.tgt

  if (!nodes.includes(s))
    nodes.push(s)
  if (!nodes.includes(t))
    nodes.push(t)

  if (inListMap.has(t)) {
    inListMap.get(t).push(s)
  } else {
    inListMap.set(t, [s])
  }

  if (outListMap.has(s)) {
    outListMap.get(s).push(t)
  } else {
    outListMap.set(s, [t])
  }
}

const setNodeLevely = (node) => {
  if (nodesLevely.get(node) !== undefined)
    return nodesLevely.get(node)

  if (!inListMap.has(node)) {
    nodesLevely.set(node, 0)
    return 0
  }

  const inList = inListMap.get(node)
  let iniLevel = -1
  for (const inNode of inList) {
    if (nodesLevely.get(inNode) === undefined) {
      iniLevel = Math.max(iniLevel, setNodeLevely(inNode))
    } else {
      iniLevel = Math.max(iniLevel, nodesLevely.get(inNode))
    }
  }
  nodesLevely.set(node, iniLevel + 1)
  return iniLevel + 1
}

for (const node of nodes) {
  setNodeLevely(node)
}

const levelyIndexMap = new Map()

const maxy = Math.max(...nodesLevely.values())


levelyIndexMap.clear()
for (let ly = 0; ly <= maxy; ly++) {
  levelyIndexMap.set(ly, 0)
}

nodesLevelx.clear()
const levelyZero4 = [...nodesLevely].filter(([k, v]) => v === 0)
while (levelyZero4.length > 0) {
  const node = levelyZero4.shift()
  const nodeId = node[0]
  const nodeLevely = node[1]
  const tmpLevelyIndex = levelyIndexMap.get(nodeLevely)
  nodesLevelx.set(nodeId, tmpLevelyIndex)
  levelyIndexMap.set(nodeLevely, tmpLevelyIndex + 1)
  console.log(levelyIndexMap)
  const outList = outListMap.get(nodeId)
  if (outList !== undefined) {
    for (let outNode of outList) {
      console.log(nodesLevelx)
      if (!(levelyZero4.map(value => value[0]).includes(outNode) || nodesLevelx.has(outNode))) {
        console.log(outNode + "-----" + nodesLevely.get(outNode))
        levelyZero4.push([outNode, nodesLevely.get(outNode)])
      }
    }
  }
}

const maxx = Math.max(...levelyIndexMap.values())

const nodesLevelx_ = new Map([...nodesLevelx].map(([k, v]) => (
  [k, (maxx / (levelyIndexMap.get(nodesLevely.get(k)) + 1) * (v + 1)) * (Math.random() / 10 + 1)]
)))

export {tableLinks, nodesLevelx_, nodesLevely}





