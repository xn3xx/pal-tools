import { createI18n } from "vue-i18n";

const messages = {
  en: {
    title: "PalWorld Server Tool",
    modal: {
      auth: "Auth",
      broadcast: "Publish Broadcast",
      whitelist: "Whitelist",
      addWhitelist: "Add Whitelist",
    },
    status: {
      online: "Online",
      offline: "Offline",
      last_online: "Last Online",
      authenticated: "Authenticated",
      master: "Master",
      player_number: "Player: {number}",
      online_number: "Online: {number}",
      whitelist: "Whitelist",
    },
    message: {
      warn: "Warning",
      success: "Success",
      fail: "Fail",
      changelanguage: "切换语言中...",
      authdesc: "You need to log in before you can operate.",
      copyfail: "Your browser does not support this feature!",
      copysuccess: "Copy success!",
      copyerr: "Failed to copy: {err}",
      autherr: "Password error!",
      authsuccess: "Auth success!",
      requireauth: "Please auth first!",
      bantitle: "Ban Player",
      banwarn: "Are you sure to ban this player?",
      bansuccess: "Ban success!",
      banfail: "Ban fail: {err}",
      kicktitle: "Kick Player",
      kickwarn: "Are you sure to kick this player?",
      kicksuccess: "Kick success!",
      kickfail: "Kick fail: {err}",
      broadcastsuccess: "Broadcast success!",
      shutdownsuccess: "Shutdown success!",
      broadcastfail: "Broadcast fail: {err}",
      broadcastasciierr: "Broadcast only support ASCII characters!",
      shutdownfail: "Shutdown fail: {err}",
      shutdowntip:
        "This will shut down the server after 60 seconds and send a broadcast.",
      selectVerify: "Select verification method",
      addwhitesuccess: "Add whitelist success!",
      addwhitefail: "Add whitelist fail: {err}",
      removewhitesuccess: "Remove whitelist success!",
      removewhitefail: "Remove whitelist fail: {err}",
    },
    button: {
      auth: "Admin Mode",
      players: "Players",
      guilds: "Guilds",
      broadcast: "Broadcast",
      shutdown: "Shutdown",
      ban: "Ban",
      kick: "Kick",
      detail: "Detail",
      confirm: "Confirm",
      cancel: "Cancel",
      viewGuild: "View Guild",
      viewPlayer: "View Player",
      whitelist: "Whitelist",
      joinWhitelist: "Join Whitelist",
      search: "Search",
      addNew: "Add New",
      save: "Save",
    },
    pal: {
      type: "Type",
      level: "Level",
      skills: "Skills",
      ranged: "Ranged",
      defense: "Defense",
      melee: "Melee",
      rank: "Rank",
      tower: "Tower",
      lucky: "Lucky",
    },
    input: {
      searchPlaceholder: "Search for pal type and skills",
      nickname: "Nickname",
      player_uid: "Player Uid",
      steam_id: "Steam Id",
    },
  },
  zh: {
    title: "幻兽帕鲁服务器工具",
    modal: {
      auth: "管理认证",
      broadcast: "发布游戏内广播",
      whitelist: "白名单管理",
      addWhitelist: "添加白名单",
    },
    status: {
      online: "在线",
      offline: "离线",
      last_online: "最后上线",
      authenticated: "已进入管理模式",
      master: "会长",
      player_number: "玩家: {number}",
      online_number: "在线: {number}",
      whitelist: "白名单",
    },
    message: {
      warn: "警告",
      success: "成功",
      fail: "失败",
      changelanguage: "Changing language...",
      authdesc: "您需要先进入管理模式才能操作。",
      copyfail: "您的浏览器不支持此功能!",
      copysuccess: "复制成功!",
      copyerr: "复制失败: {err}",
      autherr: "密码错误!",
      authsuccess: "认证成功!",
      requireauth: "请先进入管理模式!",
      bantitle: "封禁玩家",
      banwarn: "您确定要封禁此玩家吗?",
      bansuccess: "封禁成功!",
      banfail: "封禁失败: {err}",
      kicktitle: "踢出玩家",
      kickwarn: "您确定要踢出此玩家吗?",
      kicksuccess: "踢出成功!",
      kickfail: "踢出失败: {err}",
      broadcastsuccess: "广播成功!",
      shutdownsuccess: "关闭成功!",
      broadcastfail: "广播失败: {err}",
      broadcastasciierr: "广播只支持ASCII字符，暂不支持中文",
      shutdownfail: "关闭失败: {err}",
      shutdowntip: "此操作将在60秒后关闭服务器并发送广播。",
      selectVerify: "请选择验证方式",
      addwhitesuccess: "添加白名单成功!",
      addwhitefail: "添加白名单失败: {err}",
      removewhitesuccess: "移除白名单成功!",
      removewhitefail: "移除白名单失败: {err}",
    },
    button: {
      auth: "管理模式",
      players: "玩家",
      guilds: "公会",
      broadcast: "游戏内广播",
      shutdown: "关闭服务器",
      ban: "封禁",
      kick: "踢出",
      detail: "详情",
      confirm: "确认",
      cancel: "取消",
      viewGuild: "查看公会",
      viewPlayer: "查看玩家",
      whitelist: "白名单管理",
      joinWhitelist: "加入白名单",
      search: "搜索",
      addNew: "新增",
      save: "保存",
    },
    pal: {
      type: "类型",
      level: "等级",
      skills: "被动词条",
      ranged: "远程",
      defense: "防御",
      melee: "近战",
      rank: "队伍序",
      tower: "塔主",
      lucky: "稀有",
    },
    input: {
      searchPlaceholder: "搜索帕鲁类型、技能",
      nickname: "昵称",
      player_uid: "玩家 Uid",
      steam_id: "Steam Id",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "zh",
  messages,
});

export default i18n;
