# 标准偏差细节

> 前言：由于技术原因，在 OneDisc 实现过程中与 OneBot V12 标准产生了部分差异，具体细节如下

## 未实现的动作

| 动作名        | 终结点                   | 原因                         |
|---------------|--------------------------|------------------------------|
| 设置群名称    | `set_group_name`         | `discord.py` 未提供相关接口  |
| 设置群组名称  | `set_guild_name`         | `discord.py` 未提供相关接口  |
| 设置频道名称  | `set_channel_name`       | `discord.py` 未提供相关接口  |
| 分片上传文件  | `upload_file_fragmented` | 太懒，还没写                 |
| 分片获取文件  | `get_file_fragmented`    | 太懒，还没写                 |

## 支持受限的动作

| 动作名        | 终结点                   | 说明                                             |
|---------------|--------------------------|--------------------------------------------------|
| 获取好友列表  | `get_friend_list`        | Discord Bot 没有好友功能，请求此动作将返回空列表 |

## 未实现的事件

| 事件                             | 说明                                   |
|----------------------------------|----------------------------------------|
| `meta.status_update`             | 太懒了，还没写                         |
| `notice.friend_increase`         | Discord Bot 没有好友功能               |
| `notice.friend_decrease`         | Discord Bot 没有好友功能               |
| `notice.channel_member_increase` | `discord.py` 未提供相关接口            |
| `notice.channel_member_decrease` | `discord.py` 未提供相关接口            |

## 与标准有差异的事件

| 事件                               | 说明                                                                                                    |
|------------------------------------|---------------------------------------------------------------------------------------------------------|
| `notice.group_member_increase`     | 平台限制，无法判断加入成员是被邀请还是主动加入，`sub_type` 将依 [配置项][1] 填入空字符串或 `"join"`     |
| `notice.group_member_decrease`     | 平台限制，无法判断成员是主动离开还是被踢出，`sub_type` 将依 [配置项][1] 填入空字符串或 `"leave"`        |
| `notice.guild_member_increase`     | 同 `notice.group_member_increase`                                                                       |
| `notice.guild_member_decrease`     | 同 `notice.group_member_decrease`                                                                       |
| `notice.channel_create`            | 平台限制，无法获取操作者 ID，将填入`"-1"`                                                               |
| `notice.channel_delete`            | 平台限制，无法获取操作者 ID，将填入`"-1"`                                                               |
| `notice.channel_message_delete`    | 平台限制，无法判断消息为主动撤回还是被管理员撤回，`sub_type` 将依 [配置项][1] 填入空字符串或 `"recall"` |
| `notice.group_message_delete`      | 同 `notice.channel_message_delete`                                                                      |
| `notice.private_message_delete`    | 同 `notice.channel_message_delete`                                                                      |

## 未实现的消息段

| 消息段             | 说明                                               |
|--------------------|----------------------------------------------------|
| `voice` 语音       | `discord.py` 未提供相关接口，将以 `audio` 形式发送 |
| `location` 位置    | Discord 不支持发送位置                             |
| `reply` 回复       | 架构原因，暂未实现                                 |

## 拓展消息段

### `dc.emoji` 自定义表情

> 这是一个候选消息段，可能在未来的版本中发生更改

| 字段名      | 数据类型    | 说明                      |
|-------------|-------------|---------------------------|
| `name`      | str         | 自定义表情名称            |
| `id`        | str         | 表情 ID                   |

[1]: config.md#%E5%9C%A8%E4%BA%8B%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%A9%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BB%A3%E6%9B%BF%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E5%AD%90%E7%B1%BB%E5%9E%8B-use-empty-for-unsupported-subtype
