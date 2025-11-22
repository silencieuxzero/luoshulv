---
title: 玲珑适配文档
published: 2025-11-22
description: "如意玲珑！"
tags: ["Deepin", "Linux"]
category: 转载
draft: false
---
# 玲珑适配文档
::: info 特别提示
此文档为搬运，仅为作者方便查看，原文请前往deepin官网查阅
:::

## linyaps-testing-toolchains

玲珑应用安装包"layer"文件一站式兼容性检测工具

## Getting started

玲珑应用一站式兼容性检测工具，基于shell脚本编写，遵循玲珑应用兼容性检测规则，利用Linux原生组件对应用开展安装、运行、结构检测等兼容性测试项目

## Directory structure

- templates: 模板目录, 用于自动生成符合预期的测试项目文件
- templates/auto-screenshot-record_template.sh: 截图脚本生成模板，默认情况不需要修改。**不可单独使用**
- templates/bad-app-services.list: 危险性系统service清单，用于兼容性检测工具检测service文件
- templates/categories.list: XDG FreeDesktop规范传统分类名称，用于extra data采集和规范分类名称匹配。**deepin 23及以后的Launcher不再根据此字段进行分类，该文件和相关逻辑在测试工具未来的版本中将会被移除**
- templates/exec.sh: 应用启动脚本生成模板，用来模拟非gio启动方式下通过desktop文件启动应用

- linyaps-auto-optimize.sh: 玲珑应用安装包整理脚本，用于将指定目录下的"layer"文件按照测试工具标准化结构整理到新目录中，并在表单中写入包信息
- linyaps-auto-install.sh: 玲珑应用安装包"layer"文件批量安装脚本, 根据整理后的应用信息表单对本批次玲珑应用进行安装
- linyaps-auto-uninstall.sh: 玲珑应用批量卸载脚本, 根据整理后的应用信息表单对本批次玲珑应用进行卸载
- linyaps-auto-testing.sh: 玲珑应用批量测试脚本，通过设置不同的选项，为本批次玲珑应用开展不同深度的兼容性测试
- optimized-paks-sync.sh: 整理脚本, 根据导入内容为"ll_id"的csv表单，在optimized的项目目录中进行对应应用的资源目录同步
- linyaps-auto-move.sh: 弃用脚本

## Data structure

在玲珑应用一站式兼容性检测流程中, 主要会在`./data`目录中产出以下表单:

- ll-app-info.csv: 全局玲珑应用安装包信息，不得修改
- compat_result_data: 玲珑应用单次兼容性测试任务结果。文件命名格式: `${env_codename}-linyaps-compat-result-${current_time}-${ARCH}.csv`
- app_extra_data: 玲珑应用额外数据，一般有描述、分类等。文件命名格式: `${env_codename}-linyaps-compat-result-${current_time}-${ARCH}.extra.csv`

### Main envs

项目中大部分文件名通过变量数据来生成，需要了解生成规则和变量含义

- env_codename: 测试环境系统codename
```bash
env_codename=$(grep "^VERSION_CODENAME" /etc/os-release | cut -d= -f2)
```

- current_time: 任务开始时间
```bash
current_time=$(date +"%Y-%m-%d_%H%M")
```

- ARCH: 执行任务的设备CPU架构
```bash
ARCH=$(uname -m)
```

### Main data sections
#### ll-app-info.csv
- ll_pkg_name: 玲珑应用id
- ll_pkg_version: 玲珑应用包版本
- ll_arch: 玲珑应用包架构
- ll_binary_type: 玲珑应用包类型标签

#### compat_result_data
- pkg-name: 玲珑应用id
- installation-status: 玲珑应用安装状态
- service-files-status: service文件检测状态
- desktop-file-status: desktop文件检测状态
- launch-status: 玲珑应用启动状态
- icons-status: 玲珑应用图标状态
- icons-hicolor-status: 玲珑应用hicolor图标目录状态
- app_exit_status: 玲珑应用窗口关闭状态
- app_window_tag: 玲珑应用窗口标识

