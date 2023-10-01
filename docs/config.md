# 配置

在首次启动过后，OneDisc 会自动创建一个新的配置文件（`config.json`）

```json
{
    "account_token": "your token here",
    "system": {
        "proxy": "http://127.0.0.1:7890",
        "logger": {
            "level": 20
        }
    },
    "servers": []
}

```

## 机器人令牌（`account_token`）

| 类型       | 必须 | 默认值     |
|:----------:|:----:|:----------:|
| 字符串     | 是   | 无         |

机器人令牌，用于 OneDisc 登陆 Bot 的账号

参见：[如何创建 机器人令牌（Bot Token）](quickstart.md#如何创建-机器人令牌-bot-token)

## 系统设置（`system`）

| 类型       | 必须 | 默认值     |
|:----------:|:----:|:----------:|
| 对象       | 是   | 无         |

OneDisc 高级设置（无特殊需要不建议更改）

### 连接 Discord 时使用的代理（`proxy`）

| 类型        | 必须 | 默认值     |
|:-----------:|:----:|:----------:|
| 字符串 / 空 | 是   | 无         |

### 日志记录工具配置（`logger`）

| 类型       | 必须 | 默认值     |
|:----------:|:----:|:----------:|
| 对象       | 是   | 无         |

配置日志记录工具时的参数，可参考 [Python3 文档](https://docs.python.org/zh-cn/3/library/logging.html?highlight=logging%20basicconfig#logging.basicConfig)

### 心跳元事件设置（`heartbeat`）

| 类型       | 必须 | 默认值     |
|:----------:|:----:|:----------:|
| 对象       | 否   | `{"enable": true, 'interval': 5000}` |

OneBot V12 心跳元事件设置

#### 心跳事件开关（`enable`）

| 类型       | 必须 | 默认值     |
|:----------:|:----:|:----------:|
| 布尔       | 否   | `true`     |

是否启用心跳元事件

#### 心跳事件触发间隔（`interval`）


| 类型       | 必须 | 默认值     |
|:----------:|:----:|:----------:|
| 数字       | 否   | `5000`     |

心跳元事件触发间隔（单位：毫秒）

### 下载重试次数（`download_max_retry_count`）

| 类型       | 必须 | 默认值     |
|:----------:|:----:|:----------:|
| 数字       | 否   | `0`        |

`upload_file` 及相关动作下载出错时的重试次数

### 是否忽略自身消息（`ignore_self_message`）

| 类型       | 必须 | 默认值     |
|:----------:|:----:|:----------:|
| 布尔       | 否   | `true`     |

在消息事件中是否忽略 Bot 自身发出的消息


### 是否启用两级群组事件（`enable_channel_event`）

| 类型       | 必须 | 默认值     |
|:----------:|:----:|:----------:|
| 布尔       | 否   | `false`    |

如果此项为 `true`，将以 `message.channel` 事件推送消息

如为 `false` 将以 `message.group` 事件推送消息

## 连接方式（`servers`）

| 类型       | 必须 | 默认值     |
|:----------:|:----:|:----------:|
| 数组       | 是   | 无         |

设置 OneDisc 的连接方式，可以创建多个连接方式

支持 HTTP (`http`)、HTTP WebHook (`http-webhook`)、WebSocket (`ws`)、反向 WebSocket (`ws-revese`) 四种连接方式，对象结构如下

<details>
<summary>HTTP</summary>

```json
{
    "type": "http",
    "host": "0.0.0.0",
    "port": 8080,
    "access_token": null,
    "event_enabled": false,
    "event_buffer_size": 0
}
```

| 项目                | 类型      | 必须 | 默认值    | 备注                 |
|---------------------|-----------|------|-----------|----------------------|
| `type`              | 字符串    | 是   | 无        | 连接的类型，为`http` |
| `host`              | 字符串    | 否   | `0.0.0.0` | HTTP 服务器 IP       |
| `port`              | 数字      | 否   | `8080`    | HTTP 服务器端口      |
| `access_token`      | 字符串/空 | 是   | `null`    | 访问令牌             |
| `event_enabled`     | 布尔      | 否   | `false`   | 是否启用 `get_latest_events` 元动作 |
| `event_buffer_size` | 数字      | 否   | `0`       | 事件缓冲区大小       |
</details>

<details>
<summary>HTTP WebHook</summary>

```json
{
    "type": "http-webhook",
    "url": null,
    "access_token": null,
    "timeout": 0
}
```

| 项目            | 类型         | 必须 | 默认值     | 说明                       |
|-----------------|--------------|------|------------|----------------------------|
| `type`          | 字符串       | 是   | 无         | 连接类型，为`http-webhook` |
| `url`           | 字符串       | 是   | 无         | 上报地址                   |
| `access_token`  | 字符串/空    | 否   | `null`     | 访问令牌                   |
| `timeout`       | 数字         | 否   | `0`        | 超时时间（单位毫秒，为`0`不启用） |

</details>

<details>
<summary>WebSocket</summary>

```json
{
    "type": "ws",
    "host": "0.0.0.0",
    "port": 5700,
    "access_token": null
}
```

| 项目           | 类型           | 必须 | 默认值             | 说明                        |
|----------------|----------------|------|--------------------|-----------------------------|
| `type`         | 字符串         | 是   | 无                 | 连接类型，为`ws`            |
| `port`         | 数字           | 否   | `5700`             | WebSocket 服务器端口        |
| `host`         | 字符串         | 否   | `0.0.0.0`          | WebSocket 服务器 IP         |
| `access_token` | 字符串/空      | 否   | `null`             | 访问令牌                    |


</details>

<details>
<summary>反向 WebSocket</summary>

```json
{
    "type": "ws-reverse",
    "url": "",
    "access_token": null,
    "reconnect_interval": 5000
}
```

| 项目            | 类型         | 必须 | 默认值     | 说明                       |
|-----------------|--------------|------|------------|----------------------------|
| `type`          | 字符串       | 是   | 无         | 连接类型，为`ws-reverse`   |
| `url`           | 字符串       | 是   | 无         | WebSocket 客户端连接地址   |
| `access_token`  | 字符串/空    | 否   | `null`     | 访问令牌                   |
| `reconnect_interval` | 数字    | 否   | `5000`     | 重连间隔（单位毫秒）       |



</details>
