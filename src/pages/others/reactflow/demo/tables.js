const levels = ["obs", "dwd", "dws", "dm", "app"]

class TableDefinition {
  constructor(catalog, instance, database, table, level, id = -1) {
    const level_ = database.split("_")[0]

    if (levels.includes(level_))
      this.level = level_
    else
      this.level = ""

    this.catalog = catalog;
    this.instance = instance;
    this.database = database;
    this.table = table;
    this.id = id;
  }

  print() {
    console.log(`${this.id} ${this.catalog} ${this.instance} ${this.database} ${this.table}`);
  }
}

export const tables = [new TableDefinition("hive", "127.0.0.1:10000", "obs_sdk70000", "sdk70000_log",),
  new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "sdk70000_log",),
  new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "game_session_dimension",),
  new TableDefinition("hive", "127.0.0.1:10000", "dwd_sdk70000", "session_dimension",),
  new TableDefinition("hive", "127.0.0.1:10000", "dws_user_game_behavior", "user_game_session_wt"),
  new TableDefinition("mysql", "127.0.0.1:3306", "app_base_report", "user_activity")]