#### app_extra_data
- ll_pkgname: 玲珑应用id
- name_cn: 玲珑应用Name[zh_CN]
- name_global: 玲珑应用Name
- app_category: 玲珑应用分类
- comment_cn: 玲珑应用Comment[zh_CN]
- comment_global: 玲珑应用Comment
- extra_categories: 玲珑应用额外分类

## Main options

玲珑应用一站式兼容性检测工具`linyaps-auto-testing.sh`使用了数个选项用于控制玲珑应用兼容性测试任务的测试规则、测试项目、性能调试模式等，提高了工具灵活性

- launch_wait_time: 应用启动前等待时间，当列表中一个应用被判断为安装有效后，将会等待一段时间后启动应用。
- check_wait_time: 窗口检测前等待时间，当发送启动应用的指令后，相隔指定时间后通过窗口检测判断应用是否正确启动并生成窗口
- enable_recheck: 启用重复测试功能, 启动已经被测试过的应用。默认空值，已经测试过的应用将会自动跳过
- enable_screenshot: 启用截图功能, 需要截图时设置为TRUE/true值, 默认空值表示不进行截图。 **该功能调用`deepin-screen-recorder`，非DDE桌面暂时无法使用该功能**
- gio_launch_desktop: 通过gio加载desktop file, 系统gio满足要求时,可以设置为FALSE/false值强制不使用gio启动. 默认空值表示根据规则自动判断
- strict_services_checking: service文件严格检查模式, 可以设置为TRUE/true值强制扫描包内service文件, 当检测到存在任意service文件时均返回该检测项不通过. 默认空值为仅根据重点清单扫描，清单外的service文件标记"warning"
- extra_info_get: 需要抓取额外信息时设置为TRUE/true值, 默认空值为禁用

## Testing process
### Set up

1. 确保你将要运行玲珑应用一站式兼容性检测工具的系统环境在初始状态下可以正常安装`layer`文件并运行玲珑应用
2. 确保你的测试环境为x11显示协议
3. 安装本项目中的xxx安装包，安装对应的组件

### Ready to test

在正式开始测试任务前，需要准备以下内容/数据:

1. 将本项目的release tar归档包解压到任意具有读写权限的非ntfs目录中
2. 将需要进行兼容性检测的玲珑应用安装包"layer"文件放置到任意具有读取权限的非ntfs目录中。示例如`/mnt/ll_origin`
3. 在任意具有读写权限的非ntfs目录中创建两个具备读写权限的目录用于放置整理后的玲珑应用安装包"layer"文件和应用图标。示例如`/mnt/ll_pool` `/mnt/ll_res`
4. 可选。若需要启用截图功能，则运行一次`deepin-screen-recorder`命令，确保截图保存路径为`$HOME/Pictures/Screenshots`且确保当前目录为空

### Start testing

1. 进入`linyaps-auto-testing.sh`所在目录
2. 整理玲珑应用安装包, 在当前目录打开终端，执行
```bash
./linyaps-auto-optimize.sh /mnt/ll_origin /mnt/ll_pool
```
3. 玲珑应用安装包整理完成后，执行安装操作
```bash
./linyaps-auto-install.sh /mnt/ll_pool
```
4. 安装动作执行完成后，可以开始测试流程。在当前目录打开终端并执行指令，并且确保除当前终端以外，桌面不存在其他窗口以免对测试结果造成干扰
```bash
./linyaps-auto-testing.sh /mnt/ll_res
```

\* 在执行该命令后，需要在既定时间内将终端最小化，以免对测试结果造成干扰。具体最大时间为`linyaps-auto-testing.sh`中设置的值`launch_wait_time`


## TODO Verification and delivery

在测试任务结束后，根据你所选的测试选项进行测试结果分析、图标截图分析等操作


